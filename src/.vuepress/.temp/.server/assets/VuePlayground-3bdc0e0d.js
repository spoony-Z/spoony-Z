import { defineComponent, ref, shallowRef, computed, onMounted, h } from "vue";
import { I, f as f$1 } from "../app.3e63b610.mjs";
import "@vuepress/shared";
import "@vueuse/core";
import "ts-debounce";
import "vue-router";
import "bcrypt-ts/browser";
const style = "";
const vuePlayground = "";
const f = (e) => f$1({}, { "showCompileOutput": false, "clearConsole": false, "ssr": false }, JSON.parse(decodeURIComponent(e)));
var y = defineComponent({ name: "VuePlayground", props: { title: { type: String, default: "" }, files: { type: String, required: true }, settings: { type: String, default: "{}" } }, setup(e) {
  const n = ref(true), a = shallowRef(), o = ref(), l = computed(() => f(e.settings)), r = async () => {
    const { ReplStore: u, Repl: s } = await import("@vue/repl");
    a.value = s, o.value = new u({ serializedState: decodeURIComponent(e.files) }), l.value.vueVersion && await o.value.setVueVersion(l.value.vueVersion);
  };
  return onMounted(async () => {
    await r(), n.value = false;
  }), () => [h("div", { class: "vue-playground-wrapper" }, [e.title ? h("div", { class: "header" }, decodeURIComponent(e.title)) : null, h("div", { class: "repl-container" }, [n.value ? h(I, { class: "preview-loading", height: 192 }) : null, a.value ? h(a.value, { store: o.value, autoResize: true, ...l.value, layout: "horizontal" }) : null])])];
} });
export {
  y as default
};
