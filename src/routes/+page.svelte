<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import { Separator } from '$lib/components/ui/separator/index';
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
	<Separator />
</div>
