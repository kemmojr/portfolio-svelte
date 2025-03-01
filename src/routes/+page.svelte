<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Menubar from '$lib/components/ui/menubar';
</script>

<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger>File</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item>
				New Tab
				<Menubar.Shortcut>⌘T</Menubar.Shortcut>
			</Menubar.Item>
			<Menubar.Item>New Window</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item>Share</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item>Print</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<Button>Click me</Button>
