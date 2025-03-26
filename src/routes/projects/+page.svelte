<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index';
	import * as Card from '$lib/components/ui/card/index';
	type Project = {
		startDate: Date;
		endDate?: Date;
		name: string;
		image: string;
		blurb: string[];
		skills: string[];
		description: string;
	};
	const projects: Project[] = [
		{
			startDate: new Date('2025-03-10'),
			endDate: undefined,
			name: 'Rust CLI',
			description: `A learning project to re-create the GNU coreutils in Rust`,
			image: `🦀`,
			blurb: [
				`After an insighful chat with a respected technologist, I decided I didn't want to be building CRUD web apps till the end of time. So I decided the time for upskilling was upon me and dove into learning the Rust language. Currently this is a basic prototype but I have already learnt so much.`
			],
			skills: ['Rust', 'Borrow Checker', 'CLI']
		},
		{
			startDate: new Date('2025-01-23'),
			endDate: undefined,
			name: 'Thinkpad t430 revival',
			description: `breathing new life into a beauty of an old piece of tech`,
			image: `💻`,
			blurb: [
				`Currently on hold, this project is about learning to revive a lovely old laptop. I am in the process of flashing a custom BIOS, which will hopefully fix the minor issue of the machine currently not booting. Then it is just fun and games with the arch linux CLI install`
			],
			skills: ['SPI programming', 'laptop disassembly', 'Arch Linux']
		},
		{
			startDate: new Date('2025-01-18'),
			endDate: new Date('2024-02-01'),
			name: 'Game Jam: Sleeper Agent',
			description: `A team project for the 2025 Pirate software game jam. Let me cut my teeth on some Github pipelines`,
			image: `🏴‍☠️`,
			blurb: [
				`Diving in the deep end of the Godot game engine, I worked to help co-ordinate a team of 5 to create a game in 2 weeks that fit the theme of "You are the weapon". A great experience in managing a team and learning about a range of technologies.`
			],
			skills: ['Godot', 'GDScript', 'Game Development', `teamwork`]
		},
		{
			startDate: new Date('2024-07-01'),
			endDate: new Date('2024-08-01'),
			name: 'The first laptop revival',
			description: `Learning about the OS of my computer in a pratical way`,
			image: `💻`,
			blurb: [
				`Breathing new life into an unused old laptop. I installed arch linux over the span of a few weeks, learning a bunch about the linux CLI and the inner workings of computers. And it is the machine I am currently typing this on, so I would call it a success.`
			],
			skills: ['Linux', 'Operating systems', 'CLI']
		},
		{
			startDate: new Date('2023-12-01'),
			endDate: new Date('2023-12-01'),
			name: 'Dad Joke Generator',
			description: `A fun weekend project to make an app in multiple different ways`,

			image: `🎅`,
			blurb: [
				`This was a fun weekend project to make an app in multiple different ways. simply press the button and it spits out a dad joke. It gets the jokes from the from the icanhazdadjoke.com API. I made versions in in ASP.Net 7 MVC, Python and frontend JavaScipt`
			],
			skills: ['C#', 'JavaScript', 'C# Web API', 'JSON', 'REST API', 'Python']
		},
		{
			startDate: new Date('2018-02-01'),
			endDate: new Date('2018-07-01'),
			name: 'Joust Re-creation',
			description: `A school project to recreate an 80's arcade game in a web browser`,

			image: `🕹️`,
			blurb: [
				`One of my earliest fully fledged computing projects, this was a school project with very open guidelines. I spent many hours learning the fundamentals of JavaScript recreating an 80's arcade game`
			],
			skills: ['JavaScript', 'HTML', 'CSS']
		},
		{
			startDate: new Date('2016-12-01'),
			endDate: new Date('2016-12-01'),
			name: 'Flash platformer',
			description: `My first real foray into programming`,
			image: `🎮`,

			blurb: [
				`My first real foray into programming. I set out to make a 2d platformer in adobe flash starting from scratch. I soon realised what a difficult problem this was, but I learnt the basics of hitbox collision coding and fell in love with coding`
			],
			skills: ['ActionScript', 'OOP']
		}
	];

	const formatDate = (date: Date | null) => {
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
		if (date === null) return 'Present';
		return date.toLocaleDateString('en-AU', options);
	};
</script>

<div class="flex flex-col items-center md:px-8">
	<h1 class="roboto-normal ps-4 text-5xl">Experience</h1>
	<Separator class="w-3/4" />
	<div class="h-4"></div>

	{#each projects as proj}
		<div class="flex h-fit flex-col items-center justify-end sm:w-1/2">
			<Card.Root class="flex h-full w-full flex-col justify-stretch md:h-3/4 md:w-3/4">
				<Card.Header>
					<Card.Title>{proj.name} {proj.image}</Card.Title>
					<Card.Description class="font-bold"
						>{formatDate(proj.startDate)} - {formatDate(proj?.endDate ?? null)}</Card.Description
					>
					<Card.Description>{proj.description}</Card.Description>
				</Card.Header>
				<Card.Content>
					{#each proj.blurb as blurb}
						<p>
							{blurb}
						</p>
					{/each}
					<Separator class="mt-4" /></Card.Content
				>
			</Card.Root>
		</div>
		<Separator class="my-4 w-1/3" />
	{/each}
</div>
