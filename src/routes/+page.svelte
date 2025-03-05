<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import { Separator } from '$lib/components/ui/separator/index';
	import * as Card from '$lib/components/ui/card/index';
</script>

<div class="sm:px-8">
	<div>
		<Menubar.Root>
			<Menubar.Menu>
				<Menubar.Trigger>About</Menubar.Trigger>
				<Menubar.Content>
					<Menubar.Item
						>Tim
						<Menubar.Shortcut>👨‍💻</Menubar.Shortcut>
					</Menubar.Item>
				</Menubar.Content>
			</Menubar.Menu>
			<Menubar.Menu>
				<Menubar.Trigger>Education</Menubar.Trigger>
				<Menubar.Content>
					<Menubar.Item
						>UoN
						<Menubar.Shortcut
							><img alt="University of newcastle logo" src="./uon.ico" /></Menubar.Shortcut
						>
					</Menubar.Item>
				</Menubar.Content>
			</Menubar.Menu>
			<Menubar.Menu>
				<Menubar.Trigger>Experience</Menubar.Trigger>
				<Menubar.Content>
					<Menubar.Item
						>BISCIT
						<Menubar.Shortcut
							><img class="size-4" alt="BISCIT logo" src="./biscit.png" /></Menubar.Shortcut
						>
					</Menubar.Item>
					<Menubar.Item
						>GTICK
						<Menubar.Shortcut
							><img class="size-4" alt="GTICK Systems logo" src="./gtick.png" /></Menubar.Shortcut
						>
					</Menubar.Item>
				</Menubar.Content>
			</Menubar.Menu>
			<Menubar.Menu>
				<Menubar.Trigger>Projects</Menubar.Trigger>
			</Menubar.Menu>
		</Menubar.Root>
	</div>

	<h1 class="roboto-normal py-2 ps-4 text-5xl">Tim Kemmis</h1>
	<Separator class="w-3/4" />
	<div class="h-4"></div>
	<div class="flex h-[80vh] items-center justify-end">
		<Card.Root class="flex h-3/4 w-3/4 flex-col justify-stretch">
			<Card.Header>
				<Card.Title>Engineer && Hobbist && Full-Stack Dad</Card.Title>
				<Card.Description
					>I enjoy solving complex problems with a pinch of originality and a healthy helping of
					simple</Card.Description
				>
			</Card.Header>
			<Card.Content>
				<p>Hello There. 👋</p>
				<p>I'm Tim. I've built reliable and dependable systems for industry for over 3 years.</p>
				<p>
					I currently spend my time professionally in the world of full-stack web development. I
					enjoy the variety and diversity of being able to work on something different each day, and
					have a special love for the challenges of backend.
				</p>
			</Card.Content>
			<Card.Footer>
				<p>
					Unfortunately I need to sleep sometimes so this site is still under contruction. Check
					back soon to see the latest updates in the svelte rewrite.
				</p>
			</Card.Footer>
		</Card.Root>
	</div>
</div>
