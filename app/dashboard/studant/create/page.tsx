
import FormCreateStudant from '@/app/ui/studant/form-create-studant';
import Breadcrumbs from '@/app/ui/class/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Turma', href: '/dashboard/class' },
          {
            label: 'Criar Turma',
            href: '/dashboard/class/create',
            active: true,
          },
        ]}
      />
      <FormCreateStudant customers={customers} />
    </main>
  );
}