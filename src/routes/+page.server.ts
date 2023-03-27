import type { PageServerLoad } from './$types';

import { error } from '@sveltejs/kit';

export const load = (async ({ fetch, cookies }) => {
	const sessionId = cookies.get('session');

	if (!sessionId) {
		throw error(401, 'Unauthorized');
	}

	const res = await fetch('/v1/users', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${sessionId}`
		}
	});

	if (!res.ok) {
		throw error(res.status, res.statusText);
	}

	const { users, completed } = await res.json();

	return {
		users,
		completed
	};
}) satisfies PageServerLoad;
