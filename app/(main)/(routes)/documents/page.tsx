'use client';

import Image from 'next/image';

import { useUser } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const DocumentsPage = () => {
	const { user } = useUser();
	return (
		<div className='h-full flex flex-col items-center justify-center space-y-4'>
			<Image src='/empty.png' height='300' width='300' alt='empty' className='dark:hidden' />
			<Image src='/empty-dark.png' height='300' width='300' alt='empty' className='dark:block hidden' />
			<h2 className='text-lg font-medium'>Welcome {user!.firstName} in My Note</h2>
			<Button>
				<PlusCircle className='h-4 w-4 mr-2' />
				Create a note
			</Button>
		</div>
	);
};

export default DocumentsPage;
