<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index';
	import * as Card from '$lib/components/ui/card/index';
</script>

<div class="sm:px-8">
	<h1 class="roboto-normal py-8 ps-4 text-5xl">Experience</h1>
	<Separator class="w-3/4" />
	<div class="h-4"></div>
	<div class="flex h-fit flex-col items-center justify-end">
		<Card.Root class="flex h-full w-full flex-col justify-stretch md:h-3/4 md:w-3/4" id="biscit">
			<Card.Header>
				<Card.Title>Biscit</Card.Title>
				<Card.Description class="font-bold">Mar 2024 - Present</Card.Description>
				<Card.Description>ERP Software Product Development using agile processes</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>
					BISCIT specialists in Epicor ERP. I worked on developing products that seamlessly
					integrate with Epicor to extend its functionality.
				</p>
				<Separator class="my-4 w-3/4" />
				<p>
					Two of the products that I have worked on are: RMS - a rental management system, and EKW -
					A warehousing app for handheld scanners to integrate with Epicor Kinetic.👷‍♂️
				</p>

				<div class="p-0 sm:py-4"></div>
				<div class="invisible h-0 sm:visible sm:flex sm:h-fit sm:basis-1/2">
					<p>
						RMS allows for the extension of trackable depreciating assets whilst utilising custom
						Epicor tooling. The APIs store the entirety of its database within the customers own
						Epicor instance. I helped implement a new database solution by migrating from a previous
						MS SQL database. During this, I learned Angular and improved my frontend skills.
					</p>
					<Separator orientation="vertical" class="mx-4" />

					<p>
						More recently I have spent my time working with the team behind EKW, BISCIT's flagship
						product working with a mature development pipeline optimised for stability. Working in
						this team has sharpened my knowledge of Angular and allowed me to gain a deeper
						understanding of Epicor's inner workings.
					</p>
				</div>
				<Separator class="my-4 w-3/4" />
				<p>
					Collaboration and teamwork was key in to this role, with regular meetings and following
					agile processes communication with key stakeholders was essential in making sure problems
					were solved in the optimal way. 💼
				</p>
				<Separator class="mt-4" /></Card.Content
			>
		</Card.Root>
		<Card.Root class="flex h-full w-full flex-col justify-stretch md:h-3/4 md:w-3/4" id="gtick">
			<Card.Header>
				<Card.Title>GTICK</Card.Title>
				<Card.Description class="font-bold">July 2021 - Feb 2024</Card.Description>
				<Card.Description
					>ERP Software Bespoke software development for heavy industry</Card.Description
				>
			</Card.Header>
			<Card.Content>
				<p>
					GTICK are a small and lean software house that deliver custom solutions to clients in
					mining and cement with incredible efficency and speed. Being my first taste of the
					industry, GTICK taught me to move fast and deliver quality, without wasting time on
					unnecessary processes, rather just favor delivering for the customer.🚀
				</p>
				<Separator class="my-4 w-3/4" />
				<div class="p-0 sm:py-4"></div>
				<div class="invisible h-0 sm:visible sm:flex sm:h-fit sm:basis-1/2">
					<p>
						I got my hands dirty with a wide range of projects and technologies, from developing for
						PLC interfaces for gate control systems, to full-stack web apps for tracking the
						production of coal.
					</p>
					<Separator orientation="vertical" class="mx-4" />
					<p>
						Never a dull moment, I went from a workable programmer to a skilled and competent
						software engineer during my time at GTICK.
					</p>
				</div>
				<Separator class="my-4 w-3/4" />
				<p>
					I worked on a range of projects at GTICK, my biggest achievement was the uplift of a
					legacy application that was used internally for business management. I uplifted the design
					technically and implemented a simple solution using database design to allow for custom
					web markup to be generated.
				</p>
				<Separator class="mt-4" /></Card.Content
			>
			<Card.Footer class="mt-auto">
				<p>Unfortunately I need to sleep sometimes so this site is still under contruction 🚧</p>
			</Card.Footer>
		</Card.Root>
	</div>
</div>
