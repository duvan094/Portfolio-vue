<template>
    <div class="expandable-section" :class="{'toggled': sectionToggled}">
        <button class="expand-button" @click="toggleSection()">
            {{ title }}
            <div class="expand-icon">
            </div>
        </button>
        <div class="content-container" ref="contentContainer" :style="{ 'height': this.contentHeight + 'px' }">
            <div class="content" ref="content">
                <p>{{ text }}</p>
            </div>
        </div>

    </div>    
</template>

<script>

export default {
    name: 'ExpandableSection',
    data(){
        return {
            sectionToggled: false,
            contentHeight: 0,
        }
    },
    props: {
        title: {
            type: String,
        },
        text: {
            type: String,
        }
    },
    methods: {
        toggleSection() {
            this.sectionToggled = !this.sectionToggled

            if(this.sectionToggled) {
                this.contentHeight = this.$refs.content.offsetHeight;
            } else {
                this.contentHeight = 0;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .expandable-section {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 1rem;
    }

    .expand-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: left;
        width: 100%;
        padding: 1rem;
        font-weight: 600;
        font-size: 1.2em;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        transition: .2s ease background-color;
        border-left: 5px solid #508484;
        background-color: #f8f8f8;
        z-index: 10;

        @media(min-width: 720px) {
            font-size: 1.4em;
        }

        &:hover {
            background-color: #f4f4f4;
        }

        .expand-icon {
            display: block;
            width: 30px;
            height: 30px;
            position: relative;
            &::before, &::after {
                content: '';
                width: 100%;
                height: 3px;
                background-color: #508484;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }

            &::after {
                transition: .2s ease transform;
                will-change: transform;
                transform: translate(-50%,-50%) rotate(-90deg);
            }
        }
    }

    .content-container {
        overflow: hidden;
        will-change: height, opacity;
        transition: .3s ease-out height, .3s ease-out opacity;
        opacity: 0;
        height: 0;
        background-color: #f8f8f8;

        .content {
            padding: 1rem;
        }
    }

    .toggled {
        .expand-button {
            background-color: #f8f8f8;

            &:hover {
                background-color: #f2f2f2;
            }
            .expand-icon {
                &::after {
                    transform: translate(-50%,-50%) rotate(0deg);
                }
            }
        }

        .content-container {
            opacity: 1;
        }
    }

</style>
