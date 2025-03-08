// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import '@poppanator/sveltekit-svg/dist/svg.d.ts';
declare global {
	namespace App {
		interface Platform {
			env: Env;
			cf: CfProperties;
			ctx: ExecutionContext;
		}
	}
}

export {};
