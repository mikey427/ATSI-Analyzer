<script lang="ts">
	import { useSession } from "$lib/auth";
	import { navigate } from "$lib/router";

	const session = useSession();

	$effect(() => {
		if (!session.value?.isPending && !session.value?.data) {
			navigate("/sign-up")
		}
	})
</script>

{#if session.value?.data}
	<div>
		HOME
	</div>
{/if}
