<script lang="ts">
	import '../app.css';
	import * as Menubar from '$lib/components/ui/menubar';

	let { children } = $props();
</script>

<div>
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger>About</Menubar.Trigger>
			<Menubar.Content>
				<a href="/">
					<Menubar.Item
						>Tim
						<Menubar.Shortcut>👨‍💻</Menubar.Shortcut>
					</Menubar.Item>
				</a>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Education</Menubar.Trigger>
			<Menubar.Content>
				<a href="/education">
					<Menubar.Item
						>UoN
						<Menubar.Shortcut
							><img alt="University of newcastle logo" src="uon.ico" /></Menubar.Shortcut
						>
					</Menubar.Item>
				</a>
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
{@render children()}
