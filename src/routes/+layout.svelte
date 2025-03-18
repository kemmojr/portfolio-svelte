<script lang="ts">
	import '../app.css';
	import * as Menubar from '$lib/components/ui/menubar';
	import * as Drawer from '$lib/components/ui/drawer/index';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Menu } from '@lucide/svelte';
	import { Label } from '$lib/components/ui/label/index';
	import { CircleX } from '@lucide/svelte';

	let { children } = $props();
</script>

<div class="visible mb-1 sm:invisible sm:size-0">
	<Drawer.Root>
		<div class="fixed right-4 top-4 flex justify-end">
			<Drawer.Trigger class=""><Menu class="size-12" /></Drawer.Trigger>
		</div>
		<Drawer.Content>
			<Drawer.Header>
				<Drawer.Title>Tim Kemmis 👨‍💻</Drawer.Title>
				<Drawer.Description>Certified Nerd</Drawer.Description>
			</Drawer.Header>

			<Drawer.Close>
				<a id="home" href="/">
					<Button variant="outline" class="m-2 w-3/4">
						<Label class="text-2xl" for="home">Tim👨‍💻</Label>
					</Button>
				</a>
			</Drawer.Close>
			<Drawer.Close>
				<a id="education" href="/education">
					<Button variant="outline" class="m-2 w-3/4">
						<Label class="text-2xl" for="education">UoN 🎓</Label>
					</Button>
				</a>
			</Drawer.Close>
			<Drawer.Close>
				<a id="experience" href="/experience">
					<Button variant="outline" class="m-2 w-3/4">
						<Label class="text-2xl" for="experience">Experience 💼</Label>
					</Button>
				</a>
			</Drawer.Close>
			<Drawer.Close>
				<a id="projects" href="/projects">
					<Button variant="outline" class="m-2 w-3/4">
						<Label class="text-2xl" for="projects">Projects 🎮</Label>
					</Button>
				</a>
			</Drawer.Close>

			<Drawer.Footer>
				<Drawer.Close class={buttonVariants({ variant: 'outline' })}><CircleX /></Drawer.Close>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
</div>
<div class="invisible flex size-0 w-full justify-center sm:visible">
	<Menubar.Root>
		<Menubar.Menu>
			<a href="/">
				<Menubar.Trigger>About 👨‍💻</Menubar.Trigger>
			</a>
		</Menubar.Menu>
		<Menubar.Menu>
			<a href="/education">
				<Menubar.Trigger>Education 🎓</Menubar.Trigger>
			</a>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Experience 💼</Menubar.Trigger>
			<Menubar.Content>
				<a href="/experience#biscit">
					<Menubar.Item
						>BISCIT
						<Menubar.Shortcut
							><img class="size-4" alt="BISCIT logo" src="biscit.png" /></Menubar.Shortcut
						>
					</Menubar.Item>
				</a>
				<a href="/experience#gtick">
					<Menubar.Item
						>GTICK
						<Menubar.Shortcut
							><img class="size-4" alt="GTICK Systems logo" src="gtick.png" /></Menubar.Shortcut
						>
					</Menubar.Item>
				</a>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<a href="/projects">
				<Menubar.Trigger>Projects 🎮</Menubar.Trigger>
			</a>
		</Menubar.Menu>
	</Menubar.Root>
</div>
{@render children()}
