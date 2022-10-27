var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { isFullString, isFunction, isArray, isString, isPlainObject, isUndefined, isBoolean, isDate, isNumber, isFullArray, isPositiveNumber, isSet, isMap } from "is-what";
import { merge } from "merge-anything";
import { flattenPerSchema, parseFieldValue } from "@blitzar/utils";
import { defineComponent, resolveDynamicComponent, h, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createTextVNode, toDisplayString, renderSlot, createBlock, createCommentVNode, withDirectives, mergeProps, toHandlers, vModelDynamic, vModelSelect, withCtx, createElementVNode, unref, pushScopeId, popScopeId, withModifiers, withKeys, vModelText, Fragment, renderList, createVNode, markRaw, ref, computed, watch, nextTick, normalizeProps, guardReactiveProps, createStaticVNode, useCssVars, watchEffect, onBeforeMount, useSlots, isRef, createSlots } from "vue";
import snarkdown from "snarkdown";
import { mapObject } from "map-anything";
import { blitzFieldProps, ROW_SELECTION_ID, isAuto, isAdvanced, isCheckbox, isRange, blitzPaginationProps, getFilterEntries, blitzTableProps } from "@blitzar/types";
import { omit } from "filter-anything";
import { pascalCase } from "case-anything";
import { getProp } from "path-to-prop";
import { Pepicon, pepiconArray } from "@pepicons/vue";
import { copy } from "copy-anything";
import { nestifyObject } from "nestify-anything";
import { flattenObject } from "flatten-anything";
function getBlitzFieldOverwrites(field, lang) {
  if (!field)
    return {};
  const overwrites = {};
  const label = "label" in field ? field.label : lang[field == null ? void 0 : field.id];
  if (isFullString(label)) {
    overwrites.label = label;
  }
  if (field.slot) {
    overwrites.slots = merge(field.slots || {}, { default: field.slot });
  }
  const fieldClasses = field.fieldClasses || field.class;
  if (fieldClasses)
    overwrites.fieldClasses = fieldClasses;
  const fieldStyle = field.fieldStyle || field.style;
  if (fieldStyle)
    overwrites.fieldStyle = fieldStyle;
  return overwrites;
}
const defaultLang = () => ({
  archive: "Archive",
  delete: "Delete",
  cancel: "Cancel",
  edit: "Edit",
  save: "Save",
  requiredField: "Field is required",
  formValidationError: "There are remaining errors."
});
function evalDynamicProp(propName, payload, blueprint, context) {
  const propValue = blueprint[propName];
  if (isFunction(propValue)) {
    return propValue(payload, context);
  }
  return propValue;
}
function createRequiredErrorFn(requiredFieldErrorMsg) {
  return (val) => val === 0 || !!val ? null : requiredFieldErrorMsg;
}
function validateFieldPerSchema(payload, blueprint, context) {
  const required = evalDynamicProp("required", payload, blueprint, context);
  if (required === true) {
    const lang = context.lang || defaultLang();
    const requiredErrorFn = createRequiredErrorFn(lang.requiredField);
    const requiredResult = requiredErrorFn(payload);
    if (isFullString(requiredResult))
      return requiredResult;
  }
  const error = evalDynamicProp("error", payload, blueprint, context);
  return isFullString(error) ? error : null;
}
function validateFormPerSchema(formData, schema, lang) {
  const schemaObject = schema.reduce((carry, blueprint) => {
    carry[`${blueprint.id}`] = blueprint;
    return carry;
  }, {});
  const formDataFlatEmpty = Object.keys(schemaObject).reduce((carry, key) => __spreadProps(__spreadValues({}, carry), { [key]: null }), {});
  const formDataFlatCurrent = flattenPerSchema(formData, schema);
  const formDataFlat = __spreadValues(__spreadValues({}, formDataFlatEmpty), formDataFlatCurrent);
  const resultPerField = Object.entries(formDataFlat).reduce((carry, [fieldId, fieldValue]) => {
    if (fieldId === "undefined")
      return carry;
    const blueprint = schemaObject[fieldId];
    const context = {
      mode: "edit",
      formMode: "edit",
      formData,
      formDataFlat,
      updateField() {
      },
      lang: lang || defaultLang()
    };
    carry[fieldId] = !blueprint ? null : validateFieldPerSchema(fieldValue, blueprint, context);
    return carry;
  }, {});
  return resultPerField;
}
const BlitzH = defineComponent({
  name: "BlitzH",
  functional: true,
  props: {
    options: {
      type: [String, Object, Array],
      required: true
    }
  },
  render() {
    const optionsArray = isArray(this.options) ? this.options : [this.options];
    return optionsArray.map((o) => {
      if (isString(o))
        return o;
      const Component = resolveDynamicComponent(o.component);
      let children;
      if (o.slot) {
        children = [h(BlitzH, { options: o.slot })];
      } else if (o.slots && o.slots.default) {
        children = [h(BlitzH, { options: o.slots.default })];
      }
      return h(Component, __spreadValues(__spreadValues({}, omit(o, ["events", "lang", "rules", "hint", "readonly", "component", "slot", "slots"])), Object.entries(o.events || {}).reduce((carry, [eventName, handler]) => {
        carry[`on${pascalCase(eventName)}`] = handler;
        return carry;
      }, {})), {
        default() {
          return children;
        }
      });
    });
  }
});
const _sfc_main$b = BlitzH;
var BlitzField_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".blitz-field {\n  max-width: 100%;\n  display: grid;\n  align-content: start;\n  grid-gap: 0.5rem 1rem;\n}\n.blitz-field--label-top {\n  grid-auto-flow: row;\n}\n.blitz-field--label-left {\n  grid-auto-flow: column;\n  grid-template-columns: minmax(auto, max-content);\n  grid-auto-columns: minmax(50%, 1fr);\n  grid-template-rows: auto;\n  grid-auto-rows: 1fr;\n}\n.blitz-field--label-left .blitz-field__sub-label {\n  grid-row: 2/3;\n}\n.blitz-field--label-left .blitz-field__component,\n.blitz-field--label-left .blitz-field__error {\n  grid-row: 1/3;\n}\n.blitz-field--label-left.blitz-field--no-sub-label .blitz-field__label {\n  display: flex;\n  align-items: center;\n}\n.blitz-field--label-left.blitz-field--no-sub-label .blitz-field__component {\n  grid-row: 1/2;\n}\n.blitz-field .blitz-field__sub-label {\n  opacity: 0.8;\n  font-weight: 300;\n}\n.blitz-field .blitz-field__error {\n  color: crimson;\n}")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function evaluateProp(propValue, componentValue, componentInstance) {
  return isFunction(propValue) ? propValue(componentValue, componentInstance) : propValue;
}
const _sfc_main$a = defineComponent({
  name: "BlitzField",
  components: { BlitzH: _sfc_main$b },
  inheritAttrs: false,
  props: blitzFieldProps,
  emits: {
    "update:modelValue": (payload, origin) => ["default", "", void 0].includes(origin),
    click: null,
    dblclick: null,
    mousedown: null,
    mouseup: null
  },
  data() {
    return {
      innerValue: this.modelValue,
      justMounted: false,
      isDirty: false,
      showingErrorBeforeSave: false
    };
  },
  computed: {
    cValue: {
      get() {
        const { parseValue, innerValue } = this;
        if (isFunction(parseValue)) {
          return parseValue(innerValue, this);
        }
        return innerValue;
      },
      set(val, ...otherArguments) {
        this.isDirty = true;
        this.showingErrorBeforeSave = false;
        const { parseInput, evalPropOrAttr } = this;
        const events = evalPropOrAttr("events");
        if (isFunction(parseInput))
          val = parseInput(val, this);
        if (isFunction(events["update:modelValue"]))
          events["update:modelValue"](val, this);
        if (this.id === ROW_SELECTION_ID)
          return;
        this.event("update:modelValue", val, ...otherArguments);
      }
    },
    dynamicPropsEvaluated() {
      const { dynamicProps, cValue } = this;
      return dynamicProps.reduce((carry, propKey) => {
        if (propKey === "slots" || propKey === "slot") {
          const slotsValue = "slots" in this ? this["slots"] : this.$attrs["slots"];
          carry["slots"] = isPlainObject(slotsValue) ? mapObject(slotsValue, (propValue2) => evaluateProp(propValue2, cValue, this)) : evaluateProp(slotsValue, cValue, this);
          return carry;
        }
        const propValue = propKey in this ? this[propKey] : this.$attrs[propKey];
        carry[propKey] = evaluateProp(propValue, cValue, this);
        return carry;
      }, {});
    },
    defaultSlotCalculated() {
      const { evalPropOrAttr } = this;
      const slots = evalPropOrAttr("slots");
      if (isPlainObject(slots))
        return slots.default;
      return void 0;
    },
    usesInternalLabels() {
      const { evalPropOrAttr } = this;
      return Boolean(evalPropOrAttr("internalLabels") && evalPropOrAttr("component"));
    },
    langCalculated() {
      const { evalPropOrAttr } = this;
      const defaults = defaultLang() || {};
      const lang = evalPropOrAttr("lang") || {};
      return merge(defaults, lang);
    },
    errorCalculated() {
      const { evalPropOrAttr, evaluateError, isDirty, showingErrorBeforeSave } = this;
      if (evalPropOrAttr("internalErrors") || evalPropOrAttr("showErrorsOn") === "never") {
        return null;
      }
      if (evalPropOrAttr("showErrorsOn") === "always") {
        return evaluateError();
      }
      if (evalPropOrAttr("showErrorsOn") === "interaction") {
        if (!isDirty)
          return null;
        return evaluateError();
      }
      if (["save-focus", "save"].includes(evalPropOrAttr("showErrorsOn"))) {
        if (!showingErrorBeforeSave)
          return null;
        return evaluateError();
      }
      return evaluateError();
    },
    eventsCalculated() {
      const { evalPropOrAttr } = this;
      const events = evalPropOrAttr("events");
      return Object.entries(events).reduce((carry, [eventName, eventFn]) => {
        if (eventName === "update:modelValue")
          return carry;
        carry[eventName] = (val, ...otherArguments) => eventFn(val, this, ...otherArguments);
        return carry;
      }, {});
    },
    propsAndAttrsToPass() {
      const { evalPropOrAttr } = this;
      const propsToPass = {};
      if (evalPropOrAttr("internalErrors")) {
        propsToPass.error = evalPropOrAttr("error");
      }
      if (this.usesInternalLabels) {
        propsToPass.label = evalPropOrAttr("label");
        propsToPass.hint = evalPropOrAttr("subLabel") || evalPropOrAttr("hint");
      } else {
        propsToPass.hint = evalPropOrAttr("hint");
      }
      const readonly = evalPropOrAttr("readonly");
      if (readonly === true || readonly === "readonly" || evalPropOrAttr("mode") === "readonly") {
        propsToPass.readonly = true;
      }
      const disabled = evalPropOrAttr("disabled");
      if (disabled === true || disabled === "disabled" || evalPropOrAttr("mode") === "disabled") {
        propsToPass.disabled = true;
      }
      const required = evalPropOrAttr("required");
      if ((required === true || required === "required") && !propsToPass.disabled && !propsToPass.readonly) {
        propsToPass.required = true;
      }
      const attrsToPass = Object.keys(this.$attrs).reduce((carry, attrKey) => {
        if (attrKey === "class" || attrKey === "style") {
          return carry;
        }
        carry[attrKey] = evalPropOrAttr(attrKey);
        return carry;
      }, {});
      return __spreadValues(__spreadValues({}, propsToPass), attrsToPass);
    },
    labelUsedHere() {
      const { usesInternalLabels, evalPropOrAttr } = this;
      return usesInternalLabels ? void 0 : evalPropOrAttr("label");
    },
    subLabelHtmlUsedHere() {
      const { usesInternalLabels, evalPropOrAttr } = this;
      const subLabel = usesInternalLabels ? void 0 : evalPropOrAttr("subLabel");
      if (!isFullString(subLabel))
        return null;
      return snarkdown(subLabel);
    },
    parsedFieldValue() {
      const { cValue, evalPropOrAttr } = this;
      const blueprint = {
        type: evalPropOrAttr("type"),
        dateFormat: evalPropOrAttr("dateFormat"),
        suffix: evalPropOrAttr("suffix"),
        prefix: evalPropOrAttr("prefix"),
        options: evalPropOrAttr("options"),
        multiple: evalPropOrAttr("multiple"),
        slots: evalPropOrAttr("slots"),
        component: evalPropOrAttr("component")
      };
      return parseFieldValue(cValue, blueprint);
    }
  },
  watch: {
    modelValue(newValue) {
      this.innerValue = newValue;
    }
  },
  mounted() {
    const { modelValue, defaultValue, formData = {} } = this;
    if (isUndefined(modelValue)) {
      const newDefaultValue = isFunction(defaultValue) ? defaultValue(formData, this) : defaultValue;
      this.event("update:modelValue", newDefaultValue, "default");
    }
    this.justMounted = true;
  },
  methods: {
    evalPropOrAttr(propOrAttr) {
      const { dynamicPropsEvaluated } = this;
      if (propOrAttr in dynamicPropsEvaluated)
        return dynamicPropsEvaluated[propOrAttr];
      if (propOrAttr in this)
        return this[propOrAttr];
      return this.$attrs[propOrAttr];
    },
    event(eventName, payload, origin) {
      if (eventName === "update:modelValue") {
        this.$emit("update:modelValue", payload, origin);
      }
    },
    evaluateError() {
      const { evalPropOrAttr, langCalculated, cValue } = this;
      const isRequired = evalPropOrAttr("required");
      const requiredErrorFn = createRequiredErrorFn(langCalculated["requiredField"]);
      const requiredErrorResult = !isRequired ? null : requiredErrorFn(cValue);
      if (isFullString(requiredErrorResult))
        return requiredErrorResult;
      return evalPropOrAttr("error") || null;
    },
    validate(focusIfError) {
      const { evaluateError, evalPropOrAttr } = this;
      this.showingErrorBeforeSave = true;
      const result = evaluateError();
      const shouldFocus = isBoolean(focusIfError) ? focusIfError : evalPropOrAttr("showErrorsOn") === "save-focus";
      if (shouldFocus && isFullString(result) && evalPropOrAttr("mode") === "edit") {
        const component = this.$refs["ref-component"];
        if (component) {
          try {
            component.focus();
          } catch (error) {
          }
        }
      }
      return result;
    },
    resetDirtyAndErrors() {
      this.isDirty = false;
      this.showingErrorBeforeSave = false;
    }
  }
});
const _hoisted_1$9 = ["innerHTML"];
const _hoisted_2$7 = {
  key: 6,
  class: "blitz-field__error"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlitzH = resolveComponent("BlitzH");
  return _ctx.evalPropOrAttr("showCondition") ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass([
      "blitz-field",
      `blitz-field--${_ctx.evalPropOrAttr("mode")}`,
      `blitz-field--label-${_ctx.labelPosition}`,
      {
        "blitz-field--no-label": !_ctx.labelUsedHere,
        "blitz-field--no-sub-label": !_ctx.subLabelHtmlUsedHere,
        "blitz-field--no-component": !_ctx.evalPropOrAttr("component")
      },
      _ctx.evalPropOrAttr("fieldClasses"),
      _ctx.$attrs.class
    ]),
    style: normalizeStyle([_ctx.evalPropOrAttr("fieldStyle"), _ctx.$attrs.style]),
    onClick: _cache[3] || (_cache[3] = (e) => _ctx.$emit("click", e)),
    onDblclick: _cache[4] || (_cache[4] = (e) => _ctx.$emit("dblclick", e)),
    onMousedown: _cache[5] || (_cache[5] = (e) => _ctx.$emit("mousedown", e)),
    onMouseup: _cache[6] || (_cache[6] = (e) => _ctx.$emit("mouseup", e))
  }, [
    _ctx.labelUsedHere || _ctx.evalPropOrAttr("slots") && _ctx.evalPropOrAttr("slots").label ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["blitz-field__label", _ctx.evalPropOrAttr("labelClasses")]),
      style: normalizeStyle(_ctx.evalPropOrAttr("labelStyle"))
    }, [
      createTextVNode(toDisplayString(_ctx.labelUsedHere), 1),
      renderSlot(_ctx.$slots, "label", {}, () => [
        _ctx.evalPropOrAttr("slots") && _ctx.evalPropOrAttr("slots").label ? (openBlock(), createBlock(_component_BlitzH, {
          key: 0,
          options: _ctx.evalPropOrAttr("slots").label
        }, null, 8, ["options"])) : createCommentVNode("", true)
      ])
    ], 6)) : createCommentVNode("", true),
    _ctx.subLabelHtmlUsedHere ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: "blitz-field__sub-label",
      innerHTML: _ctx.subLabelHtmlUsedHere
    }, null, 8, _hoisted_1$9)) : createCommentVNode("", true),
    _ctx.evalPropOrAttr("mode") === "raw" ? (openBlock(), createBlock(_component_BlitzH, {
      key: 2,
      options: {
        component: "div",
        slot: !_ctx.parsedFieldValue && _ctx.propsAndAttrsToPass.slot ? _ctx.propsAndAttrsToPass.slot : _ctx.parsedFieldValue,
        class: ["blitz-field__component", _ctx.evalPropOrAttr("componentClasses")],
        style: _ctx.evalPropOrAttr("componentStyle")
      }
    }, null, 8, ["options"])) : _ctx.evalPropOrAttr("component") === "input" ? withDirectives((openBlock(), createElementBlock("input", mergeProps({ key: 3 }, _ctx.propsAndAttrsToPass, {
      ref: "ref-component",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.cValue = $event),
      class: ["blitz-field__component", _ctx.evalPropOrAttr("componentClasses")],
      style: _ctx.evalPropOrAttr("componentStyle")
    }, toHandlers(_ctx.eventsCalculated)), null, 16)), [
      [vModelDynamic, _ctx.cValue]
    ]) : _ctx.evalPropOrAttr("component") === "select" ? withDirectives((openBlock(), createElementBlock("select", mergeProps({ key: 4 }, _ctx.propsAndAttrsToPass, {
      ref: "ref-component",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.cValue = $event),
      class: ["blitz-field__component", _ctx.evalPropOrAttr("componentClasses")],
      style: _ctx.evalPropOrAttr("componentStyle")
    }, toHandlers(_ctx.eventsCalculated)), [
      _ctx.defaultSlotCalculated ? (openBlock(), createBlock(_component_BlitzH, {
        key: 0,
        options: _ctx.defaultSlotCalculated
      }, null, 8, ["options"])) : createCommentVNode("", true)
    ], 16)), [
      [vModelSelect, _ctx.cValue]
    ]) : _ctx.evalPropOrAttr("component") ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.evalPropOrAttr("component")), mergeProps({ key: 5 }, _ctx.propsAndAttrsToPass, {
      ref: "ref-component",
      modelValue: _ctx.cValue,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.cValue = $event),
      class: ["blitz-field__component", _ctx.evalPropOrAttr("componentClasses")],
      style: _ctx.evalPropOrAttr("componentStyle")
    }, toHandlers(_ctx.eventsCalculated)), {
      default: withCtx(() => [
        _ctx.defaultSlotCalculated ? (openBlock(), createBlock(_component_BlitzH, {
          key: 0,
          options: _ctx.defaultSlotCalculated
        }, null, 8, ["options"])) : createCommentVNode("", true)
      ]),
      _: 1
    }, 16, ["modelValue", "class", "style"])) : createCommentVNode("", true),
    _ctx.errorCalculated ? (openBlock(), createElementBlock("div", _hoisted_2$7, toDisplayString(_ctx.errorCalculated), 1)) : createCommentVNode("", true)
  ], 38)) : createCommentVNode("", true);
}
var BlitzField = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$4]]);
var BlitzSpinner_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.blitz-spinner[data-v-b4d3e2d4],\r\n.blitz-spinner *[data-v-b4d3e2d4] {\r\n  box-sizing: border-box;\n}\n.blitz-spinner[data-v-b4d3e2d4] {\r\n  animation: c-spin-b4d3e2d4 2s linear infinite;\r\n  transform-origin: center center;\n}\n.blitz-spinner .path[data-v-b4d3e2d4] {\r\n  stroke-dasharray: 1, 200;\r\n  stroke-dashoffset: 0;\r\n  animation: c-mat-dash-b4d3e2d4 1.5s ease-in-out infinite;\n}\n@keyframes c-spin-b4d3e2d4 {\n0% {\r\n    transform: rotate3d(0, 0, 1, 0deg);\n}\n25% {\r\n    transform: rotate3d(0, 0, 1, 90deg);\n}\n50% {\r\n    transform: rotate3d(0, 0, 1, 180deg);\n}\n75% {\r\n    transform: rotate3d(0, 0, 1, 270deg);\n}\n100% {\r\n    transform: rotate3d(0, 0, 1, 359deg);\n}\n}\n@keyframes c-mat-dash-b4d3e2d4 {\n0% {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\n}\n50% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -35px;\n}\n100% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -124px;\n}\n}\r\n")();
const sizeDict = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 };
const _sfc_main$9 = defineComponent({
  name: "BlitzSpinner",
  props: {
    size: { type: [Number, String], default: "1em" },
    thickness: { type: Number, default: 5 }
  },
  computed: {
    cSize() {
      const size = this.size;
      return size in sizeDict ? `${size}px` : size;
    }
  }
});
const _hoisted_1$8 = ["width", "height"];
const _hoisted_2$6 = ["stroke-width"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    class: "blitz-spinner",
    width: _ctx.cSize,
    height: _ctx.cSize,
    viewBox: "25 25 50 50"
  }, [
    createElementVNode("circle", {
      class: "path",
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": _ctx.thickness,
      "stroke-miterlimit": "10"
    }, null, 8, _hoisted_2$6)
  ], 8, _hoisted_1$8);
}
var BlitzSpinner = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$3], ["__scopeId", "data-v-b4d3e2d4"]]);
var BlitzIcon_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.blitz-icon[data-v-18136138],\r\n.blitz-icon *[data-v-18136138] {\r\n  box-sizing: border-box;\n}\n.blitz-icon[data-v-18136138] {\r\n  --c-primary: #0b3d92;\r\n  --c-accent-red: #f64d4d;\r\n  width: 18px;\r\n  height: 18px;\r\n  display: flex;\n}\n.blitz-icon > *[data-v-18136138] {\r\n  flex: 1;\n}\n.blitz-icon._kind-synced[data-v-18136138],\r\n.blitz-icon._kind-error[data-v-18136138] {\r\n  color: white;\r\n  border-radius: 100%;\r\n  padding: 2px;\n}\n.blitz-icon._kind-synced[data-v-18136138] {\r\n  background: var(--c-primary);\n}\n.blitz-icon._kind-error[data-v-18136138] {\r\n  background: var(--c-accent-red);\n}\n.blitz-icon._kind-loading[data-v-18136138] {\r\n  color: var(--c-primary);\n}\r\n")();
const _withScopeId$1 = (n) => (pushScopeId("data-v-18136138"), n = n(), popScopeId(), n);
const _hoisted_1$7 = {
  key: 1,
  class: /* @__PURE__ */ normalizeClass(`blitz-icon _kind-error`)
};
const _hoisted_2$5 = {
  style: { "color": "inherit" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_3$5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M10 2C11.1046 2 12 2.89543 12 4V11C12 12.1046 11.1046 13 10 13C8.89543 13 8 12.1046 8 11V4C8 2.89543 8.89543 2 10 2Z",
  fill: "currentColor"
}, null, -1));
const _hoisted_4$4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M12 16C12 17.1046 11.1046 18 10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16Z",
  fill: "currentColor"
}, null, -1));
const _hoisted_5$4 = [
  _hoisted_3$5,
  _hoisted_4$4
];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "BlitzIcon",
  props: {
    kind: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    defineComponent({ name: "BlitzIcon" });
    return (_ctx, _cache) => {
      return __props.kind === "loading" ? (openBlock(), createBlock(BlitzSpinner, {
        key: 0,
        class: normalizeClass(`blitz-icon _kind-loading`),
        size: "18px"
      })) : __props.kind === "error" ? (openBlock(), createElementBlock("div", _hoisted_1$7, [
        (openBlock(), createElementBlock("svg", _hoisted_2$5, _hoisted_5$4))
      ])) : (openBlock(), createBlock(unref(Pepicon), {
        key: 2,
        class: normalizeClass(`blitz-icon _kind-${__props.kind}`),
        type: "pop",
        name: "checkmark"
      }, null, 8, ["class"]));
    };
  }
});
var BlitzIcon = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-18136138"]]);
var BlitzInput_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => `
._reset-button[data-v-3f3bdf50] {\r
  /** RESET BUTTON */\r
  padding: 0;\r
  background: none;\r
  border: none;
}
._reset-button[data-v-3f3bdf50]:hover {\r
  cursor: pointer;
}
._reset-button[data-v-3f3bdf50]:focus {\r
  outline: 0;
}
.blitz-input[data-v-3f3bdf50],\r
.blitz-input *[data-v-3f3bdf50] {\r
  box-sizing: border-box;
}
.blitz-input[data-v-3f3bdf50] {\r
  --c-primary: #0b3d92;\r
  --c-border: #dfe2e5;\r
  min-width: 0;\r
  max-width: 100%;\r
  display: flex;\r
  flex-wrap: nowrap;\r
  align-items: center;\r
  position: relative;\r
  padding: 0.5rem;
}
.blitz-input._disabled[data-v-3f3bdf50] {\r
  opacity: 0.7 !important;\r
  cursor: not-allowed !important;
}
.blitz-input textarea[data-v-3f3bdf50],\r
.blitz-input input[data-v-3f3bdf50],\r
.blitz-input select[data-v-3f3bdf50] {\r
  font-family: inherit;\r
  color: rgba(black, 0.8);\r
  min-width: 0;\r
  width: 100%;\r
  min-height: 24px;\r
  line-height: 24px;\r
  outline: none;\r
  box-shadow: none;\r
  -webkit-appearance: none;\r
  border: none;\r
  z-index: 2;\r
  position: relative;\r
  background: none;
}
.blitz-input textarea[data-v-3f3bdf50]::placeholder,\r
.blitz-input input[data-v-3f3bdf50]::placeholder,\r
.blitz-input select[data-v-3f3bdf50]::placeholder {\r
  color: rgba(black, 0.5);
}
.blitz-input textarea[data-v-3f3bdf50] {\r
  padding: 0;
}
._icon[data-v-3f3bdf50],\r
._prefix[data-v-3f3bdf50],\r
._suffix[data-v-3f3bdf50] {\r
  color: black;\r
  opacity: 0.25;\r
  transition: color 200ms ease, opacity 300ms ease;
}
.blitz-input[data-v-3f3bdf50]::after,\r
.blitz-input[data-v-3f3bdf50]::before {\r
  border-radius: 0.25rem;\r
  position: absolute;\r
  top: 0;\r
  bottom: 0;\r
  left: 0;\r
  right: 0;\r
  content: '';\r
  border-style: solid;\r
  transition: border-color 300ms ease;
}
.blitz-input[data-v-3f3bdf50]::after {\r
  border-width: 1px;\r
  border-color: var(--c-border);
}
.blitz-input[data-v-3f3bdf50]::before {\r
  border-width: 2px;\r
  border-color: transparent;
}
.blitz-input[data-v-3f3bdf50]:focus-within::after {\r
  border-color: transparent;
}
.blitz-input[data-v-3f3bdf50]:focus-within::before {\r
  border-color: var(--c-primary);
}
.blitz-input:focus-within ._icon[data-v-3f3bdf50],\r
.blitz-input:focus-within ._prefix[data-v-3f3bdf50],\r
.blitz-input:focus-within ._suffix[data-v-3f3bdf50] {\r
  color: var(--c-primary);\r
  opacity: 1;
}
._prefix[data-v-3f3bdf50],\r
._suffix[data-v-3f3bdf50] {\r
  white-space: nowrap;
}
._eye[data-v-3f3bdf50],\r
._cross[data-v-3f3bdf50] {\r
  z-index: 10;
}
._eye[data-v-3f3bdf50] {\r
  color: var(--c-primary);
}
._cross[data-v-3f3bdf50] {\r
  color: white;\r
  background: var(--c-primary);\r
  border-radius: 100px;\r
  padding: 0;\r
  transform: scale(0.8);
}
._select-wrapper[data-v-3f3bdf50] {\r
  flex: 1;\r
  display: flex;\r
  align-items: center;\r
  position: relative;
}
._select-arrow[data-v-3f3bdf50] {\r
  position: absolute;\r
  right: 0;
}\r
/** type="date" edits */
._type-date ._icon[data-v-3f3bdf50] {\r
  position: absolute;\r
  right: 0.5rem;
}
._type-date input[type='date'][data-v-3f3bdf50]::-webkit-inner-spin-button,\r
._type-date input[type='date'][data-v-3f3bdf50]::-webkit-calendar-picker-indicator {\r
  opacity: 0;
}
._type-date input[type='date'][data-v-3f3bdf50]::-webkit-calendar-picker-indicator {\r
  margin-inline-start: 1rem;
}
._type-date._falsy input[data-v-3f3bdf50]::-webkit-datetime-edit {\r
  color: rgba(black, 0.5);
}
._type-date._has-icon-right ._icon[data-v-3f3bdf50] {\r
  right: 2rem;
}\r
`)();
const _sfc_main$7 = defineComponent({
  name: "BlitzInput",
  components: { Pepicon, BlitzIcon },
  props: {
    icon: {
      type: String,
      default: void 0,
      validator: (val) => !val || pepiconArray.includes(val)
    },
    suffix: { type: String, default: "" },
    prefix: { type: String, default: "" },
    showCheck: { type: Boolean, default: false },
    hasError: { type: Boolean, default: false },
    isBusy: { type: Boolean, default: false },
    type: {
      type: String,
      default: "text"
    },
    options: {
      type: Array,
      default: void 0
    },
    placeholder: { type: String, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    required: { type: Boolean, default: void 0 },
    autocomplete: { type: String, default: void 0 },
    min: { type: String, default: void 0 },
    rows: { type: [String, Number], default: "3" },
    modelValue: { type: [String, Number, Date], default: "" },
    autofocus: { type: Boolean, default: false },
    autogrow: { type: Boolean, default: false },
    debounce: { type: Number, default: 0 },
    clearable: { type: Boolean, default: false },
    preventFocus: { type: Boolean, default: false }
  },
  emits: ["click", "update:modelValue", "blur", "focus", "enter"],
  data() {
    return {
      selectId: Math.random().toString(),
      textareaHeight: "unset",
      timeout: 0,
      valueInner: this.parseValue(this.modelValue),
      fieldType: this.type,
      eyeSvg: "eye-closed",
      textareaObserver: null
    };
  },
  computed: {
    iconCalculated() {
      const { icon, type } = this;
      if (icon)
        return icon;
      if (type === "search")
        return "loop";
      if (type === "date")
        return "calendar";
      return "";
    }
  },
  watch: {
    type(newVal) {
      this.fieldType = newVal;
    },
    modelValue(newVal) {
      const { valueInner, parseValue } = this;
      if (newVal !== valueInner) {
        this.valueInner = parseValue(newVal);
      }
    },
    valueInner(newVal) {
      this.autogrowInput();
      const debounceMs = this.debounce;
      if (debounceMs > 0) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.emitInput(newVal), debounceMs);
      } else {
        this.emitInput(newVal);
      }
    }
  },
  mounted() {
    if (this.valueInner) {
      this.autogrowInput({ init: true });
    }
    if (this.autofocus) {
      setTimeout(() => this.focus(), 400);
    }
  },
  beforeUnmount() {
    var _a;
    (_a = this.textareaObserver) == null ? void 0 : _a.disconnect();
  },
  methods: {
    parseValue(val) {
      const { type } = this;
      if (type !== "date" || !isDate(val))
        return val;
      const YYYY = String(val.getFullYear()).padStart(4, "0");
      const MM = String(val.getMonth() + 1).padStart(2, "0");
      const DD = String(val.getDate()).padStart(2, "0");
      return `${YYYY}-${MM}-${DD}`;
    },
    emitInput(newVal) {
      const { type } = this;
      let payload = newVal;
      if (isFullString(newVal)) {
        if (type === "number" && isNumber(Number(newVal))) {
          payload = Number(newVal);
        }
        if (type === "date" && isDate(new Date(newVal))) {
          payload = new Date(newVal);
        }
      }
      this.$emit("update:modelValue", payload);
    },
    focus(e) {
      if (this.preventFocus) {
        this.$emit("click", e);
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        return;
      }
      const ref2 = this.$refs["native-el"];
      if (ref2)
        ref2.focus();
    },
    click(e) {
      if (this.type !== "date" || this.type === "date" && this.preventFocus) {
        e.preventDefault();
        e.stopPropagation();
      }
      this.focus(e);
    },
    autogrowInput(options = { init: false }) {
      const textAreaRef = this.$refs["native-el"];
      if (!!textAreaRef && this.type === "textarea" && this.autogrow) {
        if (options == null ? void 0 : options.init)
          this.registerTextareaObserver();
        this.textareaHeight = "auto";
        this.$nextTick(() => {
          if (this.valueInner && textAreaRef.scrollHeight !== textAreaRef.clientHeight) {
            this.textareaHeight = `${textAreaRef.scrollHeight}px`;
          }
        });
      }
    },
    registerTextareaObserver() {
      if (this.textareaObserver)
        return;
      this.textareaObserver = new IntersectionObserver((entries) => entries[0].isIntersecting && this.autogrowInput());
      const textAreaRef = this.$refs["native-el"];
      this.textareaObserver.observe(textAreaRef);
    },
    toggleVisiblity() {
      this.eyeSvg = this.eyeSvg === "eye-closed" ? "eye" : "eye-closed";
      this.fieldType = this.fieldType === "text" ? "password" : "text";
      if (document.activeElement === this.$refs["native-el"]) {
        window.requestAnimationFrame(() => this.focus());
      }
    },
    clearInput() {
      this.valueInner = "";
      if (document.activeElement === this.$refs["native-el"]) {
        window.requestAnimationFrame(() => this.focus());
      }
    }
  }
});
const _hoisted_1$6 = {
  key: 0,
  class: "_prefix mr-xs"
};
const _hoisted_2$4 = ["type", "placeholder", "min"];
const _hoisted_3$4 = ["rows", "placeholder"];
const _hoisted_4$3 = {
  key: 4,
  class: "_select-wrapper"
};
const _hoisted_5$3 = {
  key: 0,
  value: ""
};
const _hoisted_6$2 = ["value"];
const _hoisted_7$2 = {
  key: 5,
  class: "_suffix ml-xs"
};
const _hoisted_8$2 = {
  key: 6,
  class: "ml-auto pl-sm"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Pepicon = resolveComponent("Pepicon");
  const _component_BlitzIcon = resolveComponent("BlitzIcon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(`blitz-input _type-${_ctx.type} ${_ctx.disabled ? "_disabled" : ""} ${!!_ctx.valueInner ? "_truthy" : "_falsy"} ${_ctx.showCheck || _ctx.hasError || _ctx.isBusy ? "_has-icon-right" : ""}`),
    onClick: _cache[17] || (_cache[17] = withModifiers((e) => _ctx.focus(e), ["stop"]))
  }, [
    _ctx.prefix ? (openBlock(), createElementBlock("div", _hoisted_1$6, toDisplayString(_ctx.prefix), 1)) : createCommentVNode("", true),
    _ctx.iconCalculated ? (openBlock(), createBlock(_component_Pepicon, {
      key: 1,
      class: "_icon mr-xs",
      size: "20px",
      type: "pop",
      name: _ctx.iconCalculated
    }, null, 8, ["name"])) : createCommentVNode("", true),
    _ctx.type !== "textarea" && _ctx.type !== "select" ? withDirectives((openBlock(), createElementBlock("input", mergeProps({
      key: 2,
      ref: "native-el"
    }, {
      disabled: _ctx.disabled || void 0,
      readonly: _ctx.readonly || void 0,
      required: _ctx.required || void 0,
      autocomplete: _ctx.autocomplete || void 0
    }, {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.valueInner = $event),
      type: _ctx.fieldType,
      placeholder: _ctx.placeholder || (_ctx.type === "search" ? "\u691C\u7D22" : void 0),
      min: _ctx.min,
      "data-cy": "input-field",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.click && _ctx.click(...args)),
      onBlur: _cache[2] || (_cache[2] = (e) => _ctx.$emit("blur", e)),
      onFocus: _cache[3] || (_cache[3] = (e) => _ctx.$emit("focus", e)),
      onKeypress: _cache[4] || (_cache[4] = withKeys((e) => _ctx.$emit("enter", e), ["enter"]))
    }), null, 16, _hoisted_2$4)), [
      [vModelDynamic, _ctx.valueInner]
    ]) : createCommentVNode("", true),
    _ctx.type === "textarea" ? withDirectives((openBlock(), createElementBlock("textarea", mergeProps({
      key: 3,
      ref: "native-el"
    }, {
      disabled: _ctx.disabled || void 0,
      readonly: _ctx.readonly || void 0,
      required: _ctx.required || void 0,
      autocomplete: _ctx.autocomplete || void 0
    }, {
      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.valueInner = $event),
      style: `${String(_ctx.rows) === "1" ? "resize: none" : ""}; height: ${_ctx.textareaHeight}`,
      rows: _ctx.rows,
      placeholder: _ctx.placeholder,
      "data-cy": "input-field",
      onClick: _cache[6] || (_cache[6] = (...args) => _ctx.click && _ctx.click(...args)),
      onBlur: _cache[7] || (_cache[7] = (e) => _ctx.$emit("blur", e)),
      onFocus: _cache[8] || (_cache[8] = (e) => _ctx.$emit("focus", e)),
      onKeypress: _cache[9] || (_cache[9] = withKeys((e) => _ctx.$emit("enter", e), ["enter"]))
    }), null, 16, _hoisted_3$4)), [
      [vModelText, _ctx.valueInner]
    ]) : createCommentVNode("", true),
    _ctx.type === "select" ? (openBlock(), createElementBlock("label", _hoisted_4$3, [
      withDirectives(createElementVNode("select", mergeProps({ ref: "native-el" }, {
        disabled: _ctx.disabled || void 0,
        readonly: _ctx.readonly || void 0,
        required: _ctx.required || void 0,
        autocomplete: _ctx.autocomplete || void 0
      }, {
        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.valueInner = $event),
        "data-cy": "select-field",
        onClick: _cache[11] || (_cache[11] = (...args) => _ctx.click && _ctx.click(...args)),
        onBlur: _cache[12] || (_cache[12] = (e) => _ctx.$emit("blur", e)),
        onFocus: _cache[13] || (_cache[13] = (e) => _ctx.$emit("focus", e)),
        onKeypress: _cache[14] || (_cache[14] = withKeys((e) => _ctx.$emit("enter", e), ["enter"]))
      }), [
        _ctx.placeholder ? (openBlock(), createElementBlock("option", _hoisted_5$3, toDisplayString(_ctx.placeholder), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (option) => {
          return openBlock(), createElementBlock("option", {
            key: option.label,
            value: option.value
          }, toDisplayString(option.label), 9, _hoisted_6$2);
        }), 128))
      ], 16), [
        [vModelSelect, _ctx.valueInner]
      ]),
      createVNode(_component_Pepicon, {
        class: "_icon ml-xs _select-arrow",
        size: "20px",
        type: "pop",
        name: "angle-down"
      })
    ])) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "default", {}, void 0, true),
    _ctx.suffix ? (openBlock(), createElementBlock("div", _hoisted_7$2, toDisplayString(_ctx.suffix), 1)) : createCommentVNode("", true),
    _ctx.showCheck || _ctx.hasError || _ctx.isBusy ? (openBlock(), createElementBlock("div", _hoisted_8$2, [
      _ctx.isBusy ? (openBlock(), createBlock(_component_BlitzIcon, {
        key: 0,
        kind: "loading"
      })) : _ctx.hasError ? (openBlock(), createBlock(_component_BlitzIcon, {
        key: 1,
        kind: "error"
      })) : _ctx.showCheck ? (openBlock(), createBlock(_component_BlitzIcon, {
        key: 2,
        kind: "synced"
      })) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.type === "password" ? (openBlock(), createElementBlock("button", {
      key: 7,
      type: "button",
      class: "ml-auto pl-sm _eye _reset-button",
      onMousedown: _cache[15] || (_cache[15] = (...args) => _ctx.toggleVisiblity && _ctx.toggleVisiblity(...args))
    }, [
      createVNode(_component_Pepicon, {
        type: "pop",
        name: _ctx.eyeSvg,
        class: "_eye"
      }, null, 8, ["name"])
    ], 32)) : createCommentVNode("", true),
    (_ctx.clearable || _ctx.type === "search") && _ctx.valueInner ? (openBlock(), createElementBlock("button", {
      key: 8,
      type: "button",
      class: "ml-auto pl-sm _cross _reset-button",
      onMousedown: _cache[16] || (_cache[16] = (...args) => _ctx.clearInput && _ctx.clearInput(...args))
    }, [
      createVNode(_component_Pepicon, {
        type: "pop",
        name: "times"
      })
    ], 32)) : createCommentVNode("", true)
  ], 2);
}
var BlitzInput = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$2], ["__scopeId", "data-v-3f3bdf50"]]);
var BlitzFilters_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.blitz-filters[data-v-7478641f] {\r\n  display: flex;\r\n  flex-wrap: wrap;\n}\n.blitz-filters__section[data-v-7478641f] {\r\n  padding-right: 1rem;\r\n  padding-bottom: 1rem;\n}\n.blitz-filters__field-label[data-v-7478641f] {\r\n  padding-bottom: 0.5rem;\r\n  line-height: 1;\n}\n.blitz-filters__controls[data-v-7478641f] {\r\n  display: flex;\r\n  flex-wrap: wrap;\n}\n.blitz-filters__option[data-v-7478641f] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: 0.5rem;\r\n  margin-bottom: 0.5rem;\n}\n.blitz-filters__option ._label[data-v-7478641f]:first-child {\r\n  user-select: none;\r\n  margin-right: 0.5rem;\n}\n.blitz-filters__option ._label[data-v-7478641f]:last-child {\r\n  user-select: none;\r\n  margin-left: 0.25rem;\n}\n.blitz-filters__option ._label ._count[data-v-7478641f] {\r\n  margin-left: 0.4rem;\n}\r\n")();
const _hoisted_1$5 = { class: "blitz-filters" };
const _hoisted_2$3 = {
  class: "blitz-filters__field-label",
  style: {}
};
const _hoisted_3$3 = {
  key: 0,
  class: "blitz-filters__controls"
};
const _hoisted_4$2 = ["onDblclick"];
const _hoisted_5$2 = ["checked", "onChange"];
const _hoisted_6$1 = {
  key: 0,
  class: "_label"
};
const _hoisted_7$1 = {
  key: 0,
  class: "_count"
};
const _hoisted_8$1 = {
  key: 0,
  class: "_label"
};
const _hoisted_9 = {
  key: 0,
  class: "_label"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BlitzFilters",
  props: {
    modelValue: null,
    filterOptions: null,
    tableMeta: null,
    inputField: null
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const fInput = props.inputField || { component: markRaw(BlitzInput) };
    function getOptionType(payload) {
      if (isNumber(payload) || payload === Number)
        return "number";
      if (isDate(payload) || payload === Date)
        return "date";
      return "text";
    }
    const checkboxes = ref({});
    const ranges = ref({});
    const advanced = ref({});
    const combinedFieldIds = computed(() => {
      return [
        .../* @__PURE__ */ new Set([
          ...Object.keys(checkboxes.value),
          ...Object.keys(ranges.value),
          ...Object.keys(advanced.value)
        ])
      ];
    });
    const fieldIdInfoDic = ref({});
    for (const [fieldId, options] of Object.entries(props.filterOptions)) {
      for (const option of options) {
        if (isAuto(option)) {
          if (!checkboxes.value[fieldId])
            checkboxes.value[fieldId] = [];
          if (!fieldIdInfoDic.value[fieldId])
            fieldIdInfoDic.value[fieldId] = /* @__PURE__ */ new Map();
          continue;
        }
        if (isAdvanced(option)) {
          if (!advanced.value[fieldId])
            advanced.value[fieldId] = [];
          advanced.value[fieldId].push(option);
          continue;
        }
        if (isCheckbox(option)) {
          if (!checkboxes.value[fieldId])
            checkboxes.value[fieldId] = [];
          if (!fieldIdInfoDic.value[fieldId])
            fieldIdInfoDic.value[fieldId] = /* @__PURE__ */ new Map();
          checkboxes.value[fieldId].push(__spreadProps(__spreadValues({}, option), { op: option.op || "===" }));
          fieldIdInfoDic.value[fieldId].set(option.value, 0);
          continue;
        }
        if (isRange(option)) {
          if (!ranges.value[fieldId])
            ranges.value[fieldId] = [];
          const label = option.op === "<" && !option.label ? "\uFF5E" : option.label;
          ranges.value[fieldId].push(__spreadProps(__spreadValues({}, option), { type: getOptionType(option.value), label }));
          continue;
        }
      }
    }
    function calculateCheckboxesAndCounts() {
      const fieldIds = Object.keys(fieldIdInfoDic.value);
      for (const fieldId of fieldIds) {
        for (const [foundValue] of fieldIdInfoDic.value[fieldId]) {
          fieldIdInfoDic.value[fieldId].set(foundValue, 0);
        }
      }
      for (const row of props.tableMeta.rows.value) {
        for (const fieldId of fieldIds) {
          const foundValue = getProp(row, fieldId);
          let count = fieldIdInfoDic.value[fieldId].get(foundValue);
          if (!isNumber(count)) {
            fieldIdInfoDic.value[fieldId].set(foundValue, 0);
            count = 0;
            if (!checkboxes.value[fieldId])
              checkboxes.value[fieldId] = [];
            checkboxes.value[fieldId].push({ value: foundValue, op: "===" });
          }
          fieldIdInfoDic.value[fieldId].set(foundValue, count + 1);
        }
      }
    }
    const debounce = ref(setTimeout(() => {
    }, 0));
    watch(props.tableMeta.rows, () => {
      clearTimeout(debounce.value);
      debounce.value = setTimeout(calculateCheckboxesAndCounts, 1e3);
    }, { immediate: true });
    async function updateModelValueFilterState(checkboxesOrRanges) {
      for (const [fieldId, options] of Object.entries(checkboxesOrRanges)) {
        let info = props.modelValue[fieldId];
        if (!info) {
          info = {
            in: /* @__PURE__ */ new Set(),
            "not-in": /* @__PURE__ */ new Set(),
            ">": void 0,
            "<": void 0,
            custom: /* @__PURE__ */ new Map()
          };
          emit("update:modelValue", __spreadProps(__spreadValues({}, props.modelValue), { [fieldId]: info }));
          await nextTick();
        }
        if (!info["in"])
          info["in"] = /* @__PURE__ */ new Set();
        if (!info["not-in"])
          info["not-in"] = /* @__PURE__ */ new Set();
        if (!info.custom)
          info.custom = /* @__PURE__ */ new Map();
        for (const o of options) {
          if (isCheckbox(o)) {
            if (info["in"].has(o.value) || info["not-in"].has(o.value))
              continue;
            if (o.op === "===") {
              info["in"].add(o.value);
              info["not-in"].delete(o.value);
            }
            if (o.op === "!==") {
              info["in"].delete(o.value);
              info["not-in"].add(o.value);
            }
          }
          if (isRange(o)) {
            if (info[o.op] !== void 0)
              continue;
            if (o.value === Date || o.value === Number) {
              info[o.op] = void 0;
            } else {
              info[o.op] = o.value;
            }
          }
          if (isAdvanced(o)) {
            if (info.custom.has(o.compareFn))
              continue;
            info.custom.set(o.compareFn, o.defaultValue);
          }
        }
      }
    }
    watch(checkboxes, updateModelValueFilterState, { immediate: true });
    watch(ranges, (newRanges) => setTimeout(() => updateModelValueFilterState(newRanges), 1), {
      immediate: true
    });
    watch(advanced, (newComponents) => setTimeout(() => updateModelValueFilterState(newComponents), 2), { immediate: true });
    async function setCheckbox(fieldId, optionValue, option) {
      const info = props.modelValue[fieldId];
      if (!info["in"])
        info["in"] = /* @__PURE__ */ new Set();
      if (!info["not-in"])
        info["not-in"] = /* @__PURE__ */ new Set();
      if (option === "uncheck-others") {
        const allValues = checkboxes.value[fieldId].map((checkbox) => checkbox.value);
        const optionAlreadySingleSelection = info["in"].has(optionValue) && info["in"].size === 1;
        if (optionAlreadySingleSelection) {
          for (const value of allValues) {
            info["in"].add(value);
          }
          info["not-in"].clear();
        } else {
          for (const value of allValues) {
            if (value !== optionValue)
              info["not-in"].add(value);
          }
          info["in"].clear();
          info["in"].add(optionValue);
        }
        return;
      }
      const wasSelected = info["in"].has(optionValue);
      if (wasSelected) {
        info["in"].delete(optionValue);
        info["not-in"].add(optionValue);
      } else {
        info["in"].add(optionValue);
        info["not-in"].delete(optionValue);
      }
    }
    async function setRangeFilter(payload) {
      const { fieldId, newVal, op } = payload;
      const info = props.modelValue[fieldId];
      info[op] = newVal;
    }
    async function setAdvancedFilter(payload) {
      const { fieldId, newVal, compareFn } = payload;
      const info = props.modelValue[fieldId]["custom"];
      if (info) {
        info.set(compareFn, newVal);
      }
    }
    function t(payload) {
      return props.tableMeta.lang.value[`${payload}`] || (payload ? `${payload}` : "");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(combinedFieldIds), (fieldId) => {
          return openBlock(), createElementBlock("div", {
            key: fieldId,
            class: "blitz-filters__section"
          }, [
            createElementVNode("div", _hoisted_2$3, toDisplayString(t(fieldId)), 1),
            __props.modelValue[fieldId] ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(checkboxes.value[fieldId] || [], (option) => {
                var _a, _b, _c;
                return openBlock(), createElementBlock("label", {
                  key: option,
                  class: "blitz-filters__option",
                  onDblclick: withModifiers(() => setCheckbox(fieldId, option.value, "uncheck-others"), ["stop"])
                }, [
                  createElementVNode("input", {
                    type: "checkbox",
                    checked: (_a = __props.modelValue[fieldId]["in"]) == null ? void 0 : _a.has(option.value),
                    onChange: (e) => setCheckbox(fieldId, option.value)
                  }, null, 40, _hoisted_5$2),
                  t(option.label) || t(option.value) ? (openBlock(), createElementBlock("span", _hoisted_6$1, [
                    createTextVNode(toDisplayString(t(option.label) || t(option.value)), 1),
                    ((_b = fieldIdInfoDic.value[fieldId]) == null ? void 0 : _b.get(option.value)) ? (openBlock(), createElementBlock("span", _hoisted_7$1, "(" + toDisplayString((_c = fieldIdInfoDic.value[fieldId]) == null ? void 0 : _c.get(option.value)) + ")", 1)) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ], 40, _hoisted_4$2);
              }), 128)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(ranges.value[fieldId] || [], (option) => {
                return openBlock(), createElementBlock("label", {
                  key: option,
                  class: "blitz-filters__option"
                }, [
                  t(option.label) ? (openBlock(), createElementBlock("span", _hoisted_8$1, toDisplayString(t(option.label)), 1)) : createCommentVNode("", true),
                  createVNode(BlitzField, mergeProps(unref(fInput), {
                    type: option.type,
                    modelValue: __props.modelValue[fieldId][option.op],
                    "onUpdate:modelValue": (newVal) => setRangeFilter({ fieldId, newVal, op: option.op })
                  }), null, 16, ["type", "modelValue", "onUpdate:modelValue"])
                ]);
              }), 128)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(advanced.value[fieldId] || [], (field, i) => {
                var _a;
                return openBlock(), createElementBlock("label", {
                  key: i,
                  class: "blitz-filters__option"
                }, [
                  t(field.label) ? (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(t(field.label)), 1)) : createCommentVNode("", true),
                  createVNode(BlitzField, mergeProps(field, {
                    label: void 0,
                    modelValue: (_a = __props.modelValue[fieldId]["custom"]) == null ? void 0 : _a.get(field.compareFn),
                    "onUpdate:modelValue": (newVal) => setAdvancedFilter({ fieldId, newVal, compareFn: field.compareFn })
                  }), null, 16, ["modelValue", "onUpdate:modelValue"])
                ]);
              }), 128))
            ])) : createCommentVNode("", true)
          ]);
        }), 128))
      ]);
    };
  }
});
var BlitzFilters = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-7478641f"]]);
var BlitzForm_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "div.blitz-form {\n  display: flex;\n}\n.blitz-form--nav-top, .blitz-form--nav-bottom {\n  flex-direction: column;\n}\n.blitz-form--nav-left, .blitz-form--nav-right {\n  flex-direction: row;\n}\n.blitz-form__form {\n  flex: 1;\n  display: grid;\n  align-items: stretch;\n  justify-items: stretch;\n}\n.blitz-form__form > .-title {\n  grid-column: 1/-1;\n}\n.blitz-form__nav-row {\n  min-height: 42px;\n  display: grid;\n  justify-content: end;\n  align-content: start;\n  align-items: center;\n  grid-gap: 1rem;\n}\n.blitz-form__nav-row--top {\n  order: 0;\n  grid-auto-flow: column;\n  margin-bottom: 1rem;\n}\n.blitz-form__nav-row--bottom {\n  order: 1;\n  grid-auto-flow: column;\n  margin-top: 1rem;\n}\n.blitz-form__nav-row--right {\n  order: 1;\n  grid-auto-flow: row;\n  margin-left: 1rem;\n}\n.blitz-form__nav-row--left {\n  order: 0;\n  grid-auto-flow: row;\n  margin-right: 1rem;\n}\n.blitz-form__validation-error {\n  color: crimson;\n}")();
const _sfc_main$5 = defineComponent({
  name: "BlitzForm",
  components: { BlitzField },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    id: { type: String, default: void 0 },
    schema: {
      type: Array,
      required: true
    },
    actionButtons: {
      type: Array,
      default: () => []
    },
    actionButtonDefaults: {
      type: Object,
      default: () => ({})
    },
    actionButtonsPosition: {
      type: String,
      default: "top",
      validator: (prop) => ["top", "bottom", "right", "left"].includes(prop)
    },
    columnCount: {
      type: Number,
      default: 1
    },
    gridGap: {
      type: String,
      default: "1em"
    },
    lang: {
      type: Object,
      default: () => ({
        archive: "Archive",
        delete: "Delete",
        cancel: "Cancel",
        edit: "Edit",
        save: "Save",
        requiredField: "Field is required",
        formValidationError: "There are remaining errors."
      })
    },
    mode: {
      type: String,
      default: "edit",
      validator: (prop) => ["edit", "readonly", "disabled", "raw"].includes(prop)
    },
    labelPosition: {
      type: [String, Function],
      default: "top",
      validator: (prop) => ["top", "left"].includes(prop)
    },
    labelStyle: {
      type: [Object, Array, String, Function],
      default: null
    },
    labelClasses: {
      type: [Object, Array, String, Function],
      default: null
    },
    dynamicProps: {
      type: Array,
      default: () => [
        "component",
        "showCondition",
        "label",
        "subLabel",
        "required",
        "fieldStyle",
        "fieldClasses",
        "componentStyle",
        "componentClasses",
        "events",
        "lang"
      ]
    },
    internalLabels: {
      type: Boolean,
      default: void 0
    },
    internalErrors: {
      type: Boolean,
      default: void 0
    },
    showErrorsOn: {
      type: String,
      default: "interaction",
      validator: (prop) => ["interaction", "save", "save-focus", "never", "always"].includes(prop)
    },
    formComponent: {
      type: [String, Function],
      default: "div"
    }
  },
  emits: {
    "update:mode": (payload) => ["edit", "readonly", "disabled", "raw"].includes(payload),
    updateField: (payload) => isPlainObject(payload),
    "update:modelValue": (payload, origin) => isPlainObject(payload) && ["default", "cancel", "", void 0].includes(origin),
    edit: () => true,
    cancel: () => true,
    save: (payload) => isPlainObject(payload),
    delete: () => true,
    archive: () => true,
    click: null,
    dblclick: null,
    mousedown: null,
    mouseup: null
  },
  data() {
    const { mode, id, modelValue, schema, lang } = this;
    const innerLang = merge(defaultLang(), lang);
    const innerMode = mode;
    const formId = id;
    const dataFlat = flattenPerSchema(modelValue, schema);
    const dataFlatDefaults = schema.reduce((carry, { id: id2, defaultValue }) => {
      if (!isFullString(id2))
        return carry;
      carry[id2] = isFunction(defaultValue) ? defaultValue(modelValue, this) : defaultValue;
      return carry;
    }, {});
    const formDataFlat = merge(dataFlatDefaults, copy(dataFlat));
    return {
      innerLang,
      innerMode,
      formId,
      edited: false,
      editedFields: [],
      formDataFlat,
      formDataFlatBackups: [copy(formDataFlat)],
      formErrorMsg: null
    };
  },
  computed: {
    formData() {
      return nestifyObject(this.formDataFlat);
    },
    cMode: {
      get() {
        return this.innerMode;
      },
      set(val) {
        this.innerMode = val;
        this.event("update:mode", val);
      }
    },
    schemaOverwritableDefaults() {
      const { innerMode, innerLang } = this;
      return {
        lang: innerLang,
        mode: innerMode,
        updateField: this.updateField,
        showErrorsOn: this.showErrorsOn,
        labelPosition: this.labelPosition,
        labelStyle: this.labelStyle,
        labelClasses: this.labelClasses,
        dynamicProps: this.dynamicProps,
        internalLabels: this.internalLabels,
        internalErrors: this.internalErrors
      };
    },
    schemaForcedDefaults() {
      const { formData, formDataFlat, formId, innerMode } = this;
      return {
        formData,
        formDataFlat,
        formId,
        formMode: innerMode
      };
    },
    cSchema() {
      const { schema, schemaOverwritableDefaults, schemaForcedDefaults, innerLang } = this;
      return schema.map((field) => merge(schemaOverwritableDefaults, field, getBlitzFieldOverwrites(field, innerLang), schemaForcedDefaults));
    },
    actionButtonsMap() {
      const {
        innerLang,
        tapDelete,
        tapEdit,
        tapArchive,
        tapCancel,
        tapSave,
        actionButtonDefaults,
        innerMode
      } = this;
      const map = {
        delete: {
          component: "button",
          type: "button",
          slot: innerLang["delete"],
          color: "negative",
          events: { click: tapDelete }
        },
        archive: {
          component: "button",
          type: "button",
          slot: innerLang["archive"],
          color: "negative",
          events: { click: tapArchive }
        },
        edit: {
          component: "button",
          type: "button",
          showCondition: () => ["readonly", "raw"].includes(innerMode),
          slot: innerLang["edit"],
          events: { click: tapEdit }
        },
        cancel: {
          component: "button",
          type: "button",
          showCondition: () => innerMode === "edit",
          slot: innerLang["cancel"],
          events: { click: tapCancel }
        },
        save: {
          component: "button",
          type: "button",
          showCondition: () => innerMode === "edit",
          slot: innerLang["save"],
          events: { click: tapSave }
        }
      };
      return merge(map, actionButtonDefaults);
    },
    actionButtonsSchema() {
      const {
        actionButtons,
        schemaForcedDefaults,
        actionButtonsMap,
        formDataFlat,
        innerLang,
        updateField
      } = this;
      const overwritableDefaults = { lang: innerLang, updateField };
      return actionButtons.map((blueprint) => {
        const _bp = isString(blueprint) ? actionButtonsMap[blueprint] || {} : blueprint;
        const slotsOverwrite = !_bp.slot ? {} : { slots: merge(_bp.slots || {}, { default: _bp.slot }) };
        const overwrites = __spreadValues({
          span: void 0,
          modelValue: formDataFlat[_bp.id]
        }, slotsOverwrite);
        const blueprintParsed = merge(overwritableDefaults, _bp, overwrites, schemaForcedDefaults);
        return blueprintParsed;
      });
    },
    dataBackup() {
      const { formDataFlatBackups } = this;
      if (!formDataFlatBackups.length)
        return {};
      const lastBackup = formDataFlatBackups.slice(-1)[0];
      const dataNested = nestifyObject(lastBackup);
      return dataNested;
    },
    dataEdited() {
      const { editedFields, formDataFlat } = this;
      const dataFlat = editedFields.reduce((carry, prop) => {
        carry[prop] = formDataFlat[prop];
        return carry;
      }, {});
      const dataNested = nestifyObject(dataFlat);
      return dataNested;
    }
  },
  watch: {
    mode(newValue) {
      this.innerMode = newValue;
    },
    id(newValue) {
      this.formId = newValue;
    },
    lang(newValue) {
      this.innerLang = merge(defaultLang(), newValue);
    }
  },
  methods: {
    isFullString,
    event(eventName, payload, origin) {
      if (eventName === "update:mode") {
        this.$emit("update:mode", payload);
      }
      if (eventName === "updateField") {
        this.$emit("updateField", payload);
      }
      if (eventName === "update:modelValue") {
        this.$emit("update:modelValue", payload, origin);
      }
      if (eventName === "edit") {
        this.$emit("edit");
      }
      if (eventName === "cancel") {
        this.$emit("cancel");
      }
      if (eventName === "save") {
        this.$emit("save", payload);
      }
      if (eventName === "delete") {
        this.$emit("delete");
      }
      if (eventName === "archive") {
        this.$emit("archive");
      }
    },
    updateField({
      id,
      value,
      origin
    }) {
      if (id === void 0)
        return;
      this.edited = true;
      if (!this.editedFields.includes(id))
        this.editedFields.push(id);
      this.formDataFlat[id] = value;
      this.event("updateField", { id, value, origin });
      this.event("update:modelValue", this.formData, origin);
      if (isFullString(this.formErrorMsg)) {
        this.validate();
      }
    },
    resetState() {
      this.cMode = "readonly";
      this.edited = false;
      this.editedFields = [];
      this.formDataFlatBackups.push(copy(this.formDataFlat));
      this.formErrorMsg = "";
      for (const [i, blueprint] of this.cSchema.entries()) {
        const refField = this.$refs[`ref-field-${i}`];
        const _refField = isFullArray(refField) ? refField[0] : refField;
        if (_refField)
          _refField.resetDirtyAndErrors();
      }
    },
    restoreBackup() {
      if (!this.formDataFlatBackups.length)
        return;
      const lastBackup = this.formDataFlatBackups.pop() || {};
      this.formDataFlat = lastBackup;
    },
    tapCancel() {
      this.restoreBackup();
      this.resetState();
      const origin = "cancel";
      Object.entries(this.formDataFlat).forEach(([id, value]) => {
        this.event("updateField", { id, value, origin });
      });
      this.event("update:modelValue", this.formData, origin);
      this.event("cancel");
    },
    validate(focusIfError = void 0) {
      const { cSchema, innerLang, showErrorsOn } = this;
      if (showErrorsOn === "never")
        return null;
      const shouldFocus = isBoolean(focusIfError) ? focusIfError : showErrorsOn === "save-focus";
      for (const [i, blueprint] of cSchema.entries()) {
        const refField = this.$refs[`ref-field-${i}`];
        const _refField = isFullArray(refField) ? refField[0] : refField;
        if (!_refField)
          continue;
        const result = _refField.validate(shouldFocus);
        if (isFullString(result)) {
          this.formErrorMsg = innerLang["formValidationError"];
          return result;
        }
      }
      this.formErrorMsg = null;
      return null;
    },
    tapEdit() {
      this.cMode = "edit";
      this.event("edit");
    },
    tapSave() {
      const { validate, dataEdited, dataBackup, resetState, formData } = this;
      const foundError = validate();
      if (foundError)
        return;
      const newData = copy(dataEdited);
      const oldData = copy(dataBackup);
      this.event("save", { newData, oldData, formData });
      resetState();
    },
    tapDelete() {
      this.event("delete");
    },
    tapArchive() {
      this.event("archive");
    }
  }
});
const _hoisted_1$4 = {
  key: 0,
  class: "blitz-form__validation-error text-negative"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlitzField = resolveComponent("BlitzField");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.formComponent), {
    ref: "refBlitzForm",
    class: normalizeClass([`blitz-form blitz-form--nav-${_ctx.actionButtonsPosition}`, _ctx.$attrs.class]),
    style: normalizeStyle(_ctx.$attrs.style),
    onClick: _cache[0] || (_cache[0] = (e) => _ctx.$emit("click", e)),
    onDblclick: _cache[1] || (_cache[1] = (e) => _ctx.$emit("dblclick", e)),
    onMousedown: _cache[2] || (_cache[2] = (e) => _ctx.$emit("mousedown", e)),
    onMouseup: _cache[3] || (_cache[3] = (e) => _ctx.$emit("mouseup", e))
  }, {
    default: withCtx(() => [
      _ctx.isFullString(_ctx.formErrorMsg) || _ctx.actionButtonsSchema.length || _ctx.$slots.nav ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(`blitz-form__nav-row blitz-form__nav-row--${_ctx.actionButtonsPosition}`)
      }, [
        _ctx.isFullString(_ctx.formErrorMsg) ? (openBlock(), createElementBlock("div", _hoisted_1$4, toDisplayString(_ctx.formErrorMsg), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.actionButtonsSchema, (blueprint, i) => {
          return openBlock(), createBlock(_component_BlitzField, mergeProps({
            key: `${blueprint.id}-${i}`
          }, blueprint), null, 16);
        }), 128)),
        renderSlot(_ctx.$slots, "nav")
      ], 2)) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({ schema: _ctx.cSchema, formData: _ctx.formData, formDataFlat: _ctx.formDataFlat, updateField: _ctx.updateField })), () => [
        createElementVNode("div", {
          class: "blitz-form__form",
          style: normalizeStyle(`grid-template-columns:${" minmax(0, 1fr)".repeat(_ctx.columnCount)}; grid-gap: ${_ctx.gridGap}`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.cSchema, (field, i) => {
            return openBlock(), createBlock(_component_BlitzField, mergeProps({
              key: `${field.id}-${i}`,
              ref_for: true,
              ref: `ref-field-${i}`
            }, __spreadProps(__spreadValues({}, field), { span: void 0 }), {
              modelValue: _ctx.formDataFlat[`${field.id}`],
              style: field.span ? `grid-column: ${field.span === true ? "1 / -1" : `span ${field.span}`}` : "",
              "onUpdate:modelValue": (value, origin) => _ctx.updateField({ id: field.id, value, origin })
            }), null, 16, ["modelValue", "style", "onUpdate:modelValue"]);
          }), 128))
        ], 4)
      ])
    ]),
    _: 3
  }, 40, ["class", "style"]);
}
var BlitzForm = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1]]);
var BlitzGridToggle_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.blitz-grid-toggle[data-v-7fd94a40],\r\n.blitz-grid-toggle *[data-v-7fd94a40] {\r\n  box-sizing: border-box;\n}\n.blitz-grid-toggle[data-v-7fd94a40] {\r\n  --c-primary: #0b3d92;\r\n  color: var(--c-primary);\r\n  display: flex;\r\n  cursor: pointer;\n}\r\n")();
const _withScopeId = (n) => (pushScopeId("data-v-7fd94a40"), n = n(), popScopeId(), n);
const _hoisted_1$3 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "feather feather-grid"
};
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("rect", {
  x: "3",
  y: "3",
  width: "7",
  height: "7"
}, null, -1));
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("rect", {
  x: "14",
  y: "3",
  width: "7",
  height: "7"
}, null, -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("rect", {
  x: "14",
  y: "14",
  width: "7",
  height: "7"
}, null, -1));
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("rect", {
  x: "3",
  y: "14",
  width: "7",
  height: "7"
}, null, -1));
const _hoisted_6 = [
  _hoisted_2$2,
  _hoisted_3$2,
  _hoisted_4$1,
  _hoisted_5$1
];
const _hoisted_7 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "feather feather-list"
};
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<line x1="8" y1="6" x2="21" y2="6" data-v-7fd94a40></line><line x1="8" y1="12" x2="21" y2="12" data-v-7fd94a40></line><line x1="8" y1="18" x2="21" y2="18" data-v-7fd94a40></line><line x1="3" y1="6" x2="3.01" y2="6" data-v-7fd94a40></line><line x1="3" y1="12" x2="3.01" y2="12" data-v-7fd94a40></line><line x1="3" y1="18" x2="3.01" y2="18" data-v-7fd94a40></line>', 6);
const _hoisted_14 = [
  _hoisted_8
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BlitzGridToggle",
  props: {
    modelValue: Boolean
  },
  emits: { "update:modelValue": null },
  setup(__props) {
    defineComponent({ name: "BlitzGridToggle" });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "blitz-grid-toggle",
        onClick: _cache[0] || (_cache[0] = () => _ctx.$emit("update:modelValue", !__props.modelValue))
      }, [
        !__props.modelValue ? (openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_6)) : createCommentVNode("", true),
        __props.modelValue ? (openBlock(), createElementBlock("svg", _hoisted_7, _hoisted_14)) : createCommentVNode("", true)
      ]);
    };
  }
});
var BlitzGridToggle = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7fd94a40"]]);
var BlitzListForm_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".blitz-list-form > .blitz-list-form__row {\n  display: grid;\n  justify-items: stretch;\n  align-items: center;\n  grid-gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}")();
const _sfc_main$3 = defineComponent({
  name: "BlitzListForm",
  components: { BlitzField },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    schema: {
      type: Array,
      default: () => [{ component: "input" }]
    },
    attrsToPass: {
      type: Array,
      default: () => [
        "formData",
        "formDataFlat",
        "formId",
        "formMode",
        "mode",
        "updateField",
        "lang"
      ]
    },
    maxRows: { type: Number, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: void 0 }
  },
  emits: {
    "update:modelValue": null
  },
  computed: {
    cValue: {
      get() {
        const { modelValue, schema, disabled, readonly, maxRows } = this;
        const emptyRow = schema.reduce((carry, { id }) => __spreadProps(__spreadValues({}, carry), { [`${id}`]: void 0 }), {});
        if (!disabled && !readonly && (!isNumber(maxRows) || maxRows > modelValue.length)) {
          return modelValue.concat([emptyRow]);
        }
        return modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      }
    },
    listFormAttrsToPass() {
      const { attrsToPass, getPropOrAttrOrParentProp, modelValue } = this;
      const attrs = attrsToPass.reduce((carry, attrKey) => {
        carry[attrKey] = getPropOrAttrOrParentProp(attrKey);
        return carry;
      }, {});
      if (!attrs.formData) {
        return __spreadProps(__spreadValues({}, attrs), { formData: modelValue });
      }
      return attrs;
    },
    cSchema() {
      const { schema, disabled, readonly, listFormAttrsToPass } = this;
      return schema.map((blueprint) => {
        const overwritableDefaults = { disabled, readonly };
        const overwrites = {
          label: "",
          subLabel: "",
          slots: { label: void 0 }
        };
        if (blueprint.slot) {
          overwrites.slots = merge(blueprint.slots || {}, { default: blueprint.slot });
        }
        const fieldClasses = blueprint.fieldClasses || blueprint.class;
        if (fieldClasses)
          overwrites.fieldClasses = fieldClasses;
        const fieldStyle = blueprint.fieldStyle || blueprint.style;
        if (fieldStyle)
          overwrites.fieldStyle = fieldStyle;
        return merge(listFormAttrsToPass, overwritableDefaults, blueprint, overwrites);
      });
    },
    schemaLabelsAndAttrs() {
      const { schema, listFormAttrsToPass } = this;
      return schema.map((subfield) => {
        return merge(listFormAttrsToPass, subfield, { component: void 0 });
      });
    },
    gridTemplateColumnsCalculated() {
      const { schema } = this;
      return schema.reduce((total, field) => {
        const fr = Number(field.span);
        if (isNumber(fr))
          return `${total} ${fr}fr`;
        return `${total} ${field.span || "1fr"}`;
      }, "");
    }
  },
  methods: {
    getPropOrAttrOrParentProp(propKey) {
      if (propKey in this)
        return this[propKey];
      if (propKey in this.$attrs)
        return this.$attrs[propKey];
      if (this.$parent && propKey in this.$parent)
        return this.$parent[propKey];
      if (this.$parent && this.$parent.$parent && propKey in this.$parent.$parent) {
        return this.$parent.$parent[propKey];
      }
      return void 0;
    },
    deleteRow(rowIndex) {
      const { modelValue } = this;
      const allRows = copy(modelValue);
      if (allRows[rowIndex] === void 0)
        return;
      allRows.splice(rowIndex, 1);
      this.$emit("update:modelValue", allRows);
    },
    setSubFieldValue({ id, value: newValue, rowIndex }, origin) {
      if (origin === "default" || !id)
        return;
      const { modelValue: oldValue } = this;
      const allRows = copy(oldValue);
      if (allRows[rowIndex] === void 0)
        allRows[rowIndex] = {};
      allRows[rowIndex][id] = newValue;
      this.$emit("update:modelValue", allRows);
    },
    onDeleteKey(rowIndex) {
      const { modelValue, deleteRow } = this;
      const allRows = modelValue;
      const row = allRows[rowIndex];
      if (!row)
        return;
      if (Object.keys(row).every((key) => row[key] === "" || row[key] === 0)) {
        deleteRow(rowIndex);
      }
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlitzField = resolveComponent("BlitzField");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["blitz-list-form", _ctx.$attrs.class]),
    style: normalizeStyle(_ctx.$attrs.style)
  }, [
    createElementVNode("div", {
      class: "blitz-list-form__row",
      style: normalizeStyle(`grid-template-columns: ${_ctx.gridTemplateColumnsCalculated}`)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.schemaLabelsAndAttrs, (subfield, fieldIndex) => {
        return openBlock(), createBlock(_component_BlitzField, mergeProps({ key: fieldIndex }, subfield, { class: "blitz-list-form__sub-field" }), null, 16);
      }), 128))
    ], 4),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.cValue, (row, rowIndex) => {
      return openBlock(), createElementBlock("div", {
        key: rowIndex,
        class: "blitz-list-form__row",
        style: normalizeStyle(`grid-template-columns: ${_ctx.gridTemplateColumnsCalculated}`)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.cSchema, (subfield, fieldIndex) => {
          return openBlock(), createBlock(_component_BlitzField, mergeProps({ key: fieldIndex }, subfield, {
            class: "blitz-list-form__sub-field",
            rowIndex,
            rowData: _ctx.cValue[rowIndex],
            updateField: (params) => _ctx.setSubFieldValue({ id: params.id, value: params.value, rowIndex }),
            deleteRow: () => _ctx.deleteRow(rowIndex),
            modelValue: _ctx.cValue[rowIndex][`${subfield.id}`],
            "onUpdate:modelValue": (val, origin) => _ctx.setSubFieldValue({ id: subfield.id, value: val, rowIndex }, origin),
            onKeyup: withKeys(($event) => _ctx.onDeleteKey(rowIndex), ["delete"])
          }), null, 16, ["rowIndex", "rowData", "updateField", "deleteRow", "modelValue", "onUpdate:modelValue", "onKeyup"]);
        }), 128))
      ], 4);
    }), 128))
  ], 6);
}
var BlitzListForm = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
var BlitzPagination_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.blitz-pagination[data-v-4aea3f68],\r\n.blitz-pagination *[data-v-4aea3f68] {\r\n  box-sizing: border-box;\n}\n.blitz-pagination[data-v-4aea3f68] {\r\n  --c-primary: #0b3d92;\r\n  --c-primary-dark: #0c306c;\r\n  --c-primary-super-light: #0b3d921b;\r\n  --c-border: #dfe2e5;\r\n  display: flex;\r\n  padding-left: 0;\r\n  list-style: none;\r\n  border-radius: 0.25rem;\n}\n._page-link[data-v-4aea3f68] {\r\n  position: relative;\r\n  display: block;\r\n  padding: 0.5rem 0.75rem;\r\n  margin-left: -1px;\r\n  line-height: 1.5;\r\n  color: var(--c-primary);\r\n  background-color: #fff;\r\n  border: 1px solid var(--c-border);\r\n  text-decoration: none;\n}\n._page-link[data-v-4aea3f68]:hover {\r\n  z-index: 2;\r\n  text-decoration: none;\r\n  background-color: var(--c-primary-super-light);\n}\n._page-link[data-v-4aea3f68]:focus {\r\n  z-index: 3;\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.2rem var(--primary-dark);\n}\n._page-item:first-child ._page-link[data-v-4aea3f68] {\r\n  margin-left: 0;\r\n  border-top-left-radius: 0.25rem;\r\n  border-bottom-left-radius: 0.25rem;\n}\n._page-item:last-child ._page-link[data-v-4aea3f68] {\r\n  border-top-right-radius: 0.25rem;\r\n  border-bottom-right-radius: 0.25rem;\n}\n._page-item.active ._page-link[data-v-4aea3f68] {\r\n  z-index: 3;\r\n  color: #fff;\r\n  background-color: var(--c-primary);\r\n  border-color: var(--c-primary);\n}\n._page-item.disabled ._page-link[data-v-4aea3f68] {\r\n  pointer-events: none;\r\n  cursor: auto;\r\n  background-color: #fff;\r\n  border-color: #dee2e6;\n}\n._page-item.disabled ._page-link > *[data-v-4aea3f68] {\r\n  opacity: 0.3;\n}\r\n")();
const _hoisted_1$2 = { class: "blitz-pagination" };
const _hoisted_2$1 = ["tabindex", "aria-disabled"];
const _hoisted_3$1 = ["onClick"];
const _hoisted_4 = {
  key: 1,
  class: "_page-link"
};
const _hoisted_5 = ["tabindex", "aria-disabled"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BlitzPagination",
  props: blitzPaginationProps,
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const MORE_PAGES = "...";
    function createPagingRange(nrOfPages, currentPage) {
      const delta = 2;
      const range = [];
      const rangeWithDots = [];
      let length;
      range.push(1);
      if (nrOfPages <= 1) {
        return range;
      }
      for (let i = currentPage - delta; i <= currentPage + delta; i++) {
        if (i < nrOfPages && i > 1) {
          range.push(i);
        }
      }
      range.push(nrOfPages);
      for (let i = 0; i < range.length; i++) {
        if (length) {
          if (range[i] - length === 2) {
            rangeWithDots.push(length + 1);
          } else if (range[i] - length !== 1) {
            rangeWithDots.push(MORE_PAGES);
          }
        }
        rangeWithDots.push(range[i]);
        length = range[i];
      }
      return rangeWithDots;
    }
    const pageCount = computed(() => props.pageCount);
    const pageLinks = computed(() => createPagingRange(props.pageCount, props.modelValue));
    const disabledPrevious = computed(() => props.modelValue === 1);
    const disabledNext = computed(() => props.modelValue === pageCount.value || pageCount.value === 0);
    function setPage(val) {
      emit("update:modelValue", val);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", _hoisted_1$2, [
        createElementVNode("li", {
          class: normalizeClass(["_page-item", unref(disabledPrevious) && "disabled"])
        }, [
          createElementVNode("a", {
            class: "_page-link",
            href: "#",
            tabindex: unref(disabledPrevious) ? "-1" : void 0,
            "aria-disabled": unref(disabledPrevious) ? true : void 0,
            onClick: _cache[0] || (_cache[0] = withModifiers(() => setPage(_ctx.modelValue !== 1 && unref(pageCount) !== 0 ? _ctx.modelValue - 1 : _ctx.modelValue), ["prevent", "stop"]))
          }, [
            createVNode(unref(Pepicon), {
              type: "pop",
              name: "arrow-left"
            })
          ], 8, _hoisted_2$1)
        ], 2),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pageLinks), (item, index) => {
          return openBlock(), createElementBlock("li", {
            key: index,
            class: normalizeClass(["_page-item", item === _ctx.modelValue && "active", item === unref(MORE_PAGES) && "disabled"])
          }, [
            item !== unref(MORE_PAGES) ? (openBlock(), createElementBlock("a", {
              key: 0,
              class: "_page-link",
              href: "#",
              onClick: withModifiers(() => setPage(item), ["prevent", "stop"])
            }, toDisplayString(item), 9, _hoisted_3$1)) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(item), 1))
          ], 2);
        }), 128)),
        createElementVNode("li", {
          class: normalizeClass(["_page-item", unref(disabledNext) && "disabled"])
        }, [
          createElementVNode("a", {
            class: "_page-link",
            href: "#",
            tabindex: unref(disabledNext) ? "-1" : void 0,
            "aria-disabled": unref(disabledNext) ? "true" : void 0,
            onClick: _cache[1] || (_cache[1] = withModifiers(() => setPage(_ctx.modelValue !== unref(pageCount) && unref(pageCount) !== 0 ? _ctx.modelValue + 1 : _ctx.modelValue), ["prevent", "stop"]))
          }, [
            createVNode(unref(Pepicon), {
              type: "pop",
              name: "arrow-right"
            })
          ], 8, _hoisted_5)
        ], 2)
      ]);
    };
  }
});
var BlitzPagination = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4aea3f68"]]);
var BlitzTh_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n._sort-arrows[data-v-5f30ce98] {\n  float: right;\n  box-sizing: border-box;\n  position: relative;\n  display: block;\n  transform: scale(1);\n  width: 22px;\n  height: 22px;\n}\n._sort-arrows[data-v-5f30ce98]::after,\n._sort-arrows[data-v-5f30ce98]::before {\n  content: '';\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  left: 7px;\n  transform: rotate(-45deg);\n}\n._sort-arrows[data-v-5f30ce98]::before {\n  border-left: 2px solid;\n  border-bottom: 2px solid;\n  bottom: 4px;\n  opacity: 0.3;\n}\n._sort-arrows[data-v-5f30ce98]::after {\n  border-right: 2px solid;\n  border-top: 2px solid;\n  top: 4px;\n  opacity: 0.3;\n}\n.blitz-field-th._sortable[data-v-5f30ce98] {\n  cursor: pointer;\n  user-select: none;\n}\n.blitz-field-th._sortable._asc ._sort-arrows[data-v-5f30ce98]::after {\n  opacity: 1;\n}\n.blitz-field-th._sortable._desc ._sort-arrows[data-v-5f30ce98]::before {\n  opacity: 1;\n}\n")();
const _hoisted_1$1 = {
  key: 0,
  class: "_sort-arrows"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BlitzTh",
  props: {
    column: null,
    sortState: null,
    lang: null
  },
  emits: ["update:sortState", "selectAllColumns"],
  setup(__props, { emit }) {
    const props = __props;
    function onClick(e) {
      var _a, _b, _c, _d;
      const { id, sortable } = props.column;
      if (!sortable || !id)
        return;
      if (!sortable) {
        emit("selectAllColumns", (_a = props.column.id) != null ? _a : "");
      }
      e.stopPropagation();
      if (((_b = props.sortState[0]) == null ? void 0 : _b.id) !== id) {
        return emit("update:sortState", [{ id, direction: "asc" }]);
      }
      if (((_c = props.sortState[0]) == null ? void 0 : _c.id) === id) {
        if (((_d = props.sortState[0]) == null ? void 0 : _d.direction) === "asc") {
          return emit("update:sortState", [{ id, direction: "desc" }]);
        } else {
          return emit("update:sortState", []);
        }
      }
    }
    const label = computed(() => {
      const { label: label2, id } = props.column;
      if (isFullString(label2))
        return props.lang[label2] || label2;
      if (id === ROW_SELECTION_ID)
        return "";
      if (isFullString(id))
        return props.lang[id] || id;
      return "";
    });
    const isSelectionCol = props.column.id === ROW_SELECTION_ID;
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("th", mergeProps(_ctx.$attrs, {
        class: [
          "blitz-field-th",
          __props.column.sortable === true ? "_sortable" : "",
          __props.column.id === ((_a = __props.sortState[0]) == null ? void 0 : _a.id) ? `_${(_b = __props.sortState[0]) == null ? void 0 : _b.direction}` : ""
        ],
        onClick: _cache[0] || (_cache[0] = (e) => onClick(e))
      }), [
        createTextVNode(toDisplayString(unref(label)) + " ", 1),
        __props.column.sortable === true ? (openBlock(), createElementBlock("i", _hoisted_1$1)) : createCommentVNode("", true),
        isSelectionCol ? (openBlock(), createBlock(BlitzField, mergeProps({ key: 1 }, __props.column, { label: void 0 }), null, 16)) : createCommentVNode("", true)
      ], 16);
    };
  }
});
var BlitzTh = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5f30ce98"]]);
function shouldFilterRows(filtersState) {
  return Object.values(filtersState).some((info) => {
    var _a, _b;
    return isPositiveNumber((_a = info["not-in"]) == null ? void 0 : _a.size) || info[">"] !== void 0 || info["<"] !== void 0 || [...((_b = info.custom) == null ? void 0 : _b.values()) || []].some((v) => v !== void 0);
  });
}
function sortFactory(sortStateArr, parseValueDic = {}) {
  let i;
  const length = sortStateArr.length;
  const dir = sortStateArr.map(function(sortState, i2) {
    if (sortState.direction === "desc") {
      return -1;
    } else {
      return 1;
    }
  });
  return function(rowA, rowB) {
    for (i = 0; i < length; i++) {
      const colId = sortStateArr[i].id || "";
      const valueA = getProp(rowA.rowData, colId);
      const valueB = getProp(rowB.rowData, colId);
      const parseFn = parseValueDic[colId];
      let aVal = valueA;
      let bVal = valueB;
      if (parseFn) {
        try {
          aVal = parseFn(valueA, { formData: rowA.rowData, formDataFlat: rowA.rowDataFlat });
        } catch (e) {
        }
        try {
          bVal = parseFn(valueB, { formData: rowB.rowData, formDataFlat: rowB.rowDataFlat });
        } catch (e) {
        }
      }
      if (aVal > bVal) {
        return dir[i];
      }
      if (aVal < bVal) {
        return -dir[i];
      }
    }
    return 0;
  };
}
function compare(a, op, b) {
  if (op === "in") {
    if (!isSet(b) || b.size === 0)
      return true;
    return b.has(a);
  }
  if (op === "not-in") {
    if (!isSet(b) || b.size === 0)
      return true;
    return !b.has(a);
  }
  if (isDate(b))
    a = new Date(a);
  if (isNumber(b))
    a = Number(a);
  if (isString(b))
    a = String(a);
  if (op === ">") {
    if (!isString(b) && !isNumber(b) && !isDate(b))
      return true;
    return a > b;
  }
  if (op === "<") {
    if (!isString(b) && !isNumber(b) && !isDate(b))
      return true;
    return a < b;
  }
  return false;
}
function compareFns(expectedValue, cellValue, rowData) {
  return [...expectedValue.entries()].every(([compareFn, userInput]) => {
    return compareFn(userInput, cellValue, rowData);
  });
}
function isRowFilterHit(payload) {
  const { filtersState, row, parseValueDic } = payload;
  return Object.entries(filtersState).every(([fieldId, info]) => {
    return getFilterEntries(info).every(([op, expectedValue]) => {
      const cellValue = getProp(row.rowData, fieldId);
      const passes = op === "custom" ? compareFns(expectedValue, cellValue, row.rowData) : compare(cellValue, op, expectedValue);
      if (passes)
        return true;
      const parseValue = parseValueDic[fieldId];
      if (!parseValue) {
        return passes;
      }
      try {
        const cellValueParsed = parseValue(cellValue, {
          formData: row.rowData,
          formDataFlat: row.rowDataFlat
        });
        return op === "custom" ? compareFns(expectedValue, cellValueParsed, row.rowData) : compare(cellValueParsed, op, expectedValue);
      } catch (e) {
      }
      return passes;
    });
  });
}
function isColumnSearchHit(payload) {
  const { searchStr, colId, row, parseValueDic } = payload;
  const cellValue = getProp(row.rowData, colId);
  const resNonParsed = String(cellValue).toLowerCase().indexOf(searchStr) >= 0;
  if (resNonParsed)
    return true;
  const parseValue = parseValueDic[colId];
  if (!parseValue)
    return false;
  try {
    const parsedValue = parseValue(cellValue, {
      formData: row.rowData,
      formDataFlat: row.rowDataFlat
    });
    const resParsed = String(parsedValue).toLowerCase().indexOf(searchStr) >= 0;
    if (resParsed)
      return true;
  } catch (error) {
    return false;
  }
  return false;
}
function isRowSearchHit(payload) {
  const { searchStr, row, searchablePropIds, parseValueDic } = payload;
  const colIds = isFullArray(searchablePropIds) ? searchablePropIds : Object.keys(row.rowDataFlat);
  for (const colId of colIds) {
    const result = isColumnSearchHit({
      searchStr: String(searchStr).toLowerCase(),
      colId,
      row,
      parseValueDic
    });
    if (result === true) {
      return true;
    }
  }
  return false;
}
function propToWriteableComputed(prop, setCallback) {
  const inner = ref(prop);
  return computed({
    get() {
      return inner.value;
    },
    set(newVal) {
      const oldVal = inner.value;
      inner.value = newVal;
      setCallback(newVal, oldVal);
    }
  });
}
function useTableMeta(payload) {
  const { emit, rows, lang, currentRowIndexes, searchablePropIds, parseValueDic } = payload;
  const sortState = propToWriteableComputed(payload.sortState, (newVal) => emit("update:sortState", newVal));
  const filtersState = propToWriteableComputed(payload.filtersState, (newVal) => emit("update:filtersState", newVal));
  const pageNr = propToWriteableComputed(payload.pageNr, (newVal) => emit("update:pageNr", newVal));
  const searchValue = propToWriteableComputed(payload.searchValue, (newVal) => emit("update:searchValue", newVal));
  const rowsPerPage = propToWriteableComputed(payload.rowsPerPage, (newRowsPerPage, oldRowsPerPage) => {
    emit("update:rowsPerPage", newRowsPerPage);
    const oldTopRowIndex = (pageNr.value - 1) * oldRowsPerPage;
    if (oldTopRowIndex) {
      let lookingAtPageIndex = 0;
      while (lookingAtPageIndex < currentRowIndexes.value.length) {
        const topRowIndex = lookingAtPageIndex * newRowsPerPage;
        if (topRowIndex > oldTopRowIndex) {
          pageNr.value = Math.max(1, lookingAtPageIndex);
          lookingAtPageIndex = currentRowIndexes.value.length;
        } else {
          lookingAtPageIndex++;
        }
      }
    }
  });
  const rowsFlat = computed(() => rows.value.map((row) => flattenObject(row)));
  const shouldCalculateRows = computed(() => {
    rows.value;
    sortState.value;
    searchValue.value;
    Object.values(filtersState.value).map((info) => Object.values(info).map((v) => {
      if (isSet(v))
        return v.size;
      if (isMap(v))
        return [...v.values()];
      return v;
    }));
    searchablePropIds.value;
    parseValueDic.value;
    rowsPerPage.value;
    return Date.now();
  });
  const pageRowIndexes = computed(() => currentRowIndexes.value.slice(fromIndex.value, toIndex.value));
  const totalRowCount = computed(() => rows.value.length);
  const rowCount = computed(() => currentRowIndexes.value.length);
  const pageCount = computed(() => Math.ceil(rowCount.value / rowsPerPage.value));
  const fromIndex = computed(() => (pageNr.value - 1) * rowsPerPage.value);
  const toIndex = computed(() => Math.min(pageNr.value * rowsPerPage.value, rowCount.value));
  watch(rowCount, (val, oldVal) => {
    pageNr.value = 1;
  });
  watch(shouldCalculateRows, (_) => {
    let result = [];
    const searchingOrFiltering = !!searchValue.value || shouldFilterRows(filtersState.value);
    const sorting = sortState.value.length > 0;
    if (!searchingOrFiltering && !sorting) {
      result = rows.value.map((val, i) => i);
    } else {
      result = rows.value.map((val, i) => ({
        rowIndex: i,
        rowData: val,
        rowDataFlat: rowsFlat.value[i]
      }));
      if (searchingOrFiltering) {
        result = result.filter((row) => {
          const filterHit = isRowFilterHit({
            filtersState: filtersState.value,
            row,
            parseValueDic: parseValueDic.value
          });
          if (!filterHit)
            return false;
          const searchHit = isRowSearchHit({
            searchStr: searchValue.value,
            row,
            searchablePropIds: searchablePropIds.value,
            parseValueDic: parseValueDic.value
          });
          return searchHit;
        });
      }
      if (sorting) {
        result.sort(sortFactory(sortState.value, parseValueDic.value));
      }
      result = result.map((row) => row.rowIndex);
    }
    currentRowIndexes.value = result;
  }, {
    immediate: true
  });
  return {
    rows,
    lang,
    sortState,
    filtersState,
    searchValue,
    rowsPerPage,
    pageNr,
    pageRowIndexes,
    totalRowCount,
    rowCount,
    pageCount,
    fromIndex,
    toIndex
  };
}
var BlitzTable_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "\n/* RESETS */\n.blitz-table,\n.blitz-table * {\n  box-sizing: border-box;\n}\n.blitz-table table,\n.blitz-table ul {\n  margin: 0;\n}\n\n/* GRID */\n.blitz-table {\n  display: grid;\n  align-items: center;\n  grid-gap: 1rem;\n  grid-template-areas: var(--26e7623b);\n}\n.blitz-table--title {\n  grid-area: title;\n}\n.blitz-table--filters {\n  grid-area: filters;\n}\n.blitz-table--search {\n  grid-area: search;\n}\n.blitz-table--grid-toggle {\n  grid-area: grid-toggle;\n}\n.blitz-table--slot {\n  grid-area: slot;\n}\n.blitz-table--content {\n  grid-area: content;\n}\n.blitz-table--pagination {\n  grid-area: pagination;\n}\n.blitz-table--rows-per-page {\n  grid-area: rows-per-page;\n}\n.blitz-table--shown-rows-info {\n  grid-area: shown-rows-info;\n}\n.blitz-table--grid {\n  margin-top: 1rem;\n  display: grid;\n  grid-gap: 1rem;\n  justify-items: center;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n}\n.blitz-table--grid > * {\n  width: 100%;\n  max-width: 207px;\n  padding: 0.5rem;\n}\n")();
const _hoisted_1 = {
  key: 4,
  class: "blitz-table--slot"
};
const _hoisted_2 = { class: "blitz-table--table blitz-table--content" };
const _hoisted_3 = /* @__PURE__ */ createElementVNode("div", null, [
  /* @__PURE__ */ createElementVNode("p", { class: "text-center" }, "No results found")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BlitzTable",
  props: blitzTableProps,
  emits: ["rowClick", "rowDblclick", "cellClick", "cellDblclick", "updateCell", "rowDeleted", "update:rows", "update:isGrid", "update:selectedRows", "update:filtersState", "update:sortState", "update:rowsPerPage", "update:pageNr", "update:searchValue", "update:currentRowIndices"],
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "26e7623b": unref(gridTemplateAreas)
    }));
    defineComponent({ name: "BlitzTable" });
    function getSortableProps(col) {
      if (!isBoolean(col == null ? void 0 : col.sortable) && isFullString(col == null ? void 0 : col.id)) {
        return { sortable: true };
      }
      return void 0;
    }
    const hasColumns = isFullArray(props.schemaColumns);
    const hasGrid = isFullArray(props.schemaGrid);
    const isGridInner = ref(isBoolean(props.isGrid) ? props.isGrid : !hasColumns && hasGrid);
    watchEffect(() => emit("update:isGrid", isGridInner.value));
    watchEffect(() => isGridInner.value = Boolean(props.isGrid));
    const currentRowIndexes = ref([]);
    watch(currentRowIndexes, (newVal) => {
      emit("update:currentRowIndices", newVal);
    });
    const selectedRows = propToWriteableComputed(props.selectedRows, (newVal) => emit("update:selectedRows", newVal));
    function getSelectionProps(col) {
      if ((col == null ? void 0 : col.id) !== ROW_SELECTION_ID)
        return;
      return {
        events: __spreadProps(__spreadValues({}, col.events), {
          ["update:modelValue"]: (wasSelected, { formData }) => {
            const isSelectAllHeader = formData === void 0;
            if (isSelectAllHeader) {
              if (wasSelected) {
                selectedRows.value = currentRowIndexes.value.map((rowIndex) => props.rows[rowIndex]);
                return;
              }
              selectedRows.value = [];
              return;
            }
            if (wasSelected) {
              selectedRows.value = [...selectedRows.value, formData];
              return;
            }
            selectedRows.value = selectedRows.value.filter((row) => row.id !== formData.id);
            return;
          }
        }),
        mode: "edit",
        sortable: false,
        parseValue: (val, { formData }) => {
          const isSelectAllHeader = formData === void 0;
          return isSelectAllHeader ? selectedRows.value.length === props.rows.length : !!selectedRows.value.find((s) => s.id === (formData == null ? void 0 : formData.id));
        }
      };
    }
    const schemaColumnsComputed = computed(() => {
      if (!props.schemaColumns)
        return void 0;
      return props.schemaColumns.map((col) => {
        const selectionProps = getSelectionProps(col);
        const sortableProps = getSortableProps(col);
        const label = "label" in col ? col.label : props.lang[(col == null ? void 0 : col.id) || ""];
        return __spreadValues(__spreadValues(__spreadProps(__spreadValues({}, col), { label }), sortableProps), selectionProps);
      });
    });
    const schemaGridComputed = computed(() => {
      if (!props.schemaGrid)
        return void 0;
      return props.schemaGrid.map((col) => {
        const selectionProps = getSelectionProps(col);
        const label = "label" in col ? col.label : props.lang[(col == null ? void 0 : col.id) || ""];
        return __spreadValues(__spreadProps(__spreadValues({}, col), { label }), selectionProps);
      });
    });
    const parseValueDic = computed(() => (schemaColumnsComputed.value || []).reduce((dic, col) => {
      if (col.id && isFunction(col.parseValue)) {
        dic[col.id] = col.parseValue;
      }
      return dic;
    }, {}));
    const tableMeta = useTableMeta({
      emit,
      currentRowIndexes,
      rows: computed(() => props.rows),
      lang: computed(() => props.lang || {}),
      sortState: props.sortState,
      filtersState: props.filtersState,
      rowsPerPage: props.rowsPerPage,
      pageNr: props.pageNr,
      searchValue: props.searchValue,
      searchablePropIds: ref([]),
      parseValueDic
    });
    const {
      sortState,
      filtersState,
      rowsPerPage,
      pageNr,
      searchValue,
      rowCount,
      fromIndex,
      toIndex,
      pageRowIndexes
    } = tableMeta;
    onBeforeMount(() => {
      if (!props.paginationField) {
        rowsPerPage.value = props.rows.length;
        watchEffect(() => rowsPerPage.value = props.rows.length);
      } else {
        rowsPerPage.value = props.rowsPerPage;
      }
    });
    function onRowClick(e, rowData) {
      emit("rowClick", e, rowData);
    }
    function onRowDblclick(e, rowData) {
      emit("rowDblclick", e, rowData);
    }
    function onCellClick(e, rowData, colId) {
      emit("cellClick", e, rowData, colId);
    }
    function onCellDblclick(e, rowData, colId) {
      emit("cellDblclick", e, rowData, colId);
    }
    function onUpdateCell({
      rowId,
      colId,
      value,
      origin
    }) {
      if (colId === ROW_SELECTION_ID)
        return;
      emit("updateCell", { rowId, colId, value, origin });
    }
    function deleteRow(rowIndex) {
      emit("rowDeleted", rowIndex);
      const newRows = [...props.rows];
      newRows.splice(rowIndex, 1);
      emit("update:rows", newRows);
    }
    function applyFieldDefaults(field) {
      if (!field)
        return void 0;
      return merge(field, { tableMeta }, getBlitzFieldOverwrites(field, props.lang));
    }
    const fTitle = computed(() => applyFieldDefaults(props.titleField));
    const fSearch = computed(() => applyFieldDefaults(props.searchField));
    const fFilters = computed(() => applyFieldDefaults(props.filtersField));
    const fGridToggle = computed(() => applyFieldDefaults(props.gridToggleField));
    const fPagination = computed(() => __spreadProps(__spreadValues({}, applyFieldDefaults(props.paginationField)), {
      pageCount: tableMeta.pageCount.value
    }));
    const fShownRowsInfo = computed(() => {
      if (!props.shownRowsInfoField)
        return;
      const fromNr = rowCount.value !== 0 ? fromIndex.value + 1 : 0;
      const shownRowsInfoText = `${fromNr} - ${toIndex.value} / ${rowCount.value}`;
      return applyFieldDefaults(__spreadProps(__spreadValues({}, props.shownRowsInfoField), {
        slots: { default: shownRowsInfoText }
      }));
    });
    const fRowsPerPage = computed(() => applyFieldDefaults(props.rowsPerPageField));
    const fTh = computed(() => applyFieldDefaults(props.thField));
    const slots = useSlots();
    const gridTemplateAreas = computed(() => `${fTitle.value ? `'title title'` : ""}
  ${fFilters.value ? `'filters filters'` : ""}
  ${fSearch.value && fGridToggle.value ? `'search grid-toggle'` : ""}
  ${fSearch.value && !fGridToggle.value ? `'search search'` : ""}
  ${!fSearch.value && fGridToggle.value ? `'grid-toggle grid-toggle'` : ""}
  ${slots.default ? `'slot slot'` : ""}
  'content content'
  ${fPagination.value ? `'pagination pagination'` : ""}
  ${fRowsPerPage.value && fShownRowsInfo.value ? `'rows-per-page shown-rows-info'` : ""}
  ${fRowsPerPage.value && !fShownRowsInfo.value ? `'rows-per-page rows-per-page'` : ""}
  ${!fRowsPerPage.value && fShownRowsInfo.value ? `'shown-rows-info shown-rows-info'` : ""}`);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        class: `blitz-table ${!unref(pageRowIndexes).length ? "_no-data-found" : ""}`
      }, _ctx.$attrs), [
        unref(fTitle) ? (openBlock(), createBlock(BlitzField, mergeProps({
          key: 0,
          class: "blitz-table--title"
        }, unref(fTitle)), null, 16)) : createCommentVNode("", true),
        unref(fFilters) ? (openBlock(), createBlock(BlitzField, mergeProps({
          key: 1,
          modelValue: unref(filtersState),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(filtersState) ? filtersState.value = $event : null)
        }, unref(fFilters), { class: "blitz-table--filters" }), null, 16, ["modelValue"])) : createCommentVNode("", true),
        unref(fSearch) ? (openBlock(), createBlock(BlitzField, mergeProps({
          key: 2,
          modelValue: unref(searchValue),
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(searchValue) ? searchValue.value = $event : null)
        }, unref(fSearch), { class: "blitz-table--search" }), null, 16, ["modelValue"])) : createCommentVNode("", true),
        unref(fGridToggle) ? (openBlock(), createBlock(BlitzField, mergeProps({
          key: 3,
          modelValue: isGridInner.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isGridInner.value = $event)
        }, unref(fGridToggle), { class: "blitz-table--grid-toggle" }), null, 16, ["modelValue"])) : createCommentVNode("", true),
        unref(slots).default ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true),
        createElementVNode("table", _hoisted_2, [
          createElementVNode("thead", null, [
            createElementVNode("tr", null, [
              unref(fTh) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(schemaColumnsComputed), (col, i) => {
                return openBlock(), createBlock(resolveDynamicComponent(unref(fTh).component), {
                  key: i,
                  sortState: unref(sortState),
                  "onUpdate:sortState": _cache[3] || (_cache[3] = ($event) => isRef(sortState) ? sortState.value = $event : null),
                  class: normalizeClass(unref(fTh).componentClasses),
                  style: normalizeStyle(unref(fTh).componentStyle),
                  column: col,
                  lang: _ctx.lang
                }, null, 40, ["sortState", "class", "style", "column", "lang"]);
              }), 128)) : createCommentVNode("", true),
              !unref(fTh) ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(schemaColumnsComputed), (col, i) => {
                return openBlock(), createBlock(BlitzTh, {
                  key: i,
                  sortState: unref(sortState),
                  "onUpdate:sortState": _cache[4] || (_cache[4] = ($event) => isRef(sortState) ? sortState.value = $event : null),
                  column: col,
                  lang: _ctx.lang
                }, null, 8, ["sortState", "column", "lang"]);
              }), 128)) : createCommentVNode("", true)
            ])
          ]),
          isGridInner.value && unref(schemaGridComputed) || !isGridInner.value && unref(schemaColumnsComputed) ? (openBlock(), createBlock(resolveDynamicComponent(isGridInner.value ? "div" : "tbody"), {
            key: 0,
            class: normalizeClass(isGridInner.value ? "blitz-table--grid" : "")
          }, {
            default: withCtx(() => [
              !unref(pageRowIndexes).length ? renderSlot(_ctx.$slots, "noDataFound", { key: 0 }, () => [
                _hoisted_3
              ]) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pageRowIndexes), (rowIndex) => {
                return openBlock(), createBlock(BlitzForm, mergeProps({
                  key: rowIndex + JSON.stringify(_ctx.rows[rowIndex])
                }, isGridInner.value ? _ctx.gridBlitzFormOptions : {}, {
                  id: _ctx.rows[rowIndex].id,
                  formComponent: isGridInner.value ? "div" : "tr",
                  class: [
                    isGridInner.value ? "blitz-table--grid-card" : "blitz-table__row blitz-row"
                  ],
                  schema: isGridInner.value ? unref(schemaGridComputed) || [] : unref(schemaColumnsComputed) || [],
                  modelValue: _ctx.rows[rowIndex],
                  mode: _ctx.mode,
                  onUpdateField: ({ id: colId, value, origin }) => onUpdateCell({ rowId: _ctx.rows[rowIndex].id, colId, value, origin }),
                  onClick: (e) => onRowClick(e, _ctx.rows[rowIndex]),
                  onDblclick: (e) => onRowDblclick(e, _ctx.rows[rowIndex])
                }), createSlots({ _: 2 }, [
                  !isGridInner.value ? {
                    name: "default",
                    fn: withCtx((blitzFormCtx) => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(blitzFormCtx.schema, (field) => {
                        return openBlock(), createElementBlock("td", {
                          key: field.id
                        }, [
                          createVNode(BlitzField, mergeProps(__spreadProps(__spreadValues({}, field), {
                            span: void 0,
                            label: void 0,
                            subLabel: void 0,
                            component: field.component || "div",
                            modelValue: blitzFormCtx.formDataFlat[`${field.id}`],
                            rowIndex,
                            rowData: _ctx.rows[rowIndex],
                            deleteRow: () => deleteRow(rowIndex)
                          }), {
                            "onUpdate:modelValue": (value, origin) => blitzFormCtx.updateField({ id: field.id, value, origin }),
                            onClick: (e) => onCellClick(e, _ctx.rows[rowIndex], field.id),
                            onDblclick: (e) => onCellDblclick(e, _ctx.rows[rowIndex], field.id)
                          }), null, 16, ["onUpdate:modelValue", "onClick", "onDblclick"])
                        ]);
                      }), 128))
                    ])
                  } : void 0
                ]), 1040, ["id", "formComponent", "class", "schema", "modelValue", "mode", "onUpdateField", "onClick", "onDblclick"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class"])) : createCommentVNode("", true)
        ]),
        unref(fPagination) ? (openBlock(), createBlock(BlitzField, mergeProps({
          key: 5,
          modelValue: unref(pageNr),
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(pageNr) ? pageNr.value = $event : null),
          labelPosition: "left",
          class: "blitz-table--pagination"
        }, unref(fPagination)), null, 16, ["modelValue"])) : createCommentVNode("", true),
        unref(fRowsPerPage) ? (openBlock(), createBlock(BlitzField, mergeProps({
          key: 6,
          modelValue: unref(rowsPerPage),
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(rowsPerPage) ? rowsPerPage.value = $event : null),
          labelPosition: "left",
          class: "blitz-table--rows-per-page"
        }, unref(fRowsPerPage)), null, 16, ["modelValue"])) : createCommentVNode("", true),
        unref(fShownRowsInfo) ? (openBlock(), createBlock(BlitzField, mergeProps({ key: 7 }, unref(fShownRowsInfo), { class: "blitz-table--shown-rows-info" }), null, 16)) : createCommentVNode("", true)
      ], 16);
    };
  }
});
export { BlitzField, BlitzFilters, BlitzForm, BlitzGridToggle, _sfc_main$b as BlitzH, BlitzIcon, BlitzInput, BlitzListForm, BlitzPagination, BlitzSpinner, _sfc_main as BlitzTable, getBlitzFieldOverwrites, validateFormPerSchema };
