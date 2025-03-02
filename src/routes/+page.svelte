<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Menubar from '$lib/components/ui/menubar';
</script>

<span class="invisible md:visible md:fixed md:flex md:flex-row">
	<div class="basis-12"></div>
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
						><img
							class="md:h-4 md:w-4 lg:h-8 lg:w-8"
							alt="BISCIT logo"
							src="./biscit.png"
						/></Menubar.Shortcut
					>
				</Menubar.Item>
				<Menubar.Item
					>GTICK
					<Menubar.Shortcut
						><img
							class="md:h-4 md:w-4 lg:h-8 lg:w-8"
							alt="GTICK Systems logo"
							src="./gtick.png"
						/></Menubar.Shortcut
					>
				</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Projects</Menubar.Trigger>
		</Menubar.Menu>
	</Menubar.Root>
</span>
<h1 class="font-family: 'Star Jedi'; h-4 w-4 md:h-12 md:w-12 lg:h-24 lg:w-24">Tim Kemmis</h1>

<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<Button>Click me</Button>

<style lang="CSS">
	@font-face {
		font-family: 'Star Jedi';
		src:
			url('STJEDISE.woff2') format('woff2'),
			url('STJEDISE.ttf') format('truetype');
	}
</style>
