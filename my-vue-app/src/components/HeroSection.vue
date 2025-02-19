<template>
	<section
		id="home"
		class="pt-24 bg-gradient-to-r from-zeno-primary to-zeno-secondary"
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
			<div class="text-center">
				<h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
					{{ title }}
				</h1>
				<p
					class="mt-3 max-w-md mx-auto text-lg text-gray-200 sm:text-xl md:mt-5 md:max-w-3xl"
				>
					{{ subtitle }}
				</p>
				<div class="mt-10">
					<a
						:href="ctaLink"
						class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-zeno-primary bg-white hover:bg-gray-50"
					>
						{{ ctaText }}
					</a>
				</div>
			</div>
		</div>
	</section>
</template>
