import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layouts/front-layout/front-layout.component').then(m => m.FrontLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
                data: {
                    title: 'หน้าแรก | Basic Angular App',
                    description: 'หน้าแรกของระบบ',
                    keywords: 'หน้าแรก, ระบบ, แอพพลิเคชั่น, งานบริการ'
                }
            },
            {
                path: 'about',
                loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
                data: {
                    title: 'เกี่ยวกับเรา | Basic Angular App',
                    description: 'เกี่ยวกับเรา',
                    keywords: 'เกี่ยวกับเรา, ระบบ, แอพพลิเคชั่น, งานบริการ'
                }
            },
            {
                path: 'contact',
                loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
                data: {
                    title: 'ติดต่อเรา | Basic Angular App',
                    description: 'ติดต่อเรา',
                    keywords: 'ติดต่อเรา, ระบบ, แอพพลิเคชั่น, งานบริการ'
                }
            },
        ]
    },
    // {
    //     path: 'admin',
    //     loadComponent: () => import('./shared/components/layouts/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: 'dashboard',
    //             pathMatch: 'full',
    //         },
    //         {
    //             path: 'dashboard',
    //             loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
    //             data: {
    //                 title: 'แดชบอร์ด | Basic Angular App',
    //                 description: 'แดชบอร์ดของระบบ',
    //                 keywords: 'แดชบอร์ด, ระบบ, แอพพลิเคชั่น, งานบริการ'
    //             }
    //         }
    //     ],
    // },
    {
        path: 'login',
        loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent),
        data: {
            title: 'เข้าสู่ระบบ | Basic Angular App',
            description: 'เข้าสู่ระบบ',
            keywords: 'เข้าสู่ระบบ, ระบบ, แอพพลิเคชั่น, งานบริการ'
        }
    },
    // {
    //     path: 'register',
    //     loadComponent: () => import('./features/register/register.component').then(m => m.RegisterComponent),
    //     data: {
    //         title: 'สมัครสมาชิก | Basic Angular App',
    //         description: 'สมัครสมาชิก',
    //         keywords: 'สมัครสมาชิก, ระบบ, แอพพลิเคชั่น, งานบริการ'
    //     }
    // },
    // {
    //     path: 'fogotpassword',
    //     loadComponent: () => import('./features/fogotpassword/fogotpassword.component').then(m => m.FogotpasswordComponent),
    //     data: {
    //         title: 'ลืมรหัสผ่าน | Basic Angular App',
    //         description: 'ลืมรหัสผ่าน',
    //         keywords: 'ลืมรหัสผ่าน, ระบบ, แอพพลิเคชั่น, งานบริการ'
    //     }
    // },
    {
        path: '**',
        loadComponent: () => import('./shared/components/not-found/not-found/not-found.component').then(m => m.NotFoundComponent),
        data: {
            title: '404 Not Found | Basic Angular App',
            description: 'ไม่พบหน้าที่คุณต้องการ',
            keywords: '404, ไม่พบหน้า, ระบบ, แอพพลิเคชั่น, งานบริการ'
        }
    }
];