// User roles and permissions system
export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    SPECIALIST = 'specialist',
    INVESTOR = 'investor',
    ENTERPRISE = 'enterprise',
}

export enum Permission {
    // User permissions
    VIEW_DASHBOARD = 'view_dashboard',
    CREATE_PROJECT = 'create_project',
    HIRE_SPECIALIST = 'hire_specialist',

    // Specialist permissions
    VIEW_MARKETPLACE = 'view_marketplace',
    ACCEPT_PROJECTS = 'accept_projects',
    MANAGE_PROFILE = 'manage_profile',

    // Investor permissions
    VIEW_ANALYTICS = 'view_analytics',
    VIEW_FINANCIALS = 'view_financials',
    INVEST = 'invest',

    // Admin permissions
    MANAGE_USERS = 'manage_users',
    MANAGE_PAYMENTS = 'manage_payments',
    MANAGE_CONTENT = 'manage_content',
    VIEW_ALL_DATA = 'view_all_data',
    MANAGE_ROLES = 'manage_roles',

    // Enterprise permissions
    BULK_OPERATIONS = 'bulk_operations',
    API_ACCESS = 'api_access',
    CUSTOM_INTEGRATIONS = 'custom_integrations',
}

// Role-Permission mapping
export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
    [UserRole.USER]: [
        Permission.VIEW_DASHBOARD,
        Permission.CREATE_PROJECT,
        Permission.HIRE_SPECIALIST,
    ],

    [UserRole.SPECIALIST]: [
        Permission.VIEW_DASHBOARD,
        Permission.VIEW_MARKETPLACE,
        Permission.ACCEPT_PROJECTS,
        Permission.MANAGE_PROFILE,
    ],

    [UserRole.INVESTOR]: [
        Permission.VIEW_DASHBOARD,
        Permission.VIEW_ANALYTICS,
        Permission.VIEW_FINANCIALS,
        Permission.INVEST,
    ],

    [UserRole.ENTERPRISE]: [
        Permission.VIEW_DASHBOARD,
        Permission.CREATE_PROJECT,
        Permission.HIRE_SPECIALIST,
        Permission.BULK_OPERATIONS,
        Permission.API_ACCESS,
        Permission.CUSTOM_INTEGRATIONS,
        Permission.VIEW_ANALYTICS,
    ],

    [UserRole.ADMIN]: Object.values(Permission), // All permissions
}

// Check if user has permission
export function hasPermission(userRole: UserRole, permission: Permission): boolean {
    return ROLE_PERMISSIONS[userRole]?.includes(permission) || false
}

// Check if user has any of the permissions
export function hasAnyPermission(userRole: UserRole, permissions: Permission[]): boolean {
    return permissions.some(permission => hasPermission(userRole, permission))
}

// Check if user has all permissions
export function hasAllPermissions(userRole: UserRole, permissions: Permission[]): boolean {
    return permissions.every(permission => hasPermission(userRole, permission))
}

// Get user role from Clerk metadata
export function getUserRole(user: any): UserRole {
    return (user?.publicMetadata?.role as UserRole) || UserRole.USER
}

// Role display names
export const ROLE_NAMES: Record<UserRole, string> = {
    [UserRole.ADMIN]: 'Administrator',
    [UserRole.USER]: 'User',
    [UserRole.SPECIALIST]: 'AI Specialist',
    [UserRole.INVESTOR]: 'Investor',
    [UserRole.ENTERPRISE]: 'Enterprise Client',
}

// Role descriptions
export const ROLE_DESCRIPTIONS: Record<UserRole, string> = {
    [UserRole.ADMIN]: 'Full system access with all permissions',
    [UserRole.USER]: 'Standard user with project creation and specialist hiring',
    [UserRole.SPECIALIST]: 'AI expert who can accept and work on projects',
    [UserRole.INVESTOR]: 'Investor with access to analytics and financials',
    [UserRole.ENTERPRISE]: 'Enterprise client with bulk operations and API access',
}
