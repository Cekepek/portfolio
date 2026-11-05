<script lang="ts">
	import { projects } from '$lib/data';

	interface Project {
		title: string;
		language: string[];
		thumbnail: string;
		description: string;
		image: string[];
		category?: string;
	}

	const projectList: Project[] = projects;

	let selectedProject = $state<Project>(projectList[0]);
	let showModal = $state(false);
	let selectedImage = $state('');
	let activeProjectIndex = $state(0);

	function openModal(image: string, project?: Project) {
		if (project) selectedProject = project;
		selectedImage = image;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
		selectedImage = '';
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && showModal) {
			closeModal();
		}
	}

	const techIcons = [
		{ name: 'Flutter', color: '#02569B', symbol: 'FL' },
		{ name: 'Dart', color: '#0175C2', symbol: 'DA' },
		{ name: 'Golang', color: '#00ACD7', symbol: 'GO' },
		{ name: 'Python', color: '#3776AB', symbol: 'PY' },
		{ name: 'Svelte', color: '#FF3E00', symbol: 'SV' },
		{ name: 'TypeScript', color: '#3178C6', symbol: 'TS' },
		{ name: 'JavaScript', color: '#F7DF1E', symbol: 'JS' },
		{ name: '.NET / C#', color: '#512BD4', symbol: 'C#' }
	];

	type Mastery = 'High' | 'Medium' | 'Low';
	type SkillIcon = 'mobile' | 'globe' | 'terminal' | 'database' | 'code';

	interface Skill {
		name: string;
		mastery: Mastery;
		icon: SkillIcon;
	}

	const skills: Skill[] = [
		{ name: 'Flutter & Dart', mastery: 'High', icon: 'mobile' },
		{ name: 'Svelte & SvelteKit', mastery: 'High', icon: 'globe' },
		{ name: 'Python (FastAPI & ML)', mastery: 'Medium', icon: 'terminal' },
		{ name: 'TypeScript / JavaScript', mastery: 'High', icon: 'code' },
		{ name: '.NET & C#', mastery: 'Low', icon: 'code' },
		{ name: 'PostgreSQL & Databases', mastery: 'Medium', icon: 'database' },
		{ name: 'Tailwind CSS & Frontend', mastery: 'High', icon: 'code' },
		{ name: 'Git & Deployment', mastery: 'Medium', icon: 'code' }
	];

	const masteryBadgeClass: Record<Mastery, string> = {
		High: 'border-main/40 bg-main text-accent',
		Medium: 'border-main/30 bg-section1 text-main',
		Low: 'border-main/20 bg-accent/60 text-main/80'
	};

	const stats = [
		{ value: '2+', label: 'Years Experience', icon: 'calendar' },
		{ value: '10+', label: 'Projects Completed', icon: 'code' },
		{ value: '100%', label: 'Client Satisfaction', icon: 'smile' },
		{ value: '6+', label: 'Industries Served', icon: 'trophy' }
	];
</script>

<svelte:window onkeydown={handleKeydown} />

<div
	class="min-h-screen bg-main font-['Plus_Jakarta_Sans',sans-serif] text-accent antialiased selection:bg-section2 selection:text-main"
>
	<div class="pointer-events-none fixed inset-0 overflow-hidden">
		<div
			class="absolute -left-40 top-20 h-96 w-96 rounded-full bg-section1/15 blur-[120px]"
		></div>
		<div
			class="absolute right-0 top-60 h-[500px] w-[500px] rounded-full bg-section2/15 blur-[140px]"
		></div>
		<div
			class="absolute bottom-40 left-1/3 h-80 w-80 rounded-full bg-accent/10 blur-[130px]"
		></div>
	</div>

	<header class="sticky top-0 z-40 w-full border-b border-section2/15 bg-main/90 backdrop-blur-xl">
		<nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
			<div class="hidden items-center gap-4 md:flex">
				<a
					href="#home"
					class="rounded-lg px-4 py-2 text-sm font-bold text-section2 transition-colors hover:bg-section2 hover:text-main"
					>Home</a
				>
				<a
					href="#about"
					class="rounded-lg px-4 py-2 text-sm font-bold text-section2 transition-colors hover:bg-section2 hover:text-main"
					>About</a
				>
				<a
					href="#skills"
					class="rounded-lg px-4 py-2 text-sm font-bold text-section2 transition-colors hover:bg-section2 hover:text-main"
					>Skills</a
				>
				<a
					href="#projects"
					class="rounded-lg px-4 py-2 text-sm font-bold text-section2 transition-colors hover:bg-section2 hover:text-main"
					>Projects</a
				>
				<a
					href="#contact"
					class="rounded-lg px-4 py-2 text-sm font-bold text-section2 transition-colors hover:bg-section2 hover:text-main"
					>Contact</a
				>
			</div>

			<a
				href="https://wa.me/6281232323685"
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-main shadow-lg shadow-accent/20 transition-all hover:bg-section1 hover:text-main active:scale-95"
			>
				<span>Hire Me</span>
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/>
				</svg>
			</a>
		</nav>
	</header>

	<main class="relative z-10 mx-auto max-w-7xl px-6">
		<section id="home" class="grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
			<div class="flex flex-col items-start lg:col-span-7">
				<div
					class="mb-5 inline-flex items-center gap-2 rounded-full border border-section2/25 bg-section1/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-section2"
				>
					<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-section2"></span>
					Full-Stack Developer
				</div>

				<h1 class="text-4xl font-extrabold tracking-tight text-section2 sm:text-6xl lg:text-7xl">
					Hi, I'm <span
						class="bg-gradient-to-r from-accent via-section2 to-section1 bg-clip-text text-transparent"
						>Kelvin</span
					>
				</h1>

				<h2 class="mt-2 text-3xl font-extrabold tracking-tight text-accent sm:text-5xl">
					I build things for the web & mobile.
				</h2>

				<p class="mt-6 max-w-2xl text-base leading-relaxed text-section2/90 sm:text-lg">
					Passionate developer with 2+ years of experience engineering mobile apps with Flutter,
					responsive frontends with Svelte, and high-performance backend systems with Golang &
					Python.
				</p>

				<div class="mt-8 flex flex-wrap items-center gap-4">
					<a
						href="#projects"
						class="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-main shadow-xl shadow-accent/20 transition-all hover:bg-section1 hover:text-main active:scale-95"
					>
						<span>View My Work</span>
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</a>

					<a
						href="/Christopher Kelvin Resume.pdf"
						download="Christopher_Kelvin_Resume.pdf"
						class="inline-flex items-center gap-2 rounded-lg border border-section2/30 bg-section2 px-6 py-3.5 text-sm font-semibold text-main transition-all hover:bg-section1 hover:text-main active:scale-95"
					>
						<span>Download CV</span>
						<svg
							class="h-4 w-4 text-main/80"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
							/>
						</svg>
					</a>
				</div>

				<div class="mt-14 w-full">
					<p class="text-xs font-semibold uppercase tracking-wider text-section1">
						Technologies I Work With
					</p>
					<div class="mt-4 flex flex-wrap items-center gap-3">
						{#each techIcons as tech}
							<div
								class="flex items-center gap-2 rounded-lg border border-section2/20 bg-section2 px-3.5 py-2 text-xs font-medium text-main transition-colors hover:bg-accent"
							>
								<span
									class="flex h-5 w-5 items-center justify-center rounded font-mono text-[10px] font-bold text-white"
									style="background-color: {tech.color}"
								>
									{tech.symbol}
								</span>
								<span>{tech.name}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div class="relative flex items-center justify-center lg:col-span-5">
				<div
					class="relative flex h-[380px] w-[380px] items-center justify-center sm:h-[440px] sm:w-[440px]"
				>
					<div
						class="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-section2 to-section1 opacity-90 blur-[1px]"
					></div>
					<div class="absolute inset-4 rounded-full bg-main/90 backdrop-blur-sm"></div>

					<div
						class="relative z-10 h-72 w-72 overflow-hidden rounded-full border-4 border-section2/40 shadow-2xl sm:h-80 sm:w-80"
					>
						<img
							src="/images/profile.jpg"
							alt="Christopher Kelvin"
							class="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
						/>
					</div>

					<div class="pointer-events-none absolute -bottom-6 -left-6 z-20 hidden sm:block">
						<svg
							class="h-16 w-16 text-section2/70"
							viewBox="0 0 100 100"
							fill="none"
							stroke="currentColor"
						>
							<path
								d="M20,20 Q60,10 50,60 T80,80"
								stroke-width="2"
								stroke-linecap="round"
								stroke-dasharray="4 4"
							/>
							<path
								d="M72,83 L83,82 L82,71"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>

					<div
						class="absolute -right-4 top-4 z-20 hidden rounded-xl border border-main/15 bg-accent/95 p-4 font-mono text-xs shadow-2xl backdrop-blur-md sm:block"
					>
						<div
							class="mb-2.5 flex items-center justify-between border-b border-main/10 pb-2 text-[11px] text-main/70"
						>
							<span class="flex items-center gap-1.5 font-sans font-semibold text-main">
								<span class="text-section1">&lt;/&gt;</span> developer.ts
							</span>
							<span class="h-2 w-2 rounded-full bg-main shadow-sm"
							></span>
						</div>
						<div class="space-y-1 text-main/90">
							<div><span class="text-section1">const</span> developer = &#123;</div>
							<div class="pl-4">name: <span class="text-main">"Kelvin"</span>,</div>
							<div class="pl-4">role: <span class="text-main">"Full-Stack"</span>,</div>
							<div class="pl-4">
								skills: [<span class="text-main/80">"Flutter"</span>,
								<span class="text-main/80">"Golang"</span>,
								<span class="text-main/80">"Svelte"</span>],
							</div>
							<div class="pl-4">
								passion: <span class="text-main">"High-impact systems"</span>
							</div>
							<div>&#125;;</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="about" class="border-t border-section2/15 py-20">
			<div class="grid gap-12 lg:grid-cols-12">
				<div class="lg:col-span-5">
					<div
						class="mb-4 inline-flex items-center gap-2 rounded-full border border-section2/25 bg-section1/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-section2"
					>
						About Me
					</div>
					<h2 class="text-3xl font-extrabold tracking-tight text-section2 sm:text-4xl">
						I'm passionate about creating digital solutions
					</h2>
					<p class="mt-5 text-base leading-relaxed text-accent/90">
						Full-stack developer with 2+ years of experience building web, mobile, and backend
						applications for clients across fintech, government, manufacturing, and communities. My
						work spans Android and Flutter development, backend systems with Golang and Python, and
						applied machine learning.
					</p>
					<p class="mt-4 text-base leading-relaxed text-accent/90">
						Recent projects include a fintech remittance app, a multi-tenant accounting platform,
						and a specialized dive management application built for the Indonesian Navy. Comfortable
						owning projects end-to-end, from architectural design to deployment.
					</p>

					<div class="mt-8">
						<a
							href="#contact"
							class="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-main transition-colors hover:bg-section1 hover:text-main"
						>
							<span>Learn More About Me</span>
							<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
						</a>
					</div>
				</div>

				<div class="grid grid-cols-2 gap-4 lg:col-span-7">
					{#each stats as item}
						<div
							class="group flex flex-col justify-between rounded-2xl border border-section2/15 bg-section2 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
						>
							<div
								class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-main/15 text-main ring-1 ring-main/25 transition-transform group-hover:scale-110"
							>
								{#if item.icon === 'calendar'}
									<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								{:else if item.icon === 'code'}
									<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
										/>
									</svg>
								{:else if item.icon === 'smile'}
									<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								{:else}
									<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
										/>
									</svg>
								{/if}
							</div>
							<div>
								<div class="text-3xl font-extrabold tracking-tight text-main sm:text-4xl">
									{item.value}
								</div>
								<div class="mt-1 text-sm font-medium text-main/80">{item.label}</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section id="skills" class="border-t border-section2/15 py-20">
			<div class="text-center">
				<div
					class="mb-3 inline-flex items-center gap-2 rounded-full border border-section2/25 bg-section1/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-section2"
				>
					My Skills
				</div>
				<h2 class="text-3xl font-extrabold tracking-tight text-section2 sm:text-4xl">
					Technologies I Master
				</h2>
				<p class="mx-auto mt-3 max-w-xl text-accent/85">
					A comprehensive toolset developed over years of production application delivery.
				</p>
			</div>

			<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each skills as skill}
					<div
						class="flex items-center justify-between rounded-xl border border-section2/15 bg-section2 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
					>
						<div class="flex items-center gap-2.5">
							<span
								class="flex h-8 w-8 items-center justify-center rounded-lg bg-main/15 text-main ring-1 ring-main/25"
							>
								{#if skill.icon === 'mobile'}
									<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
										/></svg
									>
								{:else if skill.icon === 'globe'}
									<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
										/></svg
									>
								{:else if skill.icon === 'terminal'}
									<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/></svg
									>
								{:else if skill.icon === 'database'}
									<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
										/></svg
									>
								{:else}
									<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
										/></svg
									>
								{/if}
							</span>
							<span class="text-sm font-semibold text-main">{skill.name}</span>
						</div>
						<span
							class="rounded-full border px-2.5 py-0.5 font-mono text-xs font-semibold {masteryBadgeClass[
								skill.mastery
							]}"
						>
							{skill.mastery}
						</span>
					</div>
				{/each}
			</div>
		</section>

		<section id="projects" class="border-t border-section2/15 py-20">
			<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
				<div>
					<div
						class="mb-3 inline-flex items-center gap-2 rounded-full border border-section2/25 bg-section1/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-section2"
					>
						Featured Projects
					</div>
					<h2 class="text-3xl font-extrabold tracking-tight text-section2 sm:text-4xl">
						Some of My Recent Work
					</h2>
				</div>

				<div class="flex items-center gap-2">
					{#each projectList as _, idx}
						<button
							type="button"
							aria-label="Select project {idx + 1}"
							onclick={() => (activeProjectIndex = idx)}
							class="h-2 rounded-full transition-all {activeProjectIndex === idx
								? 'w-8 bg-section2'
								: 'w-2 bg-section1/40 hover:bg-section1'}"
						></button>
					{/each}
				</div>
			</div>

			<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each projectList as project, i}
					<div
						class="group flex flex-col justify-between overflow-hidden rounded-2xl border border-section2/15 bg-section2 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-2xl hover:shadow-accent/15"
					>
						<div>
							<div class="mb-4 flex items-center justify-between">
								<span class="font-mono text-xs font-semibold text-main/60">
									{String(i + 1).padStart(2, '0')}
								</span>
								{#if project.category}
									<span
										class="rounded-full bg-main/15 px-2.5 py-0.5 text-[11px] font-medium text-main"
									>
										{project.category}
									</span>
								{/if}
							</div>

							<div
								class="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl bg-accent/40"
							>
								<img
									src={`/images/${project.thumbnail}`}
									alt={project.title}
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div
									class="absolute inset-0 bg-gradient-to-t from-section2 via-transparent to-transparent opacity-60"
								></div>
							</div>

							<h3
								class="text-lg font-bold text-main transition-colors group-hover:text-main/90"
							>
								{project.title}
							</h3>

							<p class="mt-2 line-clamp-3 text-sm leading-relaxed text-main/80">
								{@html project.description}
							</p>
						</div>

						<div class="mt-6 border-t border-main/15 pt-4">
							{#if project.language}
								<div class="mb-4 flex flex-wrap gap-1.5">
									{#each project.language as lang}
										<span
											class="rounded border border-main/30 px-2 py-0.5 text-xs text-main/70"
										>
											{lang}
										</span>
									{/each}
								</div>
							{/if}

							<button
								type="button"
								onclick={() => openModal(`/images/${project.thumbnail}`, project)}
								class="inline-flex w-full items-center justify-between text-xs font-semibold text-main underline underline-offset-4 transition-colors hover:text-main/80"
							>
								<span>View Project Details</span>
								<svg
									class="h-4 w-4 transition-transform group-hover:translate-x-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									/>
								</svg>
							</button>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section id="contact" class="border-t border-section2/15 py-20">
			<div class="grid gap-6 lg:grid-cols-7">
				<div
					class="flex flex-col justify-between rounded-2xl border border-section2/15 bg-section2 p-8 lg:col-span-4"
				>
					<div>
						<div class="mb-3 text-xs font-semibold uppercase tracking-wider text-main/75">
							Let's Work Together
						</div>
						<h3 class="text-2xl font-bold text-main">Have a project in mind?</h3>
						<p class="mt-3 text-sm leading-relaxed text-main/85">
							I'm always open to discussing new projects, high-performance backends, or mobile app
							opportunities. Let's create something exceptional!
						</p>
					</div>

					<div class="mt-8">
						<a
							href="https://wa.me/6281232323685"
							target="_blank"
							rel="noreferrer"
							class="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-main shadow-lg shadow-accent/25 transition-all hover:bg-main hover:text-accent active:scale-95"
						>
							<span>Get In Touch</span>
							<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								/>
							</svg>
						</a>
					</div>
				</div>

				<div
					class="flex flex-col justify-between rounded-2xl border border-section2/15 bg-section1 p-8 lg:col-span-3"
				>
					<div>
						<div class="mb-4 text-xs font-semibold uppercase tracking-wider text-main/80">
							Follow Me
						</div>
						<div class="flex items-center gap-3">
							<a
								href="https://github.com/Cekepek"
								target="_blank"
								rel="noreferrer"
								aria-label="GitHub profile"
								class="flex h-10 w-10 items-center justify-center rounded-lg border border-main/20 bg-main/10 text-main transition-colors hover:border-main/40 hover:bg-section2"
							>
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									/>
								</svg>
							</a>

							<a
								href="https://www.linkedin.com/in/ckpk/"
								target="_blank"
								rel="noreferrer"
								aria-label="LinkedIn profile"
								class="flex h-10 w-10 items-center justify-center rounded-lg border border-main/20 bg-main/10 text-main transition-colors hover:border-main/40 hover:bg-section2"
							>
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"
									/>
								</svg>
							</a>

							<a
								href="https://www.instagram.com/ckpk7171/"
								target="_blank"
								rel="noreferrer"
								aria-label="Instagram profile"
								class="flex h-10 w-10 items-center justify-center rounded-lg border border-main/20 bg-main/10 text-main transition-colors hover:border-main/40 hover:bg-section2"
							>
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
									/>
								</svg>
							</a>
						</div>
					</div>

					<div class="mt-8 space-y-3">
						<a
							href="mailto:ckpk7171@gmail.com"
							class="flex items-center gap-2.5 text-xs text-main transition-colors hover:text-main/80"
						>
							<svg
								class="h-4 w-4 text-main"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							<span>ckpk7171@gmail.com</span>
						</a>

						<a
							href="https://wa.me/6281232323685"
							class="flex items-center gap-2.5 text-xs text-main transition-colors hover:text-main/80"
						>
							<svg
								class="h-4 w-4 text-main"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
							<span>+62 812-3232-3685</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	</main>

	<footer class="border-t border-section2/15 bg-section1 py-8 text-xs text-main">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row"
		>
			<p>&copy; 2026 Christopher Kelvin. All rights reserved.</p>
			<p class="flex items-center gap-1">
				Made with <span class="text-rose-300">❤</span> by Christopher Kelvin
			</p>
		</div>
	</footer>
</div>

{#if showModal}
	<div
		role="dialog"
		aria-modal="true"
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-md"
	>
		<button
			type="button"
			aria-label="Close modal backdrop"
			class="fixed inset-0 h-full w-full cursor-default border-0 bg-transparent"
			onclick={closeModal}
		></button>

		<div
			class="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-main/20 bg-section2 shadow-2xl"
		>
			<div class="flex items-center justify-between border-b border-main/15 px-6 py-4">
				<div>
					<h3 class="text-xl font-bold text-main">{selectedProject.title}</h3>
					<div class="mt-1 flex flex-wrap gap-2">
						{#each selectedProject.language as lang}
							<span
								class="rounded border border-main/30 bg-main/10 px-2 py-0.5 text-xs font-medium text-main"
							>
								{lang}
							</span>
						{/each}
					</div>
				</div>
				<button
					type="button"
					aria-label="Close modal"
					onclick={closeModal}
					class="flex h-8 w-8 items-center justify-center rounded-lg border border-main/20 bg-main/10 text-main/80 transition-colors hover:bg-accent hover:text-main"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<div class="overflow-y-auto p-6">
				<div
					class="mb-6 flex max-h-[50vh] w-full items-center justify-center overflow-hidden rounded-xl bg-accent/60 p-2"
				>
					<img
						src={selectedImage}
						alt={selectedProject.title}
						class="max-h-[46vh] w-auto max-w-full rounded-lg object-contain"
					/>
				</div>

				<div class="mb-6">
					<h4 class="mb-2 text-sm font-semibold uppercase tracking-wider text-main/75">
						Overview
					</h4>
					<p class="text-sm leading-relaxed text-main/90">
						{@html selectedProject.description}
					</p>
				</div>

				{#if selectedProject.image.length > 0}
					<div>
						<h4 class="mb-3 text-sm font-semibold uppercase tracking-wider text-main/75">
							Documentation & Screenshots ({selectedProject.image.length})
						</h4>
						<div class="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
							{#each selectedProject.image as img}
								<button
									type="button"
									onclick={() => (selectedImage = `/images/${img}`)}
									class="overflow-hidden rounded-lg border transition-all {selectedImage.endsWith(
										img
									)
										? 'border-main ring-2 ring-main/50'
										: 'border-main/20 hover:border-main/50'}"
								>
									<img
										src={`/images/${img}`}
										alt="Screenshot thumbnail"
										class="h-16 w-full object-cover"
									/>
								</button>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
