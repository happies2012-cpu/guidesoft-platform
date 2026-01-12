-- GUIDESOFT Database Schema
-- Complete database structure for authentication, users, orders, projects, and more

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- USERS TABLE
-- =====================================================
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  clerk_id TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('admin', 'user', 'specialist', 'investor', 'enterprise')),
  avatar_url TEXT,
  phone TEXT,
  company TEXT,
  industry TEXT,
  bio TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Index for faster lookups
CREATE INDEX idx_users_clerk_id ON users(clerk_id);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);

-- =====================================================
-- ORDERS TABLE
-- =====================================================
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id TEXT UNIQUE NOT NULL,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  plan_name TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'INR',
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'rejected', 'refunded')),
  payment_method TEXT,
  screenshot_url TEXT,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  verified_by UUID REFERENCES users(id),
  verified_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_orders_order_id ON orders(order_id);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);

-- =====================================================
-- PROJECTS TABLE
-- =====================================================
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  budget DECIMAL(10,2),
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'open', 'in_progress', 'completed', 'cancelled')),
  category TEXT,
  skills_required TEXT[],
  deadline TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_created_at ON projects(created_at DESC);

-- =====================================================
-- SPECIALISTS TABLE
-- =====================================================
CREATE TABLE specialists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  bio TEXT,
  skills TEXT[] NOT NULL,
  hourly_rate DECIMAL(10,2),
  experience_years INTEGER,
  rating DECIMAL(3,2) DEFAULT 0.00,
  total_projects INTEGER DEFAULT 0,
  availability TEXT DEFAULT 'available' CHECK (availability IN ('available', 'busy', 'unavailable')),
  portfolio_url TEXT,
  linkedin_url TEXT,
  github_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_specialists_user_id ON specialists(user_id);
CREATE INDEX idx_specialists_availability ON specialists(availability);
CREATE INDEX idx_specialists_rating ON specialists(rating DESC);

-- =====================================================
-- PROJECT BIDS TABLE
-- =====================================================
CREATE TABLE project_bids (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  specialist_id UUID REFERENCES specialists(id) ON DELETE CASCADE,
  bid_amount DECIMAL(10,2) NOT NULL,
  proposal TEXT NOT NULL,
  estimated_duration INTEGER, -- in days
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_project_bids_project_id ON project_bids(project_id);
CREATE INDEX idx_project_bids_specialist_id ON project_bids(specialist_id);
CREATE INDEX idx_project_bids_status ON project_bids(status);

-- =====================================================
-- CONTACTS TABLE
-- =====================================================
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'resolved')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Index
CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);

-- =====================================================
-- NOTIFICATIONS TABLE
-- =====================================================
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT CHECK (type IN ('info', 'success', 'warning', 'error')),
  read BOOLEAN DEFAULT FALSE,
  link TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_read ON notifications(read);
CREATE INDEX idx_notifications_created_at ON notifications(created_at DESC);

-- =====================================================
-- ACTIVITY LOGS TABLE
-- =====================================================
CREATE TABLE activity_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  entity_type TEXT,
  entity_id UUID,
  metadata JSONB,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_activity_logs_user_id ON activity_logs(user_id);
CREATE INDEX idx_activity_logs_created_at ON activity_logs(created_at DESC);

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE specialists ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_bids ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view their own data" ON users FOR SELECT USING (clerk_id = current_setting('app.clerk_id', true));
CREATE POLICY "Users can update their own data" ON users FOR UPDATE USING (clerk_id = current_setting('app.clerk_id', true));
CREATE POLICY "Service role has full access to users" ON users FOR ALL USING (true);

-- Orders policies
CREATE POLICY "Users can view their own orders" ON orders FOR SELECT USING (user_id IN (SELECT id FROM users WHERE clerk_id = current_setting('app.clerk_id', true)));
CREATE POLICY "Service role has full access to orders" ON orders FOR ALL USING (true);

-- Projects policies
CREATE POLICY "Users can view their own projects" ON projects FOR SELECT USING (user_id IN (SELECT id FROM users WHERE clerk_id = current_setting('app.clerk_id', true)));
CREATE POLICY "Users can create projects" ON projects FOR INSERT WITH CHECK (user_id IN (SELECT id FROM users WHERE clerk_id = current_setting('app.clerk_id', true)));
CREATE POLICY "Service role has full access to projects" ON projects FOR ALL USING (true);

-- Specialists policies
CREATE POLICY "Anyone can view specialists" ON specialists FOR SELECT USING (true);
CREATE POLICY "Specialists can update their own profile" ON specialists FOR UPDATE USING (user_id IN (SELECT id FROM users WHERE clerk_id = current_setting('app.clerk_id', true)));
CREATE POLICY "Service role has full access to specialists" ON specialists FOR ALL USING (true);

-- Service role bypass (for API routes)
CREATE POLICY "Service role bypass" ON users FOR ALL USING (current_user = 'service_role');
CREATE POLICY "Service role bypass" ON orders FOR ALL USING (current_user = 'service_role');
CREATE POLICY "Service role bypass" ON projects FOR ALL USING (current_user = 'service_role');
CREATE POLICY "Service role bypass" ON specialists FOR ALL USING (current_user = 'service_role');
CREATE POLICY "Service role bypass" ON project_bids FOR ALL USING (current_user = 'service_role');
CREATE POLICY "Service role bypass" ON contacts FOR ALL USING (current_user = 'service_role');
CREATE POLICY "Service role bypass" ON notifications FOR ALL USING (current_user = 'service_role');
CREATE POLICY "Service role bypass" ON activity_logs FOR ALL USING (current_user = 'service_role');

-- =====================================================
-- FUNCTIONS & TRIGGERS
-- =====================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_specialists_updated_at BEFORE UPDATE ON specialists FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_project_bids_updated_at BEFORE UPDATE ON project_bids FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- SEED DATA (Optional)
-- =====================================================

-- Insert admin user (replace with your actual Clerk ID)
-- INSERT INTO users (clerk_id, email, name, role) VALUES
-- ('user_xxxxxxxxxxxxx', 'admin@guidesoft.com', 'Admin User', 'admin');

-- =====================================================
-- VIEWS FOR ANALYTICS
-- =====================================================

-- Revenue analytics view
CREATE OR REPLACE VIEW revenue_analytics AS
SELECT 
  DATE_TRUNC('day', created_at) as date,
  COUNT(*) as total_orders,
  SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) as revenue,
  SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) as pending_revenue
FROM orders
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY date DESC;

-- User growth view
CREATE OR REPLACE VIEW user_growth AS
SELECT 
  DATE_TRUNC('day', created_at) as date,
  role,
  COUNT(*) as new_users
FROM users
GROUP BY DATE_TRUNC('day', created_at), role
ORDER BY date DESC;

-- Project statistics view
CREATE OR REPLACE VIEW project_stats AS
SELECT 
  status,
  COUNT(*) as count,
  AVG(budget) as avg_budget,
  SUM(budget) as total_budget
FROM projects
GROUP BY status;
