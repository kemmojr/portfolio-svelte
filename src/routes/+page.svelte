<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import { Separator } from '$lib/components/ui/separator/index';
	import * as Card from '$lib/components/ui/card/index';
	import DotNetLogo from '$lib/components/SVGs/DotNetLogo.svelte';
	import PythonLogo from '$lib/components/SVGs/PythonLogo.svelte';
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
							><img alt="University of newcastle logo" src="uon.ico" /></Menubar.Shortcut
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
							><img class="size-4" alt="BISCIT logo" src="biscit.png" /></Menubar.Shortcut
						>
					</Menubar.Item>
					<Menubar.Item
						>GTICK
						<Menubar.Shortcut
							><img class="size-4" alt="GTICK Systems logo" src="gtick.png" /></Menubar.Shortcut
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
	<div class="flex h-fit items-center justify-end">
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
				<Separator class="my-4 w-3/4" />
				<p>
					I currently spend my time professionally in the world of full-stack web development 🍔. I
					enjoy the variety and diversity of being able to work on something different each day, and
					have a special love for the challenges of backend.
				</p>
				<div class="py-4"></div>
				<div class="flex basis-1/2">
					<p>
						When not working, fatherhood is presenting me with a whole new set of challenges to
						overcome 👶, from trying to stop a toddler from eating everything in sight, to trying to
						find the language necessary to program a child.
					</p>
					<Separator orientation="vertical" class="mx-4" />

					<p>
						I also enjoy getting into the guts of computers and upgrading them with better hardware
						and upgrading the OS tothe much superior Linux
						<img alt="arch linux logo" class="inline-block size-6" src="Arch-linux-logo.png" />
					</p>
				</div>
				<Separator class="mb-8 mt-4" />
				<p>
					My technical interests are too many to list, but here is an unsorted abridged version 📚
				</p>
				<div class="flex items-center justify-center">
					<div class="mt-8 grid h-3/4 w-3/4 grid-cols-4 gap-8">
						<!-- <Badge variant="secondary" class="inline-flex justify-center align-middle"
							><img alt="DotNet logo" src="dotnet-logo.png" class="size-8" /></Badge
						> -->
						<DotNetLogo class="h-8 w-8" />
						<PythonLogo class="h-9 w-8" />
						<!-- <Badge variant="secondary" class="inline-flex justify-center align-middle">
							<img alt="TypeScript logo" src="ts-logo-128.svg" class="size-8" />
						</Badge>
						<Badge variant="secondary" class="inline-flex justify-center align-middle">
							<img alt="Linux logo" src="Tux.svg.png" class="h-12 w-10" />
						</Badge>
						<Badge variant="secondary" class="inline-flex justify-center align-middle">
							<p class="text-4xl">💻</p>
						</Badge>
						<Badge variant="secondary" class="inline-flex justify-center align-middle">
							<img alt="Rust-Lang logo" src="rust-logo-32x32.png" class="size-8" />
						</Badge>
						<Badge variant="secondary" class="inline-flex justify-center align-middle">
							<img alt="Svelte logo" src="svelte-logo.png" class="h-9 w-8" />
						</Badge>
						<Badge variant="secondary" class="inline-flex justify-center align-middle">
							<img alt="Red Berry Pi" src="berry-pie.jpg" class="h-9 w-8" />
						</Badge> -->
					</div>
					<div></div>
				</div></Card.Content
			>
			<Card.Footer class="mt-auto">
				<p>
					Unfortunately I need to sleep sometimes so this site is still under contruction. As such
					the links on the navbar are not currently functional. Check back soon to see the latest
					updates in the svelte rewrite.
				</p>
			</Card.Footer>
		</Card.Root>
	</div>
</div>
