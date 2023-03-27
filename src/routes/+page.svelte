<!-- 
    This is the dashboard page. 
    It is a protected route, so only logged in users can access it.
    It is also a protected route, so only users with the admin role can access it.

    This page contains a list of all users in the database.
 -->
 
 <script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div>
	<h1>Dashboard</h1>
	<p>Here is a list of all users in the database:</p>
	<ul>
		{#each data.users as user}
			<li>{user.email}</li>
		{/each}
	</ul>
</div>
