<template>
    <div class="text-right p-4 md:p-10 md:pb-0">
        <USelectMenu class="w-32 ms-auto capitalize" v-model="selected" :options="modes">
            <template #leading>
                <UIcon :name="selected.icon" class="w-5 h-5" />
            </template>
        </USelectMenu>
    </div>
    <div class="main-page min-h-screen grid place-items-center">
        <div
            class="outer-box md:h-4/5 h-full flex items-start md:rounded-3xl rounded-none dark:bg-cool-800 bg-White dark:shadow-lg dark:shadow-Dark-gray-blue shadow-xl shadow-Pale-blue md:flex-row flex-col transition ease-in-out">
            <div
                class="left-side h-full md:rounded-3xl rounded-br-3xl rounded-bl-3xl p-10 bg-gradient-to-t from-Light-royal-blue(background) to-Light-slate-blue(background) text-center flex flex-col justify-center w-full">
                <span class="text-Light-lavender">Your Result</span>
                <div
                    class="mx-auto percentage my-6 rounded-full w-40 h-40 bg-gradient-to-b from-Violet-blue(circle) to-Persian-blue(circle) grid place-items-center">
                    <div>
                        <span class="block text-5xl font-extrabold text-White">
                            76
                        </span>
                        <span class="text-Light-lavender text-sm">
                            of 100
                        </span>
                    </div>
                </div>
                <h2 class="text-White text-2xl mb-2">Great</h2>
                <p class="text-Light-lavender text-base">
                    You scored higher than 65% of the people who have taken these tests.
                </p>
            </div>
            <div class="right-side p-5 md:px-10 w-full flex flex-col justify-between h-full md:gap-0 gap-8">
                <span class="dark:text-White text-Dark-gray-blue font-bold text-2xl transition ease-in-out">Summary</span>
                <div class="flex flex-col gap-4 mt-4">
                    <div class="box flex items-center justify-between p-3 px-5 rounded-lg"
                        :class="index == 0 ? 'bg-Light-red/5' : index == 1 ? 'bg-Orangey-yellow/5' : index == 2 ? 'bg-Green-teal/5' : 'bg-Cobalt-blue/5'"
                        v-for="(item, index) in data" :key="index">
                        <div class="flex gap-2 items-center">
                            <img :src="item.icon" alt="">
                            <span class="font-bold"
                                :class="index == 0 ? 'text-Light-red' : index == 1 ? 'text-Orangey-yellow' : index == 2 ? 'text-Green-teal' : 'text-Cobalt-blue'">
                                {{ item.category }}
                            </span>
                        </div>
                        <div class="font-bold">
                            <span class="dark:text-White text-Dark-gray-blue">
                                {{ item.score }}
                            </span>
                            <span class="text-Light-lavender"> / 100</span>
                        </div>
                    </div>
                </div>
                <button
                    class="w-full transition ease-in-out rounded-full bg-Dark-gray-blue hover:bg-gradient-to-b text-White p-3.5 to-Light-royal-blue(background) from-Light-slate-blue(background)">
                    Continue
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const data = ref(null)
const colorMode = useColorMode()
const modes = ref([
    {
        icon: 'i-material-symbols-dark-mode',
        label: "dark"
    },
    {
        icon: 'i-material-symbols:light-mode',
        label: "light"
    },
    {
        icon: 'i-ph:monitor-duotone',
        label: "system"
    }
])
const selected = ref(modes.value[0])


watch(selected, newVal => {
    if (newVal.label !== colorMode.preference) colorMode.preference = newVal.label
})

onNuxtReady(async () => {
    $fetch('data.json')
        .then(response => {
            data.value = response
        })
})


</script>

<style lang="scss" scoped></style>