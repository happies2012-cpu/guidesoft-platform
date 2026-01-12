import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database types
export interface User {
    id: string
    clerk_id: string
    email: string
    name: string
    role: 'admin' | 'user' | 'specialist' | 'investor' | 'enterprise'
    avatar_url?: string
    phone?: string
    company?: string
    industry?: string
    created_at: string
    updated_at: string
}

export interface Order {
    id: string
    order_id: string
    user_id: string
    plan_name: string
    amount: number
    currency: string
    status: 'pending' | 'paid' | 'rejected' | 'refunded'
    payment_method?: string
    screenshot_url?: string
    customer_name: string
    customer_email: string
    customer_phone?: string
    verified_by?: string
    verified_at?: string
    created_at: string
    updated_at: string
}

export interface Project {
    id: string
    user_id: string
    title: string
    description: string
    budget: number
    status: 'draft' | 'open' | 'in_progress' | 'completed' | 'cancelled'
    category: string
    skills_required: string[]
    deadline?: string
    created_at: string
    updated_at: string
}

export interface Specialist {
    id: string
    user_id: string
    bio: string
    skills: string[]
    hourly_rate: number
    experience_years: number
    rating: number
    total_projects: number
    availability: 'available' | 'busy' | 'unavailable'
    portfolio_url?: string
    linkedin_url?: string
    created_at: string
    updated_at: string
}

export interface Contact {
    id: string
    name: string
    email: string
    phone?: string
    message: string
    status: 'new' | 'contacted' | 'resolved'
    created_at: string
}

// Database operations
export const db = {
    // Users
    async createUser(data: Partial<User>) {
        const { data: user, error } = await supabase
            .from('users')
            .insert(data)
            .select()
            .single()

        if (error) throw error
        return user
    },

    async getUserByClerkId(clerkId: string) {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('clerk_id', clerkId)
            .single()

        if (error && error.code !== 'PGRST116') throw error
        return data
    },

    async updateUser(clerkId: string, data: Partial<User>) {
        const { data: user, error } = await supabase
            .from('users')
            .update(data)
            .eq('clerk_id', clerkId)
            .select()
            .single()

        if (error) throw error
        return user
    },

    // Orders
    async createOrder(data: Partial<Order>) {
        const { data: order, error } = await supabase
            .from('orders')
            .insert(data)
            .select()
            .single()

        if (error) throw error
        return order
    },

    async getOrders(filters?: { status?: string; user_id?: string }) {
        let query = supabase.from('orders').select('*').order('created_at', { ascending: false })

        if (filters?.status) {
            query = query.eq('status', filters.status)
        }
        if (filters?.user_id) {
            query = query.eq('user_id', filters.user_id)
        }

        const { data, error } = await query
        if (error) throw error
        return data
    },

    async updateOrder(orderId: string, data: Partial<Order>) {
        const { data: order, error } = await supabase
            .from('orders')
            .update(data)
            .eq('order_id', orderId)
            .select()
            .single()

        if (error) throw error
        return order
    },

    // Projects
    async createProject(data: Partial<Project>) {
        const { data: project, error } = await supabase
            .from('projects')
            .insert(data)
            .select()
            .single()

        if (error) throw error
        return project
    },

    async getProjects(filters?: { status?: string; user_id?: string }) {
        let query = supabase.from('projects').select('*').order('created_at', { ascending: false })

        if (filters?.status) {
            query = query.eq('status', filters.status)
        }
        if (filters?.user_id) {
            query = query.eq('user_id', filters.user_id)
        }

        const { data, error } = await query
        if (error) throw error
        return data
    },

    // Specialists
    async createSpecialist(data: Partial<Specialist>) {
        const { data: specialist, error } = await supabase
            .from('specialists')
            .insert(data)
            .select()
            .single()

        if (error) throw error
        return specialist
    },

    async getSpecialists(filters?: { availability?: string; skills?: string[] }) {
        let query = supabase.from('specialists').select('*, users(*)')

        if (filters?.availability) {
            query = query.eq('availability', filters.availability)
        }

        const { data, error } = await query
        if (error) throw error
        return data
    },

    // Contacts
    async createContact(data: Partial<Contact>) {
        const { data: contact, error } = await supabase
            .from('contacts')
            .insert(data)
            .select()
            .single()

        if (error) throw error
        return contact
    },
}
