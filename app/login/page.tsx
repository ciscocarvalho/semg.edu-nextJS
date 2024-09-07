import AcmeLogo from '../ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center max-w-[400px] flex-col space-y-2.5 p-4">  
        <AcmeLogo variant="large" />
        <LoginForm />
      </div>
    </main>
  );
}
