import { u as useRouteLocale, l as le, m, a as l, n as n$1, y, h as h$1, d, r, b as usePageData, v, L, H } from "../app.3e63b610.mjs";
import { isPlainObject, isString } from "@vuepress/shared";
import { useLocalStorage, useEventListener, useDebounceFn } from "@vueuse/core";
import { defineComponent, toRef, ref, computed, watch, h } from "vue";
import { useRouter, RouterLink } from "vue-router";
import "ts-debounce";
import "bcrypt-ts/browser";
const searchResult = "";
const ue = "search-pro-result-history", n = useLocalStorage(ue, []), oe = () => {
  const { resultHistoryCount: l2 } = r, c = l2 > 0;
  return { enabled: c, resultHistory: n, addResultHistory: (r2) => {
    c && (n.value.length < l2 ? n.value = [r2, ...n.value] : n.value = [r2, ...n.value.slice(0, l2 - 1)]);
  }, removeResultHistory: (r2) => {
    n.value = [...n.value.slice(0, r2), ...n.value.slice(r2 + 1)];
  } };
}, ne = (l2) => {
  const c = useRouteLocale(), r$1 = ref(false), h2 = ref([]);
  let i;
  const v2 = useDebounceFn((d2) => {
    r$1.value = true, i == null || i.terminate(), d2 ? (i = new Worker(`${"/spoony-z/"}${r.worker}`, {}), i.addEventListener("message", ({ data: f }) => {
      h2.value = f, r$1.value = false;
    }), i.postMessage({ query: d2, routeLocale: c.value })) : (h2.value = [], r$1.value = false);
  }, r.delay);
  return watch([l2, c], () => v2(l2.value), { immediate: true }), { searching: r$1, results: h2 };
};
var ce = defineComponent({ name: "SearchResult", props: { query: { type: String, required: true } }, emits: ["close", "updateQuery"], setup(l$1, { emit: c }) {
  const r2 = usePageData(), h$2 = useRouter(), i = useRouteLocale(), v$1 = le(v), { addQueryHistory: d$1 } = L(), { enabled: f, resultHistory: C, addResultHistory: L$1, removeResultHistory: $ } = oe(), S = toRef(l$1, "query"), { results: m$1, searching: Q } = ne(S), u = ref(0), s = ref(0), w = computed(() => C.value.length > 0), R = computed(() => m$1.value.length > 0), H$1 = computed(() => m$1.value[u.value] || null), U = () => {
    u.value = u.value > 0 ? u.value - 1 : m$1.value.length - 1, s.value = H$1.value.contents.length - 1;
  }, A = () => {
    u.value = u.value < m$1.value.length - 1 ? u.value + 1 : 0, s.value = 0;
  }, x = () => {
    s.value < H$1.value.contents.length - 1 ? s.value = s.value + 1 : A();
  }, j = () => {
    s.value > 0 ? s.value = s.value - 1 : U();
  }, P = (e) => e.map((a) => isString(a) ? a : h(a[0], a[1])), D = (e) => {
    if (e.type === "custom") {
      const a = H[e.index] || "$content", [p, y2 = ""] = isPlainObject(a) ? a[i.value].split("$content") : a.split("$content");
      return P([p, ...e.display, y2]);
    }
    return P(e.display);
  }, _ = () => {
    u.value = 0, s.value = 0, c("updateQuery", ""), c("close");
  };
  return useEventListener("keydown", (e) => {
    if (R.value) {
      if (e.key === "ArrowUp")
        j();
      else if (e.key === "ArrowDown")
        x();
      else if (e.key === "Enter") {
        const a = H$1.value.contents[s.value];
        r2.value.path !== a.path && (d$1(l$1.query), L$1(a), h$2.push(a.path), _());
      }
    }
  }), watch([u, s], () => {
    var e;
    (e = document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")) == null || e.scrollIntoView(false);
  }, { flush: "post" }), () => h("div", { class: ["search-pro-result", { empty: S.value ? !R.value : !w.value }], id: "search-pro-results" }, S.value === "" ? w.value ? h("ul", { class: "search-pro-result-list" }, h("li", { class: "search-pro-result-list-item" }, [h("div", { class: "search-pro-result-title" }, v$1.value.history), C.value.map((e, a) => h(RouterLink, { to: e.path, class: ["search-pro-result-item", { active: s.value === a }], onClick: () => {
    _();
  } }, () => [h(m, { class: "search-pro-result-type" }), h("div", { class: "search-pro-result-content" }, [e.type === "content" && e.header ? h("div", { class: "content-header" }, e.header) : null, h("div", D(e))]), h("button", { class: "search-pro-close-icon", onClick: (p) => {
    p.preventDefault(), p.stopPropagation(), $(a);
  } }, h(l))]))])) : f ? v$1.value.emptyHistory : v$1.value.emptyResult : Q.value ? h(n$1, { hint: v$1.value.searching }) : R.value ? h("ul", { class: "search-pro-result-list" }, m$1.value.map(({ title: e, contents: a }, p) => {
    const y$1 = u.value === p;
    return h("li", { class: ["search-pro-result-list-item", { active: y$1 }] }, [h("div", { class: "search-pro-result-title" }, e || "Documentation"), a.map((o, F) => {
      const b = y$1 && s.value === F;
      return h(RouterLink, { to: o.path, class: ["search-pro-result-item", { active: b, "aria-selected": b }], onClick: () => {
        d$1(l$1.query), L$1(o), _();
      } }, () => [o.type === "content" ? null : h(o.type === "title" ? y : o.type === "heading" ? h$1 : d, { class: "search-pro-result-type" }), h("div", { class: "search-pro-result-content" }, [o.type === "content" && o.header ? h("div", { class: "content-header" }, o.header) : null, h("div", D(o))])]);
    })]);
  })) : v$1.value.emptyResult);
} });
export {
  ce as default
};
