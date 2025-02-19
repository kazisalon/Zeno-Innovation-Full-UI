<template>
	<nav class="bg-white shadow-lg fixed w-full z-10">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<div class="flex-shrink-0 flex items-center">
					<span class="text-2xl font-bold text-zeno-primary"
						>Zeno Innovation</span
					>
				</div>
				<div class="hidden md:flex items-center space-x-8">
					<a
						v-for="item in menuItems"
						:key="item.name"
						:href="item.href"
						class="text-gray-700 hover:text-zeno-primary"
					>
						{{ item.name }}
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	name: "TheNavbar",
	data() {
		return {
			menuItems: [
				{ name: "Home", href: "#home" },
				{ name: "Services", href: "#services" },
				{ name: "About", href: "#about" },
				{ name: "Contact", href: "#contact" },
			],
		};
	},
};
</script>
