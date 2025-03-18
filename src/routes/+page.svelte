<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index';
	import * as Card from '$lib/components/ui/card/index';
	import DotNetLogo from '$lib/components/SVGs/DotNetLogo.svelte';
	import PythonLogo from '$lib/components/SVGs/PythonLogo.svelte';
	import TypeScriptLogo from '$lib/components/SVGs/TypeScriptLogo.svelte';
	import Tux from '$lib/components/SVGs/Tux.svelte';
	import RustLogo from '$lib/components/SVGs/RustLogo.svelte';
	import SvelteLogo from '$lib/components/SVGs/SvelteLogo.svelte';
</script>

<div class="my-6 sm:px-8">
	<h1 class="roboto-normal mt-1 w-1/2 py-2 ps-4 text-5xl">Tim Kemmis</h1>
	<Separator class="w-3/4" />
	<div class="h-4"></div>
	<div class="flex h-fit items-center justify-end overflow-y-auto">
		<Card.Root class="flex h-full w-full flex-col justify-stretch md:h-3/4 md:w-3/4">
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
				<div class="p-0 sm:py-4"></div>
				<div class="invisible h-0 sm:visible sm:flex sm:h-fit sm:basis-1/2">
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
						<DotNetLogo class="h-8 w-8" />
						<PythonLogo class="h-9 w-8" />
						<TypeScriptLogo class="h-8 w-8" />
						<Tux class="h-10 w-8" />
						<p class="text-4xl">💻</p>
						<RustLogo class="h-8 w-8" />
						<SvelteLogo class="h-10 w-8" />
						<p class="text-4xl">⌨️</p>
					</div>
					<div></div>
				</div></Card.Content
			>
			<Card.Footer class="mt-auto">
				<p>Unfortunately I need to sleep sometimes so this site is still under contruction 👷‍♂️.</p>
			</Card.Footer>
		</Card.Root>
	</div>
</div>
