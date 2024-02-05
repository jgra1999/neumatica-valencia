import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

interface Props {
	name: string
	children?: React.ReactNode
}

export default function SideMenuOptions({ name, children }: Props) {
	return (
		<li>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button
							className={`flex justify-between items-center w-full hover:text-primary text-lg font-medium ${
								open && 'text-primary'
							}`}
						>
							<span>{name}</span>
							<ChevronUpIcon
								className={`${
									open ? 'rotate-180 transform text-primary' : ''
								} h-5 w-5`}
							/>
						</Disclosure.Button>
						{children}
					</>
				)}
			</Disclosure>
		</li>
	)
}
