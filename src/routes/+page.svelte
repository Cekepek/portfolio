<script lang="ts">
	import { projects } from '$lib/data';
	// import 'chocolat/dist/css/chocolat.css';
	// import Chocolat from 'chocolat';

	let selectedProject = $state(projects[0]);
	let showModal = $state(false);
	let selectedImage = $state('');

	function openModal(image: string) {
		selectedImage = image;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
		selectedImage = '';
	}
	// import { onMount } from 'svelte';
	// onMount(() => {
	// 	if (document.readyState === 'complete') {
	// 		if (typeof window !== 'undefined') {
	// 			Chocolat(document.querySelectorAll('.chocolat-image'));
	// 		}
	// 	}
	// 	// Chocolat(document.querySelectorAll('.chocolat-image'));
	// });
	// // document.onreadystatechange = function () {
	// // 	if (document.readyState === 'complete') {
	// // 		Chocolat(document.querySelectorAll('.chocolat-image'));
	// // 	}
	// // };
</script>

<div class="bg-main text-white">
	<nav class="container mx-auto px-6 py-6">
		<div class="flex items-center justify-center">
			<div class="space-x-6">
				<a
					href="#home"
					class="rounded-lg p-4 font-bold text-section2 transition-colors hover:bg-section2 hover:text-main"
					>Home</a
				>
				<a
					href="#about"
					class="rounded-lg p-4 font-bold text-section2 transition-colors hover:bg-section2 hover:text-main"
					>About</a
				>
				<a
					href="#projects"
					class="rounded-lg p-4 font-bold text-section2 transition-colors hover:bg-section2 hover:text-main"
					>Projects</a
				>
				<a
					href="#skills"
					class="rounded-lg p-4 font-bold text-section2 transition-colors hover:bg-section2 hover:text-main"
					>Skills</a
				>
				<a
					href="#contact"
					class="rounded-lg p-4 font-bold text-section2 transition-colors hover:bg-section2 hover:text-main"
					>Contact</a
				>
			</div>
		</div>
	</nav>

	<section id="home" class="container mx-auto px-6 py-20">
		<div class="text-center">
			<h1 class="mb-6 text-5xl font-bold text-section2">Christopher Kelvin Pintoro Kwan</h1>
			<p class="mb-8 text-xl text-accent">Front-End Developer Enthusiast.</p>
			<div class="flex justify-center space-x-4">
				<a
					href="#contact"
					class="rounded-lg bg-accent px-6 py-3 text-main transition-colors hover:bg-section1 hover:text-main"
					>Get in Touch</a
				>
				<a
					href="#projects"
					class="rounded-lg border border-accent px-6 py-3 text-accent transition-colors hover:border-section1 hover:text-section1"
					>View My Work</a
				>
			</div>
		</div>
	</section>

	<section id="about" class="bg-section1 py-20">
		<div class="container mx-auto px-6">
			<h2 class="mb-8 text-3xl font-bold text-main">About Me</h2>
			<p class="text-justify text-lg text-main" style="text-indent: 30px;">
				An Universitas Surabaya Informatics Engineering's fresh gradute with GPA of 3.795, I have
				expertise in Android application development, website development, and machine learning
				implementation. With strong programming skills and fluency in speaking English, I am ready
				to adapt and take on new challenges to continue growing in the IT industry. Experienced in
				teamwork through various projects, I am committed to providing innovative solutions and
				contributing effectively in a professional environment.
			</p>
		</div>
	</section>

	<section id="projects" class="container mx-auto px-6 py-20">
		<h2 class="mb-8 text-3xl font-bold text-section2">My Projects</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project, i}
				<!-- <button onclick={()=>selectedProject=projects[i]}> -->

				<a
					href="#detailProject"
					class="rounded-lg bg-section2 p-6 transition-all duration-300 hover:-translate-y-2 hover:transform hover:cursor-pointer"
					on:click={() => (selectedProject = projects[i])}
				>
					<img
						src={`images/${project.thumbnail}`}
						alt="Project {i + 1}"
						class="mb-4 h-48 w-full rounded-lg object-scale-down"
					/>
					<h3 class="mb-4 text-center text-xl font-bold text-main">{project.title}</h3>
					<p class="text-justify text-lg text-main" style="text-indent: 30px;">
						{@html project.description}
					</p>
				</a>
				<!-- </button>	 -->
			{/each}
		</div>
		<section id="detailProject" class="py-8">
			<div class=" rounded-lg bg-section2 p-6">
				<h2 class="mb-8 text-center text-3xl font-bold text-main">{selectedProject.title}</h2>
				<p class="text-justify text-xl text-main" style="text-indent: 30px;">
					{@html selectedProject.description}
				</p>
				<div class="my-8 text-start">
					<h2 class="mb-4 text-xl font-bold text-main">Frameworks & Languages</h2>
					<ul class="list-item text-lg text-main">
						{#each selectedProject.language as lang}
							<li>&bull; {lang}</li>
						{/each}
					</ul>
				</div>

				<div class="my-8 text-start">
					<h2 class="mb-8 text-xl font-bold text-main">Documentations</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{#each selectedProject.image as img, i}
							<!-- <a href={`images/${img}`} class="chocolat-image"> -->
							<img
								src={`images/${img}`}
								alt={`${selectedProject.title}+${i + 1}`}
								class="mb-4 h-48 w-full rounded-lg object-contain transition-all duration-300 hover:-translate-y-2 hover:transform hover:cursor-pointer"
								on:click={() => openModal(`images/${img}`)}
							/>
							<!-- </a> -->
						{/each}
					</div>
				</div>
			</div>
		</section>
	</section>

	<section id="skills" class="bg-section1 py-20">
		<div class="container mx-auto px-6">
			<h2 class="mb-8 text-3xl font-bold text-main">My Skills</h2>
			<h2 class="my-8 w-fit rounded-lg bg-accent p-3 text-xl font-bold text-main">Languages</h2>
			<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
				<div
					class="rounded-lg bg-main p-4 transition-all duration-300 hover:-translate-y-2 hover:transform"
				>
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent">
						<i class="fa-solid fa-mobile-screen"></i>
					</div>
					<h3 class="font-bold text-section2">Dart</h3>
				</div>

				<div
					class="rounded-lg bg-main p-4 transition-all duration-300 hover:-translate-y-2 hover:transform"
				>
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent">
						<i class="fa-solid fa-mobile-screen"></i>
					</div>
					<h3 class="font-bold text-section2">Kotlin</h3>
				</div>

				<div
					class="rounded-lg bg-main p-4 transition-all duration-300 hover:-translate-y-2 hover:transform"
				>
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-section2">
						<i class="fas fa-laptop"></i>
					</div>
					<h3 class="font-bold text-section2">Python</h3>
				</div>
				<div
					class="rounded-lg bg-main p-4 transition-all duration-300 hover:-translate-y-2 hover:transform"
				>
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-section2">
						<i class="fas fa-laptop"></i>
					</div>
					<h3 class="font-bold text-section2">C#</h3>
				</div>

				<div
					class="rounded-lg bg-main p-4 transition-all duration-300 hover:-translate-y-2 hover:transform"
				>
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-section1">
						<i class="fa-solid fa-globe"></i>
					</div>
					<h3 class="font-bold text-section2">Typescript</h3>
				</div>

				<div
					class="rounded-lg bg-main p-4 transition-all duration-300 hover:-translate-y-2 hover:transform"
				>
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-section1">
						<i class="fa-solid fa-globe"></i>
					</div>
					<h3 class="font-bold text-section2">Javascript</h3>
				</div>

				<div
					class="rounded-lg bg-main p-4 transition-all duration-300 hover:-translate-y-2 hover:transform"
				>
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-section1">
						<i class="fa-solid fa-globe"></i>
					</div>
					<h3 class="font-bold text-section2">HTML</h3>
				</div>

				<div
					class="rounded-lg bg-main p-4 transition-all duration-300 hover:-translate-y-2 hover:transform"
				>
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-section1">
						<i class="fa-solid fa-globe"></i>
					</div>
					<h3 class="font-bold text-section2">CSS</h3>
				</div>
				<div
					class="rounded-lg bg-main p-4 transition-all duration-300 hover:-translate-y-2 hover:transform"
				>
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-section1">
						<i class="fa-solid fa-globe"></i>
					</div>
					<h3 class="font-bold text-section2">PHP</h3>
				</div>

				<div
					class="rounded-lg bg-main p-4 transition-all duration-300 hover:-translate-y-2 hover:transform"
				>
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-section1">
						<i class="fa-solid fa-globe"></i>
					</div>
					<h3 class="font-bold text-section2">Java</h3>
				</div>
			</div>
			<h2 class="my-8 w-fit rounded-lg bg-accent p-3 text-xl font-bold text-main">Frameworks</h2>
			<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
				<div
					class="rounded-lg bg-main p-4 transition-all duration-300 hover:-translate-y-2 hover:transform"
				>
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent">
						<i class="fa-solid fa-mobile-screen"></i>
					</div>
					<h3 class="font-bold text-section2">Flutter</h3>
				</div>

				<div
					class="rounded-lg bg-main p-4 transition-all duration-300 hover:-translate-y-2 hover:transform"
				>
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-section2">
						<i class="fas fa-laptop"></i>
					</div>
					<h3 class="font-bold text-section2">.NET</h3>
				</div>

				<div
					class="rounded-lg bg-main p-4 transition-all duration-300 hover:-translate-y-2 hover:transform"
				>
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-section1">
						<i class="fa-solid fa-globe"></i>
					</div>
					<h3 class="font-bold text-section2">Laravel</h3>
				</div>

				<div
					class="rounded-lg bg-main p-4 transition-all duration-300 hover:-translate-y-2 hover:transform"
				>
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-section1">
						<i class="fa-solid fa-globe"></i>
					</div>
					<h3 class="font-bold text-section2">Svelte</h3>
				</div>

				<div
					class="rounded-lg bg-main p-4 transition-all duration-300 hover:-translate-y-2 hover:transform"
				>
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-section1">
						<i class="fa-solid fa-globe"></i>
					</div>
					<h3 class="font-bold text-section2">Ionic</h3>
				</div>
			</div>
		</div>
	</section>

	<section id="contact" class="container mx-auto px-6 py-20">
		<h2 class="mb-8 text-3xl font-bold text-section2">Get in Touch</h2>
		<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
			<a href="https://wa.me/6281232323685">
				<div class="group rounded-lg bg-section1 p-4 transition-colors hover:bg-section2">
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
						<i class="fa fa-whatsapp"></i>
					</div>
					<h3 class="font-bold text-main">0812-3232-3685</h3>
				</div>
			</a>

			<a href="https://www.instagram.com/ckpk7171/">
				<div class="group rounded-lg bg-section1 p-4 transition-colors hover:bg-section2">
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-950">
						<i class="fa fa-instagram"></i>
					</div>
					<h3 class="font-bold text-main">ckpk7171</h3>
				</div>
			</a>

			<a href="https://mail.google.com/mail/?view=cm&fs=1&to=ckpk7171@gmail.com">
				<div class="group rounded-lg bg-section1 p-4 transition-colors hover:bg-section2">
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-950">
						<i class="fa fa-envelope"></i>
					</div>
					<h3 class="font-bold text-main">ckpk7171@gmail.com</h3>
				</div>
			</a>

			<a href="https://www.linkedin.com/in/ckpk/">
				<div class="group rounded-lg bg-section1 p-4 transition-colors hover:bg-section2">
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
						<i class="fa fa-linkedin"></i>
					</div>
					<h3 class="font-bold text-main">Christopher Kelvin</h3>
				</div>
			</a>
		</div>
	</section>

	<footer class="bg-section1 py-8">
		<div class="container mx-auto px-6 text-center">
			<p>&copy; 2025 Christopher Kelvin. All rights reserved.</p>
		</div>
	</footer>
</div>
{#if showModal}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-65"
		on:click={closeModal}
	>
		<div
			class="relative flex h-full max-h-full w-full max-w-full flex-col justify-center rounded-lg bg-transparent p-5 text-center"
		>
			<button class="absolute right-3 top-0 m-2 text-lg text-white" on:click={closeModal}>X</button>
			<img src={selectedImage} alt="Selected Image" class="max-h-full max-w-full object-contain" />
		</div>
	</div>
{/if}
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

<head>
	<script src="https://kit.fontawesome.com/348a376d3d.js" crossorigin="anonymous"></script>
</head>
