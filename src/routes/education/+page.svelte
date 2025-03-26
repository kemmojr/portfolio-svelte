<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index';
	import * as Card from '$lib/components/ui/card/index';
</script>

<div class="flex flex-col items-center sm:px-8">
	<h1 class="roboto-normal ps-4 text-5xl">Education</h1>
	<Separator class="w-3/4" />
	<div class="h-4"></div>
	<Card.Root class="flex h-full w-full flex-col justify-stretch md:size-2/5">
		<Card.Header>
			<Card.Title>Bachelor of Computer Science 🎓</Card.Title>
			<Card.Description class="font-bold">2019-2023</Card.Description>
			<Card.Description>The most expensive piece of paper I have ever earnt</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>
				My time at University was spent learning about all the cool theory behind computer software.
			</p>
			<p>
				Topics included Data Structures, Algorithms, Security, Networking and Operating Systems.
			</p>
			<Separator class="my-4 w-3/4" />
			<p>
				There were many lessons to be learned at the University of Newcastle, in and outside of the
				classroom. The most important was that grit, determination and a bit of brains is the
				optimal algorithm for generalised success 🚀.
			</p>
			<div class="p-0 sm:py-4"></div>
			<div class="invisible h-0 sm:visible sm:flex sm:h-fit sm:basis-1/2">
				<p></p>
				<Separator orientation="vertical" class="mx-4" />

				<p></p>
			</div>
			<Separator class="mt-4" /></Card.Content
		>
		<Card.Footer class="mt-auto">
			<p>Unfortunately I need to sleep sometimes so this site is still under contruction 🏗️</p>
		</Card.Footer>
	</Card.Root>
</div>
