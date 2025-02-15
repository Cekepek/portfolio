<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<!-- <body class="bg-gray-900 text-white"> -->
<div class="bg-main text-white">
	<!-- Navigation -->
	<nav class="container mx-auto px-6 py-6">
		<div class="flex items-center justify-center">
			<!-- <div class="text-xl font-bold">Portfolio</div> -->
			<div class="space-x-6">
				<a href="#home" class="hover:text-accent hover:bg-section2 rounded-lg p-4 transition-colors"
					>Home</a
				>
				<a
					href="#about"
					class="hover:text-accent hover:bg-section2 rounded-lg p-4 transition-colors">About</a
				>
				<a
					href="#projects"
					class="hover:text-accent hover:bg-section2 rounded-lg p-4 transition-colors">Projects</a
				>
				<a
					href="#skills"
					class="hover:text-accent hover:bg-section2 rounded-lg p-4 transition-colors">Skills</a
				>
				<a
					href="#contact"
					class="hover:text-accent hover:bg-section2 rounded-lg p-4 transition-colors">Contact</a
				>
			</div>
		</div>
	</nav>

	<!-- Hero Section -->
	<section id="home" class="container mx-auto px-6 py-20">
		<div class="text-center">
			<h1 class="mb-6 text-5xl font-bold">Christopher Kelvin Pintoro Kwan</h1>
			<p class="mb-8 text-xl text-gray-400">
				I'm a passionate developer creating beautiful web experiences.
			</p>
			<div class="flex justify-center space-x-4">
				<a
					href="#contact"
					class="bg-section2 hover:bg-accent hover:text-main rounded-lg px-6 py-3 transition-colors"
					>Get in Touch</a
				>
				<a
					href="#projects"
					class="border-accent hover:border-section2 rounded-lg border px-6 py-3 transition-colors"
					>View My Work</a
				>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="bg-section1 py-20">
		<div class="container mx-auto px-6">
			<h2 class="mb-8 text-3xl font-bold">About Me</h2>
			<p class="text-lg text-gray-400">
				I'm a full-stack developer with expertise in web development and user experience design. I
				love creating beautiful and functional websites that engage users.
			</p>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="container mx-auto px-6 py-20">
		<h2 class="mb-8 text-3xl font-bold">My Projects</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<!-- Project Card 1 -->
			<div
				class="rounded-lg bg-gray-800 p-6 transition-all duration-300 hover:-translate-y-2 hover:transform"
			>
				<img src="" alt="Project 1" class="mb-4 h-48 w-full rounded-lg object-cover" />
				<h3 class="mb-2 text-xl font-bold">Project One</h3>
				<p class="text-sm text-gray-400">A responsive web application for e-commerce.</p>
			</div>

			<!-- Project Card 2 -->
			<div
				class="rounded-lg bg-gray-800 p-6 transition-all duration-300 hover:-translate-y-2 hover:transform"
			>
				<img src="" alt="Project 2" class="mb-4 h-48 w-full rounded-lg object-cover" />
				<h3 class="mb-2 text-xl font-bold">Project Two</h3>
				<p class="text-sm text-gray-400">A real-time chat application using WebSocket.</p>
			</div>

			<!-- Project Card 3 -->
			<div
				class="rounded-lg bg-gray-800 p-6 transition-all duration-300 hover:-translate-y-2 hover:transform"
			>
				<img src="" alt="Project 3" class="mb-4 h-48 w-full rounded-lg object-cover" />
				<h3 class="mb-2 text-xl font-bold">Project Three</h3>
				<p class="text-sm text-gray-400">An AI-powered recommendation system.</p>
			</div>
		</div>
	</section>

	<!-- Skills Section -->
	<section id="skills" class="bg-section1 py-20">
		<div class="container mx-auto px-6">
			<h2 class="mb-8 text-3xl font-bold">My Skills</h2>
			<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
				<!-- Skill 1 -->
				<div class="rounded-lg bg-gray-700 p-4 transition-colors hover:bg-gray-600">
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
						🚀
					</div>
					<h3 class="font-bold">JavaScript</h3>
				</div>

				<!-- Skill 2 -->
				<div class="rounded-lg bg-gray-700 p-4 transition-colors hover:bg-gray-600">
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-400">
						💻
					</div>
					<h3 class="font-bold">React</h3>
				</div>

				<!-- Skill 3 -->
				<div class="rounded-lg bg-gray-700 p-4 transition-colors hover:bg-gray-600">
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-300">
						📱
					</div>
					<h3 class="font-bold">Node.js</h3>
				</div>

				<!-- Skill 4 -->
				<div class="rounded-lg bg-gray-700 p-4 transition-colors hover:bg-gray-600">
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-200">
						🔧
					</div>
					<h3 class="font-bold">Python</h3>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="container mx-auto px-6 py-20">
		<h2 class="mb-8 text-3xl font-bold">Get in Touch</h2>
		<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
			<a href="https://wa.me/6281232323685">
				<div class="bg-section2 hover:bg-section1 group rounded-lg p-4 transition-colors">
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
						<i class="fa fa-whatsapp"></i>
					</div>
					<h3 class="font-bold">0812-3232-3685</h3>
				</div>
			</a>

			<a href="https://www.instagram.com/ckpk7171/">
				<div class="bg-section2 hover:bg-section1 group rounded-lg p-4 transition-colors">
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-950">
						<i class="fa fa-instagram"></i>
					</div>
					<h3 class="font-bold">ckpk7171</h3>
				</div>
			</a>

			<a href="https://mail.google.com/mail/?view=cm&fs=1&to=ckpk7171@gmail.com">
				<div class="bg-section2 hover:bg-section1 group rounded-lg p-4 transition-colors">
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-950">
						<i class="fa fa-envelope"></i>
					</div>
					<h3 class="font-bold">ckpk7171@gmail.com</h3>
				</div>
			</a>

			<a href="https://www.linkedin.com/in/ckpk/">
				<div class="bg-section2 hover:bg-section1 group rounded-lg p-4 transition-colors">
					<div class="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
						<i class="fa fa-linkedin"></i>
					</div>
					<h3 class="font-bold">Christopher Kelvin</h3>
				</div>
			</a>
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-section1 py-8">
		<div class="container mx-auto px-6 text-center">
			<p>&copy; 2024 Your Name. All rights reserved.</p>
		</div>
	</footer>
</div>

<!-- </body> -->
