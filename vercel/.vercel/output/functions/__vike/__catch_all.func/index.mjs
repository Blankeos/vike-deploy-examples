import { createRequire as topLevelCreateRequire } from 'module';
import { dirname as topLevelDirname } from 'path';
import { fileURLToPath as topLevelFileURLToPath } from 'url';
const require = topLevelCreateRequire(import.meta.url);
const __filename = topLevelFileURLToPath(import.meta.url);
const __dirname = topLevelDirname(__filename);

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x4) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x4, {
  get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
}) : x4)(function(x4) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x4 + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/vike/dist/utils/isCallable.js
function isCallable(thing) {
  return thing instanceof Function || typeof thing === "function";
}
var init_isCallable = __esm({
  "node_modules/vike/dist/utils/isCallable.js"() {
  }
});

// node_modules/vike/dist/utils/unique.js
function unique(arr) {
  return Array.from(new Set(arr));
}
var init_unique = __esm({
  "node_modules/vike/dist/utils/unique.js"() {
  }
});

// node_modules/vike/dist/utils/getGlobalObject.js
// @__NO_SIDE_EFFECTS__
function getGlobalObject(moduleId, defaultValue) {
  const globals = getGlobals();
  const globalObject15 = globals[moduleId] ?? (globals[moduleId] = defaultValue);
  return globalObject15;
}
function getGlobals() {
  var _a2;
  globalThis._vike ?? (globalThis._vike = {});
  (_a2 = globalThis._vike).globals ?? (_a2.globals = {});
  return globalThis._vike.globals;
}
var init_getGlobalObject = __esm({
  "node_modules/vike/dist/utils/getGlobalObject.js"() {
  }
});

// node_modules/@brillout/picocolors/dist/esm/picocolors.js
function isBrowser() {
  return Object.getOwnPropertyDescriptor(globalThis, "window")?.get?.toString().includes("[native code]") ?? false;
}
function stripAnsi(string) {
  return string.replace(ansiRegex, "");
}
function getAnsiRegex() {
  const pattern = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
  ].join("|");
  return new RegExp(pattern, "g");
}
var p, argv, env, isColorSupported, formatter, replaceClose, createColors, pc, picocolors_default, ansiRegex;
var init_picocolors = __esm({
  "node_modules/@brillout/picocolors/dist/esm/picocolors.js"() {
    if (isBrowser())
      throw new Error("This file should never be included in the browser.");
    p = typeof process === "undefined" ? {} : process;
    argv = p.argv || [];
    env = p.env || {};
    isColorSupported = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
    formatter = (open, close, replace = open) => (input) => {
      let string = "" + input;
      let index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    replaceClose = (string, close, replace, index) => {
      let start = string.substring(0, index) + replace;
      let end = string.substring(index + close.length);
      let nextIndex = end.indexOf(close);
      return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
    };
    createColors = (enabled = isColorSupported) => {
      const cyan2 = formatter("\x1B[36m", "\x1B[39m");
      return {
        isColorSupported: enabled,
        code: enabled ? cyan2 : (s3) => `\`${s3}\``,
        string: enabled ? cyan2 : (s3) => `'${s3}'`,
        reset: enabled ? (s3) => `\x1B[0m${s3}\x1B[0m` : String,
        bold: enabled ? formatter("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m") : String,
        dim: enabled ? formatter("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m") : String,
        italic: enabled ? formatter("\x1B[3m", "\x1B[23m") : String,
        underline: enabled ? formatter("\x1B[4m", "\x1B[24m") : String,
        inverse: enabled ? formatter("\x1B[7m", "\x1B[27m") : String,
        hidden: enabled ? formatter("\x1B[8m", "\x1B[28m") : String,
        strikethrough: enabled ? formatter("\x1B[9m", "\x1B[29m") : String,
        black: enabled ? formatter("\x1B[30m", "\x1B[39m") : String,
        red: enabled ? formatter("\x1B[31m", "\x1B[39m") : String,
        green: enabled ? formatter("\x1B[32m", "\x1B[39m") : String,
        yellow: enabled ? formatter("\x1B[33m", "\x1B[39m") : String,
        blue: enabled ? formatter("\x1B[34m", "\x1B[39m") : String,
        magenta: enabled ? formatter("\x1B[35m", "\x1B[39m") : String,
        cyan: enabled ? cyan2 : String,
        white: enabled ? formatter("\x1B[37m", "\x1B[39m") : String,
        gray: enabled ? formatter("\x1B[90m", "\x1B[39m") : String,
        bgBlack: enabled ? formatter("\x1B[40m", "\x1B[49m") : String,
        bgRed: enabled ? formatter("\x1B[41m", "\x1B[49m") : String,
        bgGreen: enabled ? formatter("\x1B[42m", "\x1B[49m") : String,
        bgYellow: enabled ? formatter("\x1B[43m", "\x1B[49m") : String,
        bgBlue: enabled ? formatter("\x1B[44m", "\x1B[49m") : String,
        bgMagenta: enabled ? formatter("\x1B[45m", "\x1B[49m") : String,
        bgCyan: enabled ? formatter("\x1B[46m", "\x1B[49m") : String,
        bgWhite: enabled ? formatter("\x1B[47m", "\x1B[49m") : String,
        rm: stripAnsi
      };
    };
    pc = createColors();
    picocolors_default = pc;
    ansiRegex = getAnsiRegex();
  }
});

// node_modules/vike/dist/utils/PROJECT_VERSION.js
var PROJECT_VERSION;
var init_PROJECT_VERSION = __esm({
  "node_modules/vike/dist/utils/PROJECT_VERSION.js"() {
    PROJECT_VERSION = "0.4.249";
  }
});

// node_modules/vike/dist/utils/assertSingleInstance.js
function genGlobalConfig() {
  return getGlobalObject("utils/assertSingleInstance.ts", {
    instances: [],
    alreadyLogged: /* @__PURE__ */ new Set()
  });
}
function getGlobalObjectSafe() {
  globalObject ?? (globalObject = genGlobalConfig());
  return globalObject;
}
function assertSingleInstance() {
  const globalObject15 = getGlobalObjectSafe();
  {
    const versions = unique(globalObject15.instances);
    assertWarning(
      versions.length <= 1,
      // Do *NOT* patch Vike to remove this warning: you *will* eventually encounter the issues listed at https://vike.dev/warning/version-mismatch
      // - This happened before: https://github.com/vikejs/vike/issues/1108#issuecomment-1719061509
      `vike@${picocolors_default.bold(versions[0])} and vike@${picocolors_default.bold(versions[1])} loaded which is highly discouraged, see ${picocolors_default.underline("https://vike.dev/warning/version-mismatch")}`,
      { onlyOnce: true, showStackTrace: false }
    );
  }
  if (globalObject15.checkSingleInstance && globalObject15.instances.length > 1) {
    assertWarning(false, clientNotSingleInstance, { onlyOnce: true, showStackTrace: true });
  }
}
function assertSingleInstance_onAssertModuleLoad() {
  const globalObject15 = getGlobalObjectSafe();
  globalObject15.instances.push(PROJECT_VERSION);
  assertSingleInstance();
}
function assertWarning(condition, errorMessage, { onlyOnce, showStackTrace }) {
  const globalObject15 = getGlobalObjectSafe();
  if (condition) {
    return;
  }
  const msg = `[Vike][Warning] ${errorMessage}`;
  if (onlyOnce) {
    const { alreadyLogged } = globalObject15;
    const key = onlyOnce === true ? msg : onlyOnce;
    if (alreadyLogged.has(key)) {
      return;
    } else {
      alreadyLogged.add(key);
    }
  }
  if (showStackTrace) {
    console.warn(new Error(msg));
  } else {
    console.warn(msg);
  }
}
var globalObject, clientNotSingleInstance;
var init_assertSingleInstance = __esm({
  "node_modules/vike/dist/utils/assertSingleInstance.js"() {
    init_unique();
    init_getGlobalObject();
    init_picocolors();
    init_PROJECT_VERSION();
    globalObject ?? (globalObject = genGlobalConfig());
    clientNotSingleInstance = "Client runtime loaded twice https://vike.dev/client-runtime-duplicated";
  }
});

// node_modules/vike/dist/utils/isNodeJS.js
function isNodeJS() {
  if (typeof process === "undefined")
    return false;
  if (!process.cwd)
    return false;
  if (!process.versions || typeof process.versions.node === "undefined")
    return false;
  if (!process.release || process.release.name !== "node")
    return false;
  return true;
}
var init_isNodeJS = __esm({
  "node_modules/vike/dist/utils/isNodeJS.js"() {
  }
});

// node_modules/vike/dist/utils/createErrorWithCleanStackTrace.js
function createErrorWithCleanStackTrace(errorMessage, numberOfStackTraceLinesToRemove2) {
  const err2 = new Error(errorMessage);
  if (isNodeJS()) {
    err2.stack = clean(err2.stack, numberOfStackTraceLinesToRemove2);
  }
  return err2;
}
function clean(errStack, numberOfStackTraceLinesToRemove2) {
  if (!errStack) {
    return errStack;
  }
  const stackLines = splitByLine(errStack);
  let linesRemoved = 0;
  const stackLine__cleaned = stackLines.filter((line) => {
    if (line.includes(" (internal/") || line.includes(" (node:internal")) {
      return false;
    }
    if (linesRemoved < numberOfStackTraceLinesToRemove2 && isStackTraceLine(line)) {
      linesRemoved++;
      return false;
    }
    return true;
  }).join("\n");
  return stackLine__cleaned;
}
function isStackTraceLine(line) {
  return line.startsWith("    at ");
}
function splitByLine(str) {
  return str.split(/\r?\n/);
}
var init_createErrorWithCleanStackTrace = __esm({
  "node_modules/vike/dist/utils/createErrorWithCleanStackTrace.js"() {
    init_isNodeJS();
  }
});

// node_modules/vike/dist/utils/colorsClient.js
function colorVike(str) {
  return picocolors_default.bold(picocolors_default.yellow(str));
}
function colorError(str) {
  return picocolors_default.bold(picocolors_default.red(str));
}
function colorWarning(str) {
  return picocolors_default.yellow(str);
}
var init_colorsClient = __esm({
  "node_modules/vike/dist/utils/colorsClient.js"() {
    init_picocolors();
  }
});

// node_modules/vike/dist/utils/assert.js
function assert(condition, debugInfo) {
  if (condition)
    return;
  const debugStr = (() => {
    if (!debugInfo) {
      return null;
    }
    const debugInfoSerialized = typeof debugInfo === "string" ? debugInfo : JSON.stringify(debugInfo);
    return picocolors_default.dim(`Debug for maintainers (you can ignore this): ${debugInfoSerialized}`);
  })();
  const link = picocolors_default.underline("https://github.com/vikejs/vike/issues/new?template=bug.yml");
  let errMsg = [
    `You stumbled upon a Vike bug. Go to ${link} and copy-paste this error. A maintainer will fix the bug (usually within 24 hours).`,
    debugStr
  ].filter(Boolean).join(" ");
  errMsg = addTags(errMsg, tagTypeBug, true);
  const internalError = createError(errMsg);
  globalObject2.onBeforeLog?.();
  globalObject2.onBeforeErr?.(internalError);
  throw internalError;
}
function assertUsage(condition, errMsg, { showStackTrace, exitOnError } = {}) {
  if (condition)
    return;
  showStackTrace = showStackTrace || globalObject2.alwaysShowStackTrace;
  errMsg = addTags(errMsg, "Wrong Usage");
  const usageError = createError(errMsg);
  globalObject2.onBeforeLog?.();
  globalObject2.onBeforeErr?.(usageError);
  if (!exitOnError) {
    throw usageError;
  } else {
    console.error(showStackTrace ? usageError : errMsg);
    process.exit(1);
  }
}
function getProjectError(errMsg) {
  errMsg = addTags(errMsg, "Error");
  const projectError = createError(errMsg);
  return projectError;
}
function assertWarning2(condition, msg, { onlyOnce, showStackTrace }) {
  if (condition)
    return;
  showStackTrace = showStackTrace || globalObject2.alwaysShowStackTrace;
  if (onlyOnce) {
    const { alreadyLogged } = globalObject2;
    const key = onlyOnce === true ? msg : onlyOnce;
    if (alreadyLogged.has(key))
      return;
    alreadyLogged.add(key);
  }
  const msgWithTags = addTags(msg, "Warning");
  globalObject2.onBeforeLog?.();
  if (showStackTrace) {
    const err2 = createError(msgWithTags);
    globalObject2.onBeforeErr?.(err2);
    console.warn(err2);
  } else {
    console.warn(msgWithTags);
  }
}
function assertInfo(condition, msg, { onlyOnce }) {
  if (condition) {
    return;
  }
  msg = addTags(msg, null);
  if (onlyOnce) {
    const { alreadyLogged } = globalObject2;
    const key = msg;
    if (alreadyLogged.has(key)) {
      return;
    } else {
      alreadyLogged.add(key);
    }
  }
  globalObject2.onBeforeLog?.();
  console.log(msg);
}
function addTags(msg, tagType, showProjectVersion = false) {
  const tagVike2 = getTagVike(showProjectVersion);
  const tagTypeOuter = getTagType(tagType);
  const whitespace = getTagWhitespace(msg);
  if (globalObject2.addTagsDev) {
    const tagsDev = globalObject2.addTagsDev(tagVike2, tagTypeOuter);
    return `${tagsDev}${whitespace}${msg}`;
  } else {
    const tags = `${tagVike2}${tagTypeOuter}`;
    return `${tags}${whitespace}${msg}`;
  }
}
function getTagWhitespace(msg) {
  if (msg.startsWith("[")) {
    return "";
  } else {
    return " ";
  }
}
function getTagType(tagType) {
  if (!tagType)
    return "";
  let tag = `[${tagType}]`;
  if (tagType === "Warning") {
    tag = colorWarning(tag);
  } else {
    tag = colorError(tag);
  }
  return tag;
}
function getTagVike(showProjectVersion = false) {
  const tag = showProjectVersion ? tagVikeWithVersion : tagVike;
  return colorVike(tag);
}
function isVikeBug(err2) {
  return String(err2).includes(`[${tagTypeBug}]`);
}
function setAlwaysShowStackTrace() {
  globalObject2.alwaysShowStackTrace = true;
}
function createError(errMsg) {
  const err2 = createErrorWithCleanStackTrace(errMsg, 3);
  if (globalObject2.addTagsDev)
    err2.stack = err2.stack?.replace(/^Error:\s*/, "");
  return err2;
}
var globalObject2, tagVike, tagVikeWithVersion, tagTypeBug;
var init_assert = __esm({
  "node_modules/vike/dist/utils/assert.js"() {
    init_assertSingleInstance();
    init_createErrorWithCleanStackTrace();
    init_getGlobalObject();
    init_PROJECT_VERSION();
    init_colorsClient();
    init_picocolors();
    globalObject2 = getGlobalObject("utils/assert.ts", {
      alreadyLogged: /* @__PURE__ */ new Set()
    });
    assertSingleInstance_onAssertModuleLoad();
    tagVike = `[vike]`;
    tagVikeWithVersion = `[vike@${PROJECT_VERSION}]`;
    tagTypeBug = "Bug";
  }
});

// node_modules/vike/dist/utils/objectAssign.js
function objectAssign(obj, objAddendum, objAddendumCanBeOriginalObject) {
  if (!objAddendum)
    return;
  if (!objAddendumCanBeOriginalObject)
    assert(!objAddendum._isOriginalObject);
  Object.defineProperties(obj, Object.getOwnPropertyDescriptors(objAddendum));
}
var init_objectAssign = __esm({
  "node_modules/vike/dist/utils/objectAssign.js"() {
    init_assert();
  }
});

// node_modules/vike/dist/utils/getTerminalWidth.js
function getTerminalWidth() {
  return typeof process !== "undefined" && typeof process.stdout !== "undefined" && process.stdout.columns || void 0;
}
var init_getTerminalWidth = __esm({
  "node_modules/vike/dist/utils/getTerminalWidth.js"() {
  }
});

// node_modules/vike/dist/utils/isArray.js
function isArray(value) {
  return Array.isArray(value);
}
var init_isArray = __esm({
  "node_modules/vike/dist/utils/isArray.js"() {
  }
});

// node_modules/vike/dist/utils/isObject.js
function isObject(value) {
  return typeof value === "object" && value !== null;
}
var init_isObject = __esm({
  "node_modules/vike/dist/utils/isObject.js"() {
  }
});

// node_modules/vike/dist/utils/debug.js
function createDebug(flag, optionsGlobal) {
  assert(flags.includes(flag));
  assert(isUsed);
  const debugWithOptions = (optionsLocal) => {
    return (...msgs) => {
      const options = { ...optionsGlobal, ...optionsLocal };
      debug_(flag, options, ...msgs);
    };
  };
  const debug6 = (...msgs) => debugWithOptions({})(...msgs);
  objectAssign(debug6, { options: debugWithOptions, isActivated: isDebug(flag) });
  return debug6;
}
function debug(flag, ...msgs) {
  return debug_(flag, {}, ...msgs);
}
function debug_(flag, options, ...msgs) {
  assert(isUsed);
  if (!isDebug(flag))
    return;
  let [msgFirst, ...msgsRest] = msgs;
  const padding = " ".repeat(flag.length + 1);
  msgFirst = formatMsg(msgFirst, options, padding, "FIRST");
  msgsRest = msgsRest.map((msg, i3) => {
    const position = i3 === msgsRest.length - 1 ? "LAST" : "MIDDLE";
    return formatMsg(msg, options, padding, position);
  });
  let logFirst;
  let logsRest;
  const noNewLine = msgsRest.length <= 1 && [msgFirst, ...msgsRest].every((m3) => typeof m3 === "string" ? !m3.includes("\n") : !isObject(m3));
  if (noNewLine) {
    logFirst = [msgFirst, ...msgsRest].map((m3) => typeof m3 !== "string" ? m3 : m3.trim());
    logsRest = [];
  } else {
    logFirst = [msgFirst];
    logsRest = msgsRest;
  }
  console.log("\x1B[1m%s\x1B[0m", flag, ...logFirst);
  logsRest.forEach((msg) => {
    console.log(msg);
  });
}
function isDebug(flag) {
  assert(isUsed);
  assert(flag === void 0 || flag && flags.includes(flag));
  const { flagsActivated, isAll, isGlobal } = getFlagsActivated();
  if (flag) {
    return flagsActivated.includes(flag) || isAll && !flagsSkipWildcard.includes(flag);
  } else {
    return isAll || flagsActivated.length > 0 || isGlobal;
  }
}
function isDebugError() {
  return isDebug("vike:error");
}
function formatMsg(info, options, padding, position) {
  if (info === void 0) {
    return void 0;
  }
  let str = position === "FIRST" ? "" : padding;
  if (typeof info === "string") {
    str += info;
  } else if (isArray(info)) {
    if (info.length === 0) {
      str += options.serialization?.emptyArray ?? "[]";
    } else {
      str += info.map(strUnknown).join("\n");
    }
  } else {
    str += strUnknown(info);
  }
  str = pad(str, padding);
  if (position !== "LAST" && position !== "FIRST") {
    str += "\n";
  }
  return str;
}
function pad(str, padding) {
  const terminalWidth = getTerminalWidth();
  const lines = [];
  str.split("\n").forEach((line) => {
    if (!terminalWidth) {
      lines.push(line);
    } else {
      chunk(line, terminalWidth - padding.length).forEach((chunk2) => {
        lines.push(chunk2);
      });
    }
  });
  return lines.join("\n" + padding);
}
function chunk(str, size) {
  if (str.length <= size) {
    return [str];
  }
  const chunks = str.match(new RegExp(".{1," + size + "}", "g"));
  assert(chunks);
  return chunks;
}
function strUnknown(thing) {
  return typeof thing === "string" ? thing : strObj(thing);
}
function strObj(obj, newLines = true) {
  return JSON.stringify(obj, replaceFunctionSerializer, newLines ? 2 : void 0);
}
function replaceFunctionSerializer(_key, value) {
  if (isCallable(value)) {
    return value.toString().split(/\s+/).join(" ");
  }
  return value;
}
function assertFlagsActivated() {
  assert(isUsed);
  const { flagsActivated } = getFlagsActivated();
  flagsActivated.forEach((flag) => {
    assertUsage(flags.includes(flag), `Unknown DEBUG flag ${picocolors_default.cyan(flag)}. Valid flags:
${flags.map((f3) => `  ${picocolors_default.cyan(f3)}`).join("\n")}`);
  });
}
function getFlagsActivated() {
  const flagsActivated = DEBUG.match(/\bvike:[a-zA-Z-]+/g) ?? [];
  const isAll = DEBUG.includes("vike:*");
  const isGlobal = /\bvike\b([^:]|$)/.test(DEBUG);
  return { flagsActivated, isAll, isGlobal };
}
function getDEBUG() {
  assert(isUsed);
  let DEBUG3;
  try {
    DEBUG3 = process.env.DEBUG;
  } catch {
  }
  return DEBUG3;
}
var flags, flagsSkipWildcard, isUsed, DEBUG;
var init_debug = __esm({
  "node_modules/vike/dist/utils/debug.js"() {
    init_isCallable();
    init_objectAssign();
    init_assert();
    init_getTerminalWidth();
    init_picocolors();
    init_isArray();
    init_isObject();
    flags = [
      "vike",
      "vike:crawl",
      "vike:file-change",
      "vike:error",
      "vike:esbuild-resolve",
      "vike:pluginExtractAssets",
      "vike:pluginExtractExportNames",
      "vike:glob",
      "vike:globalContext",
      "vike:log",
      "vike:optimizeDeps",
      "vike:outDir",
      "vike:pageFiles",
      "vike:pointer-imports",
      "vike:requireResolve",
      "vike:routing",
      "vike:setup",
      "vike:stream",
      "vike:virtualFiles",
      "vike:vite-rpc"
    ];
    flagsSkipWildcard = ["vike:log"];
    isUsed = !globalThis.__VIKE__IS_CLIENT || globalThis.__VIKE__IS_DEBUG || // Vite doesn't do tree-shaking in dev (maybe it will with Rolldown?)
    import.meta.env.DEV;
    DEBUG = isUsed && getDEBUG() || "";
    if (isUsed)
      assertFlagsActivated();
  }
});

// node_modules/vike/dist/utils/isBrowser.js
function isBrowser2() {
  return typeof window !== "undefined" && typeof window.scrollY === "number";
}
var init_isBrowser = __esm({
  "node_modules/vike/dist/utils/isBrowser.js"() {
  }
});

// node_modules/vike/dist/utils/assertIsNotBrowser.js
function assertIsNotBrowser() {
  assert(!isBrowser2());
}
var init_assertIsNotBrowser = __esm({
  "node_modules/vike/dist/utils/assertIsNotBrowser.js"() {
    init_isBrowser();
    init_assert();
  }
});

// node_modules/vike/dist/utils/trackLogs.js
function trackLogs() {
  const logOriginal = process.stdout.write;
  const log = (msg) => logOriginal.call(process.stdout, msg + "\n");
  ["stdout", "stderr"].forEach((stdName) => {
    var methodOriginal = process[stdName].write;
    process[stdName].write = function(...args) {
      log(picocolors_default.bold(picocolors_default.blue("*** LOG ***")));
      methodOriginal.apply(process[stdName], args);
      log(new Error().stack.replace(/^Error(\:|)/, picocolors_default.magenta("*** LOG ORIGIN ***")));
    };
  });
  Error.stackTraceLimit = Infinity;
}
var init_trackLogs = __esm({
  "node_modules/vike/dist/utils/trackLogs.js"() {
    init_debug();
    init_picocolors();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
    if (isDebug("vike:log")) {
      trackLogs();
    }
  }
});

// node_modules/vike/dist/utils/joinEnglish.js
function joinEnglish(arr, conjunction, colorizer = (s3) => s3) {
  assert(arr.length > 0);
  if (arr.length === 1)
    return colorizer(arr[0]);
  const firsts = arr.slice(0, arr.length - 1);
  const last = arr[arr.length - 1];
  const lastComma = arr.length > 2 ? "," : "";
  return firsts.map(colorizer).join(", ") + `${lastComma} ${conjunction} ` + colorizer(last);
}
var init_joinEnglish = __esm({
  "node_modules/vike/dist/utils/joinEnglish.js"() {
    init_assert();
  }
});

// node_modules/vike/dist/utils/assertVersion.js
function assertVersion(dependencyName, versionActual, versionExpectedList) {
  assertUsage(isVersionMatch(versionActual, versionExpectedList), `${picocolors_default.bold(dependencyName)} ${picocolors_default.red(picocolors_default.bold(versionActual))} isn't supported, use ${picocolors_default.bold(dependencyName)} ${joinEnglish([...versionExpectedList, "above"].map((v2) => picocolors_default.green(picocolors_default.bold(v2))), "or")}.`);
}
function isVersionMatch(versionActual, versionExpectedList) {
  assert(versionActual);
  assert(versionExpectedList);
  assert(versionExpectedList.length > 0);
  const versionActualMajor = parseVersion(versionActual)[0];
  const versionExpectedListSameMajor = versionExpectedList.filter((versionExpected) => {
    const versionExpectedMajor = parseVersion(versionExpected)[0];
    return versionExpectedMajor === versionActualMajor;
  });
  assert(versionExpectedListSameMajor.length <= 1);
  const versionExpectedSameMajor = versionExpectedListSameMajor[0];
  if (versionExpectedSameMajor) {
    return isSameOrAbove(versionActual, versionExpectedSameMajor);
  } else {
    return versionExpectedList.every((versionExpected) => isSameOrAbove(versionActual, versionExpected));
  }
}
function isSameOrAbove(versionActual, versionExpected) {
  const p1 = parseVersion(versionActual);
  const p22 = parseVersion(versionExpected);
  if (p1[0] !== p22[0])
    return p1[0] > p22[0];
  if (p1[1] !== p22[1])
    return p1[1] > p22[1];
  if (p1[2] !== p22[2])
    return p1[2] > p22[2];
  return true;
}
function parseVersion(version) {
  version = version.split("-")[0];
  let partsStr = version.split(".");
  partsStr = partsStr.slice(0, 3);
  assert(partsStr.length === 3);
  assert(partsStr.every((s3) => s3.length > 0));
  const parts = partsStr.map((s3) => parseInt(s3, 10));
  return parts;
}
var init_assertVersion = __esm({
  "node_modules/vike/dist/utils/assertVersion.js"() {
    init_picocolors();
    init_assert();
    init_assertIsNotBrowser();
    init_joinEnglish();
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/utils/assertNodeVersion.js
function assertNodeVersion() {
  if (!isNodeJS())
    return;
  const version = process.versions.node;
  assertVersion(
    "Node.js",
    version,
    // https://gist.github.com/brillout/8e0133716e169b981b6c4e8a938b0134
    ["20.19.0", "22.12.0", "23.0.0"]
  );
}
var init_assertNodeVersion = __esm({
  "node_modules/vike/dist/utils/assertNodeVersion.js"() {
    init_isNodeJS();
    init_assertVersion();
  }
});

// node_modules/@brillout/require-shim/dist/utils.cjs
var require_utils = __commonJS({
  "node_modules/@brillout/require-shim/dist/utils.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGlobalObject = exports.isVitest = exports.pathJoin = exports.assertIsNotBrowser = exports.assert = exports.assertPosixPath = exports.toPosixPath = void 0;
    function toPosixPath3(path) {
      const pathPosix = path.split("\\").join("/");
      assertPosixPath3(pathPosix);
      return pathPosix;
    }
    exports.toPosixPath = toPosixPath3;
    function assertPosixPath3(path) {
      const errMsg = (msg) => `Not a posix path: ${msg}`;
      assert4(path !== null, errMsg("null"));
      assert4(typeof path === "string", errMsg(`typeof path === '${typeof path}'`));
      assert4(path !== "", errMsg("(empty string)"));
      assert4(path);
      assert4(!path.includes("\\"), errMsg(path));
    }
    exports.assertPosixPath = assertPosixPath3;
    function assert4(condition, debugInfo) {
      if (condition)
        return;
      const githubRepository = "https://github.com/brillout/require-shim";
      let errMsg = [
        "[@brillout/require-shim]",
        "You stumbled upon a bug.",
        `Go to ${githubRepository}/issues/new and copy-paste this error.`,
        "A maintainer will fix the bug.",
        debugInfo
      ].filter(Boolean).join(" ");
      throw new Error(errMsg);
    }
    exports.assert = assert4;
    function assertIsNotBrowser2() {
      assert4(!isBrowser3());
    }
    exports.assertIsNotBrowser = assertIsNotBrowser2;
    function isBrowser3() {
      return typeof window !== "undefined" && typeof window.scrollY === "number";
    }
    function pathJoin(path1, path2) {
      assert4(!path1.includes("\\"));
      assert4(!path2.includes("\\"));
      let joined = [...path1.split("/"), ...path2.split("/")].filter(Boolean).join("/");
      if (path1.startsWith("/"))
        joined = "/" + joined;
      return joined;
    }
    exports.pathJoin = pathJoin;
    function isVitest2() {
      return typeof process !== "undefined" && typeof process.env !== "undefined" && "VITEST" in process.env;
    }
    exports.isVitest = isVitest2;
    function getGlobalObject3(key, defaultValue) {
      const allGlobalObjects = globalThis.__brillout_require_shim = globalThis.__brillout_require_shim || {};
      const globalObject15 = allGlobalObjects[key] = allGlobalObjects[key] || defaultValue;
      return globalObject15;
    }
    exports.getGlobalObject = getGlobalObject3;
  }
});

// node_modules/@brillout/require-shim/dist/runtime-test.cjs
var require_runtime_test = __commonJS({
  "node_modules/@brillout/require-shim/dist/runtime-test.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_cjs_1 = require_utils();
    testRequireShim();
    function testRequireShim() {
      let req;
      try {
        req = __require;
      } catch (_a2) {
      }
      if (!req)
        return;
      (0, utils_cjs_1.assert)(!("_is_brillout_require_shim" in __require));
    }
  }
});

// node_modules/@brillout/require-shim/dist/index.cjs
var require_dist = __commonJS({
  "node_modules/@brillout/require-shim/dist/index.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.installRequireShim_setUserRootDir = exports.installRequireShim = void 0;
    var utils_cjs_1 = require_utils();
    var globalObject15 = (0, utils_cjs_1.getGlobalObject)("utils/require-shim.ts", {});
    (0, utils_cjs_1.assertIsNotBrowser)();
    function installRequireShim2() {
      if (globalObject15.alreadyCalled)
        return;
      globalObject15.alreadyCalled = true;
      let requireLocal;
      try {
        requireLocal = __require;
      } catch (_a2) {
      }
      if (!requireLocal)
        return;
      let module2;
      try {
        module2 = requireLocal("module");
      } catch (_b2) {
        return;
      }
      if (globalThis.require === void 0) {
        install2();
      }
      testShim();
      return;
      function install2() {
        Object.defineProperty(globalThis, "require", {
          get() {
            let callsites;
            {
              const prepareStackTraceOrg = Error.prepareStackTrace;
              Error.prepareStackTrace = (_4, stack) => stack;
              const err2 = new Error();
              callsites = err2.stack;
              Error.prepareStackTrace = prepareStackTraceOrg;
            }
            const callerFile = getCallerFile(callsites);
            const callerFileFallback = __filename;
            const requireContextFile = callerFile || callerFileFallback;
            (0, utils_cjs_1.assert)(requireContextFile);
            const requireUserLand = module2.createRequire(requireContextFile);
            requireUserLand._is_brillout_require_shim = true;
            return requireUserLand;
          }
        });
      }
      function getCallerFile(callsites) {
        const caller = callsites[1];
        (0, utils_cjs_1.assert)(caller);
        if (!caller.getFileName)
          return null;
        {
          const filePath = caller.getFileName();
          (0, utils_cjs_1.assert)(typeof filePath === "string" && filePath || filePath === void 0);
          if (filePath)
            return filePath;
        }
        {
          const filePath = deriveFilePath(caller);
          if (filePath) {
            return filePath;
          }
        }
        return null;
      }
      function deriveFilePath(caller) {
        let filePath = caller.getEvalOrigin();
        if (!filePath)
          return null;
        if (doesPathExist(filePath)) {
          return filePath;
        }
        const { userRootDir } = globalObject15;
        if (!userRootDir)
          return null;
        let filePathAbsolute = (0, utils_cjs_1.toPosixPath)(filePath);
        (0, utils_cjs_1.assertPosixPath)(userRootDir);
        filePathAbsolute = (0, utils_cjs_1.pathJoin)(userRootDir, filePathAbsolute);
        if (doesPathExist(filePathAbsolute)) {
          return filePathAbsolute;
        }
        return null;
      }
      function doesPathExist(filePath) {
        (0, utils_cjs_1.assert)(requireLocal);
        try {
          requireLocal.resolve(filePath);
          return true;
        } catch (_a2) {
          return false;
        }
      }
    }
    exports.installRequireShim = installRequireShim2;
    function testShim() {
      if ((0, utils_cjs_1.isVitest)())
        return;
      (0, utils_cjs_1.assert)(__require !== globalThis.require);
      (0, utils_cjs_1.assert)(!("_is_brillout_require_shim" in __require));
      Promise.resolve().then(() => __toESM(require_runtime_test()));
    }
    function installRequireShim_setUserRootDir(userRootDir) {
      globalObject15.userRootDir = userRootDir;
    }
    exports.installRequireShim_setUserRootDir = installRequireShim_setUserRootDir;
  }
});

// node_modules/vike/dist/server/onLoad.js
function onLoad() {
  assertIsNotBrowser();
  assertNodeVersion();
  if (isDebugError()) {
    Error.stackTraceLimit = Infinity;
    setAlwaysShowStackTrace();
  }
  addEcosystemStamp();
  (0, import_require_shim.installRequireShim)();
}
function addEcosystemStamp() {
  const g4 = globalThis;
  g4._isVikeApp = /* Don't set to true so that consumers do `!!globalThis._isVikeApp` instead of `globalThis._isVikeApp === true`.
  true
  */
  // We use an object so that we can eventually, in the future, add helpful information as needed. (E.g. the Vike version, or global settings.)
  {};
  g4._isVitePluginSsr = true;
}
var import_require_shim;
var init_onLoad = __esm({
  "node_modules/vike/dist/server/onLoad.js"() {
    init_assertIsNotBrowser();
    init_assertNodeVersion();
    init_assert();
    import_require_shim = __toESM(require_dist(), 1);
    init_debug();
  }
});

// node_modules/vike/dist/utils/cast.js
function cast(_thing) {
}
var init_cast = __esm({
  "node_modules/vike/dist/utils/cast.js"() {
  }
});

// node_modules/vike/dist/utils/checkType.js
function checkType(_4) {
}
var init_checkType = __esm({
  "node_modules/vike/dist/utils/checkType.js"() {
  }
});

// node_modules/vike/dist/utils/isPlainObject.js
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  return (
    /* Doesn't work in Cloudflare Pages workers
    value.constructor === Object
    */
    value.constructor.name === "Object"
  );
}
var init_isPlainObject = __esm({
  "node_modules/vike/dist/utils/isPlainObject.js"() {
  }
});

// node_modules/vike/dist/utils/isPromise.js
function isPromise(val) {
  return typeof val === "object" && val !== null && "then" in val && isCallable(val.then);
}
var init_isPromise = __esm({
  "node_modules/vike/dist/utils/isPromise.js"() {
    init_isCallable();
  }
});

// node_modules/vike/dist/utils/isArrayOfStrings.js
function isArrayOfStrings(val) {
  return isArray(val) && val.every((v2) => typeof v2 === "string");
}
var init_isArrayOfStrings = __esm({
  "node_modules/vike/dist/utils/isArrayOfStrings.js"() {
    init_isArray();
  }
});

// node_modules/vike/dist/utils/isObjectOfStrings.js
function isObjectOfStrings(val) {
  return isObject(val) && Object.values(val).every((v2) => typeof v2 === "string");
}
var init_isObjectOfStrings = __esm({
  "node_modules/vike/dist/utils/isObjectOfStrings.js"() {
    init_isObject();
  }
});

// node_modules/vike/dist/utils/hasProp.js
function hasProp(obj, prop, type) {
  if (!isObject(obj))
    return false;
  if (!(prop in obj)) {
    return type === "undefined";
  }
  if (type === void 0) {
    return true;
  }
  const propValue = obj[prop];
  if (type === "undefined") {
    return propValue === void 0;
  }
  if (type === "array") {
    return isArray(propValue);
  }
  if (type === "object") {
    return isObject(propValue);
  }
  if (type === "string[]") {
    return isArrayOfStrings(propValue);
  }
  if (type === "string{}") {
    return isObjectOfStrings(propValue);
  }
  if (type === "function") {
    return isCallable(propValue);
  }
  if (isArray(type)) {
    return typeof propValue === "string" && type.includes(propValue);
  }
  if (type === "null") {
    return propValue === null;
  }
  if (type === "true") {
    return propValue === true;
  }
  if (type === "false") {
    return propValue === false;
  }
  return typeof propValue === type;
}
var init_hasProp = __esm({
  "node_modules/vike/dist/utils/hasProp.js"() {
    init_isCallable();
    init_isObject();
    init_isArrayOfStrings();
    init_isObjectOfStrings();
    init_isArray();
  }
});

// node_modules/vike/dist/utils/slice.js
function slice(thing, from, to) {
  if (typeof thing === "string") {
    return sliceArray(thing.split(""), from, to).join("");
  } else {
    return sliceArray(thing, from, to);
  }
}
function sliceArray(list, from, to) {
  const listSlice = [];
  let start = from >= 0 ? from : list.length + from;
  assert(start >= 0 && start <= list.length);
  let end = to >= 0 ? to : list.length + to;
  assert(end >= 0 && end <= list.length);
  while (true) {
    if (start === end) {
      break;
    }
    if (start === list.length) {
      start = 0;
    }
    if (start === end) {
      break;
    }
    const el = list[start];
    assert(el !== void 0);
    listSlice.push(el);
    start++;
  }
  return listSlice;
}
var init_slice = __esm({
  "node_modules/vike/dist/utils/slice.js"() {
    init_assert();
  }
});

// node_modules/vike/dist/utils/parseUrl.js
function parseUrl(url5, baseServer2) {
  assert(isUrl(url5), url5);
  assert(baseServer2.startsWith("/"));
  const { hashString: hashOriginal, withoutHash: urlWithoutHash } = extractHash(url5);
  assert(hashOriginal === null || hashOriginal.startsWith("#"));
  const hash = hashOriginal === null ? "" : decodeSafe(hashOriginal.slice(1));
  const { searchString: searchOriginal, withoutSearch: urlWithoutHashNorSearch } = extractSearch(urlWithoutHash);
  assert(searchOriginal === null || searchOriginal.startsWith("?"));
  let searchString = "";
  if (searchOriginal !== null) {
    searchString = searchOriginal;
  } else if (url5.startsWith("#")) {
    const baseURI = getBaseURI();
    searchString = baseURI && extractSearch(baseURI).searchString || "";
  }
  const search = {};
  const searchAll = {};
  Array.from(new URLSearchParams(searchString)).forEach(([key, val]) => {
    search[key] = val;
    searchAll[key] = [...searchAll.hasOwnProperty(key) ? searchAll[key] : [], val];
  });
  let { protocol, origin, pathnameAbsoluteWithBase } = getPathnameAbsoluteWithBase(urlWithoutHashNorSearch, baseServer2);
  const pathnameOriginal = urlWithoutHashNorSearch.slice((origin || "").length);
  assertUrlComponents(url5, origin, pathnameOriginal, searchOriginal, hashOriginal);
  let { pathname, isBaseMissing } = removeBaseServer(pathnameAbsoluteWithBase, baseServer2);
  const href = createUrlFromComponents(origin, pathname, searchOriginal, hashOriginal);
  const host = !origin ? null : origin.slice(protocol.length);
  const { hostname, port } = parseHost(host, url5);
  pathname = decodePathname(pathname);
  assert(pathname.startsWith("/"));
  return {
    href,
    protocol,
    hostname,
    port,
    origin,
    pathname,
    pathnameOriginal,
    isBaseMissing,
    search,
    searchAll,
    searchOriginal,
    hash,
    hashOriginal
  };
}
function extractHash(url5) {
  const [withoutHash, ...parts] = url5.split("#");
  const hashString = ["", ...parts].join("#") || null;
  return { hashString, withoutHash };
}
function extractSearch(url5) {
  const [withoutSearch, ...parts] = url5.split("?");
  const searchString = ["", ...parts].join("?") || null;
  return { searchString, withoutSearch };
}
function decodeSafe(urlComponent) {
  try {
    return decodeURIComponent(urlComponent);
  } catch {
  }
  try {
    return decodeURI(urlComponent);
  } catch {
  }
  return urlComponent;
}
function decodePathname(urlPathname) {
  urlPathname = urlPathname.replace(/\s+$/, "");
  urlPathname = urlPathname.split("/").map((dir) => decodeSafe(dir).split("/").join("%2F")).join("/");
  return urlPathname;
}
function getPathnameAbsoluteWithBase(url5, baseServer2) {
  assert(!url5.includes("?") && !url5.includes("#"));
  {
    const { protocol, origin, pathname } = parseOrigin(url5);
    if (origin) {
      return { protocol, origin, pathnameAbsoluteWithBase: pathname };
    }
    assert(pathname === url5);
  }
  if (url5.startsWith("/")) {
    return { protocol: null, origin: null, pathnameAbsoluteWithBase: url5 };
  } else {
    const baseURI = getBaseURI();
    let base;
    if (baseURI) {
      base = parseOrigin(baseURI.split("?")[0].split("#")[0]).pathname;
    } else {
      base = baseServer2;
    }
    const pathnameAbsoluteWithBase = resolveUrlPathnameRelative(url5, base);
    return { protocol: null, origin: null, pathnameAbsoluteWithBase };
  }
}
function getBaseURI() {
  const baseURI = typeof window !== "undefined" ? window?.document?.baseURI : void 0;
  return baseURI;
}
function parseOrigin(url5) {
  if (!isUrlWithWebProtocol(url5)) {
    return { pathname: url5, origin: null, protocol: null };
  } else {
    const { protocol, uriWithoutProtocol } = parseProtocol(url5);
    assert(protocol);
    const [host, ...rest] = uriWithoutProtocol.split("/");
    const origin = protocol + host;
    const pathname = "/" + rest.join("/");
    return { pathname, origin, protocol };
  }
}
function parseHost(host, url5) {
  const ret = { hostname: null, port: null };
  if (!host)
    return ret;
  const parts = host.split(":");
  if (parts.length > 1) {
    const port = parseInt(parts.pop(), 10);
    assert(port || port === 0, url5);
    ret.port = port;
  }
  ret.hostname = parts.join(":");
  return ret;
}
function parseProtocol(uri) {
  const SEP = ":";
  const [before, ...after] = uri.split(SEP);
  if (after.length === 0 || // https://github.com/vikejs/vike/commit/886a99ff21e86a8ca699a25cee7edc184aa058e4#r143308934
  // https://en.wikipedia.org/wiki/List_of_URI_schemes
  // https://www.rfc-editor.org/rfc/rfc7595
  !/^[a-z][a-z0-9\+\-]*$/i.test(before)) {
    return { protocol: null, uriWithoutProtocol: uri };
  }
  let protocol = before + SEP;
  let uriWithoutProtocol = after.join(SEP);
  const SEP2 = "//";
  if (uriWithoutProtocol.startsWith(SEP2)) {
    protocol = protocol + SEP2;
    uriWithoutProtocol = uriWithoutProtocol.slice(SEP2.length);
  }
  return { protocol, uriWithoutProtocol };
}
function isWebUrlProtocol(protocol) {
  const blocklist = [
    // https://docs.ipfs.tech/how-to/address-ipfs-on-web
    "ipfs://",
    "ipns://"
  ];
  if (blocklist.includes(protocol))
    return false;
  return protocol.endsWith("://");
}
function resolveUrlPathnameRelative(pathnameRelative, base) {
  const stack = base.split("/");
  const parts = pathnameRelative.split("/");
  let baseRestoreTrailingSlash = base.endsWith("/");
  if (pathnameRelative.startsWith(".")) {
    stack.pop();
  }
  for (const i3 in parts) {
    const p4 = parts[i3];
    if (p4 == "" && i3 === "0")
      continue;
    if (p4 == ".")
      continue;
    if (p4 == "..")
      stack.pop();
    else {
      baseRestoreTrailingSlash = false;
      stack.push(p4);
    }
  }
  let pathnameAbsolute = stack.join("/");
  if (baseRestoreTrailingSlash && !pathnameAbsolute.endsWith("/"))
    pathnameAbsolute += "/";
  if (!pathnameAbsolute.startsWith("/"))
    pathnameAbsolute = "/" + pathnameAbsolute;
  return pathnameAbsolute;
}
function removeBaseServer(pathnameAbsoluteWithBase, baseServer2) {
  assert(pathnameAbsoluteWithBase.startsWith("/"));
  assert(isBaseServer(baseServer2));
  let urlPathname = pathnameAbsoluteWithBase;
  assert(urlPathname.startsWith("/"));
  assert(baseServer2.startsWith("/"));
  if (baseServer2 === "/") {
    const pathname = pathnameAbsoluteWithBase;
    return { pathname, isBaseMissing: false };
  }
  let baseServerNormalized = baseServer2;
  if (baseServer2.endsWith("/") && urlPathname === slice(baseServer2, 0, -1)) {
    baseServerNormalized = slice(baseServer2, 0, -1);
    assert(urlPathname === baseServerNormalized);
  }
  if (!urlPathname.startsWith(baseServerNormalized)) {
    const pathname = pathnameAbsoluteWithBase;
    return { pathname, isBaseMissing: true };
  }
  assert(urlPathname.startsWith("/") || urlPathname.startsWith("http"));
  assert(urlPathname.startsWith(baseServerNormalized));
  urlPathname = urlPathname.slice(baseServerNormalized.length);
  if (!urlPathname.startsWith("/"))
    urlPathname = "/" + urlPathname;
  assert(urlPathname.startsWith("/"));
  return { pathname: urlPathname, isBaseMissing: false };
}
function isBaseServer(baseServer2) {
  return baseServer2.startsWith("/");
}
function assertUrlComponents(url5, origin, pathnameOriginal, searchOriginal, hashOriginal) {
  const urlRecreated = createUrlFromComponents(origin, pathnameOriginal, searchOriginal, hashOriginal);
  assert(url5 === urlRecreated);
}
function createUrlFromComponents(origin, pathname, search, hash) {
  const urlRecreated = `${origin || ""}${pathname}${search || ""}${hash || ""}`;
  return urlRecreated;
}
function isUrl(url5) {
  return isUrlAbsolute(url5) || isUrlRelative(url5);
}
function isUrlRedirectTarget(url5) {
  return isUrlAbsolute(url5) || isUri(url5);
}
function isUrlAbsolute(url5) {
  return isUrlPathAbsolute(url5) || isUrlWithWebProtocol(url5);
}
function isUrlPathAbsolute(url5) {
  return url5.startsWith("/");
}
function isUrlRelative(url5) {
  return [".", "?", "#"].some((c2) => url5.startsWith(c2)) || url5 === "";
}
function isUrlWithWebProtocol(url5) {
  const { protocol } = parseProtocol(url5);
  return !!protocol && isWebUrlProtocol(protocol);
}
function isUri(uri) {
  const { protocol } = parseProtocol(uri);
  return !!protocol && !isWebUrlProtocol(protocol);
}
function assertUsageUrlAbsolute(url5, errPrefix) {
  assertUsage(isUrlAbsolute(url5), getErrMsg(url5, errPrefix, true));
}
function assertUsageUrlPathAbsolute(url5, errPrefix) {
  assertUsage(isUrlPathAbsolute(url5), getErrMsg(url5, errPrefix));
}
function assertUsageUrlRedirectTarget(url5, errPrefix, isUnresolved) {
  const errMsg = getErrMsg(url5, errPrefix, true, isUnresolved);
  assertUsage(isUrlRedirectTarget(url5) || isUnresolved && url5 === "*", errMsg);
}
function getErrMsg(url5, errPrefix, allowProtocol, allowUri) {
  let errMsg = `${errPrefix} is ${picocolors_default.string(url5)} but it should start with ${picocolors_default.string("/")}`;
  if (allowProtocol)
    errMsg += ` or a protocol (e.g. ${picocolors_default.string("http://")})`;
  if (allowUri)
    errMsg += `, or be ${picocolors_default.string("*")}`;
  return errMsg;
}
var init_parseUrl = __esm({
  "node_modules/vike/dist/utils/parseUrl.js"() {
    init_slice();
    init_assert();
    init_picocolors();
  }
});

// node_modules/vike/dist/utils/parseUrl-extras.js
function prependBase(url5, baseServer2) {
  if (baseServer2.startsWith("http")) {
    const baseAssets = baseServer2;
    const baseAssetsNormalized = normalizeBaseAssets(baseAssets);
    assert(!baseAssetsNormalized.endsWith("/"));
    assert(url5.startsWith("/"));
    return `${baseAssetsNormalized}${url5}`;
  }
  assert(isBaseServer(baseServer2));
  const baseServerNormalized = normalizeBaseServer(baseServer2);
  if (baseServerNormalized === "/")
    return url5;
  assert(!baseServerNormalized.endsWith("/"));
  assert(url5.startsWith("/"));
  return `${baseServerNormalized}${url5}`;
}
function removeBaseServer2(url5, baseServer2) {
  const { isBaseMissing, origin, pathname, pathnameOriginal, searchOriginal, hashOriginal } = parseUrl(url5, baseServer2);
  assert(!isBaseMissing);
  assertUrlComponents(url5, origin, pathnameOriginal, searchOriginal, hashOriginal);
  const urlWithoutBase = createUrlFromComponents(origin, pathname, searchOriginal, hashOriginal);
  return urlWithoutBase;
}
function normalizeBaseAssets(baseAssets) {
  let baseAssetsNormalized = baseAssets;
  if (baseAssetsNormalized.endsWith("/")) {
    baseAssetsNormalized = slice(baseAssetsNormalized, 0, -1);
  }
  assert(!baseAssetsNormalized.endsWith("/"));
  return baseAssetsNormalized;
}
function normalizeBaseServer(baseServer2) {
  let baseServerNormalized = baseServer2;
  if (baseServerNormalized.endsWith("/") && baseServerNormalized !== "/") {
    baseServerNormalized = slice(baseServerNormalized, 0, -1);
  }
  assert(!baseServerNormalized.endsWith("/") || baseServerNormalized === "/");
  return baseServerNormalized;
}
function isBaseAssets(base) {
  return base.startsWith("/") || base.startsWith("http://") || base.startsWith("https://");
}
function normalizeUrlPathname(urlOriginal, trailingSlash, baseServer2) {
  const urlNormalized = modifyUrlPathname(urlOriginal, (urlPathname) => {
    assert(urlPathname.startsWith("/"));
    let urlPathnameNormalized = normalize(urlPathname);
    if (urlPathnameNormalized === "/") {
      return urlPathnameNormalized;
    }
    if (baseServer2.endsWith("/") && baseServer2 !== "/" && normalize(baseServer2) === urlPathnameNormalized) {
      trailingSlash = true;
    }
    assert(!urlPathnameNormalized.endsWith("/"));
    if (trailingSlash) {
      urlPathnameNormalized = urlPathnameNormalized + "/";
    }
    return urlPathnameNormalized;
  });
  if (urlNormalized === urlOriginal)
    return null;
  return urlNormalized;
}
function normalize(urlPathname) {
  assert(urlPathname.startsWith("/"));
  return "/" + urlPathname.split("/").filter(Boolean).join("/");
}
function modifyUrlPathname(url5, modifier) {
  const { origin, pathnameOriginal, searchOriginal, hashOriginal } = parseUrl(url5, "/");
  const pathnameModified = modifier(pathnameOriginal);
  if (pathnameModified === null)
    return url5;
  assertUrlComponents(url5, origin, pathnameOriginal, searchOriginal, hashOriginal);
  const urlModified = createUrlFromComponents(origin, pathnameModified, searchOriginal, hashOriginal);
  assert(pathnameOriginal === pathnameModified === (url5 === urlModified));
  return urlModified;
}
function removeUrlOrigin(url5) {
  const { origin, pathnameOriginal, searchOriginal, hashOriginal } = parseUrl(url5, "/");
  const urlModified = createUrlFromComponents(null, pathnameOriginal, searchOriginal, hashOriginal);
  return { urlModified, origin };
}
function setUrlOrigin(url5, origin) {
  const { origin: originCurrent, pathnameOriginal, searchOriginal, hashOriginal } = parseUrl(url5, "/");
  if (origin === originCurrent)
    return false;
  assert(origin === null || origin.startsWith("http"));
  const urlModified = createUrlFromComponents(origin, pathnameOriginal, searchOriginal, hashOriginal);
  return urlModified;
}
function getUrlPretty(url5) {
  const { urlModified } = removeUrlOrigin(url5);
  return urlModified;
}
var init_parseUrl_extras = __esm({
  "node_modules/vike/dist/utils/parseUrl-extras.js"() {
    init_parseUrl();
    init_assert();
    init_slice();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/utils/sorter.js
function higherFirst(getValue) {
  return (element1, element2) => {
    const val1 = getValue(element1);
    const val2 = getValue(element2);
    if (val1 === val2) {
      return 0;
    }
    return val1 > val2 ? -1 : 1;
  };
}
function lowerFirst(getValue) {
  return (element1, element2) => {
    const val1 = getValue(element1);
    const val2 = getValue(element2);
    if (val1 === val2) {
      return 0;
    }
    return val1 < val2 ? -1 : 1;
  };
}
function makeFirst(getValue) {
  return (element1, element2) => {
    const val1 = getValue(element1);
    const val2 = getValue(element2);
    assert([true, false, null].includes(val1));
    assert([true, false, null].includes(val2));
    if (val1 === val2) {
      return 0;
    }
    if (val1 === true || val2 === false) {
      return -1;
    }
    if (val2 === true || val1 === false) {
      return 1;
    }
    assert(false);
  };
}
function makeLast(getValue) {
  return makeFirst((element) => {
    const val = getValue(element);
    if (val === null) {
      return null;
    } else {
      return !val;
    }
  });
}
var init_sorter = __esm({
  "node_modules/vike/dist/utils/sorter.js"() {
    init_assert();
  }
});

// node_modules/vike/dist/utils/objectAssignSafe.js
var init_objectAssignSafe = __esm({
  "node_modules/vike/dist/utils/objectAssignSafe.js"() {
  }
});

// node_modules/vike/dist/utils/objectReplace.js
function objectReplace(objOld, objNew, except) {
  Object.keys(objOld).filter((key) => !except?.includes(key)).forEach((key) => delete objOld[key]);
  Object.defineProperties(objOld, Object.getOwnPropertyDescriptors(objNew));
}
var init_objectReplace = __esm({
  "node_modules/vike/dist/utils/objectReplace.js"() {
  }
});

// node_modules/vike/dist/utils/PromiseType.js
var init_PromiseType = __esm({
  "node_modules/vike/dist/utils/PromiseType.js"() {
  }
});

// node_modules/vike/dist/utils/compareString.js
function compareString(str1, str2) {
  if (str1.toLowerCase() < str2.toLowerCase())
    return -1;
  if (str1.toLowerCase() > str2.toLowerCase())
    return 1;
  return 0;
}
var init_compareString = __esm({
  "node_modules/vike/dist/utils/compareString.js"() {
  }
});

// node_modules/vike/dist/utils/isObjectWithKeys.js
function isObjectWithKeys(obj, keys) {
  if (!isPlainObject(obj)) {
    return false;
  }
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      return false;
    }
  }
  return true;
}
var init_isObjectWithKeys = __esm({
  "node_modules/vike/dist/utils/isObjectWithKeys.js"() {
    init_isPlainObject();
  }
});

// node_modules/vike/dist/utils/stringifyStringArray.js
function stringifyStringArray(stringList) {
  return "[" + stringList.map((str) => "'" + str + "'").join(", ") + "]";
}
var init_stringifyStringArray = __esm({
  "node_modules/vike/dist/utils/stringifyStringArray.js"() {
  }
});

// node_modules/vike/dist/utils/capitalizeFirstLetter.js
function capitalizeFirstLetter(word) {
  if (!word[0]) {
    return word;
  }
  return word[0].toUpperCase() + word.slice(1);
}
var init_capitalizeFirstLetter = __esm({
  "node_modules/vike/dist/utils/capitalizeFirstLetter.js"() {
  }
});

// node_modules/vike/dist/utils/debugGlob.js
var debugGlob;
var init_debugGlob = __esm({
  "node_modules/vike/dist/utils/debugGlob.js"() {
    init_debug();
    debugGlob = createDebug("vike:glob");
  }
});

// node_modules/vike/dist/utils/isSameErrorMessage.js
function isSameErrorMessage(err1, err2) {
  if (!isObject(err1) || !isObject(err2))
    return false;
  return err1.message === err2.message;
}
var init_isSameErrorMessage = __esm({
  "node_modules/vike/dist/utils/isSameErrorMessage.js"() {
    init_isObject();
  }
});

// node_modules/vike/dist/utils/styleFileRE.js
var styleFileRE;
var init_styleFileRE = __esm({
  "node_modules/vike/dist/utils/styleFileRE.js"() {
    styleFileRE = /\.(css|less|sass|scss|styl|stylus|pcss|postcss)($|\?)/;
  }
});

// node_modules/vike/dist/utils/isPropertyGetter.js
function isPropertyGetter(obj, prop) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
  return !!descriptor && !("value" in descriptor) && !!descriptor.get;
}
var init_isPropertyGetter = __esm({
  "node_modules/vike/dist/utils/isPropertyGetter.js"() {
  }
});

// node_modules/vike/dist/utils/urlToFile.js
var baseServer;
var init_urlToFile = __esm({
  "node_modules/vike/dist/utils/urlToFile.js"() {
    init_assert();
    init_parseUrl();
    init_slice();
    baseServer = "/";
  }
});

// node_modules/vike/dist/utils/freezePartial.js
function freezePartial(obj, allowList) {
  Object.entries(obj).forEach(([key, val]) => {
    Object.defineProperty(obj, key, {
      get() {
        return val;
      },
      set(newVal) {
        if (key in allowList) {
          const isAllowed = allowList[key](newVal);
          if (isAllowed) {
            val = newVal;
            return;
          } else {
            throw new Error(`Setting wrong value ${picocolors_default.cyan(JSON.stringify(newVal))} for property ${picocolors_default.cyan(key)}`);
          }
        }
        throw new Error(`You aren't allowed to mutate property ${picocolors_default.cyan(key)}`);
      },
      configurable: false,
      enumerable: true
    });
  });
  Object.preventExtensions(obj);
}
var init_freezePartial = __esm({
  "node_modules/vike/dist/utils/freezePartial.js"() {
    init_picocolors();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/utils/parseNpmPackage.js
function isImportPathNpmPackage(str, { cannotBePathAlias }) {
  assert(cannotBePathAlias);
  return isImportPathNpmPackageOrPathAlias(str);
}
function isImportPathNpmPackageOrPathAlias(str) {
  const res = parseNpmPackage(str);
  return res !== null;
}
function assertIsImportPathNpmPackage(str) {
  assert(isImportPathNpmPackage(str, {
    // If `str` is a path alias that looks like an npm package => assertIsImportPathNpmPackage() is erroneous but that's okay because the assertion will eventually fail for some other user using a disambiguated path alias.
    cannotBePathAlias: true
  }), str);
}
function parseNpmPackage(str) {
  if (!str)
    return null;
  let scope = null;
  if (str.startsWith("@")) {
    if (!str.includes("/"))
      return null;
    const [scope_, ...rest] = str.split("/");
    scope = scope_;
    str = rest.join("/");
    if (!str)
      return null;
    if (scope === "@" || invalid(scope.slice(1)))
      return null;
  }
  const [name, ...importPathParts] = str.split("/");
  if (!name || invalid(name))
    return null;
  const importPath = importPathParts.length === 0 ? null : importPathParts.join("/");
  return {
    pkgName: scope ? `${scope}/${name}` : name,
    importPath
  };
}
function invalid(s3) {
  const firstLetter = s3[0];
  if (!firstLetter || !/[a-z0-9]/.test(firstLetter))
    return true;
  if (/[^a-z0-9_\-\.]/.test(s3))
    return true;
  return false;
}
var init_parseNpmPackage = __esm({
  "node_modules/vike/dist/utils/parseNpmPackage.js"() {
    init_assert();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/utils/isNullish.js
function isNullish(val) {
  return val === null || val === void 0;
}
function isNotNullish(p4) {
  return !isNullish(p4);
}
function isNotNullish_keyVal(arg) {
  return !isNullish(arg[1]);
}
var init_isNullish = __esm({
  "node_modules/vike/dist/utils/isNullish.js"() {
  }
});

// node_modules/vike/dist/utils/isScriptFile.js
function isScriptFile(filePath) {
  return scriptFileExtensionList.some((ext) => filePath.endsWith("." + ext));
}
function isTemplateFile(filePath) {
  return extTemplates.some((ext) => filePath.endsWith("." + ext));
}
var extJs, extTs, extJsOrTs, extJsx, extTsx, extJsxOrTsx, extTemplates, scriptFileExtensionList, scriptFileExtensionPattern;
var init_isScriptFile = __esm({
  "node_modules/vike/dist/utils/isScriptFile.js"() {
    extJs = [
      "js",
      "cjs",
      "mjs"
    ];
    extTs = [
      "ts",
      "cts",
      "mts"
    ];
    extJsOrTs = [...extJs, ...extTs];
    extJsx = [
      "jsx",
      "cjsx",
      "mjsx"
    ];
    extTsx = [
      "tsx",
      "ctsx",
      "mtsx"
    ];
    extJsxOrTsx = [...extJsx, ...extTsx];
    extTemplates = [
      "vue",
      "svelte",
      "marko",
      "md",
      "mdx"
    ];
    scriptFileExtensionList = [...extJsOrTs, ...extJsxOrTsx, ...extTemplates];
    scriptFileExtensionPattern = "(" + scriptFileExtensionList.join("|") + ")";
  }
});

// node_modules/vike/dist/utils/removeFileExtension.js
var init_removeFileExtension = __esm({
  "node_modules/vike/dist/utils/removeFileExtension.js"() {
  }
});

// node_modules/vike/dist/utils/objectKeys.js
var init_objectKeys = __esm({
  "node_modules/vike/dist/utils/objectKeys.js"() {
  }
});

// node_modules/vike/dist/utils/objectEntries.js
var init_objectEntries = __esm({
  "node_modules/vike/dist/utils/objectEntries.js"() {
  }
});

// node_modules/vike/dist/utils/objectFromEntries.js
var init_objectFromEntries = __esm({
  "node_modules/vike/dist/utils/objectFromEntries.js"() {
  }
});

// node_modules/vike/dist/utils/getFileExtension.js
function getFileExtension(id) {
  id = id.split("?")[0];
  const fileName = slice(id.split("/"), -1, 0)[0];
  if (!fileName) {
    return null;
  }
  const fileExtension = slice(fileName.split("."), -1, 0)[0];
  if (!fileExtension) {
    return null;
  }
  return fileExtension;
}
var init_getFileExtension = __esm({
  "node_modules/vike/dist/utils/getFileExtension.js"() {
    init_slice();
  }
});

// node_modules/vike/dist/utils/isNonRunnableDevProcess.js
function isNonRunnableDevProcess() {
  if (globalThis.__VIKE__IS_NON_RUNNABLE_DEV === void 0)
    return false;
  assert(globalThis.__VIKE__IS_NON_RUNNABLE_DEV === true);
  return true;
}
var init_isNonRunnableDevProcess = __esm({
  "node_modules/vike/dist/utils/isNonRunnableDevProcess.js"() {
    init_assert();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/utils/isVitest.js
function isVitest() {
  return typeof process !== "undefined" && typeof process.env !== "undefined" && "VITEST" in process.env;
}
var init_isVitest = __esm({
  "node_modules/vike/dist/utils/isVitest.js"() {
  }
});

// node_modules/vike/dist/utils/assertSetup.js
function onSetupRuntime() {
  if (debug2.isActivated)
    debug2("assertSetup()", new Error().stack);
  if (isTest())
    return;
  assertNodeEnvIsNotUndefinedString();
  if (!setup.viteDevServer && setup.isViteDev === void 0) {
    assertWarning2(!isNodeEnvDev() || isNonRunnableDevProcess(), `The ${getEnvDescription()}, which is contradictory because the environment seems to be a production environment (Vite isn't loaded), see ${picocolors_default.underline("https://vike.dev/NODE_ENV")} and ${picocolors_default.underline("https://vike.dev/warning/setup")}`, { onlyOnce: true });
    assertUsage(!setup.vikeVitePlugin, `Vike's Vite plugin (the ${picocolors_default.cyan("vike/plugin")} module) shouldn't be loaded in production, see ${picocolors_default.underline("https://vike.dev/warning/setup")}`);
    assert(!setup.shouldNotBeProduction);
  } else {
    if (!setup.isPreview && !setup.vitePreviewServer && !setup.isPrerendering) {
      assertWarning2(isNodeEnvDev(), `The ${getEnvDescription()} while Vite is loaded, but Vite shouldn't be loaded in production, see ${picocolors_default.underline("https://vike.dev/warning/setup")}`, { onlyOnce: true });
    }
    assert(setup.vikeVitePlugin);
    assert(setup.shouldNotBeProduction);
  }
}
function isTest() {
  return isVitest() || isNodeEnv("test");
}
function getEnvDescription() {
  const envType = `${isNodeEnvDev() ? "development" : "production"} environment`;
  const nodeEnvDesc = `environment is set to be a ${picocolors_default.bold(envType)} by ${picocolors_default.cyan(`process.env.NODE_ENV===${JSON.stringify(getNodeEnv())}`)}`;
  return nodeEnvDesc;
}
function assertNodeEnvIsNotUndefinedString() {
  const nodeEnv = getNodeEnv();
  assertWarning2(nodeEnv !== "undefined", `${picocolors_default.cyan('process.env.NODE_ENV==="undefined"')} which is unexpected: ${picocolors_default.cyan("process.env.NODE_ENV")} is allowed to be the *value* ${picocolors_default.cyan("undefined")} (i.e. ${picocolors_default.cyan("process.env.NODE_ENV===undefined")}) but it shouldn't be the *string* ${picocolors_default.cyan('"undefined"')} \u2014 see ${picocolors_default.underline("https://vike.dev/NODE_ENV")}`, { onlyOnce: true });
}
function isNodeEnvDev() {
  const nodeEnv = getNodeEnv();
  return nodeEnv === void 0 || isNodeEnv(["development", "dev", ""]);
}
function isNodeEnv(value) {
  const values = Array.isArray(value) ? value : [value];
  const nodeEnv = getNodeEnv();
  return nodeEnv !== void 0 && values.includes(nodeEnv.toLowerCase());
}
function getNodeEnv() {
  let val;
  try {
    val = process.env.NODE_ENV;
  } catch {
    return void 0;
  }
  return val;
}
function setNodeEnvProductionIfUndefined() {
  let val;
  let proc;
  try {
    proc = process;
    val = process.env.NODE_ENV;
  } catch {
    return;
  }
  if (val !== void 0)
    return;
  const { env: env3 } = proc;
  env3.NODE_ENV ?? (env3.NODE_ENV = "production");
  assert(isNodeEnv("production"));
}
var debug2, setup;
var init_assertSetup = __esm({
  "node_modules/vike/dist/utils/assertSetup.js"() {
    init_assert();
    init_assertIsNotBrowser();
    init_debug();
    init_getGlobalObject();
    init_isNonRunnableDevProcess();
    init_isVitest();
    init_picocolors();
    assertIsNotBrowser();
    debug2 = createDebug("vike:setup");
    setup = getGlobalObject("utils/assertSetup.ts", {});
  }
});

// node_modules/vike/dist/utils/path.js
function toPosixPath(path) {
  const pathPosix = path.split("\\").join("/");
  assertPosixPath(pathPosix);
  return pathPosix;
}
function assertPosixPath(path) {
  const errMsg = (msg) => `Not a posix path: ${msg}`;
  assert(path !== null, errMsg("null"));
  assert(typeof path === "string", errMsg(`typeof path === ${JSON.stringify(typeof path)}`));
  assert(path !== "", errMsg("(empty string)"));
  assert(path);
  assert(!path.includes("\\"), errMsg(path));
}
var init_path = __esm({
  "node_modules/vike/dist/utils/path.js"() {
    init_assert();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/utils/isHtml.js
function isHtml(str) {
  const re2 = /(<\/[^<]+>)|(<[^<]+\/>)/;
  return re2.test(str);
}
var init_isHtml = __esm({
  "node_modules/vike/dist/utils/isHtml.js"() {
  }
});

// node_modules/vike/dist/utils/virtualFileId.js
function removeVirtualFileIdPrefix(id) {
  if (id.startsWith(convention)) {
    id = id.slice(convention.length);
  }
  assert(!id.startsWith(convention));
  return id;
}
var virtualFileIdPrefix1, convention, virtualFileIdPrefix2;
var init_virtualFileId = __esm({
  "node_modules/vike/dist/utils/virtualFileId.js"() {
    init_picocolors();
    init_assert();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
    virtualFileIdPrefix1 = "virtual:vike:";
    convention = "\0";
    virtualFileIdPrefix2 = `${convention}${virtualFileIdPrefix1}`;
  }
});

// node_modules/vike/dist/utils/colorsServer.js
function stripAnsi2(string) {
  return string.replace(ansiRegex2, "");
}
function getAnsiRegex2() {
  const pattern = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
  ].join("|");
  return new RegExp(pattern, "g");
}
function hasRed(str) {
  return str.includes("\x1B[31m");
}
var ansiRegex2;
var init_colorsServer = __esm({
  "node_modules/vike/dist/utils/colorsServer.js"() {
    init_picocolors();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
    ansiRegex2 = getAnsiRegex2();
  }
});

// node_modules/vike/dist/utils/truncateString.js
function truncateString(str, lenMax) {
  const lenMaxReal = lenMax - 3;
  assert(lenMaxReal >= 1);
  if (str.length < lenMax) {
    return str;
  } else {
    str = str.substring(0, lenMaxReal);
    const ellipsis = picocolors_default.dim("...");
    str = str + ellipsis;
    return str;
  }
}
var init_truncateString = __esm({
  "node_modules/vike/dist/utils/truncateString.js"() {
    init_picocolors();
    init_assert();
  }
});

// node_modules/vike/dist/utils/formatHintLog.js
function formatHintLog(msg) {
  assert(msg.length > 0);
  const msgLength = stripAnsi2(msg).length;
  const sep = "\u2500".repeat(msgLength);
  const top = `\u250C\u2500${sep}\u2500\u2510
`;
  const mid = `\u2502 ${msg} \u2502
`;
  const bot = `\u2514\u2500${sep}\u2500\u2518`;
  const msgWrapped = `${top}${mid}${bot}`;
  return msgWrapped;
}
var init_formatHintLog = __esm({
  "node_modules/vike/dist/utils/formatHintLog.js"() {
    init_assert();
    init_colorsServer();
  }
});

// node_modules/vike/dist/utils/escapeHtml.js
function escapeHtml(unsafeString) {
  const safe = unsafeString.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  return safe;
}
var init_escapeHtml = __esm({
  "node_modules/vike/dist/utils/escapeHtml.js"() {
  }
});

// node_modules/vike/dist/utils/normalizeHeaders.js
function normalizeHeaders(headersOriginal) {
  let headersCleaned = headersOriginal;
  if (isObject(headersCleaned) && headersCleaned[":method"])
    headersCleaned = Object.fromEntries(Object.entries(headersCleaned).filter(([key]) => !key.startsWith(":")));
  const headersStandard = new Headers(headersCleaned);
  const headers = Object.fromEntries(headersStandard.entries());
  return headers;
}
var init_normalizeHeaders = __esm({
  "node_modules/vike/dist/utils/normalizeHeaders.js"() {
    init_isObject();
  }
});

// node_modules/vike/dist/utils/isVikeReactApp.js
function isVikeReactApp() {
  const g4 = globalThis;
  return !!g4._isVikeReactApp;
}
var init_isVikeReactApp = __esm({
  "node_modules/vike/dist/utils/isVikeReactApp.js"() {
  }
});

// node_modules/vike/dist/utils/getPropAccessNotation.js
function getPropAccessNotation(key) {
  return typeof key === "string" && isKeyDotNotationCompatible(key) ? `.${key}` : `[${JSON.stringify(key)}]`;
}
function isKeyDotNotationCompatible(key) {
  return /^[a-z0-9\$_]+$/i.test(key);
}
var init_getPropAccessNotation = __esm({
  "node_modules/vike/dist/utils/getPropAccessNotation.js"() {
  }
});

// node_modules/vike/dist/utils/humanizeTime.js
function humanizeTime(milliseconds) {
  const seconds = milliseconds / 1e3;
  if (seconds < 120) {
    const n2 = round(seconds);
    return `${n2} second${plural(n2)}`;
  }
  {
    const minutes = seconds / 60;
    const n2 = round(minutes);
    return `${n2} minute${plural(n2)}`;
  }
}
function round(n2) {
  let rounded = n2.toFixed(1);
  if (rounded.endsWith(".0"))
    rounded = rounded.slice(0, -2);
  return rounded;
}
function plural(n2) {
  return n2 === "1" ? "" : "s";
}
var init_humanizeTime = __esm({
  "node_modules/vike/dist/utils/humanizeTime.js"() {
  }
});

// node_modules/vike/dist/utils/genPromise.js
function genPromise({ timeout = timeoutDefault } = {}) {
  let resolve3;
  let reject;
  let finished = false;
  const promise_internal = new Promise((resolve_, reject_) => {
    resolve3 = (...args) => {
      finished = true;
      timeoutClear();
      return resolve_(...args);
    };
    reject = (...args) => {
      finished = true;
      timeoutClear();
      return reject_(...args);
    };
  });
  const timeoutClear = () => timeouts.forEach((t) => clearTimeout(t));
  const timeouts = [];
  let promise;
  if (!timeout) {
    promise = promise_internal;
  } else {
    promise = new Proxy(promise_internal, {
      get(target, prop) {
        if (prop === "then" && !finished) {
          const err2 = new Error(`Promise hasn't resolved after ${humanizeTime(timeout)}`);
          timeouts.push(setTimeout(() => {
            assert(err2.stack);
            assertWarning2(false, removeStackErrorPrefix(err2.stack), { onlyOnce: false });
          }, timeout));
        }
        const value = Reflect.get(target, prop);
        return typeof value === "function" ? value.bind(target) : value;
      }
    });
  }
  return { promise, resolve: resolve3, reject };
}
function removeStackErrorPrefix(errStack) {
  const errorPrefix = "Error: ";
  if (errStack.startsWith(errorPrefix))
    errStack = errStack.slice(errorPrefix.length);
  return errStack;
}
var timeoutDefault;
var init_genPromise = __esm({
  "node_modules/vike/dist/utils/genPromise.js"() {
    init_assert();
    init_humanizeTime();
    timeoutDefault = 25 * 1e3;
  }
});

// node_modules/vike/dist/utils/updateType.js
function updateType(thing, clone) {
  assert(thing === clone);
}
var init_updateType = __esm({
  "node_modules/vike/dist/utils/updateType.js"() {
    init_assert();
  }
});

// node_modules/vike/dist/utils/changeEnumerable.js
function changeEnumerable(obj, prop, enumerable) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
  Object.defineProperty(obj, prop, { ...descriptor, enumerable });
}
var init_changeEnumerable = __esm({
  "node_modules/vike/dist/utils/changeEnumerable.js"() {
  }
});

// node_modules/vike/dist/utils/getRandomId.js
function getRandomId(length = 12) {
  let randomId = "";
  while (randomId.length < length) {
    randomId += Math.random().toString(36).slice(2);
  }
  randomId = randomId.slice(0, length);
  assert(/^[a-z0-9]+$/.test(randomId) && randomId.length === length);
  return randomId;
}
var init_getRandomId = __esm({
  "node_modules/vike/dist/utils/getRandomId.js"() {
    init_assert();
  }
});

// node_modules/vike/dist/utils/getViteRPC.js
function getViteRPC() {
  globalObject3.rpc ?? (globalObject3.rpc = createRpcClient());
  return globalObject3.rpc;
}
function createRpcClient() {
  const hot = import.meta.hot;
  assert(hot);
  const listeners = [];
  hot.on(`vike:rpc:response`, (dataResponse) => {
    if (debug3.isActivated)
      debug3("Response received", dataResponse);
    const { callId, functionReturn } = dataResponse;
    listeners.forEach((l2) => {
      if (callId !== l2.callId)
        return;
      l2.cb(functionReturn);
      listeners.splice(listeners.indexOf(l2), 1);
    });
  });
  const rpc = new Proxy({}, {
    get(_4, functionName) {
      return async (...functionArgs) => {
        const hot2 = import.meta.hot;
        assert(hot2);
        const callId = getRandomId();
        const { promise, resolve: resolve3 } = genPromise({ timeout: 3 * 1e3 });
        listeners.push({
          callId,
          cb: (functionReturn2) => {
            resolve3(functionReturn2);
          }
        });
        const dataRequest = { callId, functionName, functionArgs };
        if (debug3.isActivated)
          debug3("Request sent", dataRequest);
        await hot2.send("vike:rpc:request", dataRequest);
        const functionReturn = await promise;
        return functionReturn;
      };
    }
  });
  return rpc;
}
var globalObject3, debug3;
var init_getViteRPC = __esm({
  "node_modules/vike/dist/utils/getViteRPC.js"() {
    init_assert();
    init_genPromise();
    init_getRandomId();
    init_getGlobalObject();
    init_debug();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
    globalObject3 = getGlobalObject("utils/getViteRPC.ts", {
      rpc: null
    });
    debug3 = createDebug("vike:vite-rpc");
  }
});

// node_modules/vike/dist/utils/isRunnableDevEnvironment.js
function isRunnableDevEnvironment(environment) {
  return !!environment && "runner" in environment && !!environment.runner;
}
var init_isRunnableDevEnvironment = __esm({
  "node_modules/vike/dist/utils/isRunnableDevEnvironment.js"() {
  }
});

// node_modules/vike/dist/utils/catchInfiniteLoop.js
function catchInfiniteLoop(functionName, maxNumberOfCalls = 100, withinSeconds = 5) {
  const now = /* @__PURE__ */ new Date();
  let tracker = trackers[functionName] ?? (trackers[functionName] = createTracker(now));
  const elapsedTime = now.getTime() - tracker.start.getTime();
  if (elapsedTime > withinSeconds * 1e3)
    tracker = trackers[functionName] = createTracker(now);
  tracker.count++;
  const msg = `[Infinite Loop] Rendering ${tracker.count} times within ${withinSeconds} seconds [${functionName}]`;
  if (tracker.count > maxNumberOfCalls) {
    assertUsage(false, msg);
  }
  if (!tracker.warned && tracker.count > maxNumberOfCalls * 0.5) {
    assertWarning2(false, msg, { onlyOnce: false, showStackTrace: true });
    tracker.warned = true;
  }
}
function createTracker(now) {
  const tracker = {
    count: 0,
    start: now
  };
  return tracker;
}
var trackers;
var init_catchInfiniteLoop = __esm({
  "node_modules/vike/dist/utils/catchInfiniteLoop.js"() {
    init_assert();
    trackers = {};
  }
});

// node_modules/vike/dist/utils/shallowClone.js
function shallowClone(obj) {
  if (!isObject(obj))
    return obj;
  const clone = Object.create(Object.getPrototypeOf(obj));
  Object.defineProperties(clone, Object.getOwnPropertyDescriptors(obj));
  return clone;
}
var init_shallowClone = __esm({
  "node_modules/vike/dist/utils/shallowClone.js"() {
    init_isObject();
  }
});

// node_modules/vike/dist/utils/getBetterError.js
function getBetterError(err2, modifications) {
  const errOriginal = shallowClone(err2);
  let errBetter;
  if (!isObject(err2)) {
    warnMalformed(errOriginal);
    errBetter = new Error(String(err2));
  } else {
    errBetter = err2;
  }
  errBetter.message ?? (errBetter.message = "");
  if (!errBetter.stack) {
    warnMalformed(errOriginal);
    errBetter.stack = new Error(errBetter.message).stack;
  }
  const { message: modsMessage, ...mods } = modifications;
  Object.assign(errBetter, mods);
  if (typeof modsMessage === "string") {
    const messagePrev = errBetter.message;
    const messageNext = modsMessage;
    errBetter.message = messageNext;
    const messagePrevIdx = errBetter.stack.indexOf(messagePrev);
    if (messagePrevIdx >= 0) {
      const stack = errBetter.stack.slice(messagePrevIdx + messagePrev.length);
      errBetter.stack = messageNext + stack;
    } else {
      warnMalformed(errOriginal);
    }
  } else {
    if (modsMessage?.append) {
      const messagePrev = errBetter.message;
      const messageNext = errBetter.message + modsMessage.append;
      errBetter.message = messageNext;
      errBetter.stack = errBetter.stack.replace(messagePrev, messageNext);
    }
    if (modsMessage?.prepend) {
      const { prepend } = modsMessage;
      errBetter.message = prepend + errBetter.message;
      errBetter.stack = prepend + errBetter.stack;
    }
  }
  objectAssign(errBetter, { getOriginalError: () => errOriginal?.getOriginalError?.() ?? errOriginal });
  return errBetter;
}
function warnMalformed(errOriginal) {
  console.warn("Malformed error: ", errOriginal);
}
var init_getBetterError = __esm({
  "node_modules/vike/dist/utils/getBetterError.js"() {
    init_isObject();
    init_assertIsNotBrowser();
    init_objectAssign();
    init_shallowClone();
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/server/utils.js
var init_utils = __esm({
  "node_modules/vike/dist/server/utils.js"() {
    init_trackLogs();
    init_onLoad();
    init_assert();
    init_cast();
    init_checkType();
    init_isCallable();
    init_isBrowser();
    init_isPlainObject();
    init_isPromise();
    init_hasProp();
    init_parseUrl();
    init_parseUrl_extras();
    init_slice();
    init_sorter();
    init_isArray();
    init_isObject();
    init_objectAssign();
    init_objectAssignSafe();
    init_objectReplace();
    init_PromiseType();
    init_compareString();
    init_isObjectWithKeys();
    init_stringifyStringArray();
    init_unique();
    init_capitalizeFirstLetter();
    init_debugGlob();
    init_isSameErrorMessage();
    init_styleFileRE();
    init_isPropertyGetter();
    init_debug();
    init_urlToFile();
    init_getGlobalObject();
    init_freezePartial();
    init_parseNpmPackage();
    init_isNullish();
    init_isScriptFile();
    init_removeFileExtension();
    init_objectKeys();
    init_objectEntries();
    init_objectFromEntries();
    init_getFileExtension();
    init_assertSetup();
    init_path();
    init_isHtml();
    init_virtualFileId();
    init_colorsServer();
    init_colorsClient();
    init_getTerminalWidth();
    init_truncateString();
    init_formatHintLog();
    init_joinEnglish();
    init_isArrayOfStrings();
    init_escapeHtml();
    init_normalizeHeaders();
    init_isVikeReactApp();
    init_getPropAccessNotation();
    init_PROJECT_VERSION();
    init_genPromise();
    init_updateType();
    init_changeEnumerable();
    init_getViteRPC();
    init_isRunnableDevEnvironment();
    init_assertIsNotBrowser();
    init_isNonRunnableDevProcess();
    init_catchInfiniteLoop();
    init_getBetterError();
    onLoad();
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/createErrorWithCleanStackTrace.js
function createErrorWithCleanStackTrace2(errorMessage, numberOfStackTraceLinesToRemove2) {
  const err2 = new Error(errorMessage);
  err2.stack = clean2(err2.stack, numberOfStackTraceLinesToRemove2);
  return err2;
}
function clean2(errStack, numberOfStackTraceLinesToRemove2) {
  if (!errStack) {
    return errStack;
  }
  const stackLines = splitByLine2(errStack);
  let linesRemoved = 0;
  const stackLine__cleaned = stackLines.filter((line) => {
    if (line.includes(" (internal/") || line.includes(" (node:internal")) {
      return false;
    }
    if (linesRemoved < numberOfStackTraceLinesToRemove2 && isStackTraceLine2(line)) {
      linesRemoved++;
      return false;
    }
    return true;
  }).join("\n");
  return stackLine__cleaned;
}
function isStackTraceLine2(line) {
  return line.startsWith("    at ");
}
function splitByLine2(str) {
  return str.split(/\r?\n/);
}
var init_createErrorWithCleanStackTrace2 = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/createErrorWithCleanStackTrace.js"() {
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/PROJECT_VERSION.js
var PROJECT_VERSION2;
var init_PROJECT_VERSION2 = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/PROJECT_VERSION.js"() {
    PROJECT_VERSION2 = "0.7.15";
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/projectInfo.js
var projectInfo;
var init_projectInfo = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/projectInfo.js"() {
    init_PROJECT_VERSION2();
    projectInfo = {
      projectName: "@brillout/vite-plugin-server-entry",
      npmPackageName: "@brillout/vite-plugin-server-entry",
      projectVersion: PROJECT_VERSION2,
      githubRepository: "https://github.com/brillout/vite-plugin-server-entry"
    };
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/assert.js
function assert2(condition, debugInfo) {
  if (condition) {
    return;
  }
  const debugStr = (() => {
    if (!debugInfo) {
      return null;
    }
    const debugInfoSerialized = typeof debugInfo === "string" ? debugInfo : "`" + JSON.stringify(debugInfo) + "`";
    return `Debug info (this is for the ${projectInfo.projectName} maintainers; you can ignore this): ${debugInfoSerialized}`;
  })();
  const internalError = createErrorWithCleanStackTrace2([
    `${internalErrorPrefix} You stumbled upon a bug in the source code of ${projectInfo.projectName}.`,
    `Reach out at ${projectInfo.githubRepository}/issues/new and include this error stack (the error stack is usually enough to fix the problem).`,
    "A maintainer will fix the bug (usually under 24 hours).",
    `Don't hesitate to reach out as it makes ${projectInfo.projectName} more robust.`,
    debugStr
  ].filter(Boolean).join(" "), numberOfStackTraceLinesToRemove);
  throw internalError;
}
function assertUsage2(condition, errorMessage) {
  if (condition) {
    return;
  }
  const errMsg = `${usageErrorPrefix} ${errorMessage}`;
  const usageError = createErrorWithCleanStackTrace2(errMsg, numberOfStackTraceLinesToRemove);
  throw usageError;
}
var logLabel, internalErrorPrefix, usageErrorPrefix, numberOfStackTraceLinesToRemove;
var init_assert2 = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/assert.js"() {
    init_createErrorWithCleanStackTrace2();
    init_projectInfo();
    logLabel = `[${projectInfo.npmPackageName}@${projectInfo.projectVersion}]`;
    internalErrorPrefix = `${logLabel}[Bug]`;
    usageErrorPrefix = `${logLabel}[Wrong Usage]`;
    numberOfStackTraceLinesToRemove = 2;
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/filesystemPathHandling.js
function toPosixPath2(path) {
  if (isPosix()) {
    assertPosixPath2(path);
    return path;
  }
  if (isWin32()) {
    const pathPosix = path.split(sepWin32).join(sepPosix);
    assertPosixPath2(pathPosix);
    return pathPosix;
  }
  assert2(false);
}
function assertPosixPath2(path) {
  assert2(path && !path.includes(sepWin32), `Wrongly formatted path: ${path}`);
}
function isWin32() {
  return process.platform === "win32";
}
function isPosix() {
  return !isWin32();
}
var sepPosix, sepWin32;
var init_filesystemPathHandling = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/filesystemPathHandling.js"() {
    init_assert2();
    sepPosix = "/";
    sepWin32 = "\\";
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/getCwdSafe.js
function getCwdSafe() {
  if (typeof process == "undefined" || !("cwd" in process))
    return null;
  return toPosixPath2(process.cwd());
}
var init_getCwdSafe = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/getCwdSafe.js"() {
    init_filesystemPathHandling();
  }
});

// node_modules/@brillout/import/dist/esm/index.js
function import_(id) {
  id = fixWindowsBug(id);
  return import(
    /*webpackIgnore: true*/
    id
  );
}
function fixWindowsBug(id) {
  if (process.platform === "win32" && isAbsolute(id) && !id.startsWith(prefix)) {
    return prefix + id;
  } else {
    return id;
  }
}
function isAbsolute(path) {
  return /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/.test(path);
}
var prefix;
var init_esm = __esm({
  "node_modules/@brillout/import/dist/esm/index.js"() {
    prefix = "file://";
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/requireResolve.js
async function requireResolve(id, currentFilePath) {
  const req = await getRequire(currentFilePath);
  return req.resolve(id);
}
async function getRequire(currentFilePath) {
  const { createRequire } = await import_("module");
  const req = createRequire(currentFilePath);
  return req;
}
var init_requireResolve = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/requireResolve.js"() {
    init_esm();
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/isWebpackResolve.js
function isWebpackResolve(moduleResolve, cwd) {
  assert2(process);
  return (
    // Upon `require.resolve()` webpack returns a number
    typeof moduleResolve === "number" || // Upon `import.meta.resolve()` webpack returns a path such as /test/webpack/dist/server/entry.mjs which seems to be relative to the monorepo root
    getFirstDir(moduleResolve) !== getFirstDir(cwd) || // `import.meta.resolve()` + windows => webpack returns file:///D:/test/webpack/dist/server/entry.mjs
    process.platform === "win32" && getSecondDir(moduleResolve) !== getSecondDir(cwd)
  );
}
function getFirstDir(path) {
  return getDirs(path)[0];
}
function getSecondDir(path) {
  return getDirs(path)[1];
}
function getDirs(path) {
  assert2(!path.startsWith("file:"));
  return toPosixPath2(path).split("/").filter(Boolean);
}
var init_isWebpackResolve = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/isWebpackResolve.js"() {
    init_assert2();
    init_filesystemPathHandling();
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/utils.js
var init_utils2 = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/utils.js"() {
    init_assert2();
    init_getCwdSafe();
    init_filesystemPathHandling();
    init_requireResolve();
    init_isWebpackResolve();
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/shared/utils.js
var init_utils3 = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/shared/utils.js"() {
    init_assert2();
    init_getCwdSafe();
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/shared/debug.js
function logDebug(...msgs) {
  console.log(`${logLabel}[DEBUG]`, ...msgs);
}
function getDEBUG2() {
  let DEBUG3;
  try {
    DEBUG3 = process.env.DEBUG;
  } catch {
  }
  return DEBUG3;
}
var DEBUG2, isDebug2;
var init_debug2 = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/shared/debug.js"() {
    init_utils3();
    DEBUG2 = getDEBUG2() ?? "";
    isDebug2 = DEBUG2.includes("vite-plugin-server-entry");
    if (isDebug2)
      Error.stackTraceLimit = Infinity;
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/debugLogsRuntime.js
function debugLogsRuntimePre(autoImporter) {
  if (!isDebug2)
    return;
  logDebug("DEBUG_LOGS_RUNTIME [begin]");
  try {
    logDebug("process.platform", JSON.stringify(process.platform));
  } catch {
    logDebug("process.platform", "undefined");
  }
  try {
    logDebug("process.release", JSON.stringify(process.release));
  } catch {
    logDebug("process.release", "undefined");
  }
  try {
    logDebug("navigator", JSON.stringify(navigator));
  } catch {
    logDebug("navigator", "undefined");
  }
  logDebug("cwd", getCwdSafe());
  logDebug("importer.status", autoImporter.status);
  if (autoImporter.status === "SET") {
    logDebug("importer.pluginVersion", autoImporter.pluginVersion);
    logDebug("importer.paths.autoImporterFilePathOriginal", autoImporter.paths.autoImporterFilePathOriginal);
    logDebug("importer.paths.autoImporterFilePathActual", autoImporter.paths.autoImporterFilePathActual);
    logDebug("importer.paths.serverEntryFilePathRelative", autoImporter.paths.serverEntryFilePathRelative);
    logDebug("importer.paths.serverEntryFilePathOriginal", autoImporter.paths.serverEntryFilePathOriginal);
    try {
      logDebug("importer.paths.serverEntryFilePathResolved()", autoImporter.paths.serverEntryFilePathResolved());
    } catch (err2) {
      logDebug("importer.paths.serverEntryFilePathResolved() error:", err2);
      logDebug("importer.paths.serverEntryFilePathResolved()", "ERRORED");
    }
  }
}
function debugLogsRuntimePost(info) {
  if (!isDebug2)
    return;
  for (var key in info)
    logDebug(key, info[key]);
  logDebug("DEBUG_LOGS_RUNTIME [end]");
}
var init_debugLogsRuntime = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/debugLogsRuntime.js"() {
    init_utils3();
    init_debug2();
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/shared/serverEntryFileNameBase.js
var serverEntryFileNameBase, serverEntryFileNameBaseAlternative;
var init_serverEntryFileNameBase = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/shared/serverEntryFileNameBase.js"() {
    serverEntryFileNameBase = "entry";
    serverEntryFileNameBaseAlternative = "entryLibraries";
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/shared/usageHints.js
var usageHintRollupEntryNames;
var init_usageHints = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/shared/usageHints.js"() {
    usageHintRollupEntryNames = "If you use rollupOptions.output.entryFileNames then make sure you don't change the file name of the production server entry";
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/crawlOutDir.js
async function crawlOutDir({ outDir, tolerateDoesNotExist, outFileSearch }) {
  let path;
  let fs2;
  try {
    path = await import_("path");
    fs2 = await import_("fs");
  } catch {
    return false;
  }
  const cwd = process.cwd();
  const isPathAbsolute = (p4) => {
    if (process.platform === "win32") {
      return path.win32.isAbsolute(p4);
    } else {
      return p4.startsWith("/");
    }
  };
  if (outDir) {
    assertPosixPath2(outDir);
    assert2(isPathAbsolute(outDir), outDir);
  } else {
    if (!cwd)
      return false;
    outDir = path.posix.join(cwd, "dist");
  }
  const outDirServer = path.posix.join(outDir, "server");
  const outDirServerExists = fs2.existsSync(outDirServer);
  if (!outDirServerExists)
    return false;
  const outFileNameList = [];
  outFileSearch.forEach((outFileNameBase) => {
    outFileNameList.push(...[
      //
      `${outFileNameBase}.mjs`,
      `${outFileNameBase}.js`,
      `${outFileNameBase}.cjs`
    ]);
  });
  let outFileFound;
  const getOutFilePath = (outFileName) => path.posix.join(outDirServer, outFileName);
  for (const outFileName of outFileNameList) {
    const outFilePath = getOutFilePath(outFileName);
    assert2(isPathAbsolute(outFilePath));
    let outFilePathResolved;
    try {
      outFilePathResolved = await requireResolve(
        outFilePath,
        // Since `outFilePath` is absolute, we can pass a wrong `currentFilePath` argument value.
        // - We avoid using `__filename` because it isn't defined when this file is included in an ESM bundle.
        // - We cannot use `import.meta.filename` (nor `import.meta.url`) because there doesn't seem to be a way to safely/conditionally access `import.meta`.
        cwd
      );
    } catch {
      continue;
    }
    assert2(outFilePathResolved);
    outFileFound = {
      outFilePath: outFilePathResolved,
      outFileName
    };
  }
  if (!outFileFound) {
    if (tolerateDoesNotExist) {
      return false;
    } else {
      assert2(outDirServerExists);
      assertUsage2(false, `The server production entry is missing. ${usageHintRollupEntryNames}. One of the following is expected to exist: 
${outFileNameList.map((outFileName) => `  ${getOutFilePath(outFileName)}`).join("\n")}`);
    }
  }
  assert2(outFileSearch.some((outFileNameBase) => outFileFound.outFileName.startsWith(outFileNameBase)));
  if (isWebpackResolve(outFileFound.outFilePath, cwd)) {
    return false;
  }
  return outFileFound.outFilePath;
}
var init_crawlOutDir = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/crawlOutDir.js"() {
    init_utils2();
    init_esm();
    init_usageHints();
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/autoImporter.js
var autoImporter_exports = {};
__export(autoImporter_exports, {
  status: () => status
});
var status;
var init_autoImporter = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/autoImporter.js"() {
    status = "DISABLED";
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/importServerProductionEntry.js
async function importServerProductionEntry(args = {}) {
  const autoImporter = await Promise.resolve().then(() => (init_autoImporter(), autoImporter_exports));
  debugLogsRuntimePre(autoImporter);
  let success = false;
  let requireError;
  let isOutsideOfCwd = null;
  if (autoImporter.status === "SET") {
    isOutsideOfCwd = isServerEntryOutsideOfCwd(autoImporter.paths);
    if (isOutsideOfCwd === false || isOutsideOfCwd === null) {
      try {
        await autoImporter.loadServerEntry();
        success = true;
      } catch (err2) {
        if (!isDebug2) {
          throw err2;
        } else {
          requireError = err2;
        }
      }
    }
  }
  if (!success) {
    const outFilePath = await crawlOutDir({
      ...args,
      outFileSearch: [serverEntryFileNameBase, serverEntryFileNameBaseAlternative]
    });
    if (outFilePath) {
      await import_(outFilePath);
      success = true;
    }
  }
  debugLogsRuntimePost({ success, requireError, isOutsideOfCwd, ...args });
  if (args.tolerateDoesNotExist) {
    return success;
  } else {
    assertUsage2(success, wrongUsageNotBuilt);
    return null;
  }
}
function isServerEntryOutsideOfCwd(paths) {
  const cwd = getCwdSafe();
  if (!cwd)
    return null;
  let serverEntryFilePath;
  try {
    serverEntryFilePath = paths.serverEntryFilePathResolved();
  } catch {
    return null;
  }
  serverEntryFilePath = removeFilePrefix(serverEntryFilePath);
  if (isWebpackResolve(serverEntryFilePath, cwd))
    return null;
  serverEntryFilePath = toPosixPath2(serverEntryFilePath);
  assertPosixPath2(cwd);
  return !serverEntryFilePath.startsWith(cwd);
}
function removeFilePrefix(filePath) {
  assert2(process);
  const filePrefix = process.platform === "win32" ? "file:///" : "file://";
  if (filePath.startsWith(filePrefix))
    filePath = filePath.slice(filePrefix.length);
  return filePath;
}
var wrongUsageNotBuilt;
var init_importServerProductionEntry = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/importServerProductionEntry.js"() {
    init_utils2();
    init_debugLogsRuntime();
    init_debug2();
    init_serverEntryFileNameBase();
    init_crawlOutDir();
    init_esm();
    wrongUsageNotBuilt = "The server production entry is missing. (Re-)build your app and try again. If you still get this error, then you need to manually import the server production entry, see https://github.com/brillout/vite-plugin-server-entry#manual-import";
  }
});

// node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/index.js
var init_runtime = __esm({
  "node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/index.js"() {
    init_importServerProductionEntry();
  }
});

// node_modules/vike/dist/shared-server-node/utils.js
var init_utils4 = __esm({
  "node_modules/vike/dist/shared-server-node/utils.js"() {
    init_utils();
  }
});

// node_modules/vike/dist/shared-server-node/extractAssetsQuery.js
function extractAssetsAddQuery(id) {
  const fileExtension = getFileExtension(id);
  if (!fileExtension || id.includes("virtual:vike:")) {
    return `${id}?${query}`;
  } else {
    if (!id.includes("?")) {
      return `${id}?${query}&lang.${fileExtension}`;
    } else {
      return id.replace("?", `?${query}&`);
    }
  }
}
function extractAssetsRemoveQuery(id) {
  if (!id.includes("?"))
    return id;
  const suffix = `?${query}`;
  assert(id.endsWith(query));
  return id.slice(0, -1 * suffix.length);
}
var query;
var init_extractAssetsQuery = __esm({
  "node_modules/vike/dist/shared-server-node/extractAssetsQuery.js"() {
    init_utils4();
    query = "extractAssets";
  }
});

// node_modules/vike/dist/shared-server-node/virtualFileId.js
function parseVirtualFileId(id) {
  id = removeVirtualFileIdPrefix(id);
  if (!id.startsWith(virtualFileIdGlobalEntryPrefix) && !id.startsWith(virtualFileIdPageEntryPrefix))
    return false;
  if (id.includes(virtualFileIdGlobalEntryPrefix)) {
    const isForClientSide = id !== virtualFileIdGlobalEntryServer;
    const isClientRouting = id === virtualFileIdGlobalEntryClientCR;
    return {
      type: "global-entry",
      isForClientSide,
      isClientRouting
    };
  }
  if (id.includes(virtualFileIdPageEntryPrefix)) {
    const idOriginal = id;
    id = extractAssetsRemoveQuery(id);
    const isExtractAssets = idOriginal !== id;
    if (id.startsWith(virtualFileIdPageEntryClient)) {
      assert(isExtractAssets === false);
      const pageIdSerialized = id.slice(virtualFileIdPageEntryClient.length);
      const pageId = deserializePageId(pageIdSerialized);
      return {
        type: "page-entry",
        pageId,
        isForClientSide: true,
        isExtractAssets
      };
    }
    if (id.startsWith(virtualFileIdPageEntryServer)) {
      const pageIdSerialized = id.slice(virtualFileIdPageEntryServer.length);
      const pageId = deserializePageId(pageIdSerialized);
      return {
        type: "page-entry",
        pageId,
        isForClientSide: false,
        isExtractAssets
      };
    }
    assert(false);
  }
  return false;
}
function generateVirtualFileId(args) {
  if (args.type === "global-entry") {
    const { isForClientSide, isClientRouting } = args;
    if (!isForClientSide) {
      return virtualFileIdGlobalEntryServer;
    } else if (isClientRouting) {
      return virtualFileIdGlobalEntryClientCR;
    } else {
      return virtualFileIdGlobalEntryClientSR;
    }
  }
  if (args.type === "page-entry") {
    const { pageId, isForClientSide } = args;
    const pageIdSerialized = serializePageId(pageId);
    const id = `${isForClientSide ? virtualFileIdPageEntryClient : virtualFileIdPageEntryServer}${pageIdSerialized}`;
    return id;
  }
  assert(false);
}
function serializePageId(pageId) {
  return pageId === "/" ? ROOT : pageId;
}
function deserializePageId(pageId) {
  return pageId === ROOT ? "/" : pageId;
}
var virtualFileIdGlobalEntryServer, virtualFileIdGlobalEntryClientSR, virtualFileIdGlobalEntryClientCR, virtualFileIdPageEntryClient, virtualFileIdPageEntryServer, virtualFileIdPageEntryPrefix, virtualFileIdGlobalEntryPrefix, ROOT;
var init_virtualFileId2 = __esm({
  "node_modules/vike/dist/shared-server-node/virtualFileId.js"() {
    init_extractAssetsQuery();
    init_utils4();
    assertIsNotBrowser();
    virtualFileIdGlobalEntryServer = //
    "virtual:vike:global-entry:server";
    virtualFileIdGlobalEntryClientSR = //
    "virtual:vike:global-entry:client:server-routing";
    virtualFileIdGlobalEntryClientCR = //
    "virtual:vike:global-entry:client:client-routing";
    virtualFileIdPageEntryClient = //
    "virtual:vike:page-entry:client:";
    virtualFileIdPageEntryServer = //
    "virtual:vike:page-entry:server:";
    virtualFileIdPageEntryPrefix = //
    "virtual:vike:page-entry:";
    virtualFileIdGlobalEntryPrefix = //
    "virtual:vike:global-entry:";
    ROOT = "ROOT";
  }
});

// node_modules/vike/dist/utils/getValuePrintable.js
function getValuePrintable(value) {
  if ([null, void 0].includes(value))
    return String(value);
  if (["boolean", "number", "string"].includes(typeof value))
    return JSON.stringify(value);
  return null;
}
var init_getValuePrintable = __esm({
  "node_modules/vike/dist/utils/getValuePrintable.js"() {
  }
});

// node_modules/vike/dist/utils/escapeRegex.js
function escapeRegex(str) {
  return str.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
}
var init_escapeRegex = __esm({
  "node_modules/vike/dist/utils/escapeRegex.js"() {
  }
});

// node_modules/vike/dist/utils/objectDefineProperty.js
function objectDefineProperty(obj, prop, { get, ...args }) {
  Object.defineProperty(obj, prop, { ...args, get });
}
var init_objectDefineProperty = __esm({
  "node_modules/vike/dist/utils/objectDefineProperty.js"() {
  }
});

// node_modules/vike/dist/utils/objectFilter.js
function objectFilter(obj, filter) {
  return Object.fromEntries(Object.entries(obj).filter(filter));
}
var init_objectFilter = __esm({
  "node_modules/vike/dist/utils/objectFilter.js"() {
  }
});

// node_modules/vike/dist/shared-server-client/utils.js
var init_utils5 = __esm({
  "node_modules/vike/dist/shared-server-client/utils.js"() {
    init_assert();
    init_parseUrl();
    init_objectAssign();
    init_objectReplace();
    init_isCallable();
    init_isObject();
    init_unique();
    init_slice();
    init_sorter();
    init_isBrowser();
    init_hasProp();
    init_isPlainObject();
    init_compareString();
    init_isNullish();
    init_stringifyStringArray();
    init_cast();
    init_isPropertyGetter();
    init_isPromise();
    init_checkType();
    init_getValuePrintable();
    init_escapeRegex();
    init_isArray();
    init_changeEnumerable();
    init_objectDefineProperty();
    init_isScriptFile();
    init_objectFilter();
    init_getPropAccessNotation();
    init_getGlobalObject();
    init_genPromise();
  }
});

// node_modules/vike/dist/shared-server-client/error-page.js
function getErrorPageId(pageFilesAll, pageConfigs) {
  if (pageConfigs.length > 0) {
    const errorPageConfigs = pageConfigs.filter((p4) => p4.isErrorPage);
    if (errorPageConfigs.length === 0)
      return null;
    assertUsage(errorPageConfigs.length === 1, "Only one error page can be defined");
    return errorPageConfigs[0].pageId;
  }
  const errorPageIds = unique(pageFilesAll.map(({ pageId }) => pageId).filter((pageId) => isErrorPageId(pageId, false)));
  assertUsage(errorPageIds.length <= 1, `Only one _error.page.js is allowed, but found several: ${errorPageIds.join(" ")}`);
  if (errorPageIds.length > 0) {
    const errorPageId = errorPageIds[0];
    assert(errorPageId);
    return errorPageId;
  }
  return null;
}
function isErrorPageId(pageId, _isV1Design) {
  assert(!pageId.includes("\\"));
  return pageId.includes("/_error");
}
function isErrorPage(pageId, pageConfigs) {
  if (pageConfigs.length > 0) {
    const pageConfig = pageConfigs.find((p4) => p4.pageId === pageId);
    assert(pageConfig);
    return !!pageConfig.isErrorPage;
  } else {
    return isErrorPageId(pageId, false);
  }
}
var init_error_page = __esm({
  "node_modules/vike/dist/shared-server-client/error-page.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/utils/assertRoutingType.js
function assertClientRouting() {
  assertNoContradiction(checkIfClientRouting());
  state.isClientRouting = true;
}
function checkIfClientRouting() {
  return state.isClientRouting !== false;
}
function assertNoContradiction(noContradiction) {
  assertUsage(isBrowser2(), `${picocolors_default.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`, { showStackTrace: true });
  assertWarning2(noContradiction, "You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.", { showStackTrace: true, onlyOnce: true });
}
var state;
var init_assertRoutingType = __esm({
  "node_modules/vike/dist/utils/assertRoutingType.js"() {
    init_assert();
    init_getGlobalObject();
    init_isBrowser();
    init_picocolors();
    state = getGlobalObject("utils/assertRouterType.ts", {});
  }
});

// node_modules/vike/dist/shared-server-client/route/utils.js
var init_utils6 = __esm({
  "node_modules/vike/dist/shared-server-client/route/utils.js"() {
    init_assertRoutingType();
    init_isBrowser();
    init_assert();
    init_hasProp();
    init_isObjectWithKeys();
    init_sorter();
    init_isPromise();
    init_isPlainObject();
    init_objectAssign();
    init_slice();
    init_unique();
    init_isBrowser();
    init_parseUrl();
    init_checkType();
    init_joinEnglish();
    init_truncateString();
    init_isCallable();
    init_debug();
    if (isBrowser2()) {
      assertClientRouting();
    }
  }
});

// node_modules/vike/dist/shared-server-client/route/deduceRouteStringFromFilesystemPath.js
function deduceRouteStringFromFilesystemPath(pageId, filesystemRoots) {
  const filesystemRootsMatch = filesystemRoots.filter(({ filesystemRoot }) => pageId.startsWith(filesystemRoot)).sort(higherFirst(({ filesystemRoot }) => filesystemRoot.length));
  const fsBase = filesystemRootsMatch[0];
  let filesystemRoute;
  if (fsBase) {
    const { filesystemRoot, urlRoot } = fsBase;
    const debugInfo = { pageId, filesystemRoot, urlRoot };
    assert(urlRoot.startsWith("/") && pageId.startsWith("/") && filesystemRoot.startsWith("/"), debugInfo);
    assert(pageId.startsWith(filesystemRoot), debugInfo);
    if (filesystemRoot !== "/") {
      assert(!filesystemRoot.endsWith("/"), debugInfo);
      filesystemRoute = slice(pageId, filesystemRoot.length, 0);
    } else {
      filesystemRoute = pageId;
    }
    assert(filesystemRoute.startsWith("/"), debugInfo);
    filesystemRoute = urlRoot + (urlRoot.endsWith("/") ? "" : "/") + slice(filesystemRoute, 1, 0);
  } else {
    filesystemRoute = pageId;
  }
  assert(filesystemRoute.startsWith("/"));
  filesystemRoute = filesystemRoute.split("/").filter((dir) => dir !== "pages" && dir !== "src" && dir !== "index").join("/");
  assert(!filesystemRoute.includes(".page."));
  assert(!filesystemRoute.endsWith("."));
  if (filesystemRoute.endsWith("/index")) {
    filesystemRoute = slice(filesystemRoute, 0, -"/index".length);
  }
  if (filesystemRoute === "") {
    filesystemRoute = "/";
  }
  assert(filesystemRoute.startsWith("/"));
  assert(!filesystemRoute.endsWith("/") || filesystemRoute === "/");
  return filesystemRoute;
}
var init_deduceRouteStringFromFilesystemPath = __esm({
  "node_modules/vike/dist/shared-server-client/route/deduceRouteStringFromFilesystemPath.js"() {
    init_utils6();
  }
});

// node_modules/vike/dist/shared-server-client/page-configs/getExportPath.js
function getExportPath(fileExportPathToShowToUser, configName) {
  if (!fileExportPathToShowToUser)
    return null;
  let [exportName, ...exportObjectPath] = fileExportPathToShowToUser;
  if (!exportName)
    return null;
  if (exportObjectPath.length === 0 && ["*", "default", configName].includes(exportName))
    return null;
  assert(exportName !== "*");
  let prefix2 = "";
  let suffix = "";
  if (exportName === "default") {
    prefix2 = "export default";
  } else {
    prefix2 = "export";
    exportObjectPath = [exportName, ...exportObjectPath];
  }
  exportObjectPath.forEach((prop) => {
    prefix2 = `${prefix2} { ${prop}`;
    suffix = ` }${suffix}`;
  });
  const exportPath = prefix2 + suffix;
  return exportPath;
}
var init_getExportPath = __esm({
  "node_modules/vike/dist/shared-server-client/page-configs/getExportPath.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/shared-server-client/page-configs/getConfigDefinedAt.js
function getConfigDefinedAt(sentenceBegin, configName, definedAtData) {
  return `${begin(sentenceBegin, configName)} at ${getDefinedAtString(definedAtData, configName)}`;
}
function getConfigDefinedAtOptional(sentenceBegin, configName, definedAtData) {
  if (!definedAtData) {
    return `${begin(sentenceBegin, configName)} internally`;
  } else {
    return `${begin(sentenceBegin, configName)} at ${getDefinedAtString(definedAtData, configName)}`;
  }
}
function begin(sentenceBegin, configName) {
  return `${sentenceBegin} ${picocolors_default.cyan(configName)} defined`;
}
function getDefinedAtString(definedAtData, configName) {
  let files;
  if (isArray(definedAtData)) {
    files = definedAtData;
  } else {
    files = [definedAtData];
  }
  assert(files.length >= 1);
  const definedAtString = files.map((definedAt) => {
    if (definedAt.definedBy)
      return getDefinedByString(definedAt, configName);
    const { filePathToShowToUser, fileExportPathToShowToUser } = definedAt;
    const exportPath = getExportPath(fileExportPathToShowToUser, configName);
    if (exportPath) {
      return `${filePathToShowToUser} > ${picocolors_default.cyan(exportPath)}`;
    } else {
      return filePathToShowToUser;
    }
  }).join(" / ");
  return definedAtString;
}
function getDefinedByString(definedAt, configName) {
  if (definedAt.definedBy === "api") {
    return `API call ${picocolors_default.cyan(`${definedAt.operation}({ vikeConfig: { ${configName} } })`)}`;
  }
  const { definedBy } = definedAt;
  if (definedBy === "cli") {
    return `CLI option ${picocolors_default.cyan(`--${configName}`)}`;
  }
  if (definedBy === "env") {
    return `environment variable ${picocolors_default.cyan(`VIKE_CONFIG="{${configName}}"`)}`;
  }
  checkType(definedBy);
  assert(false);
}
var init_getConfigDefinedAt = __esm({
  "node_modules/vike/dist/shared-server-client/page-configs/getConfigDefinedAt.js"() {
    init_utils5();
    init_picocolors();
    init_getExportPath();
  }
});

// node_modules/vike/dist/shared-server-client/page-configs/getConfigValueTyped.js
function getConfigValueTyped(configValue, configName, type) {
  const { value, definedAtData } = configValue;
  if (type)
    assertConfigValueType(value, type, configName, definedAtData);
  return configValue;
}
function assertConfigValueType(value, type, configName, definedAtData) {
  assert(value !== null);
  const typeActual = typeof value;
  if (typeActual === type)
    return;
  const valuePrintable = getValuePrintable(value);
  const problem = valuePrintable !== null ? `value ${picocolors_default.cyan(valuePrintable)}` : `type ${picocolors_default.cyan(typeActual)}`;
  const configDefinedAt = getConfigDefinedAtOptional("Config", configName, definedAtData);
  const errMsg = `${configDefinedAt} has an invalid ${problem}: it should be a ${picocolors_default.cyan(type)} instead`;
  assertUsage(false, errMsg);
}
var init_getConfigValueTyped = __esm({
  "node_modules/vike/dist/shared-server-client/page-configs/getConfigValueTyped.js"() {
    init_utils5();
    init_picocolors();
    init_getConfigDefinedAt();
  }
});

// node_modules/vike/dist/shared-server-client/page-configs/getConfigValueRuntime.js
function getConfigValueRuntime(pageConfig, configName, type) {
  const configValue = pageConfig.configValues[configName];
  if (!configValue)
    return null;
  return getConfigValueTyped(configValue, configName, type);
}
var init_getConfigValueRuntime = __esm({
  "node_modules/vike/dist/shared-server-client/page-configs/getConfigValueRuntime.js"() {
    init_getConfigValueTyped();
  }
});

// node_modules/vike/dist/shared-server-client/page-configs/helpers.js
function getPageConfig(pageId, pageConfigs) {
  const pageConfig = pageConfigs.find((p4) => p4.pageId === pageId);
  assert(pageConfigs.length > 0);
  assert(pageConfig);
  return pageConfig;
}
function getConfigValueFilePathToShowToUser(definedAtData) {
  if (!definedAtData || isArray(definedAtData) || definedAtData.definedBy)
    return null;
  const { filePathToShowToUser } = definedAtData;
  assert(filePathToShowToUser);
  return filePathToShowToUser;
}
function getHookFilePathToShowToUser(definedAtData) {
  const filePathToShowToUser = getConfigValueFilePathToShowToUser(definedAtData);
  assert(filePathToShowToUser);
  return filePathToShowToUser;
}
var init_helpers = __esm({
  "node_modules/vike/dist/shared-server-client/page-configs/helpers.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/shared-server-client/hooks/getHook.js
function getHookFromPageContext(pageContext, hookName) {
  if (!(hookName in pageContext.exports)) {
    return null;
  }
  const { hooksTimeout } = pageContext.config;
  const hookTimeout = getHookTimeout(hooksTimeout, hookName);
  const hookFn = pageContext.exports[hookName];
  if (hookFn === null)
    return null;
  const file = pageContext.exportsAll[hookName][0];
  assert(file.exportValue === hookFn);
  const hookFilePath = file.filePath;
  assert(hookFilePath);
  return getHook(hookFn, hookName, hookFilePath, hookTimeout);
}
function getHookFromPageContextNew(hookName, pageContext) {
  const { hooksTimeout } = pageContext.config;
  const hookTimeout = getHookTimeout(hooksTimeout, hookName);
  const hooks = [];
  pageContext.exportsAll[hookName]?.forEach((val) => {
    const hookFn = val.exportValue;
    if (hookFn === null)
      return;
    const hookFilePath = val.filePath;
    assert(hookFilePath);
    hooks.push(getHook(hookFn, hookName, hookFilePath, hookTimeout));
  });
  return hooks;
}
function getHookFromPageConfigGlobal(pageConfigGlobal, hookName) {
  const configValue = pageConfigGlobal.configValues[hookName];
  if (!configValue?.value)
    return null;
  const { hookFn, hookFilePath } = getHookFromConfigValue(configValue);
  const hookTimeout = getHookTimeoutGlobal(hookName);
  return getHook(hookFn, hookName, hookFilePath, hookTimeout);
}
function getHookFromPageConfigGlobalCumulative(pageConfigGlobal, hookName) {
  const configValue = pageConfigGlobal.configValues[hookName];
  if (!configValue?.value)
    return [];
  const val = configValue.value;
  assert(isArray(val));
  return val.map((v2, i3) => {
    const hookFn = v2;
    const hookTimeout = getHookTimeoutGlobal(hookName);
    assert(isArray(configValue.definedAtData));
    const hookFilePath = getHookFilePathToShowToUser(configValue.definedAtData[i3]);
    return getHook(hookFn, hookName, hookFilePath, hookTimeout);
  });
}
function getHookTimeoutGlobal(hookName) {
  const hookTimeout = getHookTimeoutDefault(hookName);
  return hookTimeout;
}
function getHook(hookFn, hookName, hookFilePath, hookTimeout) {
  assert(hookFilePath);
  assertHookFn(hookFn, { hookName, hookFilePath });
  const hook = { hookFn, hookName, hookFilePath, hookTimeout };
  return hook;
}
function getHookFromConfigValue(configValue) {
  const hookFn = configValue.value;
  assert(hookFn);
  const hookFilePath = getHookFilePathToShowToUser(configValue.definedAtData);
  return { hookFn, hookFilePath };
}
function assertHookFn(hookFn, { hookName, hookFilePath }) {
  assert(hookName && hookFilePath);
  assert(!hookName.endsWith(")"));
  assert(!hookFilePath.endsWith(" "));
  assertUsage(isCallable(hookFn), `Hook ${hookName}() defined by ${hookFilePath} should be a function`);
  checkType(hookFn);
}
function getHookTimeout(hooksTimeoutProvidedByUser, hookName) {
  const hooksTimeoutProvidedbyUserNormalized = getHooksTimeoutProvidedByUserNormalized(hooksTimeoutProvidedByUser);
  if (hooksTimeoutProvidedbyUserNormalized === false)
    return { error: false, warning: false };
  const providedbyUser = hooksTimeoutProvidedbyUserNormalized[hookName];
  const hookTimeout = getHookTimeoutDefault(hookName);
  if (providedbyUser?.error !== void 0)
    hookTimeout.error = providedbyUser.error;
  if (providedbyUser?.warning !== void 0)
    hookTimeout.warning = providedbyUser.warning;
  return hookTimeout;
}
function getHooksTimeoutProvidedByUserNormalized(hooksTimeoutProvidedByUser) {
  if (hooksTimeoutProvidedByUser === void 0)
    return {};
  if (hooksTimeoutProvidedByUser === false)
    return false;
  assertUsage(isObject(hooksTimeoutProvidedByUser), `Setting ${picocolors_default.cyan("hooksTimeout")} should be ${picocolors_default.cyan("false")} or an object`);
  const hooksTimeoutProvidedByUserNormalized = {};
  Object.entries(hooksTimeoutProvidedByUser).forEach(([hookName, hookTimeoutProvidedbyUser]) => {
    if (hookTimeoutProvidedbyUser === false) {
      hooksTimeoutProvidedByUserNormalized[hookName] = { error: false, warning: false };
      return;
    }
    assertUsage(isObject(hookTimeoutProvidedbyUser), `Setting ${picocolors_default.cyan(`hooksTimeout.${hookName}`)} should be ${picocolors_default.cyan("false")} or an object`);
    const [error, warning] = ["error", "warning"].map((timeoutName) => {
      const timeoutVal = hookTimeoutProvidedbyUser[timeoutName];
      if (timeoutVal === void 0 || timeoutVal === false)
        return timeoutVal;
      const errPrefix = `Setting ${picocolors_default.cyan(`hooksTimeout.${hookName}.${timeoutName}`)} should be`;
      assertUsage(typeof timeoutVal === "number", `${errPrefix} ${picocolors_default.cyan("false")} or a number`);
      assertUsage(timeoutVal > 0, `${errPrefix} a positive number`);
      return timeoutVal;
    });
    hooksTimeoutProvidedByUserNormalized[hookName] = { error, warning };
  });
  return hooksTimeoutProvidedByUserNormalized;
}
function getHookTimeoutDefault(hookName) {
  if (hookName === "onBeforeRoute") {
    return {
      error: 5 * 1e3,
      warning: 1 * 1e3
    };
  }
  if (globalObject4.isPrerendering) {
    return {
      error: 2 * 60 * 1e3,
      warning: 30 * 1e3
    };
  } else {
    assert(!hookName.toLowerCase().includes("prerender"));
  }
  return {
    error: 30 * 1e3,
    warning: 4 * 1e3
  };
}
var globalObject4;
var init_getHook = __esm({
  "node_modules/vike/dist/shared-server-client/hooks/getHook.js"() {
    init_getGlobalObject();
    init_helpers();
    init_getConfigValueRuntime();
    init_utils5();
    init_picocolors();
    globalObject4 = getGlobalObject("hooks/getHook.ts", {});
  }
});

// node_modules/vike/dist/shared-server-client/addIs404ToPageProps.js
function addIs404ToPageProps(pageContext) {
  addIs404(pageContext);
}
function addIs404(pageContext) {
  if (pageContext.is404 === void 0 || pageContext.is404 === null)
    return;
  const pageProps = pageContext.pageProps || {};
  if (!isObject(pageProps)) {
    assertWarning2(false, "pageContext.pageProps should be an object", { showStackTrace: true, onlyOnce: true });
    return;
  }
  pageProps.is404 = pageProps.is404 || pageContext.is404;
  pageContext.pageProps = pageProps;
}
var init_addIs404ToPageProps = __esm({
  "node_modules/vike/dist/shared-server-client/addIs404ToPageProps.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/shared-server-client/NOT_SERIALIZABLE.js
var NOT_SERIALIZABLE;
var init_NOT_SERIALIZABLE = __esm({
  "node_modules/vike/dist/shared-server-client/NOT_SERIALIZABLE.js"() {
    NOT_SERIALIZABLE = "__VIKE__NOT_SERIALIZABLE__";
  }
});

// node_modules/vike/dist/shared-server-client/getProxyForPublicUsage.js
function getProxyForPublicUsage(obj, objName, skipOnInternalProp, fallback) {
  return new Proxy(obj, {
    get: (_4, prop) => getProp(prop, obj, objName, skipOnInternalProp, fallback)
  });
}
function getProp(prop, ...args) {
  const [obj, objName, skipOnInternalProp, fallback] = args;
  const propStr = String(prop);
  if (prop === "_isProxyObject")
    return true;
  if (prop === "dangerouslyUseInternals") {
    args[2] = true;
    return getProxyForPublicUsage(...args);
  }
  if (!skipOnInternalProp) {
    if (!globalThis.__VIKE__IS_CLIENT)
      onInternalProp(propStr, objName);
  }
  if (prop === "_originalObject")
    return obj;
  if (fallback && !(prop in obj)) {
    return fallback(prop);
  }
  const val = obj[prop];
  onNotSerializable(propStr, val, objName);
  return val;
}
function onNotSerializable(propStr, val, objName) {
  if (val !== NOT_SERIALIZABLE)
    return;
  const propName = getPropAccessNotation(propStr);
  assert(isBrowser2());
  assertUsage(false, `Can't access ${objName}${propName} on the client side. Because it can't be serialized, see server logs.`);
}
function onInternalProp(propStr, objName) {
  assert(!isBrowser2());
  if (propStr === "_configFromHook")
    return;
  if (propStr.startsWith("_")) {
    assertWarning2(false, `Using internal ${objName}.${propStr} \u2014 https://vike.dev/warning/internals`, {
      onlyOnce: true,
      showStackTrace: true
    });
  }
}
var init_getProxyForPublicUsage = __esm({
  "node_modules/vike/dist/shared-server-client/getProxyForPublicUsage.js"() {
    init_NOT_SERIALIZABLE();
    init_utils5();
  }
});

// node_modules/vike/dist/shared-server-client/prepareGlobalContextForPublicUsage.js
function prepareGlobalContextForPublicUsage(globalContext2) {
  assert(globalContext2._isOriginalObject);
  const globalContextPublic = getProxyForPublicUsage(globalContext2, "globalContext");
  return globalContextPublic;
}
var init_prepareGlobalContextForPublicUsage = __esm({
  "node_modules/vike/dist/shared-server-client/prepareGlobalContextForPublicUsage.js"() {
    init_getProxyForPublicUsage();
    init_utils5();
  }
});

// node_modules/vike/dist/shared-server-client/preparePageContextForPublicUsage.js
function preparePageContextForPublicUsage(pageContext) {
  assert(!pageContext._isProxyObject);
  assert(!pageContext.globalContext);
  assert(pageContext._isOriginalObject);
  addIs404ToPageProps(pageContext);
  if (!("_pageId" in pageContext)) {
    Object.defineProperty(pageContext, "_pageId", {
      get() {
        assertWarning2(false, "pageContext._pageId has been renamed to pageContext.pageId", {
          showStackTrace: true,
          onlyOnce: true
        });
        return pageContext.pageId;
      },
      enumerable: false
    });
  }
  sortPageContext(pageContext);
  const globalContextPublic = prepareGlobalContextForPublicUsage(pageContext._globalContext);
  const pageContextPublic = getProxyForPublicUsage(
    pageContext,
    "pageContext",
    // We must skip it in the client-side because of the reactivity mechanism of UI frameworks like Solid.
    // - TO-DO/soon/proxy: double check whether that's true
    true,
    (prop) => {
      if (prop === "globalContext") {
        return globalContextPublic;
      }
      if (prop in globalContextPublic) {
        return globalContextPublic[prop];
      }
    }
  );
  return pageContextPublic;
}
function sortPageContext(pageContext) {
  let descriptors = Object.getOwnPropertyDescriptors(pageContext);
  for (const key of Object.keys(pageContext))
    delete pageContext[key];
  descriptors = Object.fromEntries(Object.entries(descriptors).sort(([key1], [key2]) => compareString(key1, key2)));
  Object.defineProperties(pageContext, descriptors);
}
function assertPropertyGetters(pageContext) {
  ;
  [
    "urlPathname",
    // TO-DO/next-major-release: remove
    "urlParsed",
    // TO-DO/next-major-release: remove
    "url",
    // TO-DO/next-major-release: remove
    "pageExports"
  ].forEach((prop) => {
    if (pageContext.prop)
      assert(isPropertyGetter(pageContext, prop));
  });
}
var init_preparePageContextForPublicUsage = __esm({
  "node_modules/vike/dist/shared-server-client/preparePageContextForPublicUsage.js"() {
    init_utils5();
    init_addIs404ToPageProps();
    init_prepareGlobalContextForPublicUsage();
    init_getProxyForPublicUsage();
  }
});

// node_modules/vike/dist/shared-server-client/hooks/execHook.js
async function execHookGlobal(hookName, pageConfigGlobal, pageContext, hookArg, prepareForPublicUsage) {
  const hooks = getHookFromPageConfigGlobalCumulative(pageConfigGlobal, hookName);
  const hookArgForPublicUsage = prepareForPublicUsage(hookArg);
  await Promise.all(hooks.map(async (hook) => {
    await execHookDirectAsync(() => hook.hookFn(hookArgForPublicUsage), hook, pageContext);
  }));
}
async function execHookDirect(hooks, pageContext, preparePageContextForPublicUsage2) {
  if (!hooks.length)
    return [];
  const pageContextForPublicUsage = preparePageContextForPublicUsage2(pageContext);
  const hooksWithResult = await Promise.all(hooks.map(async (hook) => {
    const hookReturn = await execHookDirectAsync(() => hook.hookFn(pageContextForPublicUsage), hook, pageContextForPublicUsage);
    return { ...hook, hookReturn };
  }));
  return hooksWithResult;
}
async function execHookDirectSingle(hook, pageContext, preparePageContextForPublicUsage2) {
  const hooksWithResult = await execHookDirect([hook], pageContext, preparePageContextForPublicUsage2);
  const { hookReturn } = hooksWithResult[0];
  assertUsage(hookReturn === void 0, `The ${hook.hookName}() hook defined by ${hook.hookFilePath} isn't allowed to return a value`);
}
async function execHookDirectSingleWithReturn(hook, pageContext, preparePageContextForPublicUsage2) {
  const hooksWithResult = await execHookDirect([hook], pageContext, preparePageContextForPublicUsage2);
  const { hookReturn } = hooksWithResult[0];
  return { hookReturn };
}
function isUserHookError(err2) {
  if (!isObject(err2))
    return false;
  return globalObject5.userHookErrors.get(err2) ?? false;
}
function execHookDirectAsync(hookFnCaller, hook, pageContextForPublicUsage) {
  const { hookName, hookFilePath, hookTimeout: { error: timeoutErr, warning: timeoutWarn } } = hook;
  let resolve3;
  let reject;
  const promise = new Promise((resolve_, reject_) => {
    resolve3 = (ret) => {
      clearTimeouts();
      resolve_(ret);
    };
    reject = (err2) => {
      clearTimeouts();
      reject_(err2);
    };
  });
  const clearTimeouts = () => {
    if (currentTimeoutWarn)
      clearTimeout(currentTimeoutWarn);
    if (currentTimeoutErr)
      clearTimeout(currentTimeoutErr);
  };
  const currentTimeoutWarn = isNotDisabled(timeoutWarn) && setTimeout(() => {
    assertWarning2(false, `The ${hookName}() hook defined by ${hookFilePath} is slow: it's taking more than ${humanizeTime(timeoutWarn)} (https://vike.dev/hooksTimeout)`, { onlyOnce: false });
  }, timeoutWarn);
  const currentTimeoutErr = isNotDisabled(timeoutErr) && setTimeout(() => {
    const err2 = getProjectError(`The ${hookName}() hook defined by ${hookFilePath} timed out: it didn't finish after ${humanizeTime(timeoutErr)} (https://vike.dev/hooksTimeout)`);
    reject(err2);
  }, timeoutErr);
  (async () => {
    try {
      providePageContextInternal(pageContextForPublicUsage);
      const ret = await hookFnCaller();
      resolve3(ret);
    } catch (err2) {
      if (isObject(err2)) {
        globalObject5.userHookErrors.set(err2, { hookName, hookFilePath });
      }
      reject(err2);
    }
  })();
  return promise;
}
function execHookDirectSync(hook, pageContext, preparePageContextForPublicUsage2) {
  const pageContextForPublicUsage = preparePageContextForPublicUsage2(pageContext);
  providePageContextInternal(pageContextForPublicUsage);
  const hookReturn = hook.hookFn(pageContextForPublicUsage);
  return { hookReturn };
}
function isNotDisabled(timeout) {
  return !!timeout && timeout !== Infinity;
}
function getPageContext_sync() {
  const { pageContext } = globalObject5;
  if (!pageContext)
    return null;
  const pageContextForPublicUsage = pageContext._isProxyObject ? (
    // providePageContext() is called on the user-land (e.g. it's called by `vike-{react,vue,solid}`) thus it's already a proxy
    pageContext
  ) : preparePageContextForPublicUsage(pageContext);
  return pageContextForPublicUsage;
}
function providePageContextInternal(pageContext) {
  globalObject5.pageContext = pageContext;
  Promise.resolve().then(() => {
    globalObject5.pageContext = null;
  });
}
var globalObject5;
var init_execHook = __esm({
  "node_modules/vike/dist/shared-server-client/hooks/execHook.js"() {
    init_assert();
    init_getGlobalObject();
    init_humanizeTime();
    init_isObject();
    init_getHook();
    init_preparePageContextForPublicUsage();
    globalObject5 = getGlobalObject("utils/execHook.ts", {
      userHookErrors: /* @__PURE__ */ new WeakMap(),
      pageContext: null
    });
  }
});

// node_modules/vike/dist/shared-server-client/route/resolveRouteFunction.js
async function resolveRouteFunction(routeFunction, pageContext, routeFunctionFilePath) {
  let { hookReturn: result } = execHookDirectSync({
    hookFn: routeFunction,
    hookFilePath: routeFunctionFilePath,
    hookName: "route"
  }, pageContext, preparePageContextForPublicUsage);
  assertSyncRouting(result, `The Route Function ${routeFunctionFilePath}`);
  result = await result;
  if (result === false) {
    return null;
  }
  if (result === true) {
    result = {};
  }
  assertUsage(isPlainObject(result), `The Route Function ${routeFunctionFilePath} should return a boolean or a plain JavaScript object (but it's ${picocolors_default.cyan(`typeof result === ${JSON.stringify(typeof result)}`)} instead)`);
  if ("match" in result) {
    const { match: match2 } = result;
    assertUsage(typeof match2 === "boolean", `The ${picocolors_default.cyan("match")} value returned by the Route Function ${routeFunctionFilePath} should be a boolean.`);
    if (!match2) {
      return null;
    }
  }
  let precedence = null;
  if ("precedence" in result) {
    precedence = result.precedence;
    assertUsage(typeof precedence === "number", `The ${picocolors_default.cyan("precedence")} value returned by the Route Function ${routeFunctionFilePath} should be a number.`);
  }
  assertRouteParams(result, `The ${picocolors_default.cyan("routeParams")} object returned by the Route Function ${routeFunctionFilePath} should`);
  const routeParams = result.routeParams || {};
  assertUsage(!("pageContext" in result), `Providing ${picocolors_default.cyan("pageContext")} in Route Functions is prohibited, see https://vike.dev/route-function#cannot-provide-pagecontext`);
  assert(isPlainObject(routeParams));
  Object.keys(result).forEach((key) => {
    assertUsage(key === "match" || key === "routeParams" || key === "precedence", `The Route Function ${routeFunctionFilePath} returned an object with an unknown property ${picocolors_default.cyan(key)} (the known properties are ${picocolors_default.cyan("match")}, ${picocolors_default.cyan("routeParams")}, and ${picocolors_default.cyan("precedence")})`);
  });
  return {
    precedence,
    routeParams
  };
}
function assertSyncRouting(res, errPrefix) {
  assertWarning2(!isPromise(res), `${errPrefix} returned a promise, but asynchronous routing is deprecated and will be removed in the next major release, see https://vike.dev/route-function#async`, { onlyOnce: true });
}
function warnDeprecatedAllowKey() {
  const allowKey = picocolors_default.cyan("iKnowThePerformanceRisksOfAsyncRouteFunctions");
  assertWarning2(false, `${allowKey} is deprecated and will be removed in the next major release`, { onlyOnce: true });
}
function assertRouteParams(result, errPrefix) {
  assert(errPrefix.endsWith(" should"));
  if (!hasProp(result, "routeParams")) {
    return;
  }
  assertUsage(hasProp(result, "routeParams", "string{}"), `${errPrefix} be ${picocolors_default.bold("Record<string, string>")}`);
}
var init_resolveRouteFunction = __esm({
  "node_modules/vike/dist/shared-server-client/route/resolveRouteFunction.js"() {
    init_execHook();
    init_preparePageContextForPublicUsage();
    init_utils6();
    init_picocolors();
  }
});

// node_modules/vike/dist/shared-server-client/route/loadPageRoutes.js
async function loadPageRoutes(pageFilesAll, pageConfigs, pageConfigGlobal, allPageIds) {
  await Promise.all(pageFilesAll.filter((p4) => p4.fileType === ".page.route").map((p4) => p4.loadFile?.()));
  return loadPageRoutesSync(pageFilesAll, pageConfigs, pageConfigGlobal, allPageIds);
}
function loadPageRoutesSync(pageFilesAll, pageConfigs, pageConfigGlobal, allPageIds) {
  const { onBeforeRouteHook, filesystemRoots } = getGlobalHooks(pageFilesAll, pageConfigs, pageConfigGlobal);
  const pageRoutes = getPageRoutes(filesystemRoots, pageFilesAll, pageConfigs, allPageIds);
  return { pageRoutes, onBeforeRouteHook };
}
function getPageRoutes(filesystemRoots, pageFilesAll, pageConfigs, allPageIds) {
  const pageRoutes = [];
  if (pageConfigs.length > 0) {
    assert(filesystemRoots === null);
    const comesFromV1PageConfig = true;
    pageConfigs.filter((p4) => !p4.isErrorPage).forEach((pageConfig) => {
      const pageId = pageConfig.pageId;
      let pageRoute = null;
      {
        const configName = "route";
        const configValue = getConfigValueRuntime(pageConfig, configName);
        if (configValue) {
          const route2 = configValue.value;
          assert(configValue.definedAtData);
          const definedAtString = getDefinedAtString(configValue.definedAtData, configName);
          if (typeof route2 === "string") {
            pageRoute = {
              pageId,
              comesFromV1PageConfig,
              routeString: route2,
              routeDefinedAtString: definedAtString,
              routeType: "STRING"
            };
          } else {
            const { definedAtData } = configValue;
            assert(!isArray(definedAtData) && !definedAtData.definedBy);
            const { filePathToShowToUser } = definedAtData;
            assert(filePathToShowToUser);
            assert(isCallable(route2));
            if (getConfigValueRuntime(pageConfig, "iKnowThePerformanceRisksOfAsyncRouteFunctions", "boolean"))
              warnDeprecatedAllowKey();
            pageRoute = {
              pageId,
              comesFromV1PageConfig,
              routeFunction: route2,
              routeFunctionFilePath: filePathToShowToUser,
              routeDefinedAtString: definedAtString,
              routeType: "FUNCTION"
            };
          }
        }
      }
      if (!pageRoute) {
        const { routeFilesystem } = pageConfig;
        assert(routeFilesystem);
        const { routeString, definedAtLocation } = routeFilesystem;
        assert(routeFilesystem.routeString.startsWith("/"));
        pageRoute = {
          pageId,
          routeFilesystemDefinedBy: definedAtLocation,
          comesFromV1PageConfig,
          routeString,
          routeDefinedAtString: null,
          routeType: "FILESYSTEM"
        };
      }
      assert(pageRoute);
      pageRoutes.push(pageRoute);
    });
  }
  if (pageConfigs.length === 0) {
    assert(filesystemRoots);
    const comesFromV1PageConfig = false;
    allPageIds.filter((pageId) => !isErrorPageId(pageId, false)).forEach((pageId) => {
      const pageRouteFile = pageFilesAll.find((p4) => p4.pageId === pageId && p4.fileType === ".page.route");
      if (!pageRouteFile || !("default" in pageRouteFile.fileExports)) {
        const routeString = deduceRouteStringFromFilesystemPath(pageId, filesystemRoots);
        assert(routeString.startsWith("/"));
        assert(!routeString.endsWith("/") || routeString === "/");
        pageRoutes.push({
          pageId,
          comesFromV1PageConfig,
          routeString,
          routeDefinedAtString: null,
          routeFilesystemDefinedBy: `${pageId}.page.*`,
          routeType: "FILESYSTEM"
        });
      } else {
        const { filePath, fileExports } = pageRouteFile;
        assert(fileExports.default);
        if (hasProp(fileExports, "default", "string")) {
          const routeString = fileExports.default;
          assertUsage(routeString.startsWith("/"), `A Route String should start with a leading slash '/' but ${filePath} has \`export default '${routeString}'\`. Make sure to \`export default '/${routeString}'\` instead.`);
          pageRoutes.push({
            pageId,
            comesFromV1PageConfig,
            routeString,
            routeDefinedAtString: filePath,
            routeType: "STRING"
          });
          return;
        }
        if (hasProp(fileExports, "default", "function")) {
          const routeFunction = fileExports.default;
          {
            const allowKey = "iKnowThePerformanceRisksOfAsyncRouteFunctions";
            if (allowKey in fileExports) {
              warnDeprecatedAllowKey();
            }
          }
          pageRoutes.push({
            pageId,
            comesFromV1PageConfig,
            routeFunction,
            routeFunctionFilePath: filePath,
            routeDefinedAtString: filePath,
            routeType: "FUNCTION"
          });
          return;
        }
        assertUsage(false, `The default export of ${filePath} should be a string or a function.`);
      }
    });
  }
  return pageRoutes;
}
function getGlobalHooks(pageFilesAll, pageConfigs, pageConfigGlobal) {
  if (pageConfigs.length > 0) {
    const hook = getHookFromPageConfigGlobal(pageConfigGlobal, "onBeforeRoute");
    return { onBeforeRouteHook: hook, filesystemRoots: null };
  }
  let onBeforeRouteHook = null;
  const filesystemRoots = [];
  pageFilesAll.filter((p4) => p4.fileType === ".page.route" && p4.isDefaultPageFile).forEach(({ filePath, fileExports }) => {
    assert(fileExports);
    if ("onBeforeRoute" in fileExports) {
      assertUsage(hasProp(fileExports, "onBeforeRoute", "function"), `\`export { onBeforeRoute }\` of ${filePath} should be a function.`);
      const { onBeforeRoute } = fileExports;
      const hookName = "onBeforeRoute";
      onBeforeRouteHook = {
        hookFilePath: filePath,
        hookFn: onBeforeRoute,
        hookName,
        hookTimeout: getHookTimeoutDefault(hookName)
      };
    }
    if ("filesystemRoutingRoot" in fileExports) {
      assertUsage(hasProp(fileExports, "filesystemRoutingRoot", "string"), `\`export { filesystemRoutingRoot }\` of ${filePath} should be a string.`);
      assertUsage(hasProp(fileExports, "filesystemRoutingRoot", "string"), `\`export { filesystemRoutingRoot }\` of ${filePath} is \`'${fileExports.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`);
      filesystemRoots.push({
        filesystemRoot: dirname(filePath),
        urlRoot: fileExports.filesystemRoutingRoot
      });
    }
  });
  return { onBeforeRouteHook, filesystemRoots };
}
function dirname(filePath) {
  assert(filePath.startsWith("/"));
  assert(!filePath.endsWith("/"));
  const paths = filePath.split("/");
  const dirPath = slice(paths, 0, -1).join("/") || "/";
  assert(dirPath.startsWith("/"));
  assert(!dirPath.endsWith("/") || dirPath === "/");
  return dirPath;
}
var init_loadPageRoutes = __esm({
  "node_modules/vike/dist/shared-server-client/route/loadPageRoutes.js"() {
    init_error_page();
    init_utils6();
    init_deduceRouteStringFromFilesystemPath();
    init_utils5();
    init_getConfigValueRuntime();
    init_getConfigDefinedAt();
    init_resolveRouteFunction();
    init_getHook();
  }
});

// node_modules/vike/dist/shared-server-node/assertV1Design.js
function assertV1Design(pageConfigs, pageFilesAll) {
  const isOldDesign = pageFilesAll === true || pageFilesAll !== false && pageFilesAll.length > 0;
  const isV1Design = pageConfigs === true || pageConfigs !== false && pageConfigs.length > 0;
  if (isV1Design && isOldDesign) {
    const lines = ["Mixing the new V1 design with the old V0.4 design is forbidden."];
    const indent = "- ";
    if (typeof pageConfigs !== "boolean") {
      assert(pageConfigs.length > 0);
      const filesV1 = unique(pageConfigs.map((p4) => Object.values(p4.configValueSources).map((sources) => sources.map((c2) => c2.definedAt).map((definedAt) => definedAt.definedBy ? null : definedAt.filePathAbsoluteUserRootDir).filter(isNotNullish).map((filePathToShowToUser) => indent + filePathToShowToUser))).flat(2));
      lines.push(...["V1 design files:", ...filesV1]);
    }
    if (typeof pageFilesAll !== "boolean") {
      assert(pageFilesAll.length > 0);
      const filesOld = pageFilesAll.map((p4) => indent + p4.filePath);
      lines.push(...["Old design files:", ...filesOld]);
    }
    assertUsage(false, lines.join("\n"));
  }
  assertWarning2(!isOldDesign, "You are using Vike's deprecated design. Update to the new V1 design, see https://vike.dev/migration/v1-design for how to migrate.", { onlyOnce: true });
}
var init_assertV1Design = __esm({
  "node_modules/vike/dist/shared-server-node/assertV1Design.js"() {
    init_utils4();
  }
});

// node_modules/vike/dist/shared-server-node/resolveBase.js
function resolveBase(baseViteOriginal, baseServerUnresolved, baseAssetsUnresolved) {
  if (baseViteOriginal === "/__UNSET__")
    baseViteOriginal = null;
  {
    const wrongBase = (val) => `should start with ${picocolors_default.cyan("/")}, ${picocolors_default.cyan("http://")}, or ${picocolors_default.cyan("https://")} (it's ${picocolors_default.cyan(val)} instead)`;
    assertUsage(baseViteOriginal === null || isBaseAssets(baseViteOriginal), `vite.config.js#base ${wrongBase(baseViteOriginal)}`);
    assertUsage(baseAssetsUnresolved === null || isBaseAssets(baseAssetsUnresolved), `Config ${picocolors_default.cyan("baseAssets")} ${wrongBase(baseAssetsUnresolved)}`);
    assertUsage(baseServerUnresolved === null || baseServerUnresolved.startsWith("/"), `Config ${picocolors_default.cyan("baseServer")} should start with a leading slash ${picocolors_default.cyan("/")} (it's ${picocolors_default.cyan(String(baseServerUnresolved))} instead)`);
  }
  if (baseViteOriginal) {
    if (baseViteOriginal.startsWith("http")) {
      baseAssetsUnresolved = baseAssetsUnresolved ?? baseViteOriginal;
    } else {
      baseAssetsUnresolved = baseAssetsUnresolved ?? baseViteOriginal;
      baseServerUnresolved = baseServerUnresolved ?? baseViteOriginal;
    }
  }
  const baseServer2 = baseServerUnresolved ?? "/";
  const baseAssets = baseAssetsUnresolved ?? "/";
  assert(isBaseAssets(baseAssets));
  assert(isBaseServer(baseServer2));
  return {
    baseServer: baseServer2,
    baseAssets
  };
}
var init_resolveBase = __esm({
  "node_modules/vike/dist/shared-server-node/resolveBase.js"() {
    init_utils4();
    init_picocolors();
  }
});

// node_modules/vike/dist/shared-server-client/getPageFiles/assert_exports_old_design.js
function assertExportValues(pageFile) {
  enforceTrue.forEach((exportName) => {
    assert(pageFile.fileExports);
    if (!(exportName in pageFile.fileExports))
      return;
    const explainer = `The value of \`${exportName}\` is only allowed to be \`true\`.`;
    assertUsage(pageFile.fileExports[exportName] !== false, `${pageFile.filePath} has \`export { ${exportName} }\` with the value \`false\` which is prohibited: remove \`export { ${exportName} }\` instead. (${explainer})`);
    assertUsage(pageFile.fileExports[exportName] === true, `${pageFile.filePath} has \`export { ${exportName} }\` with a forbidden value. ${explainer}`);
  });
}
function assertDefaultExports(defaultExportName, filePath) {
  assertUsage(!forbiddenDefaultExports.includes(defaultExportName), `${filePath} has \`export default { ${defaultExportName} }\` which is prohibited, use \`export { ${defaultExportName} }\` instead.`);
}
var enforceTrue, forbiddenDefaultExports;
var init_assert_exports_old_design = __esm({
  "node_modules/vike/dist/shared-server-client/getPageFiles/assert_exports_old_design.js"() {
    init_utils5();
    enforceTrue = ["clientRouting"];
    forbiddenDefaultExports = ["render", "clientRouting", "prerender", "doNotPrerender"];
  }
});

// node_modules/vike/dist/shared-server-client/determinePageIdOld.js
function determinePageIdOld(filePath) {
  const pageSuffix = ".page.";
  const pageId = slice(filePath.split(pageSuffix), 0, -1).join(pageSuffix);
  assert(!pageId.includes("\\"));
  return pageId;
}
var init_determinePageIdOld = __esm({
  "node_modules/vike/dist/shared-server-client/determinePageIdOld.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/shared-server-client/getPageFiles/fileTypes.js
function determineFileType(filePath) {
  {
    const isCSS = filePath.endsWith(".css");
    if (isCSS) {
      return ".css";
    }
  }
  assert(isScriptFile(filePath), filePath);
  const fileName = filePath.split("/").slice(-1)[0];
  const parts = fileName.split(".");
  const suffix1 = parts.slice(-3)[0];
  const suffix2 = parts.slice(-2)[0];
  if (suffix2 === "page") {
    return ".page";
  }
  assert(suffix1 === "page", filePath);
  if (suffix2 === "server") {
    return ".page.server";
  }
  if (suffix2 === "client") {
    return ".page.client";
  }
  if (suffix2 === "route") {
    return ".page.route";
  }
  assert(false, filePath);
}
var fileTypes;
var init_fileTypes = __esm({
  "node_modules/vike/dist/shared-server-client/getPageFiles/fileTypes.js"() {
    init_utils5();
    init_isScriptFile();
    fileTypes = [
      ".page",
      ".page.server",
      ".page.route",
      ".page.client",
      // New type `.page.css`/`.page.server.css`/`.page.client.css` for `extensions[number].pageFileDist`.
      //  - Extensions using `pageFileDist` are expected to use a bundler that generates a `.css` colocated next to the original `.page.js` file (e.g. `/renderer/_default.page.server.css` for `/renderer/_default.page.server.js`.
      //  - Since these `.page.css` files Bundlers We can therefore expect that there isn't any `.page.server.sass`/...
      ".css"
    ];
  }
});

// node_modules/vike/dist/shared-server-client/getPageFiles/getPageFileObject.js
function getPageFileObject(filePath) {
  const isRelevant = (pageId) => pageFile.pageId === pageId || pageFile.isDefaultPageFile && (isRendererFilePath(pageFile.filePath) || isAncestorDefaultPage(pageId, pageFile.filePath));
  const fileType = determineFileType(filePath);
  const isEnv = (env3) => {
    assert(fileType !== ".page.route");
    if (env3 === "CLIENT_ONLY") {
      return fileType === ".page.client" || fileType === ".css";
    }
    if (env3 === "SERVER_ONLY") {
      return fileType === ".page.server";
    }
    if (env3 === "CLIENT_AND_SERVER") {
      return fileType === ".page";
    }
    assert(false);
  };
  const pageFile = {
    filePath,
    fileType,
    isEnv,
    isRelevant,
    isDefaultPageFile: isDefaultFilePath(filePath),
    isRendererPageFile: fileType !== ".css" && isDefaultFilePath(filePath) && isRendererFilePath(filePath),
    isErrorPageFile: isErrorPageId(filePath, false),
    pageId: determinePageIdOld(filePath)
  };
  return pageFile;
}
function isDefaultFilePath(filePath) {
  if (isErrorPageId(filePath, false)) {
    return false;
  }
  return filePath.includes("/_default");
}
function isRendererFilePath(filePath) {
  return filePath.includes("/renderer/");
}
function isAncestorDefaultPage(pageId, defaultPageFilePath) {
  assert(!pageId.endsWith("/"));
  assert(!defaultPageFilePath.endsWith("/"));
  assert(isDefaultFilePath(defaultPageFilePath));
  const defaultPageDir = slice(defaultPageFilePath.split("/"), 0, -1).filter((filePathSegment) => filePathSegment !== "_default").join("/");
  return pageId.startsWith(defaultPageDir);
}
var init_getPageFileObject = __esm({
  "node_modules/vike/dist/shared-server-client/getPageFiles/getPageFileObject.js"() {
    init_determinePageIdOld();
    init_error_page();
    init_utils5();
    init_fileTypes();
  }
});

// node_modules/@brillout/json-serializer/dist/types.js
function ts(t) {
  return t;
}
var types;
var init_types = __esm({
  "node_modules/@brillout/json-serializer/dist/types.js"() {
    types = [
      ts({
        is: (val) => val === void 0,
        match: (str) => str === "!undefined",
        serialize: () => "!undefined",
        deserialize: () => void 0
      }),
      ts({
        is: (val) => val === Infinity,
        match: (str) => str === "!Infinity",
        serialize: () => "!Infinity",
        deserialize: () => Infinity
      }),
      ts({
        is: (val) => val === -Infinity,
        match: (str) => str === "!-Infinity",
        serialize: () => "!-Infinity",
        deserialize: () => -Infinity
      }),
      ts({
        is: (val) => typeof val === "number" && isNaN(val),
        match: (str) => str === "!NaN",
        serialize: () => "!NaN",
        deserialize: () => NaN
      }),
      ts({
        is: (val) => val instanceof Date,
        match: (str) => str.startsWith("!Date:"),
        serialize: (val) => "!Date:" + val.toISOString(),
        deserialize: (str) => new Date(str.slice("!Date:".length))
      }),
      ts({
        is: (val) => typeof val === "bigint",
        match: (str) => str.startsWith("!BigInt:"),
        serialize: (val) => "!BigInt:" + val.toString(),
        deserialize: (str) => {
          if (typeof BigInt === "undefined") {
            throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");
          }
          return BigInt(str.slice("!BigInt:".length));
        }
      }),
      ts({
        is: (val) => val instanceof RegExp,
        match: (str) => str.startsWith("!RegExp:"),
        serialize: (val) => "!RegExp:" + val.toString(),
        deserialize: (str) => {
          str = str.slice("!RegExp:".length);
          const args = str.match(/\/(.*)\/(.*)?/);
          const pattern = args[1];
          const flags2 = args[2];
          return new RegExp(pattern, flags2);
        }
      }),
      ts({
        is: (val) => val instanceof Map,
        match: (str) => str.startsWith("!Map:"),
        serialize: (val, serializer) => "!Map:" + serializer(Array.from(val.entries())),
        deserialize: (str, parser) => new Map(parser(str.slice("!Map:".length)))
      }),
      ts({
        is: (val) => val instanceof Set,
        match: (str) => str.startsWith("!Set:"),
        serialize: (val, serializer) => "!Set:" + serializer(Array.from(val.values())),
        deserialize: (str, parser) => new Set(parser(str.slice("!Set:".length)))
      }),
      // Avoid collisions with the special strings defined above
      ts({
        is: (val) => typeof val === "string" && val.startsWith("!"),
        match: (str) => str.startsWith("!"),
        serialize: (val) => "!" + val,
        deserialize: (str) => str.slice(1)
      })
    ];
  }
});

// node_modules/@brillout/json-serializer/dist/parse.js
function parse(str, options = {}) {
  const value = JSON.parse(str);
  return parseTransform(value, options);
}
function parseTransform(value, options = {}) {
  if (typeof value === "string") {
    return reviver(value, options);
  }
  if (
    // Also matches arrays
    typeof value === "object" && value !== null
  ) {
    Object.entries(value).forEach(([key, val]) => {
      ;
      value[key] = parseTransform(val, options);
    });
  }
  return value;
}
function reviver(value, options) {
  const parser = (str) => parse(str, options);
  {
    const res = options.reviver?.(
      // TO-DO/eventually: provide key if some user needs it
      void 0,
      value,
      parser
    );
    if (res) {
      if (typeof res.replacement !== "string") {
        return res.replacement;
      } else {
        value = res.replacement;
        if (res.resolved)
          return value;
      }
    }
  }
  for (const { match: match2, deserialize } of types) {
    if (match2(value)) {
      return deserialize(value, parser);
    }
  }
  return value;
}
var init_parse = __esm({
  "node_modules/@brillout/json-serializer/dist/parse.js"() {
    init_types();
  }
});

// node_modules/vike/dist/shared-server-client/page-configs/assertPlusFileExport.js
function assertPlusFileExport(fileExports, filePathToShowToUser, configName) {
  const exportNames = Object.keys(fileExports);
  const isValid = (exportName) => exportName === "default" || exportName === configName;
  const exportNamesValid = exportNames.filter(isValid);
  const exportDefault2 = picocolors_default.code("export default");
  const exportNamed = picocolors_default.code(`export { ${configName} }`);
  if (exportNamesValid.length === 0) {
    assertUsage(false, `${filePathToShowToUser} should define ${exportNamed} or ${exportDefault2}`);
  }
  if (exportNamesValid.length === 2) {
    assertUsage(false, `${filePathToShowToUser} is ambiguous: remove ${exportDefault2} or ${exportNamed}`);
  }
  assert(exportNamesValid.length === 1);
  const exportNamesInvalid = exportNames.filter((e) => !isValid(e)).filter((exportName) => !SIDE_EXPORTS_TOLERATE.includes(exportName));
  if (!SIDE_EXPORTS_DO_NOT_CHECK.some((ext) => filePathToShowToUser.endsWith(ext))) {
    exportNamesInvalid.forEach((exportInvalid) => {
      assertWarning2(false, `${filePathToShowToUser} unexpected ${picocolors_default.cyan(`export { ${exportInvalid} }`)}, see https://vike.dev/no-side-exports`, {
        onlyOnce: true
      });
    });
  }
}
var SIDE_EXPORTS_TOLERATE, SIDE_EXPORTS_DO_NOT_CHECK;
var init_assertPlusFileExport = __esm({
  "node_modules/vike/dist/shared-server-client/page-configs/assertPlusFileExport.js"() {
    init_utils5();
    init_picocolors();
    SIDE_EXPORTS_TOLERATE = [
      // vite-plugin-solid adds `export { $$registrations }`
      "$$registrations",
      // @vitejs/plugin-vue adds `export { _rerender_only }`
      "_rerender_only"
    ];
    SIDE_EXPORTS_DO_NOT_CHECK = [".md", ".mdx"];
  }
});

// node_modules/vike/dist/shared-server-client/page-configs/serialize/parsePageConfigsSerialized.js
function parsePageConfigsSerialized(pageConfigsSerialized2, pageConfigGlobalSerialized2) {
  const pageConfigs = pageConfigsSerialized2.map((pageConfigSerialized) => {
    const configValues = parseConfigValuesSerialized(pageConfigSerialized.configValuesSerialized);
    assertRouteConfigValue(configValues);
    const pageConfig = { ...pageConfigSerialized, configValues };
    return pageConfig;
  });
  const pageConfigGlobal = { configValues: {} };
  {
    const configValues = parseConfigValuesSerialized(pageConfigGlobalSerialized2.configValuesSerialized);
    Object.assign(pageConfigGlobal.configValues, configValues);
  }
  return { pageConfigs, pageConfigGlobal };
}
function assertRouteConfigValue(configValues) {
  const configName = "route";
  const configValue = configValues[configName];
  if (!configValue)
    return;
  const { value, definedAtData } = configValue;
  const configValueType = typeof value;
  assert(definedAtData);
  const configDefinedAt = getConfigDefinedAt("Config", configName, definedAtData);
  assertUsage(configValueType === "string" || isCallable(value), `${configDefinedAt} has an invalid type '${configValueType}': it should be a string or a function instead, see https://vike.dev/route`);
}
function parseConfigValuesSerialized(configValuesSerialized5) {
  const configValues = {};
  Object.entries(configValuesSerialized5).forEach(([configName, configValueSeriliazed]) => {
    let configValue;
    if (configValueSeriliazed.type === "cumulative") {
      const { valueSerialized, ...common } = configValueSeriliazed;
      const value = valueSerialized.map((valueSerializedElement, i3) => {
        const { value: value2, sideExports } = parseValueSerialized(valueSerializedElement, configName, () => {
          const definedAtFile = configValueSeriliazed.definedAtData[i3];
          assert(definedAtFile);
          return definedAtFile;
        });
        addSideExports(sideExports);
        return value2;
      });
      configValue = { value, ...common };
    } else {
      const { valueSerialized, ...common } = configValueSeriliazed;
      const { value, sideExports } = parseValueSerialized(valueSerialized, configName, () => {
        assert(configValueSeriliazed.type !== "computed");
        const { definedAtData } = configValueSeriliazed;
        const definedAtFile = Array.isArray(definedAtData) ? definedAtData[0] : definedAtData;
        return definedAtFile;
      });
      addSideExports(sideExports);
      configValue = { value, ...common };
    }
    configValues[configName] = configValue;
  });
  return configValues;
  function addSideExports(sideExports) {
    sideExports.forEach((sideExport) => {
      const { configName, configValue } = sideExport;
      if (!configValues[configName]) {
        configValues[configName] = configValue;
      } else {
      }
    });
  }
}
function parseValueSerialized(valueSerialized, configName, getDefinedAtFile) {
  if (valueSerialized.type === "js-serialized") {
    let { value } = valueSerialized;
    value = parseTransform(value);
    return { value, sideExports: [] };
  }
  if (valueSerialized.type === "pointer-import") {
    const { value } = valueSerialized;
    return { value, sideExports: [] };
  }
  if (valueSerialized.type === "plus-file") {
    const definedAtFile = getDefinedAtFile();
    const { exportValues } = valueSerialized;
    assert(!definedAtFile.definedBy);
    assertPlusFileExport(exportValues, definedAtFile.filePathToShowToUser, configName);
    let value;
    let valueWasFound = false;
    const sideExports = [];
    Object.entries(exportValues).forEach(([exportName, exportValue]) => {
      const isSideExport = exportName !== "default" && exportName !== configName;
      if (!isSideExport) {
        value = exportValue;
        assert(!valueWasFound);
        valueWasFound = true;
      } else {
        sideExports.push({
          configName: exportName,
          configValue: {
            type: "standard",
            // We don't support side exports for cumulative values. We could support it but it isn't trivial.
            value: exportValue,
            definedAtData: {
              filePathToShowToUser: definedAtFile.filePathToShowToUser,
              fileExportPathToShowToUser: [exportName]
            }
          }
        });
      }
    });
    assert(valueWasFound);
    return { value, sideExports };
  }
  assert(false);
}
var init_parsePageConfigsSerialized = __esm({
  "node_modules/vike/dist/shared-server-client/page-configs/serialize/parsePageConfigsSerialized.js"() {
    init_utils5();
    init_getConfigDefinedAt();
    init_parse();
    init_assertPlusFileExport();
  }
});

// node_modules/vike/dist/shared-server-client/assertVirtualFileExports.js
function assertVirtualFileExports(moduleExports, test, moduleId) {
  if (!moduleExports || !test(moduleExports)) {
    assert(false, { moduleExports, moduleExportsKeys: getKeys(moduleExports), moduleId });
  }
}
function getKeys(obj) {
  if (obj === void 0)
    return null;
  return [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj), ...Object.keys(obj)];
}
var init_assertVirtualFileExports = __esm({
  "node_modules/vike/dist/shared-server-client/assertVirtualFileExports.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/shared-server-client/getPageFiles/parseVirtualFileExportsGlobalEntry.js
function parseVirtualFileExportsGlobalEntry(virtualFileExportsGlobalEntry2) {
  assertVirtualFileExports(virtualFileExportsGlobalEntry2, (moduleExports) => "pageFilesLazy" in moduleExports);
  assert(hasProp(virtualFileExportsGlobalEntry2, "pageFilesLazy", "object"));
  assert(hasProp(virtualFileExportsGlobalEntry2, "pageFilesEager", "object"));
  assert(hasProp(virtualFileExportsGlobalEntry2, "pageFilesExportNamesLazy", "object"));
  assert(hasProp(virtualFileExportsGlobalEntry2, "pageFilesExportNamesEager", "object"));
  assert(hasProp(virtualFileExportsGlobalEntry2.pageFilesLazy, ".page"));
  assert(hasProp(virtualFileExportsGlobalEntry2.pageFilesLazy, ".page.client") || hasProp(virtualFileExportsGlobalEntry2.pageFilesLazy, ".page.server"));
  assert(hasProp(virtualFileExportsGlobalEntry2, "pageFilesList", "string[]"));
  assert(hasProp(virtualFileExportsGlobalEntry2, "pageConfigsSerialized"));
  assert(hasProp(virtualFileExportsGlobalEntry2, "pageConfigGlobalSerialized"));
  const { pageConfigsSerialized: pageConfigsSerialized2, pageConfigGlobalSerialized: pageConfigGlobalSerialized2 } = virtualFileExportsGlobalEntry2;
  assertPageConfigsSerialized(pageConfigsSerialized2);
  assertPageConfigGlobalSerialized(pageConfigGlobalSerialized2);
  const { pageConfigs, pageConfigGlobal } = parsePageConfigsSerialized(pageConfigsSerialized2, pageConfigGlobalSerialized2);
  const pageFilesMap = {};
  parseGlobResult(virtualFileExportsGlobalEntry2.pageFilesLazy).forEach(({ filePath, pageFile, globValue }) => {
    pageFile = pageFilesMap[filePath] = pageFilesMap[filePath] ?? pageFile;
    const loadModule = globValue;
    assertLoadModule(loadModule);
    pageFile.loadFile = async () => {
      if (!("fileExports" in pageFile)) {
        pageFile.fileExports = await loadModule();
        assertExportValues(pageFile);
      }
    };
  });
  parseGlobResult(virtualFileExportsGlobalEntry2.pageFilesExportNamesLazy).forEach(({ filePath, pageFile, globValue }) => {
    pageFile = pageFilesMap[filePath] = pageFilesMap[filePath] ?? pageFile;
    const loadModule = globValue;
    assertLoadModule(loadModule);
    pageFile.loadExportNames = async () => {
      if (!("exportNames" in pageFile)) {
        const moduleExports = await loadModule();
        assert(hasProp(moduleExports, "exportNames", "string[]"), pageFile.filePath);
        pageFile.exportNames = moduleExports.exportNames;
      }
    };
  });
  parseGlobResult(virtualFileExportsGlobalEntry2.pageFilesEager).forEach(({ filePath, pageFile, globValue }) => {
    pageFile = pageFilesMap[filePath] = pageFilesMap[filePath] ?? pageFile;
    const moduleExports = globValue;
    assert(isObject(moduleExports));
    pageFile.fileExports = moduleExports;
  });
  parseGlobResult(virtualFileExportsGlobalEntry2.pageFilesExportNamesEager).forEach(({ filePath, pageFile, globValue }) => {
    pageFile = pageFilesMap[filePath] = pageFilesMap[filePath] ?? pageFile;
    const moduleExports = globValue;
    assert(isObject(moduleExports));
    assert(hasProp(moduleExports, "exportNames", "string[]"), pageFile.filePath);
    pageFile.exportNames = moduleExports.exportNames;
  });
  virtualFileExportsGlobalEntry2.pageFilesList.forEach((filePath) => {
    pageFilesMap[filePath] = pageFilesMap[filePath] ?? getPageFileObject(filePath);
  });
  const pageFilesAll = Object.values(pageFilesMap);
  pageFilesAll.forEach(({ filePath }) => {
    assert(!filePath.includes("\\"));
  });
  return { pageFilesAll, pageConfigs, pageConfigGlobal };
}
function parseGlobResult(globObject) {
  const ret = [];
  Object.entries(globObject).forEach(([fileType, globFiles]) => {
    cast(fileType);
    assert(fileTypes.includes(fileType));
    assert(isObject(globFiles));
    Object.entries(globFiles).forEach(([filePath, globValue]) => {
      const pageFile = getPageFileObject(filePath);
      assert(pageFile.fileType === fileType);
      ret.push({ filePath, pageFile, globValue });
    });
  });
  return ret;
}
function assertLoadModule(globValue) {
  assert(isCallable(globValue));
}
function assertPageConfigsSerialized(pageConfigsSerialized2) {
  assert(isArray(pageConfigsSerialized2));
  pageConfigsSerialized2.forEach((pageConfigSerialized) => {
    assert(isObject(pageConfigSerialized));
    assert(hasProp(pageConfigSerialized, "pageId", "string"));
    assert(hasProp(pageConfigSerialized, "routeFilesystem"));
    assert(hasProp(pageConfigSerialized, "configValuesSerialized"));
  });
}
function assertPageConfigGlobalSerialized(pageConfigGlobalSerialized2) {
  assert(hasProp(pageConfigGlobalSerialized2, "configValuesSerialized"));
}
var init_parseVirtualFileExportsGlobalEntry = __esm({
  "node_modules/vike/dist/shared-server-client/getPageFiles/parseVirtualFileExportsGlobalEntry.js"() {
    init_utils5();
    init_assert_exports_old_design();
    init_getPageFileObject();
    init_fileTypes();
    init_parsePageConfigsSerialized();
    init_assertVirtualFileExports();
  }
});

// node_modules/vike/dist/shared-server-client/page-configs/resolveVikeConfigPublic.js
function resolveGlobalConfigPublicPage(pageConfigGlobalValues, pageConfig, pageConfigValues) {
  const pageConfigPublic_ = resolvePageConfigPublic({ pageConfigGlobalValues, pageConfigValues });
  const pageConfigPublic = getPublicCopy(pageConfigPublic_);
  const page = (() => {
    if (!pageConfig.isErrorPage) {
      const route2 = pageConfigPublic.config.route ?? pageConfig.routeFilesystem.routeString;
      return {
        ...pageConfigPublic,
        route: route2
      };
    } else {
      return {
        ...pageConfigPublic,
        isErrorPage: true
      };
    }
  })();
  return [pageConfig.pageId, page];
}
function getPublicCopy(configInternal) {
  const configPublic = {
    config: configInternal.config,
    // TO-DO/soon/flat-pageContext: expose publicly?
    _source: configInternal.source,
    _sources: configInternal.sources,
    _from: configInternal.from
  };
  return configPublic;
}
function resolvePageConfigPublic({ pageConfigGlobalValues, pageConfigValues }) {
  const configValues = { ...pageConfigGlobalValues, ...pageConfigValues };
  return resolveConfigPublic_V1Design({ configValues });
}
function resolvePageContextConfig(pageFiles, pageConfig, pageConfigGlobal) {
  const config = {};
  const configEntries = {};
  const exportsAll = {};
  pageFiles.forEach((pageFile) => {
    const exportValues = getExportValues(pageFile);
    exportValues.forEach(({ exportName, exportValue, isFromDefaultExport }) => {
      assert(exportName !== "default");
      exportsAll[exportName] = exportsAll[exportName] ?? [];
      exportsAll[exportName].push({
        exportValue,
        exportSource: `${pageFile.filePath} > ${isFromDefaultExport ? `\`export default { ${exportName} }\`` : `\`export { ${exportName} }\``}`,
        filePath: pageFile.filePath,
        _filePath: pageFile.filePath,
        // TO-DO/next-major-release: remove
        _fileType: pageFile.fileType,
        _isFromDefaultExport: isFromDefaultExport
      });
    });
  });
  let source;
  let sources;
  let from;
  if (pageConfig) {
    const res = resolvePageConfigPublic({
      pageConfigGlobalValues: pageConfigGlobal.configValues,
      pageConfigValues: pageConfig.configValues
    });
    source = res.source;
    sources = res.sources;
    from = res.from;
    Object.assign(config, res.config);
    Object.assign(configEntries, res.configEntries);
    Object.assign(exportsAll, res.exportsAll);
  } else {
    source = {};
    sources = {};
    from = {
      configsStandard: {},
      configsCumulative: {},
      configsComputed: {}
    };
  }
  const pageExports = {};
  const exports = {};
  Object.entries(exportsAll).forEach(([exportName, values]) => {
    values.forEach(({ exportValue, _fileType, _isFromDefaultExport }) => {
      exports[exportName] = exports[exportName] ?? exportValue;
      if (_fileType === ".page" && !_isFromDefaultExport) {
        if (!(exportName in pageExports)) {
          pageExports[exportName] = exportValue;
        }
      }
    });
  });
  assert(!("default" in exports));
  assert(!("default" in exportsAll));
  const pageContextAddendum = {
    config,
    from,
    source,
    sources,
    // TO-DO/soon/flat-pageContext: deprecate every prop below
    configEntries,
    exports,
    exportsAll
  };
  objectDefineProperty(pageContextAddendum, "pageExports", {
    get: () => {
      if (!isBrowser2()) {
        assertWarning2(false, "pageContext.pageExports is outdated, use pageContext.exports instead", {
          onlyOnce: true,
          showStackTrace: true
        });
      }
      return pageExports;
    },
    enumerable: false,
    configurable: true
  });
  return pageContextAddendum;
}
function resolveGlobalContextConfig(pageConfigs, pageConfigGlobal) {
  const globalContextAddendum = resolveGlobalConfigPublic(pageConfigs, pageConfigGlobal, (c2) => c2.configValues);
  return globalContextAddendum;
}
function resolveGlobalConfigPublic(pageConfigs, pageConfigGlobal, getConfigValues) {
  const pageConfigGlobalValues = getConfigValues(pageConfigGlobal, true);
  const globalConfigPublicBase_ = resolveConfigPublic_V1Design({ configValues: pageConfigGlobalValues });
  const globalConfigPublicBase = getPublicCopy(globalConfigPublicBase_);
  const pages = Object.fromEntries(pageConfigs.map((pageConfig) => {
    const pageConfigValues = getConfigValues(pageConfig);
    return resolveGlobalConfigPublicPage(pageConfigGlobalValues, pageConfig, pageConfigValues);
  }));
  const globalConfigPublic = {
    ...globalConfigPublicBase,
    pages
  };
  return {
    ...globalConfigPublic,
    _globalConfigPublic: globalConfigPublic
  };
}
function resolveConfigPublic_V1Design(pageConfig) {
  const config = {};
  const configEntries = {};
  const exportsAll = {};
  const source = {};
  const sources = {};
  const from = {
    configsStandard: {},
    configsCumulative: {},
    configsComputed: {}
  };
  const addSrc = (src, configName) => {
    source[configName] = src;
    sources[configName] ?? (sources[configName] = []);
    sources[configName].push(src);
  };
  const addLegacy = (configName, value, definedAtData) => {
    const configValueFilePathToShowToUser = getConfigValueFilePathToShowToUser(definedAtData);
    const configDefinedAt = getConfigDefinedAtOptional("Config", configName, definedAtData);
    configEntries[configName] = configEntries[configName] ?? [];
    configEntries[configName].push({
      configValue: value,
      configDefinedAt,
      configDefinedByFile: configValueFilePathToShowToUser
    });
    const exportName = configName;
    exportsAll[exportName] = exportsAll[exportName] ?? [];
    exportsAll[exportName].push({
      exportValue: value,
      exportSource: configDefinedAt,
      filePath: configValueFilePathToShowToUser,
      _filePath: configValueFilePathToShowToUser,
      _fileType: null,
      _isFromDefaultExport: null
    });
  };
  Object.entries(pageConfig.configValues).forEach(([configName, configValue]) => {
    const { value } = configValue;
    config[configName] = config[configName] ?? value;
    if (configValue.type === "standard") {
      const src = {
        type: "configsStandard",
        value: configValue.value,
        definedAt: getDefinedAtString(configValue.definedAtData, configName)
      };
      addSrc(src, configName);
      from.configsStandard[configName] = src;
      addLegacy(configName, value, configValue.definedAtData);
    }
    if (configValue.type === "cumulative") {
      const src = {
        type: "configsCumulative",
        definedAt: getDefinedAtString(configValue.definedAtData, configName),
        values: configValue.value.map((value2, i3) => {
          const definedAtFile = configValue.definedAtData[i3];
          assert(definedAtFile);
          const definedAt = getDefinedAtString(definedAtFile, configName);
          addLegacy(configName, value2, definedAtFile);
          return {
            value: value2,
            definedAt
          };
        })
      };
      addSrc(src, configName);
      from.configsCumulative[configName] = src;
    }
    if (configValue.type === "computed") {
      const src = {
        type: "configsComputed",
        definedAt: "Vike",
        // Vike currently doesn't support user-land computed configs => computed configs are always defined by Vike => there isn't any file path to show.
        value: configValue.value
      };
      addSrc(src, configName);
      from.configsComputed[configName] = src;
      addLegacy(configName, value, configValue.definedAtData);
    }
  });
  return {
    config,
    configEntries,
    exportsAll,
    source,
    sources,
    from
  };
}
function getExportValues(pageFile) {
  const { filePath, fileExports } = pageFile;
  assert(fileExports);
  assert(isScriptFile(filePath));
  const exportValues = [];
  Object.entries(fileExports).sort(makeLast(([exportName]) => exportName === "default")).forEach(([exportName, exportValue]) => {
    let isFromDefaultExport = exportName === "default";
    if (isFromDefaultExport) {
      if (isTemplateFile(filePath)) {
        exportName = "Page";
      } else {
        assertUsage(isObject(exportValue), `The ${picocolors_default.cyan("export default")} of ${filePath} should be an object.`);
        Object.entries(exportValue).forEach(([defaultExportName, defaultExportValue]) => {
          assertDefaultExports(defaultExportName, filePath);
          exportValues.push({
            exportName: defaultExportName,
            exportValue: defaultExportValue,
            isFromDefaultExport
          });
        });
        return;
      }
    }
    exportValues.push({
      exportName,
      exportValue,
      isFromDefaultExport
    });
  });
  exportValues.forEach(({ exportName, isFromDefaultExport }) => {
    assert(!(isFromDefaultExport && forbiddenDefaultExports.includes(exportName)));
  });
  return exportValues;
}
var init_resolveVikeConfigPublic = __esm({
  "node_modules/vike/dist/shared-server-client/page-configs/resolveVikeConfigPublic.js"() {
    init_assert_exports_old_design();
    init_getConfigDefinedAt();
    init_helpers();
    init_utils5();
    init_picocolors();
  }
});

// node_modules/vike/dist/shared-server-client/createGlobalContextShared.js
async function createGlobalContextShared(virtualFileExportsGlobalEntry2, globalObject15, addGlobalContext2, addGlobalContextTmp2, addGlobalContextAsync2) {
  const { previousCreateGlobalContextPromise } = globalObject15;
  const { promise, resolve: resolve3 } = genPromise({
    // Avoid this Cloudflare Worker error:
    // ```console
    // Error: Disallowed operation called within global scope. Asynchronous I/O (ex: fetch() or connect()), setting a timeout, and generating random values are not allowed within global scope. To fix this error, perform this operation within a handler.
    // ```
    timeout: null
  });
  globalObject15.previousCreateGlobalContextPromise = promise;
  if (previousCreateGlobalContextPromise) {
    assert(globalObject15.globalContext);
    await previousCreateGlobalContextPromise;
  }
  try {
    const globalContext2 = createGlobalContextBase(virtualFileExportsGlobalEntry2);
    let isNewGlobalContext;
    if (!globalObject15.globalContext) {
      globalObject15.globalContext = globalContext2;
      isNewGlobalContext = false;
    } else {
      isNewGlobalContext = true;
    }
    if (addGlobalContext2 && // TO-DO/next-major-release: remove
    globalContext2._pageConfigs.length > 0) {
      const globalContextAdded = addGlobalContext2?.(globalContext2);
      objectAssign(globalContext2, globalContextAdded);
    } else {
      const globalContextAdded = await addGlobalContextTmp2?.(globalContext2);
      objectAssign(globalContext2, globalContextAdded);
    }
    {
      const globalContextAddedAsync = await addGlobalContextAsync2?.(globalContext2);
      objectAssign(globalContext2, globalContextAddedAsync);
    }
    const onCreateGlobalContextHooks = getHookFromPageConfigGlobalCumulative(globalContext2._pageConfigGlobal, "onCreateGlobalContext");
    let hooksCalled = false;
    if (!hooksAreEqual(globalObject15.onCreateGlobalContextHooks ?? [], onCreateGlobalContextHooks)) {
      globalObject15.onCreateGlobalContextHooks = onCreateGlobalContextHooks;
      await execHookGlobal("onCreateGlobalContext", globalContext2._pageConfigGlobal, null, globalContext2, prepareGlobalContextForPublicUsage);
      hooksCalled = true;
    }
    if (isNewGlobalContext) {
      if (hooksCalled) {
        objectReplace(globalObject15.globalContext, globalContext2);
      } else {
        objectAssign(globalObject15.globalContext, globalContext2, true);
      }
    }
    return globalObject15.globalContext;
  } finally {
    resolve3();
  }
}
function createGlobalContextBase(virtualFileExportsGlobalEntry2) {
  const { pageFilesAll, pageConfigs, pageConfigGlobal } = parseVirtualFileExportsGlobalEntry(virtualFileExportsGlobalEntry2);
  const allPageIds = getAllPageIds(pageFilesAll, pageConfigs);
  const globalContextAddendum = resolveGlobalContextConfig(pageConfigs, pageConfigGlobal);
  const globalContext2 = {
    /**
     * Useful for distinguishing `globalContext` from other objects and narrowing down TypeScript unions.
     *
     * https://vike.dev/globalContext#typescript
     */
    isGlobalContext: true,
    _isOriginalObject: true,
    _virtualFileExportsGlobalEntry: virtualFileExportsGlobalEntry2,
    _pageFilesAll: pageFilesAll,
    _pageConfigs: pageConfigs,
    _pageConfigGlobal: pageConfigGlobal,
    _allPageIds: allPageIds,
    ...globalContextAddendum
  };
  changeEnumerable(globalContext2, "_isOriginalObject", false);
  return globalContext2;
}
function getAllPageIds(pageFilesAll, pageConfigs) {
  const fileIds = pageFilesAll.filter(({ isDefaultPageFile }) => !isDefaultPageFile).map(({ pageId }) => pageId);
  const allPageIds = unique(fileIds);
  const allPageIds2 = pageConfigs.map((p4) => p4.pageId);
  return [...allPageIds, ...allPageIds2];
}
function hooksAreEqual(hooks1, hooks2) {
  const hooksFn1 = hooks1.map((hook) => hook.hookFn);
  const hooksFn2 = hooks2.map((hook) => hook.hookFn);
  return hooksFn1.every((hook) => hooksFn2.includes(hook)) && //
  hooksFn2.every((hook) => hooksFn1.includes(hook));
}
var init_createGlobalContextShared = __esm({
  "node_modules/vike/dist/shared-server-client/createGlobalContextShared.js"() {
    init_utils5();
    init_parseVirtualFileExportsGlobalEntry();
    init_resolveVikeConfigPublic();
    init_execHook();
    init_prepareGlobalContextForPublicUsage();
    init_getHook();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/execHookOnError.js
function execHookOnError(err2, pageContext) {
  if (isObject(err2)) {
    if (globalObject6.seen.has(err2))
      return;
    globalObject6.seen.add(err2);
  }
  const globalContext2 = getGlobalContextServerInternalOptional();
  if (!globalContext2)
    return;
  const hooks = getHookFromPageConfigGlobalCumulative(globalContext2._pageConfigGlobal, "onError");
  for (const hook of hooks) {
    try {
      hook.hookFn(err2, pageContext);
    } catch (hookErr) {
      console.error(hookErr);
    }
  }
}
var globalObject6;
var init_execHookOnError = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/execHookOnError.js"() {
    init_utils();
    init_globalContext();
    init_getHook();
    globalObject6 = getGlobalObject("renderPageServer/execHookOnError.ts", {
      seen: /* @__PURE__ */ new WeakSet()
    });
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/addErrorHint.js
function addErrorHint(error) {
  const hint = getErrorHint(error);
  if (!hint)
    return error;
  const append = `
${picocolors_default.bold(formatHintLog(hint))}`;
  return getBetterError(error, { message: { append } });
}
function getErrorHint(error) {
  {
    const knownErr = isKnownError(error);
    if (knownErr) {
      if (knownErr.link) {
        return `${hintLinkPrefix}${knownErr.link}`;
      } else {
        return hintDefault;
      }
    }
  }
  return null;
}
function isKnownError(error) {
  const anywhere = getAnywhere(error);
  const knownErr = [
    //
    ...errorsMisc,
    ...errorsReact,
    ...errorsCjsEsm_withPreciseLink,
    ...errorsCjsEsm
  ].find((knownError) => {
    if (!includesLowercase(anywhere, knownError.errMsg))
      return false;
    if (knownError.mustMentionNodeModules !== false && !includesLowercase(anywhere, "node_modules"))
      return false;
    return true;
  });
  if (!knownErr)
    return false;
  return knownErr;
}
function includesLowercase(str, substr) {
  if (substr instanceof RegExp) {
    let { flags: flags2 } = substr;
    if (!flags2.includes("i"))
      flags2 += "i";
    const regex = new RegExp(substr.source, flags2);
    return regex.test(str);
  }
  if (typeof substr === "string") {
    return str.toLowerCase().includes(substr.toLowerCase());
  }
  assert(false);
}
function getAnywhere(error) {
  const code = getErrCode(error);
  const message = getErrMessage(error);
  const stack = getErrStack(error);
  const anywhere = [code, message, stack].filter(Boolean).join("\n");
  return anywhere;
}
function getErrMessage(err2) {
  if (!isObject(err2))
    return null;
  if (!err2.message)
    return null;
  if (typeof err2.message !== "string")
    return null;
  return err2.message;
}
function getErrCode(err2) {
  if (!isObject(err2))
    return null;
  if (!err2.code)
    return null;
  if (typeof err2.code !== "string")
    return null;
  return err2.code;
}
function getErrStack(err2) {
  if (!isObject(err2))
    return null;
  if (!err2.stack)
    return null;
  if (typeof err2.stack !== "string")
    return null;
  return err2.stack;
}
var hintDefault, hintLinkPrefix, errorsMisc, reactInvalidEelement, errorsReact, errorsCjsEsm_withPreciseLink, errorsCjsEsm;
var init_addErrorHint = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/addErrorHint.js"() {
    init_utils();
    init_picocolors();
    hintDefault = "The error could be a CJS/ESM issue, see https://vike.dev/broken-npm-package";
    hintLinkPrefix = "To fix this error, see ";
    errorsMisc = [
      {
        errMsg: "window is not defined",
        link: "https://vike.dev/hints#window-is-not-defined",
        mustMentionNodeModules: false
      },
      {
        errMsg: "jsxDEV is not a function",
        link: "https://github.com/vikejs/vike/issues/1469#issuecomment-1919518096",
        mustMentionNodeModules: false
      },
      {
        // ```
        // Error [RollupError]: Could not resolve "../dist/client/assets.json" from "renderer/+onRenderHtml.tsx"
        // ```
        errMsg: "assets.json",
        link: "https://vike.dev/getGlobalContext",
        mustMentionNodeModules: false
      },
      {
        errMsg: "ERR_UNKNOWN_FILE_EXTENSION",
        link: "https://vike.dev/broken-npm-package#err-unknown-file-extension"
      }
    ];
    reactInvalidEelement = "https://vike.dev/broken-npm-package#react-invalid-component";
    errorsReact = [
      {
        errMsg: "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components)",
        link: reactInvalidEelement,
        // The stack trace can be user-land while the import is coming from node_modules
        mustMentionNodeModules: false
      },
      {
        errMsg: "Objects are not valid as a React child",
        link: reactInvalidEelement,
        mustMentionNodeModules: false
      },
      {
        // React's "Invalid hook call.", see https://github.com/vikejs/vike/discussions/1637#discussioncomment-9424712
        errMsg: "Cannot read properties of null (reading 'useContext')"
      }
    ];
    errorsCjsEsm_withPreciseLink = [
      {
        // `SyntaxError: Named export '${exportName}' not found. The requested module '${packageName}' is a CommonJS module, which may not support all module.exports as named exports.`
        errMsg: /Named export.*not found/i,
        link: "https://vike.dev/broken-npm-package#named-export-not-found",
        // It seems that this always points to an npm package import.
        mustMentionNodeModules: false
      }
    ];
    errorsCjsEsm = [
      { errMsg: "ERR_UNSUPPORTED_DIR_IMPORT" },
      { errMsg: "ERR_REQUIRE_ESM" },
      { errMsg: "Must use import" },
      { errMsg: /Cannot find \S+ '(\S+)' imported from (\S+)/ },
      { errMsg: "ERR_UNKNOWN_FILE_EXTENSION" },
      { errMsg: /Unknown file extension "\S+" for (\S+)/ },
      // `SyntaxError: Cannot use import statement outside a module`.
      {
        errMsg: "Cannot use import statement",
        // Since user code is always ESM, this error must always originate from an npm package.
        mustMentionNodeModules: false
      },
      { errMsg: "is not exported" },
      { errMsg: "Cannot read properties of undefined" },
      { errMsg: ".default is not" },
      // Using CJS inside ESM modules.
      { errMsg: "require is not a function" },
      { errMsg: "exports is not defined" },
      { errMsg: "module is not defined" },
      { errMsg: "not defined in ES" },
      { errMsg: "Unexpected token 'export'" },
      { errMsg: "Failed to resolve entry for package" }
    ];
  }
});

// node_modules/vike/dist/shared-server-client/route/abort.js
function isAbortError(thing) {
  return typeof thing === "object" && thing !== null && stamp in thing;
}
function logAbort(err2, isProduction, pageContext) {
  if (isProduction)
    return;
  const urlCurrent = pageContext._urlRewrite ?? pageContext.urlOriginal;
  assert(urlCurrent);
  const abortCall = err2._pageContextAbort._abortCall;
  assert(abortCall);
  const hookLoc = isUserHookError(err2);
  let thrownBy = "";
  if (hookLoc) {
    thrownBy = ` by ${picocolors_default.cyan(`${hookLoc.hookName}()`)} hook defined at ${hookLoc.hookFilePath}`;
  } else {
  }
  assertInfo(false, `${picocolors_default.cyan(abortCall)} thrown${thrownBy} while rendering ${picocolors_default.cyan(urlCurrent)}`, {
    onlyOnce: false
  });
}
function getPageContextAddendumAbort(pageContextsAborted) {
  const pageContextAbortedLast = pageContextsAborted.at(-1);
  if (!pageContextAbortedLast)
    return null;
  const pageContextAbort = pageContextAbortedLast._pageContextAbort;
  assert(pageContextAbort);
  return pageContextAbort;
}
function addNewPageContextAborted(pageContextsAborted, pageContext, pageContextAbort) {
  objectAssign(pageContext, { _pageContextAbort: pageContextAbort });
  pageContextsAborted.push(pageContext);
  assertNoInfiniteAbortLoop(pageContextsAborted);
}
function assertNoInfiniteAbortLoop(pageContextsAborted) {
  if (pageContextsAborted.length < 10)
    return;
  const loop = pageContextsAborted.map((pageContext) => {
    return pageContext._pageContextAbort._abortCall;
  });
  if (unique(loop).length === loop.length)
    return;
  assertUsage(false, `Infinite loop: ${loop.join(" => ")}`);
}
var stamp;
var init_abort = __esm({
  "node_modules/vike/dist/shared-server-client/route/abort.js"() {
    init_execHook();
    init_utils6();
    init_picocolors();
    stamp = "_isAbortError";
  }
});

// node_modules/vike/dist/server/runtime/logErrorServer.js
function logErrorServer(err2, pageContext) {
  assertPageContext_logRuntime(pageContext);
  if (isAbortError(err2) && !isDebugError())
    return;
  if (hasAlreadyLogged(err2))
    return;
  warnIfErrorIsNotObject(err2);
  const errBetter = addErrorHint(err2);
  execHookOnError(errBetter, pageContext);
  const errPrinted = getStackOrMessage(isDebugError() ? getOriginalError(errBetter) : errBetter);
  console.error(hasRed(errPrinted) ? errPrinted : picocolors_default.red(errPrinted));
  setAlreadyLogged(err2);
}
function getOriginalError(err2) {
  return err2?.getOriginalError?.() ?? err2;
}
function getStackOrMessage(err2) {
  if (!isObject(err2) || !err2.stack)
    return String(err2);
  if (err2.hideStack)
    return err2.message;
  return err2.stack;
}
function warnIfErrorIsNotObject(err2) {
  if (!isObject(err2)) {
    console.warn("[vike] The thrown value is:");
    console.warn(err2);
    assertWarning2(false, `One of your hooks threw an error ${picocolors_default.cyan("throw someValue")} but ${picocolors_default.cyan("someValue")} isn't an object (it's ${picocolors_default.cyan(`typeof someValue === ${typeof err2}`)} instead). Make sure thrown values are always wrapped with ${picocolors_default.cyan("new Error()")}, in other words: ${picocolors_default.cyan("throw someValue")} should be replaced with ${picocolors_default.cyan("throw new Error(someValue)")}. The thrown value is printed above.`, { onlyOnce: false });
  }
}
function hasAlreadyLogged(err2) {
  if (!isObject(err2))
    return false;
  return globalObject7.wasAlreadyLogged.has(err2);
}
function setAlreadyLogged(err2) {
  if (!isObject(err2))
    return;
  globalObject7.wasAlreadyLogged.add(err2);
}
var globalObject7;
var init_logErrorServer = __esm({
  "node_modules/vike/dist/server/runtime/logErrorServer.js"() {
    init_picocolors();
    init_utils();
    init_execHookOnError();
    init_loggerRuntime();
    init_addErrorHint();
    init_abort();
    assertIsNotBrowser();
    globalObject7 = getGlobalObject("server/runtime/logErrorServer.ts", {
      wasAlreadyLogged: /* @__PURE__ */ new WeakSet()
    });
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/loggerProd.js
function loggRuntimeErrorProd(err2, pageContext) {
  assertPageContext_logRuntime(pageContext);
  logErrorServer(err2, pageContext);
}
var init_loggerProd = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/loggerProd.js"() {
    init_logErrorServer();
    init_loggerRuntime();
  }
});

// node_modules/vike/dist/server/runtime/loggerRuntime.js
function assertPageContext_logRuntime(pageContext) {
  assert(pageContext === null || typeof pageContext._requestId === "number");
}
var logRuntimeError, logRuntimeInfo;
var init_loggerRuntime = __esm({
  "node_modules/vike/dist/server/runtime/loggerRuntime.js"() {
    init_loggerProd();
    init_utils();
    logRuntimeInfo = null;
    logRuntimeError = // @ts-expect-error
    logRuntimeError ?? // Default
    loggRuntimeErrorProd;
  }
});

// node_modules/vike/dist/shared-server-node/getVikeConfigError.js
function setVikeConfigError(val) {
  debugFileChange("setVikeConfigError()", val);
  if ("errorRuntime" in val)
    globalObject8.errorRuntime = val.errorRuntime;
  if ("errorBuild" in val)
    globalObject8.errorBuild = val.errorBuild;
}
function getVikeConfigError() {
  return globalObject8.errorBuild || globalObject8.errorRuntime;
}
function getVikeConfigErrorBuild() {
  return globalObject8.errorBuild;
}
var globalObject8, debugFileChange;
var init_getVikeConfigError = __esm({
  "node_modules/vike/dist/shared-server-node/getVikeConfigError.js"() {
    init_utils4();
    globalObject8 = getGlobalObject("server/shared/getVikeConfigError.ts", {
      errorRuntime: false,
      errorBuild: false
    });
    debugFileChange = createDebug("vike:file-change");
  }
});

// node_modules/vike/dist/shared-server-node/api-context.js
function getVikeApiOperation() {
  return globalObject9.vikeApiOperation ?? null;
}
var globalObject9;
var init_api_context = __esm({
  "node_modules/vike/dist/shared-server-node/api-context.js"() {
    init_utils();
    globalObject9 = getGlobalObject("api/context.ts", {});
  }
});

// node_modules/vike/dist/server/runtime/globalContext.js
async function getGlobalContextServerInternal() {
  assert(globalObject10.isInitialized);
  assertGlobalContextIsDefined();
  if (!isProd())
    await globalObject10.waitForUserFilesUpdate;
  const { globalContext: globalContext2 } = globalObjectTyped;
  assertIsDefined(globalContext2);
  return { globalContext: globalContext2 };
}
function getGlobalContextServerInternalOptional() {
  const { globalContext: globalContext2 } = globalObjectTyped;
  if (!globalContext2)
    return null;
  return globalContext2;
}
function assertIsDefined(globalContext2) {
  if (!globalContext2) {
    debug4("globalContext", globalContext2);
    debug4("assertIsDefined()", new Error().stack);
    assert(false);
  }
}
function assertGlobalContextIsDefined() {
  assertIsDefined(globalObjectTyped.globalContext);
  assert(globalObject10.globalContext);
}
async function getGlobalContext() {
  debug4("getGlobalContext()");
  const isProduction = isProdOptional();
  assertUsage(isProduction !== null, "The global context isn't set yet, use getGlobalContextAsync() instead.");
  return await getGlobalContextAsync(isProduction);
}
async function getGlobalContextAsync(isProduction) {
  debug4("getGlobalContextAsync()");
  assertUsage(typeof isProduction === "boolean", `[getGlobalContextAsync(isProduction)] Argument ${picocolors_default.cyan("isProduction")} ${isProduction === void 0 ? "is missing" : `should be ${picocolors_default.cyan("true")} or ${picocolors_default.cyan("false")}`}`);
  globalObject10.isProductionAccordingToUser = isProduction;
  if (!globalObject10.globalContext)
    await initGlobalContext_getGlobalContextAsync();
  if (!isProduction)
    await globalObject10.waitForUserFilesUpdate;
  assertGlobalContextIsDefined();
  return getGlobalContextForPublicUsage();
}
function getGlobalContextForPublicUsage() {
  const { globalContext: globalContext2 } = globalObjectTyped;
  assert(globalContext2);
  const globalContextForPublicUsage = prepareGlobalContextForPublicUsage(globalContext2);
  return globalContextForPublicUsage;
}
async function initGlobalContext_renderPage() {
  debug4("initGlobalContext_renderPage()");
  globalObject10.isAfterFirstRenderPageCall = true;
  await initGlobalContext();
}
async function initGlobalContext_getGlobalContextAsync() {
  debug4("initGlobalContext_getGlobalContextAsync()");
  await initGlobalContext();
}
async function initGlobalContext() {
  const isProduction = isProd();
  if (!isProduction) {
    if (isProcessSharedWithVite()) {
      await globalObject10.viteDevServerPromise;
    } else {
      assert(isNonRunnableDevProcess());
      await updateUserFiles();
    }
    assert(globalObject10.waitForUserFilesUpdate);
    await globalObject10.waitForUserFilesUpdate;
  } else {
    await loadProdBuildEntry(globalObject10.viteConfigRuntime?.build.outDir);
  }
  assertGlobalContextIsDefined();
  globalObject10.isInitialized = true;
}
function assertViteManifest(manifest) {
  assert(isPlainObject(manifest));
}
async function loadProdBuildEntry(outDir) {
  debug4("loadProdBuildEntry()");
  if (globalObject10.globalContext) {
    debug4("loadProdBuildEntry() - already done");
    return;
  }
  if (!globalObject10.prodBuildEntry) {
    debug4("importServerProductionEntry()");
    await importServerProductionEntry({ outDir });
    if (!globalObject10.prodBuildEntry) {
      debug4("globalObject.prodBuildEntryPrevious");
      globalObject10.prodBuildEntry = globalObject10.prodBuildEntryPrevious;
    }
    assert(globalObject10.prodBuildEntry);
    assertWarning2(
      // vike-server => `inject === true`
      // vike-node => `inject === [ 'index' ]` => we don't show the warning to vike-node users (I don't remember why).
      globalObject10.buildInfo?.viteConfigRuntime.vitePluginServerEntry.inject !== true || globalObject10.isPrerendering,
      `Run the built server entry (e.g. ${picocolors_default.cyan("$ node dist/server/index.mjs")}) instead of the original server entry (e.g. ${picocolors_default.cyan("$ ts-node server/index.ts")})`,
      { onlyOnce: true }
    );
  }
  const { prodBuildEntry } = globalObject10;
  assertProdBuildEntry(prodBuildEntry);
  globalObject10.assetsManifest = prodBuildEntry.assetsManifest;
  globalObject10.buildInfo = prodBuildEntry.buildInfo;
  await createGlobalContext(prodBuildEntry.virtualFileExportsGlobalEntry);
}
async function setGlobalContext_prodBuildEntry(prodBuildEntry) {
  debug4("setGlobalContext_prodBuildEntry()");
  assert(!isNonRunnableDevProcess());
  assertProdBuildEntry(prodBuildEntry);
  setNodeEnvProductionIfUndefined();
  globalObject10.prodBuildEntry = prodBuildEntry;
  globalObject10.prodBuildEntryPrevious = prodBuildEntry;
  assert(globalObject10.prodBuildEntry);
  await loadProdBuildEntry();
  assertGlobalContextIsDefined();
  debug4("setGlobalContext_prodBuildEntry() - done");
}
function assertProdBuildEntry(prodBuildEntry) {
  assert(isObject(prodBuildEntry));
  assert(hasProp(prodBuildEntry, "virtualFileExportsGlobalEntry", "object"));
  const { virtualFileExportsGlobalEntry: virtualFileExportsGlobalEntry2 } = prodBuildEntry;
  assert(hasProp(prodBuildEntry, "assetsManifest", "object"));
  const { assetsManifest } = prodBuildEntry;
  assertViteManifest(assetsManifest);
  assert(hasProp(prodBuildEntry, "buildInfo", "object"));
  const { buildInfo } = prodBuildEntry;
  assertBuildInfo(buildInfo);
  checkType({ virtualFileExportsGlobalEntry: virtualFileExportsGlobalEntry2, assetsManifest, buildInfo });
}
function assertBuildInfo(buildInfo) {
  assert(isObject(buildInfo));
  assert(hasProp(buildInfo, "versionAtBuildTime", "string"));
  assertVersionAtBuildTime(buildInfo.versionAtBuildTime);
  assert(hasProp(buildInfo, "viteConfigRuntime", "object"));
  assert(hasProp(buildInfo.viteConfigRuntime, "_baseViteOriginal", "string"));
  assert(hasProp(buildInfo.viteConfigRuntime, "root", "string"));
  assert(hasProp(buildInfo.viteConfigRuntime, "build", "object"));
  assert(hasProp(buildInfo.viteConfigRuntime.build, "outDir", "string"));
  assert(hasProp(buildInfo.viteConfigRuntime, "vitePluginServerEntry", "object"));
  assert(hasProp(buildInfo, "usesClientRouter", "boolean"));
}
function assertVersionAtBuildTime(versionAtBuildTime) {
  const versionAtRuntime = PROJECT_VERSION;
  const pretty = (version) => picocolors_default.bold(`vike@${version}`);
  assertUsage(versionAtBuildTime === versionAtRuntime, `Re-build your app (you're using ${pretty(versionAtRuntime)} but your app was built with ${pretty(versionAtBuildTime)})`);
}
async function updateUserFiles() {
  debugUpdate();
  assert(!isProd());
  const { viteDevServer } = globalObject10;
  const isRunnableServer = !!viteDevServer && isRunnableDevServer(viteDevServer);
  const isNonRunnableProcess = isNonRunnableDevProcess();
  if (!isRunnableServer && !isNonRunnableProcess) {
    debugUpdate("=> aborted: not runtime");
    return { success: false };
  }
  const { promise, resolve: resolve3 } = genPromise();
  globalObject10.waitForUserFilesUpdate = promise;
  globalObject10.waitForUserFilesUpdateResolve ?? (globalObject10.waitForUserFilesUpdateResolve = []);
  globalObject10.waitForUserFilesUpdateResolve.push(resolve3);
  let hasError = false;
  let virtualFileExportsGlobalEntry2;
  let err2;
  if (isRunnableServer) {
    assert(viteDevServer);
    assert(isRunnableDevServer(viteDevServer));
    assert(!isNonRunnableProcess);
    try {
      virtualFileExportsGlobalEntry2 = await viteDevServer.ssrLoadModule(virtualFileIdGlobalEntryServer);
    } catch (err_) {
      hasError = true;
      err2 = err_;
    }
  } else {
    assert(isNonRunnableProcess);
    assert(!viteDevServer);
    try {
      virtualFileExportsGlobalEntry2 = await __VIKE__DYNAMIC_IMPORT("virtual:vike:global-entry:server");
    } catch (err_) {
      hasError = true;
      err2 = err_;
    }
  }
  if (isOutdated())
    return { success: false };
  if (hasError)
    return onError2(err2);
  virtualFileExportsGlobalEntry2 = virtualFileExportsGlobalEntry2.default || virtualFileExportsGlobalEntry2;
  if (getVikeConfigErrorBuild()) {
    debugUpdate("=> aborted: build error");
    return { success: false };
  }
  try {
    await createGlobalContext(virtualFileExportsGlobalEntry2);
  } catch (err_) {
    hasError = true;
    err2 = err_;
  }
  if (isOutdated())
    return { success: false };
  if (hasError)
    return onError2(err2);
  return onSuccess();
  function onSuccess() {
    debugUpdate("=> onSuccess()");
    if (globalObject10.vikeConfigHasRuntimeError) {
      assert(logRuntimeInfo);
      logRuntimeInfo(vikeConfigErrorRecoverMsg, null, "error-resolve");
    }
    globalObject10.vikeConfigHasRuntimeError = false;
    setVikeConfigError({ errorRuntime: false });
    globalObject10.waitForUserFilesUpdateResolve.forEach((resolve4) => resolve4());
    globalObject10.waitForUserFilesUpdateResolve = [];
    resolve3();
    return { success: true };
  }
  function onError2(err3) {
    debugUpdate("=> onError()");
    if (
      // We must check whether the error was already logged to avoid printing it twice, e.g. when +onCreateGlobalContext.js has a syntax error
      !hasAlreadyLogged(err3)
    ) {
      logRuntimeError(err3, null);
    }
    setVikeConfigError({ errorRuntime: { err: err3 } });
    globalObject10.vikeConfigHasRuntimeError = true;
    return { success: false };
  }
  function isOutdated() {
    const yes = (
      // There is a newer call — let the new call supersede the old one.
      // We deliberately swallow the intermetidate state (including any potential error) — it's now outdated and has existed only for a very short period of time.
      globalObject10.waitForUserFilesUpdate !== promise || // Avoid race condition: abort if there is a new globalObject.viteDevServer (happens when vite.config.js is modified => Vite's dev server is fully reloaded).
      viteDevServer !== globalObject10.viteDevServer
    );
    if (yes)
      debugUpdate("=> aborted: isOutdated");
    return yes;
  }
  function debugUpdate(...args) {
    debug4("updateUserFiles()", ...args);
    debugFileChange("updateUserFiles()", ...args);
  }
}
async function createGlobalContext(virtualFileExportsGlobalEntry2) {
  debug4("createGlobalContext()");
  assert(!getVikeConfigErrorBuild());
  const globalContextPromise = createGlobalContextShared(virtualFileExportsGlobalEntry2, globalObject10, addGlobalContext, addGlobalContextTmp, addGlobalContextAsync);
  debug4("createGlobalContext() - done [sync]");
  assert(globalObject10.globalContext);
  const globalContext2 = await globalContextPromise;
  debug4("createGlobalContext() - done [async]");
  assertV1Design(
    // pageConfigs is PageConfigRuntime[] but assertV1Design() requires PageConfigBuildTime[]
    globalContext2._pageConfigs.length > 0,
    globalContext2._pageFilesAll
  );
  assertGlobalContextIsDefined();
  onSetupRuntime();
  objectAssign(globalContext2, { prerenderContext: globalObject10.prerenderContextPublic });
  return globalContext2;
}
async function addGlobalContextTmp(globalContext2) {
  debug4("addGlobalContextTmp()");
  const { pageRoutes, onBeforeRouteHook } = await loadPageRoutes(globalContext2._pageFilesAll, globalContext2._pageConfigs, globalContext2._pageConfigGlobal, globalContext2._allPageIds);
  return addGlobalContextCommon(globalContext2, pageRoutes, onBeforeRouteHook);
}
function addGlobalContext(globalContext2) {
  debug4("addGlobalContext()");
  const { pageRoutes, onBeforeRouteHook } = loadPageRoutesSync(globalContext2._pageFilesAll, globalContext2._pageConfigs, globalContext2._pageConfigGlobal, globalContext2._allPageIds);
  return addGlobalContextCommon(globalContext2, pageRoutes, onBeforeRouteHook);
}
function addGlobalContextCommon(globalContext2, pageRoutes, onBeforeRouteHook) {
  const globalContextBase = {
    isClientSide: false,
    _pageRoutes: pageRoutes,
    _onBeforeRouteHook: onBeforeRouteHook
  };
  const { viteDevServer, viteConfig, isPrerendering } = globalObject10;
  const isProduction = isProd();
  if (!isProduction) {
    assert(globalContext2);
    assert(!isPrerendering);
    return {
      ...globalContextBase,
      _isProduction: false,
      _isPrerendering: false,
      assetsManifest: null,
      _viteDevServer: viteDevServer,
      viteConfig
    };
  } else {
    assert(globalObject10.prodBuildEntry);
    assert(globalContext2);
    const { buildInfo, assetsManifest } = globalObject10;
    assert(buildInfo);
    assert(assetsManifest);
    const globalContextBase2 = {
      ...globalContextBase,
      _isProduction: true,
      assetsManifest,
      _viteDevServer: null,
      _usesClientRouter: buildInfo.usesClientRouter
    };
    if (isPrerendering) {
      assert(viteConfig);
      return {
        ...globalContextBase2,
        _isPrerendering: true,
        viteConfig
      };
    } else {
      return {
        ...globalContextBase2,
        _isPrerendering: false,
        viteConfig: null
      };
    }
  }
}
async function addGlobalContextAsync(globalContext2) {
  debug4("addGlobalContextAsync()");
  let { viteConfigRuntime, buildInfo } = globalObject10;
  if (!viteConfigRuntime) {
    if (buildInfo) {
      viteConfigRuntime = buildInfo.viteConfigRuntime;
    } else {
      assert(!isProcessSharedWithVite());
      assert(!isProd());
      assert(isNonRunnableDevProcess());
      const rpc = getViteRPC();
      viteConfigRuntime = await rpc.getViteConfigRuntimeRPC();
    }
  }
  assert(viteConfigRuntime);
  return {
    viteConfigRuntime,
    ...resolveBaseRuntime(viteConfigRuntime, globalContext2.config)
  };
}
function getInitialGlobalObject() {
  debug4("getInitialGlobalObject()");
  const { promise: viteDevServerPromise, resolve: viteDevServerPromiseResolve } = genPromise();
  return {
    viteDevServerPromise,
    viteDevServerPromiseResolve
  };
}
function resolveBaseRuntime(viteConfigRuntime, config) {
  const baseViteOriginal = viteConfigRuntime._baseViteOriginal;
  const baseServerUnresolved = config.baseServer ?? null;
  const baseAssetsUnresolved = config.baseAssets ?? null;
  return resolveBase(baseViteOriginal, baseServerUnresolved, baseAssetsUnresolved);
}
function isProcessSharedWithVite() {
  const yes = globalThis.__VIKE__IS_PROCESS_SHARED_WITH_VITE ?? false;
  if (yes)
    assert(!isNonRunnableDevProcess());
  return yes;
}
function isRunnableDevServer(viteDevServer) {
  assert(!isNonRunnableDevProcess());
  const yes = (
    // Vite 5
    !viteDevServer.environments || // Vite 6 or above
    isRunnableDevEnvironment(viteDevServer.environments.ssr)
  );
  return yes;
}
function isProd() {
  const isProduction = isProdOptional();
  if (isProduction === null) {
    if (globalObject10.isAfterFirstRenderPageCall) {
      return true;
    } else {
      assert(false);
    }
  }
  return isProduction;
}
function isProdOptional() {
  const vikeApiOperation = getVikeApiOperation()?.operation ?? null;
  const yes1 = !!globalObject10.prodBuildEntry;
  const yes2 = globalObject10.isPrerendering === true;
  const yes3 = !!vikeApiOperation && vikeApiOperation !== "dev";
  const yes4 = globalObject10.isProductionAccordingToVite === true;
  const yes5 = globalObject10.isProductionAccordingToUser === true;
  const yes6 = globalObject10.isProductionAccordingToPhotonVercel === true;
  const yes7 = globalThis.__VIKE__IS_DEV === false;
  const yes = yes1 || yes2 || yes3 || yes4 || yes5 || yes6 || yes7;
  const no1 = !!globalObject10.viteDevServer;
  const no2 = vikeApiOperation === "dev";
  const no3 = globalObject10.isProductionAccordingToVite === false;
  const no4 = globalObject10.isProductionAccordingToUser === false;
  const no5 = isNonRunnableDevProcess();
  const no6 = globalThis.__VIKE__IS_DEV === true;
  const no = no1 || no2 || no3 || no4 || no5 || no6;
  const debug6 = { yes1, yes2, yes3, yes4, yes5, yes6, yes7, no1, no2, no3, no4, no5, no6 };
  assert(typeof yes === "boolean", debug6);
  assert(typeof no === "boolean", debug6);
  if (yes) {
    assert(no === false, debug6);
    return true;
  }
  if (no) {
    assert(yes === false, debug6);
    return false;
  }
  return null;
}
var debug4, globalObject10, globalObjectTyped, vikeConfigErrorRecoverMsg;
var init_globalContext = __esm({
  "node_modules/vike/dist/server/runtime/globalContext.js"() {
    init_utils();
    init_runtime();
    init_virtualFileId2();
    init_picocolors();
    init_loadPageRoutes();
    init_assertV1Design();
    init_resolveBase();
    init_createGlobalContextShared();
    init_prepareGlobalContextForPublicUsage();
    init_loggerRuntime();
    init_getVikeConfigError();
    init_api_context();
    init_logErrorServer();
    debug4 = createDebug("vike:globalContext");
    globalObject10 = getGlobalObject("runtime/globalContext.ts", getInitialGlobalObject());
    globalObjectTyped = globalObject10;
    vikeConfigErrorRecoverMsg = picocolors_default.bold(picocolors_default.green("Vike config loaded"));
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/shared-server-client/route/resolveRouteString.js
function assertRouteString(routeString, errPrefix = "Invalid") {
  let errPrefix2 = `${errPrefix} Route String ${highlight(routeString)}`;
  assertUsage(routeString !== "", `${errPrefix2} (empty string): set it to ${highlight("/")} instead`);
  assertUsage(["/", "*"].includes(routeString[0]), `${errPrefix2}: it should start with ${highlight("/")} or ${highlight("*")}`);
  assertUsage(!routeString.includes("**"), `${errPrefix2}: set it to ${highlight(routeString.split("**").join("*"))} instead`);
}
function resolveRouteString(routeString, urlPathname) {
  assertRouteString(routeString);
  const segments = parseRouteString(routeString);
  const routeRegexStrInner = segments.map((segment) => {
    if (segment.param) {
      return "[^/]+";
    }
    if (segment.glob) {
      return ".*";
    }
    return escapeRegex(segment.static);
  }).map((s3) => `(${s3})`).join("");
  const routeRegex = new RegExp(`^${routeRegexStrInner}/?$`);
  const routeRegexMatch = urlPathname.match(routeRegex);
  if (!routeRegexMatch)
    return null;
  const routeParams = {};
  const [_4, ...segmentsValue] = routeRegexMatch;
  let globIdx = 0;
  const hasMultipleGlobs = segments.filter((segment) => segment.glob).length > 1;
  segments.forEach((segment, i3) => {
    let val = segmentsValue[i3];
    if (segment.param) {
      routeParams[segment.param] = val;
    }
    if (segment.glob) {
      const param = `*${hasMultipleGlobs ? ++globIdx : ""}`;
      routeParams[param] = val;
    }
  });
  return { routeParams };
}
function parseRouteString(routeString) {
  const segments = [];
  const pushStatic = (s3) => {
    const segmentLast = segments[segments.length - 1];
    if (segmentLast?.static) {
      segmentLast.static += s3;
    } else {
      segments.push({ static: s3 });
    }
  };
  const parts = routeString.split("/");
  parts.forEach((s3, i3) => {
    if (i3 !== 0)
      pushStatic("/");
    if (isParam(s3)) {
      assertWarning2(!s3.startsWith(PARAM_TOKEN_OLD), `Outdated Route String ${highlight(routeString)}, use ${highlight(routeString.split(PARAM_TOKEN_OLD).join(PARAM_TOKEN_NEW))} instead`, { onlyOnce: true });
      segments.push({ param: s3.slice(1) });
    } else {
      if (s3 === "*" && i3 === parts.length - 1 && routeString !== "*" && routeString !== "/*") {
        segments.push({ glob: true });
      } else {
        s3.split("*").forEach((s4, i4) => {
          if (i4 !== 0)
            segments.push({ glob: true });
          if (s4 !== "") {
            pushStatic(s4);
          }
        });
      }
    }
  });
  return segments;
}
function analyzeRouteString(routeString) {
  const segments = parseRouteString(routeString);
  const countStaticParts = (s3) => s3?.split("/").filter(Boolean).length || 0;
  let numberOfStaticPartsBeginning = 0;
  for (const segment of segments) {
    if (!segment.static)
      break;
    numberOfStaticPartsBeginning += countStaticParts(segment.static);
  }
  const numberOfStaticParts = segments.map((s3) => countStaticParts(s3.static)).reduce((sum, a2) => sum + a2, 0);
  const numberOfParams = segments.filter((s3) => s3.param).length;
  const numberOfGlobs = segments.filter((s3) => s3.glob).length;
  return { numberOfStaticPartsBeginning, numberOfStaticParts, numberOfParams, numberOfGlobs };
}
function isParam(routeSegment) {
  return routeSegment.startsWith(PARAM_TOKEN_NEW) || routeSegment.startsWith(PARAM_TOKEN_OLD);
}
function isStaticRouteString(routeString) {
  const url5 = routeString;
  const match2 = resolveRouteString(routeString, url5);
  assert(match2);
  return Object.keys(match2.routeParams).length === 0;
}
function highlight(routeString) {
  if (isBrowser2()) {
    return `'${routeString}'`;
  } else {
    if (routeString === "") {
      routeString = "''";
    }
    return picocolors_default.cyan(routeString);
  }
}
var PARAM_TOKEN_NEW, PARAM_TOKEN_OLD;
var init_resolveRouteString = __esm({
  "node_modules/vike/dist/shared-server-client/route/resolveRouteString.js"() {
    init_utils5();
    init_utils6();
    init_picocolors();
    PARAM_TOKEN_NEW = "@";
    PARAM_TOKEN_OLD = ":";
  }
});

// node_modules/vike/dist/shared-server-client/route/resolvePrecedence.js
function resolvePrecedence(routeMatches) {
  routeMatches.sort(sortMatches).sort(makeFirst((routeMatch) => routeMatch.routeType === "FUNCTION" && !!routeMatch.precedence && routeMatch.precedence < 0)).sort(makeFirst((routeMatch) => routeMatch.routeType === "STRING" && isStaticRouteString(routeMatch.routeString) === false)).sort(makeFirst((routeMatch) => routeMatch.routeType === "FUNCTION" && !routeMatch.precedence)).sort(makeFirst((routeMatch) => routeMatch.routeType === "STRING" && isStaticRouteString(routeMatch.routeString) === true)).sort(makeFirst((routeMatch) => routeMatch.routeType === "FILESYSTEM")).sort(makeFirst((routeMatch) => routeMatch.routeType === "FUNCTION" && !!routeMatch.precedence && routeMatch.precedence > 0));
}
function sortMatches(routeMatch1, routeMatch2) {
  {
    const precedence1 = routeMatch1.precedence ?? 0;
    const precedence2 = routeMatch2.precedence ?? 0;
    if (precedence1 !== precedence2) {
      return precedence1 > precedence2 ? -1 : 1;
    }
  }
  if (!routeMatch2.routeString) {
    return 0;
  }
  if (!routeMatch1.routeString) {
    return 0;
  }
  {
    const getValue = (routeString) => analyzeRouteString(routeString).numberOfStaticPartsBeginning;
    const result = higherFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
    if (result !== 0) {
      return result;
    }
  }
  {
    const getValue = (routeString) => analyzeRouteString(routeString).numberOfStaticParts;
    const result = higherFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
    if (result !== 0) {
      return result;
    }
  }
  {
    const getValue = (routeString) => analyzeRouteString(routeString).numberOfGlobs;
    const result = lowerFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
    if (result !== 0) {
      return result;
    }
  }
  {
    const getValue = (routeString) => analyzeRouteString(routeString).numberOfParams;
    const result = higherFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
    if (result !== 0) {
      return result;
    }
  }
  return 0;
}
var init_resolvePrecedence = __esm({
  "node_modules/vike/dist/shared-server-client/route/resolvePrecedence.js"() {
    init_resolveRouteString();
    init_utils6();
    init_utils6();
    init_resolveRouteString();
  }
});

// node_modules/vike/dist/shared-server-client/assertPageContextProvidedByUser.js
function assertPageContextProvidedByUser(pageContextProvidedByUser, { hookName, hookFilePath }) {
  if (pageContextProvidedByUser === void 0 || pageContextProvidedByUser === null)
    return;
  assert(!hookName.endsWith(")"));
  const errPrefix = `The ${picocolors_default.cyan("pageContext")} object provided by the ${hookName}() hook defined by ${hookFilePath}`;
  assertUsage(isObject(pageContextProvidedByUser), `${errPrefix} should be an object (but it's ${picocolors_default.cyan(`typeof pageContext === ${JSON.stringify(typeof pageContextProvidedByUser)}`)} instead)`);
  assertUsage(!("isPageContext" in pageContextProvidedByUser), `${errPrefix} shouldn't be the whole ${picocolors_default.cyan("pageContext")} object, see https://vike.dev/pageContext-manipulation#do-not-return-entire-pagecontext`);
  assertWarning2(!("pageId" in pageContextProvidedByUser), `${errPrefix} sets ${picocolors_default.cyan("pageContext.pageId")} which means that Vike's routing is overridden. This is an experimental feature: make sure to contact a vike maintainer before using this.`, { onlyOnce: true });
  assertUsage(!("is404" in pageContextProvidedByUser), `${errPrefix} sets ${picocolors_default.cyan("pageContext.is404")} which is forbidden, use ${picocolors_default.cyan("throw render()")} instead, see https://vike.dev/render`);
}
var init_assertPageContextProvidedByUser = __esm({
  "node_modules/vike/dist/shared-server-client/assertPageContextProvidedByUser.js"() {
    init_utils5();
    init_picocolors();
  }
});

// node_modules/vike/dist/shared-server-client/route/execHookOnBeforeRoute.js
async function execHookOnBeforeRoute(pageContext) {
  const pageContextFromOnBeforeRouteHook = {};
  if (!pageContext._globalContext._onBeforeRouteHook)
    return null;
  const pageContextFromHook = await getPageContextFromHook(pageContext._globalContext._onBeforeRouteHook, pageContext);
  if (pageContextFromHook) {
    objectAssign(pageContextFromOnBeforeRouteHook, pageContextFromHook);
    if (hasProp(pageContextFromOnBeforeRouteHook, "pageId", "string") || hasProp(pageContextFromOnBeforeRouteHook, "pageId", "null")) {
      if (!hasProp(pageContextFromOnBeforeRouteHook, "routeParams")) {
        objectAssign(pageContextFromOnBeforeRouteHook, { routeParams: {} });
      } else {
        assert(hasProp(pageContextFromOnBeforeRouteHook, "routeParams", "object"));
      }
      objectAssign(pageContextFromOnBeforeRouteHook, {
        _routingProvidedByOnBeforeRouteHook: true
      });
      return pageContextFromOnBeforeRouteHook;
    }
  }
  objectAssign(pageContextFromOnBeforeRouteHook, {
    _routingProvidedByOnBeforeRouteHook: false
  });
  return pageContextFromOnBeforeRouteHook;
}
async function getPageContextFromHook(onBeforeRouteHook, pageContext) {
  let { hookReturn } = execHookDirectSync(onBeforeRouteHook, pageContext, preparePageContextForPublicUsage);
  assertSyncRouting(hookReturn, `The onBeforeRoute() hook ${onBeforeRouteHook.hookFilePath}`);
  hookReturn = await hookReturn;
  const errPrefix = `The onBeforeRoute() hook defined by ${onBeforeRouteHook.hookFilePath}`;
  assertUsage(hookReturn === null || hookReturn === void 0 || isObjectWithKeys(hookReturn, ["pageContext"]) && hasProp(hookReturn, "pageContext"), `${errPrefix} should return ${picocolors_default.cyan("null")}, ${picocolors_default.cyan("undefined")}, or a plain JavaScript object ${picocolors_default.cyan("{ pageContext: { /* ... */ } }")}`);
  if (hookReturn === null || hookReturn === void 0) {
    return null;
  }
  assertUsage(hasProp(hookReturn, "pageContext", "object"), `${errPrefix} returned ${picocolors_default.cyan("{ pageContext }")} but pageContext should be a plain JavaScript object.`);
  if (hasProp(hookReturn.pageContext, "pageId") && !hasProp(hookReturn.pageContext, "pageId", "null")) {
    const errPrefix2 = `${errPrefix} returned ${picocolors_default.cyan("{ pageContext: { pageId } }")} but ${picocolors_default.cyan("pageId")} should be`;
    assertUsage(hasProp(hookReturn.pageContext, "pageId", "string"), `${errPrefix2} a string or null`);
    assertUsage(pageContext._globalContext._allPageIds.includes(hookReturn.pageContext.pageId), `${errPrefix2} ${joinEnglish(pageContext._globalContext._allPageIds.map((s3) => picocolors_default.cyan(s3)), "or")}`);
  }
  if (hasProp(hookReturn.pageContext, "routeParams")) {
    assertRouteParams(hookReturn.pageContext, `${errPrefix} returned ${picocolors_default.cyan("{ pageContext: { routeParams } }")} but routeParams should`);
  }
  const deprecatedReturn = (prop) => `${errPrefix} returned ${picocolors_default.cyan(`{ pageContext: { ${prop} } }`)} which is deprecated. Return ${picocolors_default.cyan("{ pageContext: { urlLogical } }")} instead.`;
  if (hasProp(hookReturn.pageContext, "url")) {
    assertWarning2(false, deprecatedReturn("url"), { onlyOnce: true });
    hookReturn.pageContext.urlLogical = hookReturn.pageContext.url;
    delete hookReturn.pageContext.url;
  }
  if (hasProp(hookReturn.pageContext, "urlOriginal")) {
    assertWarning2(false, deprecatedReturn("urlOriginal"), { onlyOnce: true });
    hookReturn.pageContext.urlLogical = hookReturn.pageContext.urlOriginal;
    delete hookReturn.pageContext.urlOriginal;
  }
  if (hasProp(hookReturn.pageContext, "urlLogical")) {
    assertUsageUrlAbsolute(
      // We type-cast instead of assertUsage() validation in order to save client-side KBs
      hookReturn.pageContext.urlLogical,
      `${errPrefix} returned ${picocolors_default.cyan("{ pageContext: { urlLogical } }")} and ${picocolors_default.cyan("urlLogical")}`
    );
  }
  assertPageContextProvidedByUser(hookReturn.pageContext, {
    hookFilePath: onBeforeRouteHook.hookFilePath,
    hookName: "onBeforeRoute"
  });
  const pageContextAddendumHook = {};
  objectAssign(pageContextAddendumHook, hookReturn.pageContext);
  return pageContextAddendumHook;
}
var init_execHookOnBeforeRoute = __esm({
  "node_modules/vike/dist/shared-server-client/route/execHookOnBeforeRoute.js"() {
    init_assertPageContextProvidedByUser();
    init_utils6();
    init_resolveRouteFunction();
    init_picocolors();
    init_execHook();
    init_preparePageContextForPublicUsage();
  }
});

// node_modules/vike/dist/shared-server-client/route/index.js
async function route(pageContext, skipOnBeforeRouteHook) {
  const pageContextFromRoute = {};
  if (
    // Tree-shaking to save client-side KBs
    !globalThis.__VIKE__IS_CLIENT || globalThis.__VIKE__IS_DEBUG
  ) {
    debug("vike:routing", "Pages routes:", pageContext._globalContext._pageRoutes);
  }
  if (!skipOnBeforeRouteHook) {
    const pageContextFromOnBeforeRouteHook = await execHookOnBeforeRoute(pageContext);
    if (pageContextFromOnBeforeRouteHook) {
      if (pageContextFromOnBeforeRouteHook._routingProvidedByOnBeforeRouteHook) {
        assert(pageContextFromOnBeforeRouteHook.pageId);
        return pageContextFromOnBeforeRouteHook;
      } else {
        objectAssign(pageContextFromRoute, pageContextFromOnBeforeRouteHook);
      }
    }
    objectAssign(pageContext, pageContextFromOnBeforeRouteHook);
  }
  const allPageIds = pageContext._globalContext._allPageIds;
  assertUsage(allPageIds.length > 0, "No page found. You must create at least one page.");
  assert(pageContext._globalContext._pageFilesAll.length > 0 || pageContext._globalContext._pageConfigs.length > 0);
  const { urlPathname } = pageContext;
  assert(urlPathname.startsWith("/"));
  const routeMatches = [];
  await Promise.all(pageContext._globalContext._pageRoutes.map(async (pageRoute) => {
    const { pageId, routeType } = pageRoute;
    if (pageRoute.routeType === "FILESYSTEM") {
      const { routeString } = pageRoute;
      const match2 = resolveRouteString(routeString, urlPathname);
      if (match2) {
        const { routeParams } = match2;
        routeMatches.push({ pageId, routeParams, routeString, routeType });
      }
      return;
    }
    if (pageRoute.routeType === "STRING") {
      const { routeString } = pageRoute;
      const match2 = resolveRouteString(routeString, urlPathname);
      if (match2) {
        const { routeParams } = match2;
        assert(routeType === "STRING");
        routeMatches.push({
          pageId,
          routeString,
          routeParams,
          routeType
        });
      }
      return;
    }
    if (pageRoute.routeType === "FUNCTION") {
      const { routeFunction, routeFunctionFilePath } = pageRoute;
      const match2 = await resolveRouteFunction(routeFunction, pageContext, routeFunctionFilePath);
      if (match2) {
        const { routeParams, precedence } = match2;
        routeMatches.push({ pageId, precedence, routeParams, routeType });
      }
      return;
    }
    assert(false);
  }));
  resolvePrecedence(routeMatches);
  const winner = routeMatches[0] ?? null;
  if (
    // Tree-shaking to save client-side KBs
    !globalThis.__VIKE__IS_CLIENT || globalThis.__VIKE__IS_DEBUG
  ) {
    debug("vike:routing", `Route matches for URL ${picocolors_default.cyan(urlPathname)} (in precedence order):`, routeMatches);
  }
  objectAssign(pageContextFromRoute, { _routeMatch: winner });
  if (!winner) {
    objectAssign(pageContextFromRoute, {
      pageId: null,
      routeParams: {}
    });
    return pageContextFromRoute;
  }
  {
    const { routeParams } = winner;
    assert(isPlainObject(routeParams));
    objectAssign(pageContextFromRoute, {
      pageId: winner.pageId,
      routeParams: winner.routeParams
    });
  }
  return pageContextFromRoute;
}
var init_route = __esm({
  "node_modules/vike/dist/shared-server-client/route/index.js"() {
    init_assertRoutingType();
    init_isBrowser();
    init_utils6();
    init_resolvePrecedence();
    init_resolveRouteString();
    init_resolveRouteFunction();
    init_execHookOnBeforeRoute();
    init_picocolors();
    if (isBrowser2()) {
      assertClientRouting();
    }
  }
});

// node_modules/solid-js/dist/server.js
function castError(err2) {
  if (err2 instanceof Error) return err2;
  return new Error(typeof err2 === "string" ? err2 : "Unknown error", {
    cause: err2
  });
}
function handleError(err2, owner = Owner) {
  const fns = owner && owner.context && owner.context[ERROR];
  const error = castError(err2);
  if (!fns) throw error;
  try {
    for (const f3 of fns) f3(error);
  } catch (e) {
    handleError(e, owner && owner.owner || null);
  }
}
function createOwner() {
  const o2 = {
    owner: Owner,
    context: Owner ? Owner.context : null,
    owned: null,
    cleanups: null
  };
  if (Owner) {
    if (!Owner.owned) Owner.owned = [o2];
    else Owner.owned.push(o2);
  }
  return o2;
}
function createRoot(fn, detachedOwner) {
  const owner = Owner, current = detachedOwner === void 0 ? owner : detachedOwner, root = fn.length === 0 ? UNOWNED : {
    context: current ? current.context : null,
    owner: current,
    owned: null,
    cleanups: null
  };
  Owner = root;
  let result;
  try {
    result = fn(fn.length === 0 ? () => {
    } : () => cleanNode(root));
  } catch (err2) {
    handleError(err2);
  } finally {
    Owner = owner;
  }
  return result;
}
function createSignal(value, options) {
  return [() => value, (v2) => {
    return value = typeof v2 === "function" ? v2(value) : v2;
  }];
}
function createComputed(fn, value) {
  Owner = createOwner();
  try {
    fn(value);
  } catch (err2) {
    handleError(err2);
  } finally {
    Owner = Owner.owner;
  }
}
function createMemo(fn, value) {
  Owner = createOwner();
  let v2;
  try {
    v2 = fn(value);
  } catch (err2) {
    handleError(err2);
  } finally {
    Owner = Owner.owner;
  }
  return () => v2;
}
function cleanNode(node) {
  if (node.owned) {
    for (let i3 = 0; i3 < node.owned.length; i3++) cleanNode(node.owned[i3]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (let i3 = 0; i3 < node.cleanups.length; i3++) node.cleanups[i3]();
    node.cleanups = null;
  }
}
function createContext(defaultValue) {
  const id = /* @__PURE__ */ Symbol("context");
  return {
    id,
    Provider: createProvider(id),
    defaultValue
  };
}
function useContext(context) {
  return Owner && Owner.context && Owner.context[context.id] !== void 0 ? Owner.context[context.id] : context.defaultValue;
}
function children(fn) {
  const memo2 = createMemo(() => resolveChildren(fn()));
  memo2.toArray = () => {
    const c2 = memo2();
    return Array.isArray(c2) ? c2 : c2 != null ? [c2] : [];
  };
  return memo2;
}
function resolveChildren(children2) {
  if (typeof children2 === "function" && !children2.length) return resolveChildren(children2());
  if (Array.isArray(children2)) {
    const results = [];
    for (let i3 = 0; i3 < children2.length; i3++) {
      const result = resolveChildren(children2[i3]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return children2;
}
function createProvider(id) {
  return function provider(props) {
    return createMemo(() => {
      Owner.context = {
        ...Owner.context,
        [id]: props.value
      };
      return children(() => props.children);
    });
  };
}
function getContextId(count) {
  const num = String(count), len = num.length - 1;
  return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
}
function setHydrateContext(context) {
  sharedConfig.context = context;
}
function nextHydrateContext() {
  return sharedConfig.context ? {
    ...sharedConfig.context,
    id: sharedConfig.getNextContextId(),
    count: 0
  } : void 0;
}
function createComponent(Comp, props) {
  if (sharedConfig.context && !sharedConfig.context.noHydrate) {
    const c2 = sharedConfig.context;
    setHydrateContext(nextHydrateContext());
    const r = Comp(props || {});
    setHydrateContext(c2);
    return r;
  }
  return Comp(props || {});
}
function splitProps(props, ...keys) {
  const descriptors = Object.getOwnPropertyDescriptors(props), split = (k2) => {
    const clone = {};
    for (let i3 = 0; i3 < k2.length; i3++) {
      const key = k2[i3];
      if (descriptors[key]) {
        Object.defineProperty(clone, key, descriptors[key]);
        delete descriptors[key];
      }
    }
    return clone;
  };
  return keys.map(split).concat(split(Object.keys(descriptors)));
}
function Show(props) {
  let c2;
  return props.when ? typeof (c2 = props.children) === "function" ? c2(props.keyed ? props.when : () => props.when) : c2 : props.fallback || "";
}
function createResource(source, fetcher, options = {}) {
  if (typeof fetcher !== "function") {
    options = fetcher || {};
    fetcher = source;
    source = true;
  }
  const contexts = /* @__PURE__ */ new Set();
  const id = sharedConfig.getNextContextId();
  let resource = {};
  let value = options.storage ? options.storage(options.initialValue)[0]() : options.initialValue;
  let p4;
  let error;
  if (sharedConfig.context.async && options.ssrLoadFrom !== "initial") {
    resource = sharedConfig.context.resources[id] || (sharedConfig.context.resources[id] = {});
    if (resource.ref) {
      if (!resource.data && !resource.ref[0]._loading && !resource.ref[0].error) resource.ref[1].refetch();
      return resource.ref;
    }
  }
  const prepareResource = () => {
    if (error) throw error;
    const resolved = options.ssrLoadFrom !== "initial" && sharedConfig.context.async && "data" in sharedConfig.context.resources[id];
    if (!resolved && resourceContext) resourceContext.push(id);
    if (!resolved && read._loading) {
      const ctx = useContext(SuspenseContext);
      if (ctx) {
        ctx.resources.set(id, read);
        contexts.add(ctx);
      }
    }
    return resolved;
  };
  const read = () => {
    return prepareResource() ? sharedConfig.context.resources[id].data : value;
  };
  const loading = () => {
    prepareResource();
    return read._loading;
  };
  read._loading = false;
  read.error = void 0;
  read.state = "initialValue" in options ? "ready" : "unresolved";
  Object.defineProperties(read, {
    latest: {
      get() {
        return read();
      }
    },
    loading: {
      get() {
        return loading();
      }
    }
  });
  function load() {
    const ctx = sharedConfig.context;
    if (!ctx.async) return read._loading = !!(typeof source === "function" ? source() : source);
    if (ctx.resources && id in ctx.resources && "data" in ctx.resources[id]) {
      value = ctx.resources[id].data;
      return;
    }
    let lookup2;
    try {
      resourceContext = [];
      lookup2 = typeof source === "function" ? source() : source;
      if (resourceContext.length) return;
    } finally {
      resourceContext = null;
    }
    if (!p4) {
      if (lookup2 == null || lookup2 === false) return;
      p4 = fetcher(lookup2, {
        value
      });
    }
    if (p4 != void 0 && typeof p4 === "object" && "then" in p4) {
      read._loading = true;
      read.state = "pending";
      p4 = p4.then((res) => {
        read._loading = false;
        read.state = "ready";
        ctx.resources[id].data = res;
        p4 = null;
        notifySuspense(contexts);
        return res;
      }).catch((err2) => {
        read._loading = false;
        read.state = "errored";
        read.error = error = castError(err2);
        p4 = null;
        notifySuspense(contexts);
        throw error;
      });
      if (ctx.serialize) ctx.serialize(id, p4, options.deferStream);
      return p4;
    }
    ctx.resources[id].data = p4;
    if (ctx.serialize) ctx.serialize(id, p4);
    p4 = null;
    return ctx.resources[id].data;
  }
  if (options.ssrLoadFrom !== "initial") load();
  const ref = [read, {
    refetch: load,
    mutate: (v2) => value = v2
  }];
  if (p4) resource.ref = ref;
  return ref;
}
function suspenseComplete(c2) {
  for (const r of c2.resources.values()) {
    if (r._loading) return false;
  }
  return true;
}
function notifySuspense(contexts) {
  for (const c2 of contexts) {
    if (!suspenseComplete(c2)) {
      continue;
    }
    c2.completed();
    contexts.delete(c2);
  }
}
var ERROR, UNOWNED, Owner, createRenderEffect, sharedConfig, SuspenseContext, resourceContext;
var init_server = __esm({
  "node_modules/solid-js/dist/server.js"() {
    ERROR = /* @__PURE__ */ Symbol("error");
    UNOWNED = {
      context: null,
      owner: null,
      owned: null,
      cleanups: null
    };
    Owner = null;
    createRenderEffect = createComputed;
    sharedConfig = {
      context: void 0,
      getContextId() {
        if (!this.context) throw new Error(`getContextId cannot be used under non-hydrating context`);
        return getContextId(this.context.count);
      },
      getNextContextId() {
        if (!this.context) throw new Error(`getNextContextId cannot be used under non-hydrating context`);
        return getContextId(this.context.count++);
      }
    };
    SuspenseContext = createContext();
    resourceContext = null;
  }
});

// node_modules/seroval/dist/esm/production/index.mjs
function Nr(o2) {
  switch (o2) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return;
  }
}
function d(o2) {
  let e = "", r = 0, t;
  for (let n2 = 0, a2 = o2.length; n2 < a2; n2++) t = Nr(o2[n2]), t && (e += o2.slice(r, n2) + t, r = n2 + 1);
  return r === 0 ? e = o2 : e += o2.slice(r), e;
}
function xr(o2) {
  return o2 == null ? `${ae}=${ae}||[]` : `(${ae}=${ae}||{})["${d(o2)}"]=[]`;
}
function f(o2, e) {
  if (!o2) throw e;
}
function je(o2) {
  return Be.has(o2);
}
function Ke(o2) {
  return f(je(o2), new ie(o2)), Be.get(o2);
}
function Hr(o2) {
  return o2;
}
function Ye(o2, e) {
  for (let r = 0, t = e.length; r < t; r++) {
    let n2 = e[r];
    o2.has(n2) || (o2.add(n2), n2.extends && Ye(o2, n2.extends));
  }
}
function m(o2) {
  if (o2) {
    let e = /* @__PURE__ */ new Set();
    return Ye(e, o2), [...e];
  }
}
function u(o2, e, r, t, n2, a2, i3, l2, c2, p4, h2, X3) {
  return { t: o2, i: e, s: r, l: t, c: n2, m: a2, p: i3, e: l2, a: c2, f: p4, b: h2, o: X3 };
}
function x(o2) {
  return u(2, s, o2, s, s, s, s, s, s, s, s, s);
}
function me(o2) {
  return o2 instanceof EvalError ? 1 : o2 instanceof RangeError ? 2 : o2 instanceof ReferenceError ? 3 : o2 instanceof SyntaxError ? 4 : o2 instanceof TypeError ? 5 : o2 instanceof URIError ? 6 : 0;
}
function wr(o2) {
  let e = ue[me(o2)];
  return o2.name !== e ? { name: o2.name } : o2.constructor.name !== e ? { name: o2.constructor.name } : {};
}
function j(o2, e) {
  let r = wr(o2), t = Object.getOwnPropertyNames(o2);
  for (let n2 = 0, a2 = t.length, i3; n2 < a2; n2++) i3 = t[n2], i3 !== "name" && i3 !== "message" && (i3 === "stack" ? e & 4 && (r = r || {}, r[i3] = o2[i3]) : (r = r || {}, r[i3] = o2[i3]));
  return r;
}
function fe(o2) {
  return Object.isFrozen(o2) ? 3 : Object.isSealed(o2) ? 2 : Object.isExtensible(o2) ? 0 : 1;
}
function ge(o2) {
  switch (o2) {
    case Number.POSITIVE_INFINITY:
      return Qe;
    case Number.NEGATIVE_INFINITY:
      return er;
  }
  return o2 !== o2 ? rr : Object.is(o2, -0) ? Xe : u(0, s, o2, s, s, s, s, s, s, s, s, s);
}
function w(o2) {
  return u(1, s, d(o2), s, s, s, s, s, s, s, s, s);
}
function Se(o2) {
  return u(3, s, "" + o2, s, s, s, s, s, s, s, s, s);
}
function sr(o2) {
  return u(4, o2, s, s, s, s, s, s, s, s, s, s);
}
function he(o2, e) {
  let r = e.valueOf();
  return u(5, o2, r !== r ? "" : e.toISOString(), s, s, s, s, s, s, s, s, s);
}
function ye(o2, e) {
  return u(6, o2, s, s, d(e.source), e.flags, s, s, s, s, s, s);
}
function ve(o2, e) {
  let r = new Uint8Array(e), t = r.length, n2 = new Array(t);
  for (let a2 = 0; a2 < t; a2++) n2[a2] = r[a2];
  return u(19, o2, n2, s, s, s, s, s, s, s, s, s);
}
function or(o2, e) {
  return u(17, o2, ce[e], s, s, s, s, s, s, s, s, s);
}
function nr(o2, e) {
  return u(18, o2, d(Ke(e)), s, s, s, s, s, s, s, s, s);
}
function _(o2, e, r) {
  return u(25, o2, r, s, d(e), s, s, s, s, s, s, s);
}
function Ne(o2, e, r) {
  return u(9, o2, s, e.length, s, s, s, s, r, s, s, fe(e));
}
function be(o2, e) {
  return u(21, o2, s, s, s, s, s, s, s, e, s, s);
}
function xe(o2, e, r) {
  return u(15, o2, s, e.length, e.constructor.name, s, s, s, s, r, e.byteOffset, s);
}
function Ie(o2, e, r) {
  return u(16, o2, s, e.length, e.constructor.name, s, s, s, s, r, e.byteOffset, s);
}
function Ae(o2, e, r) {
  return u(20, o2, s, e.byteLength, s, s, s, s, s, r, e.byteOffset, s);
}
function we(o2, e, r) {
  return u(13, o2, me(e), s, s, d(e.message), r, s, s, s, s, s);
}
function Ee(o2, e, r) {
  return u(14, o2, me(e), s, s, d(e.message), r, s, s, s, s, s);
}
function Pe(o2, e, r) {
  return u(7, o2, s, e, s, s, s, s, r, s, s, s);
}
function M(o2, e) {
  return u(28, s, s, s, s, s, s, s, [o2, e], s, s, s);
}
function U(o2, e) {
  return u(30, s, s, s, s, s, s, s, [o2, e], s, s, s);
}
function L(o2, e, r) {
  return u(31, o2, s, s, s, s, s, s, r, e, s, s);
}
function Re(o2, e) {
  return u(32, o2, s, s, s, s, s, s, s, e, s, s);
}
function Te(o2, e) {
  return u(33, o2, s, s, s, s, s, s, s, e, s, s);
}
function Oe(o2, e) {
  return u(34, o2, s, s, s, s, s, s, s, e, s, s);
}
function Er(o2, e) {
  return e instanceof Error ? `Seroval caught an error during the ${o2} process.
  
${e.name}
${e.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new` : `Seroval caught an error during the ${o2} process.

"${_e.call(e)}"

For more information, please check the "cause" property of this error.`;
}
function z(o2, e, r) {
  return o2 & 2 ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>" + (r.startsWith("{") ? "(" + r + ")" : r) : "function(" + e.join(",") + "){return " + r + "}";
}
function S(o2, e, r) {
  return o2 & 2 ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>{" + r + "}" : "function(" + e.join(",") + "){" + r + "}";
}
function Pr(o2) {
  return z(o2, ["r"], "(r.p=new Promise(" + S(o2, ["s", "f"], "r.s=s,r.f=f") + "))");
}
function Rr(o2) {
  return S(o2, ["r", "d"], "r.s(d),r.p.s=1,r.p.v=d");
}
function Tr(o2) {
  return S(o2, ["r", "d"], "r.f(d),r.p.s=2,r.p.v=d");
}
function Or(o2) {
  return z(o2, ["b", "a", "s", "l", "p", "f", "e", "n"], "(b=[],a=!0,s=!1,l=[],p=0,f=" + S(o2, ["v", "m", "x"], "for(x=0;x<p;x++)l[x]&&l[x][m](v)") + ",n=" + S(o2, ["o", "x", "z", "c"], 'for(x=0,z=b.length;x<z;x++)(c=b[x],(!a&&x===z-1)?o[s?"return":"throw"](c):o.next(c))') + ",e=" + z(o2, ["o", "t"], "(a&&(l[t=p++]=o),n(o)," + S(o2, [], "a&&(l[t]=void 0)") + ")") + ",{__SEROVAL_STREAM__:!0,on:" + z(o2, ["o"], "e(o)") + ",next:" + S(o2, ["v"], 'a&&(b.push(v),f(v,"next"))') + ",throw:" + S(o2, ["v"], 'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)') + ",return:" + S(o2, ["v"], 'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)') + "})");
}
function cr(o2, e) {
  switch (e) {
    case 0:
      return "[]";
    case 1:
      return Pr(o2);
    case 2:
      return Rr(o2);
    case 3:
      return Tr(o2);
    case 4:
      return Or(o2);
    default:
      return "";
  }
}
function Fe(o2) {
  return "__SEROVAL_STREAM__" in o2;
}
function K() {
  let o2 = /* @__PURE__ */ new Set(), e = [], r = true, t = true;
  function n2(l2) {
    for (let c2 of o2.keys()) c2.next(l2);
  }
  function a2(l2) {
    for (let c2 of o2.keys()) c2.throw(l2);
  }
  function i3(l2) {
    for (let c2 of o2.keys()) c2.return(l2);
  }
  return { __SEROVAL_STREAM__: true, on(l2) {
    r && o2.add(l2);
    for (let c2 = 0, p4 = e.length; c2 < p4; c2++) {
      let h2 = e[c2];
      c2 === p4 - 1 && !r ? t ? l2.return(h2) : l2.throw(h2) : l2.next(h2);
    }
    return () => {
      r && o2.delete(l2);
    };
  }, next(l2) {
    r && (e.push(l2), n2(l2));
  }, throw(l2) {
    r && (e.push(l2), a2(l2), r = false, t = false, o2.clear());
  }, return(l2) {
    r && (e.push(l2), i3(l2), r = false, t = true, o2.clear());
  } };
}
function Ve(o2) {
  let e = K(), r = o2[Symbol.asyncIterator]();
  async function t() {
    try {
      let n2 = await r.next();
      n2.done ? e.return(n2.value) : (e.next(n2.value), await t());
    } catch (n2) {
      e.throw(n2);
    }
  }
  return t().catch(() => {
  }), e;
}
function J(o2) {
  let e = [], r = -1, t = -1, n2 = o2[Symbol.iterator]();
  for (; ; ) try {
    let a2 = n2.next();
    if (e.push(a2.value), a2.done) {
      t = e.length - 1;
      break;
    }
  } catch (a2) {
    r = e.length, e.push(a2);
  }
  return { v: e, t: r, d: t };
}
function Le(o2) {
  let e = o2[0];
  return (e === "$" || e === "_" || e >= "A" && e <= "Z" || e >= "a" && e <= "z") && kr.test(o2);
}
function se(o2) {
  switch (o2.t) {
    case 0:
      return o2.s + "=" + o2.v;
    case 2:
      return o2.s + ".set(" + o2.k + "," + o2.v + ")";
    case 1:
      return o2.s + ".add(" + o2.v + ")";
    case 3:
      return o2.s + ".delete(" + o2.k + ")";
  }
}
function Fr(o2) {
  let e = [], r = o2[0];
  for (let t = 1, n2 = o2.length, a2, i3 = r; t < n2; t++) a2 = o2[t], a2.t === 0 && a2.v === i3.v ? r = { t: 0, s: a2.s, k: s, v: se(r) } : a2.t === 2 && a2.s === i3.s ? r = { t: 2, s: se(r), k: a2.k, v: a2.v } : a2.t === 1 && a2.s === i3.s ? r = { t: 1, s: se(r), k: s, v: a2.v } : a2.t === 3 && a2.s === i3.s ? r = { t: 3, s: se(r), k: a2.k, v: s } : (e.push(r), r = a2), i3 = a2;
  return e.push(r), e;
}
function fr(o2) {
  if (o2.length) {
    let e = "", r = Fr(o2);
    for (let t = 0, n2 = r.length; t < n2; t++) e += se(r[t]) + ",";
    return e;
  }
  return s;
}
function gr(o2, e) {
  let r = m(e.plugins), t = new G({ plugins: r, refs: e.refs, disabledFeatures: e.disabledFeatures, onParse(n2, a2) {
    let i3 = new D({ plugins: r, features: t.features, scopeId: e.scopeId, markedRefs: t.marked }), l2;
    try {
      l2 = i3.serializeTop(n2);
    } catch (c2) {
      e.onError && e.onError(c2);
      return;
    }
    e.onSerialize(l2, a2);
  }, onError: e.onError, onDone: e.onDone });
  return t.start(o2), t.destroy.bind(t);
}
var R, T, Q, ae, Be, O, $e, ce, qe, He, ue, s, I, A, pe, de, Xe, Qe, er, rr, _e, ee, E, Ce, g, y, W, ie, C, ar, ir, lr, Y, kr, Vr, Dr, Br, jr, _r, Mr, V, D, v, oe, G, yr, Sr, vr, hr, De;
var init_production = __esm({
  "node_modules/seroval/dist/esm/production/index.mjs"() {
    R = ((a2) => (a2[a2.AggregateError = 1] = "AggregateError", a2[a2.ArrowFunction = 2] = "ArrowFunction", a2[a2.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", a2[a2.ObjectAssign = 8] = "ObjectAssign", a2[a2.BigIntTypedArray = 16] = "BigIntTypedArray", a2))(R || {});
    T = "__SEROVAL_REFS__";
    Q = "$R";
    ae = `self.${Q}`;
    Be = /* @__PURE__ */ new Map();
    O = /* @__PURE__ */ new Map();
    typeof globalThis != "undefined" ? Object.defineProperty(globalThis, T, { value: O, configurable: true, writable: false, enumerable: false }) : typeof window != "undefined" ? Object.defineProperty(window, T, { value: O, configurable: true, writable: false, enumerable: false }) : typeof self != "undefined" ? Object.defineProperty(self, T, { value: O, configurable: true, writable: false, enumerable: false }) : typeof global != "undefined" && Object.defineProperty(global, T, { value: O, configurable: true, writable: false, enumerable: false });
    $e = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" };
    ce = { [Symbol.asyncIterator]: 0, [Symbol.hasInstance]: 1, [Symbol.isConcatSpreadable]: 2, [Symbol.iterator]: 3, [Symbol.match]: 4, [Symbol.matchAll]: 5, [Symbol.replace]: 6, [Symbol.search]: 7, [Symbol.species]: 8, [Symbol.split]: 9, [Symbol.toPrimitive]: 10, [Symbol.toStringTag]: 11, [Symbol.unscopables]: 12 };
    qe = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" };
    He = { 2: true, 3: false, 1: void 0, 0: null, 4: -0, 5: Number.POSITIVE_INFINITY, 6: Number.NEGATIVE_INFINITY, 7: Number.NaN };
    ue = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" };
    s = void 0;
    I = x(2);
    A = x(3);
    pe = x(1);
    de = x(0);
    Xe = x(4);
    Qe = x(5);
    er = x(6);
    rr = x(7);
    ({ toString: _e } = Object.prototype);
    ee = class extends Error {
      constructor(r, t) {
        super(Er(r, t));
        this.cause = t;
      }
    };
    E = class extends ee {
      constructor(e) {
        super("parsing", e);
      }
    };
    Ce = class extends ee {
      constructor(e) {
        super("serialization", e);
      }
    };
    g = class extends Error {
      constructor(r) {
        super(`The value ${_e.call(r)} of type "${typeof r}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`);
        this.value = r;
      }
    };
    y = class extends Error {
      constructor(e) {
        super('Unsupported node type "' + e.t + '".');
      }
    };
    W = class extends Error {
      constructor(e) {
        super('Missing plugin for tag "' + e + '".');
      }
    };
    ie = class extends Error {
      constructor(r) {
        super('Missing reference for the value "' + _e.call(r) + '" of type "' + typeof r + '"');
        this.value = r;
      }
    };
    C = class {
      constructor(e, r) {
        this.value = e;
        this.replacement = r;
      }
    };
    ar = {};
    ir = {};
    lr = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };
    Y = class {
      constructor(e) {
        this.marked = /* @__PURE__ */ new Set();
        this.plugins = e.plugins, this.features = 31 ^ (e.disabledFeatures || 0), this.refs = e.refs || /* @__PURE__ */ new Map();
      }
      markRef(e) {
        this.marked.add(e);
      }
      isMarked(e) {
        return this.marked.has(e);
      }
      createIndex(e) {
        let r = this.refs.size;
        return this.refs.set(e, r), r;
      }
      getIndexedValue(e) {
        let r = this.refs.get(e);
        return r != null ? (this.markRef(r), { type: 1, value: sr(r) }) : { type: 0, value: this.createIndex(e) };
      }
      getReference(e) {
        let r = this.getIndexedValue(e);
        return r.type === 1 ? r : je(e) ? { type: 2, value: nr(r.value, e) } : r;
      }
      parseWellKnownSymbol(e) {
        let r = this.getReference(e);
        return r.type !== 0 ? r.value : (f(e in ce, new g(e)), or(r.value, e));
      }
      parseSpecialReference(e) {
        let r = this.getIndexedValue(lr[e]);
        return r.type === 1 ? r.value : u(26, r.value, e, s, s, s, s, s, s, s, s, s);
      }
      parseIteratorFactory() {
        let e = this.getIndexedValue(ar);
        return e.type === 1 ? e.value : u(27, e.value, s, s, s, s, s, s, s, this.parseWellKnownSymbol(Symbol.iterator), s, s);
      }
      parseAsyncIteratorFactory() {
        let e = this.getIndexedValue(ir);
        return e.type === 1 ? e.value : u(29, e.value, s, s, s, s, s, s, [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)], s, s, s);
      }
      createObjectNode(e, r, t, n2) {
        return u(t ? 11 : 10, e, s, s, s, s, n2, s, s, s, s, fe(r));
      }
      createMapNode(e, r, t, n2) {
        return u(8, e, s, s, s, s, s, { k: r, v: t, s: n2 }, s, this.parseSpecialReference(0), s, s);
      }
      createPromiseConstructorNode(e, r) {
        return u(22, e, r, s, s, s, s, s, s, this.parseSpecialReference(1), s, s);
      }
    };
    kr = /^[$A-Z_][0-9A-Z_$]*$/i;
    Vr = "Object.create(null)";
    Dr = "new Set";
    Br = "new Map";
    jr = "Promise.resolve";
    _r = "Promise.reject";
    Mr = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: s };
    V = class {
      constructor(e) {
        this.stack = [];
        this.flags = [];
        this.assignments = [];
        this.plugins = e.plugins, this.features = e.features, this.marked = new Set(e.markedRefs);
      }
      createFunction(e, r) {
        return z(this.features, e, r);
      }
      createEffectfulFunction(e, r) {
        return S(this.features, e, r);
      }
      markRef(e) {
        this.marked.add(e);
      }
      isMarked(e) {
        return this.marked.has(e);
      }
      pushObjectFlag(e, r) {
        e !== 0 && (this.markRef(r), this.flags.push({ type: e, value: this.getRefParam(r) }));
      }
      resolveFlags() {
        let e = "";
        for (let r = 0, t = this.flags, n2 = t.length; r < n2; r++) {
          let a2 = t[r];
          e += Mr[a2.type] + "(" + a2.value + "),";
        }
        return e;
      }
      resolvePatches() {
        let e = fr(this.assignments), r = this.resolveFlags();
        return e ? r ? e + r : e : r;
      }
      createAssignment(e, r) {
        this.assignments.push({ t: 0, s: e, k: s, v: r });
      }
      createAddAssignment(e, r) {
        this.assignments.push({ t: 1, s: this.getRefParam(e), k: s, v: r });
      }
      createSetAssignment(e, r, t) {
        this.assignments.push({ t: 2, s: this.getRefParam(e), k: r, v: t });
      }
      createDeleteAssignment(e, r) {
        this.assignments.push({ t: 3, s: this.getRefParam(e), k: r, v: s });
      }
      createArrayAssign(e, r, t) {
        this.createAssignment(this.getRefParam(e) + "[" + r + "]", t);
      }
      createObjectAssign(e, r, t) {
        this.createAssignment(this.getRefParam(e) + "." + r, t);
      }
      isIndexedValueInStack(e) {
        return e.t === 4 && this.stack.includes(e.i);
      }
      serializeReference(e) {
        return this.assignIndexedValue(e.i, T + '.get("' + e.s + '")');
      }
      serializeArrayItem(e, r, t) {
        return r ? this.isIndexedValueInStack(r) ? (this.markRef(e), this.createArrayAssign(e, t, this.getRefParam(r.i)), "") : this.serialize(r) : "";
      }
      serializeArray(e) {
        let r = e.i;
        if (e.l) {
          this.stack.push(r);
          let t = e.a, n2 = this.serializeArrayItem(r, t[0], 0), a2 = n2 === "";
          for (let i3 = 1, l2 = e.l, c2; i3 < l2; i3++) c2 = this.serializeArrayItem(r, t[i3], i3), n2 += "," + c2, a2 = c2 === "";
          return this.stack.pop(), this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(r, "[" + n2 + (a2 ? ",]" : "]"));
        }
        return this.assignIndexedValue(r, "[]");
      }
      serializeProperty(e, r, t) {
        if (typeof r == "string") {
          let n2 = Number(r), a2 = n2 >= 0 && n2.toString() === r || Le(r);
          if (this.isIndexedValueInStack(t)) {
            let i3 = this.getRefParam(t.i);
            return this.markRef(e.i), a2 && n2 !== n2 ? this.createObjectAssign(e.i, r, i3) : this.createArrayAssign(e.i, a2 ? r : '"' + r + '"', i3), "";
          }
          return (a2 ? r : '"' + r + '"') + ":" + this.serialize(t);
        }
        return "[" + this.serialize(r) + "]:" + this.serialize(t);
      }
      serializeProperties(e, r) {
        let t = r.s;
        if (t) {
          let n2 = r.k, a2 = r.v;
          this.stack.push(e.i);
          let i3 = this.serializeProperty(e, n2[0], a2[0]);
          for (let l2 = 1, c2 = i3; l2 < t; l2++) c2 = this.serializeProperty(e, n2[l2], a2[l2]), i3 += (c2 && i3 && ",") + c2;
          return this.stack.pop(), "{" + i3 + "}";
        }
        return "{}";
      }
      serializeObject(e) {
        return this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(e.i, this.serializeProperties(e, e.p));
      }
      serializeWithObjectAssign(e, r, t) {
        let n2 = this.serializeProperties(e, r);
        return n2 !== "{}" ? "Object.assign(" + t + "," + n2 + ")" : t;
      }
      serializeStringKeyAssignment(e, r, t, n2) {
        let a2 = this.serialize(n2), i3 = Number(t), l2 = i3 >= 0 && i3.toString() === t || Le(t);
        if (this.isIndexedValueInStack(n2)) l2 && i3 !== i3 ? this.createObjectAssign(e.i, t, a2) : this.createArrayAssign(e.i, l2 ? t : '"' + t + '"', a2);
        else {
          let c2 = this.assignments;
          this.assignments = r, l2 && i3 !== i3 ? this.createObjectAssign(e.i, t, a2) : this.createArrayAssign(e.i, l2 ? t : '"' + t + '"', a2), this.assignments = c2;
        }
      }
      serializeAssignment(e, r, t, n2) {
        if (typeof t == "string") this.serializeStringKeyAssignment(e, r, t, n2);
        else {
          let a2 = this.stack;
          this.stack = [];
          let i3 = this.serialize(n2);
          this.stack = a2;
          let l2 = this.assignments;
          this.assignments = r, this.createArrayAssign(e.i, this.serialize(t), i3), this.assignments = l2;
        }
      }
      serializeAssignments(e, r) {
        let t = r.s;
        if (t) {
          let n2 = [], a2 = r.k, i3 = r.v;
          this.stack.push(e.i);
          for (let l2 = 0; l2 < t; l2++) this.serializeAssignment(e, n2, a2[l2], i3[l2]);
          return this.stack.pop(), fr(n2);
        }
        return s;
      }
      serializeDictionary(e, r) {
        if (e.p) if (this.features & 8) r = this.serializeWithObjectAssign(e, e.p, r);
        else {
          this.markRef(e.i);
          let t = this.serializeAssignments(e, e.p);
          if (t) return "(" + this.assignIndexedValue(e.i, r) + "," + t + this.getRefParam(e.i) + ")";
        }
        return this.assignIndexedValue(e.i, r);
      }
      serializeNullConstructor(e) {
        return this.pushObjectFlag(e.o, e.i), this.serializeDictionary(e, Vr);
      }
      serializeDate(e) {
        return this.assignIndexedValue(e.i, 'new Date("' + e.s + '")');
      }
      serializeRegExp(e) {
        return this.assignIndexedValue(e.i, "/" + e.c + "/" + e.m);
      }
      serializeSetItem(e, r) {
        return this.isIndexedValueInStack(r) ? (this.markRef(e), this.createAddAssignment(e, this.getRefParam(r.i)), "") : this.serialize(r);
      }
      serializeSet(e) {
        let r = Dr, t = e.l, n2 = e.i;
        if (t) {
          let a2 = e.a;
          this.stack.push(n2);
          let i3 = this.serializeSetItem(n2, a2[0]);
          for (let l2 = 1, c2 = i3; l2 < t; l2++) c2 = this.serializeSetItem(n2, a2[l2]), i3 += (c2 && i3 && ",") + c2;
          this.stack.pop(), i3 && (r += "([" + i3 + "])");
        }
        return this.assignIndexedValue(n2, r);
      }
      serializeMapEntry(e, r, t, n2) {
        if (this.isIndexedValueInStack(r)) {
          let a2 = this.getRefParam(r.i);
          if (this.markRef(e), this.isIndexedValueInStack(t)) {
            let l2 = this.getRefParam(t.i);
            return this.createSetAssignment(e, a2, l2), "";
          }
          if (t.t !== 4 && t.i != null && this.isMarked(t.i)) {
            let l2 = "(" + this.serialize(t) + ",[" + n2 + "," + n2 + "])";
            return this.createSetAssignment(e, a2, this.getRefParam(t.i)), this.createDeleteAssignment(e, n2), l2;
          }
          let i3 = this.stack;
          return this.stack = [], this.createSetAssignment(e, a2, this.serialize(t)), this.stack = i3, "";
        }
        if (this.isIndexedValueInStack(t)) {
          let a2 = this.getRefParam(t.i);
          if (this.markRef(e), r.t !== 4 && r.i != null && this.isMarked(r.i)) {
            let l2 = "(" + this.serialize(r) + ",[" + n2 + "," + n2 + "])";
            return this.createSetAssignment(e, this.getRefParam(r.i), a2), this.createDeleteAssignment(e, n2), l2;
          }
          let i3 = this.stack;
          return this.stack = [], this.createSetAssignment(e, this.serialize(r), a2), this.stack = i3, "";
        }
        return "[" + this.serialize(r) + "," + this.serialize(t) + "]";
      }
      serializeMap(e) {
        let r = Br, t = e.e.s, n2 = e.i, a2 = e.f, i3 = this.getRefParam(a2.i);
        if (t) {
          let l2 = e.e.k, c2 = e.e.v;
          this.stack.push(n2);
          let p4 = this.serializeMapEntry(n2, l2[0], c2[0], i3);
          for (let h2 = 1, X3 = p4; h2 < t; h2++) X3 = this.serializeMapEntry(n2, l2[h2], c2[h2], i3), p4 += (X3 && p4 && ",") + X3;
          this.stack.pop(), p4 && (r += "([" + p4 + "])");
        }
        return a2.t === 26 && (this.markRef(a2.i), r = "(" + this.serialize(a2) + "," + r + ")"), this.assignIndexedValue(n2, r);
      }
      serializeArrayBuffer(e) {
        let r = "new Uint8Array(", t = e.s, n2 = t.length;
        if (n2) {
          r += "[" + t[0];
          for (let a2 = 1; a2 < n2; a2++) r += "," + t[a2];
          r += "]";
        }
        return this.assignIndexedValue(e.i, r + ").buffer");
      }
      serializeTypedArray(e) {
        return this.assignIndexedValue(e.i, "new " + e.c + "(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
      }
      serializeDataView(e) {
        return this.assignIndexedValue(e.i, "new DataView(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
      }
      serializeAggregateError(e) {
        let r = e.i;
        this.stack.push(r);
        let t = this.serializeDictionary(e, 'new AggregateError([],"' + e.m + '")');
        return this.stack.pop(), t;
      }
      serializeError(e) {
        return this.serializeDictionary(e, "new " + ue[e.s] + '("' + e.m + '")');
      }
      serializePromise(e) {
        let r, t = e.f, n2 = e.i, a2 = e.s ? jr : _r;
        if (this.isIndexedValueInStack(t)) {
          let i3 = this.getRefParam(t.i);
          r = a2 + (e.s ? "().then(" + this.createFunction([], i3) + ")" : "().catch(" + this.createEffectfulFunction([], "throw " + i3) + ")");
        } else {
          this.stack.push(n2);
          let i3 = this.serialize(t);
          this.stack.pop(), r = a2 + "(" + i3 + ")";
        }
        return this.assignIndexedValue(n2, r);
      }
      serializeWellKnownSymbol(e) {
        return this.assignIndexedValue(e.i, $e[e.s]);
      }
      serializeBoxed(e) {
        return this.assignIndexedValue(e.i, "Object(" + this.serialize(e.f) + ")");
      }
      serializePlugin(e) {
        let r = this.plugins;
        if (r) for (let t = 0, n2 = r.length; t < n2; t++) {
          let a2 = r[t];
          if (a2.tag === e.c) return this.assignIndexedValue(e.i, a2.serialize(e.s, this, { id: e.i }));
        }
        throw new W(e.c);
      }
      getConstructor(e) {
        let r = this.serialize(e);
        return r === this.getRefParam(e.i) ? r : "(" + r + ")";
      }
      serializePromiseConstructor(e) {
        let r = this.assignIndexedValue(e.s, "{p:0,s:0,f:0}");
        return this.assignIndexedValue(e.i, this.getConstructor(e.f) + "(" + r + ")");
      }
      serializePromiseResolve(e) {
        return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
      }
      serializePromiseReject(e) {
        return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
      }
      serializeSpecialReference(e) {
        return this.assignIndexedValue(e.i, cr(this.features, e.s));
      }
      serializeIteratorFactory(e) {
        let r = "", t = false;
        return e.f.t !== 4 && (this.markRef(e.f.i), r = "(" + this.serialize(e.f) + ",", t = true), r += this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["i", "c", "d", "t"], "(i=0,t={[" + this.getRefParam(e.f.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction([], "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}") + "})"))), t && (r += ")"), r;
      }
      serializeIteratorFactoryInstance(e) {
        return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
      }
      serializeAsyncIteratorFactory(e) {
        let r = e.a[0], t = e.a[1], n2 = "";
        r.t !== 4 && (this.markRef(r.i), n2 += "(" + this.serialize(r)), t.t !== 4 && (this.markRef(t.i), n2 += (n2 ? "," : "(") + this.serialize(t)), n2 && (n2 += ",");
        let a2 = this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["b", "c", "p", "d", "e", "t", "f"], "(b=[],c=0,p=[],d=-1,e=!1,f=" + this.createEffectfulFunction(["i", "l"], "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})") + ",s.on({next:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!1,value:v});b.push(v)") + ",throw:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)") + ",return:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)") + "}),t={[" + this.getRefParam(t.i) + "]:" + this.createFunction([], "t.p") + ",next:" + this.createEffectfulFunction(["i", "t", "v"], "if(d===-1){return((i=c++)>=b.length)?(" + this.getRefParam(r.i) + "(t={p:0,s:0,f:0}),p.push(t),t.p):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}") + "})")));
        return n2 ? n2 + a2 + ")" : a2;
      }
      serializeAsyncIteratorFactoryInstance(e) {
        return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
      }
      serializeStreamConstructor(e) {
        let r = this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()"), t = e.a.length;
        if (t) {
          let n2 = this.serialize(e.a[0]);
          for (let a2 = 1; a2 < t; a2++) n2 += "," + this.serialize(e.a[a2]);
          return "(" + r + "," + n2 + "," + this.getRefParam(e.i) + ")";
        }
        return r;
      }
      serializeStreamNext(e) {
        return this.getRefParam(e.i) + ".next(" + this.serialize(e.f) + ")";
      }
      serializeStreamThrow(e) {
        return this.getRefParam(e.i) + ".throw(" + this.serialize(e.f) + ")";
      }
      serializeStreamReturn(e) {
        return this.getRefParam(e.i) + ".return(" + this.serialize(e.f) + ")";
      }
      serialize(e) {
        try {
          switch (e.t) {
            case 2:
              return qe[e.s];
            case 0:
              return "" + e.s;
            case 1:
              return '"' + e.s + '"';
            case 3:
              return e.s + "n";
            case 4:
              return this.getRefParam(e.i);
            case 18:
              return this.serializeReference(e);
            case 9:
              return this.serializeArray(e);
            case 10:
              return this.serializeObject(e);
            case 11:
              return this.serializeNullConstructor(e);
            case 5:
              return this.serializeDate(e);
            case 6:
              return this.serializeRegExp(e);
            case 7:
              return this.serializeSet(e);
            case 8:
              return this.serializeMap(e);
            case 19:
              return this.serializeArrayBuffer(e);
            case 16:
            case 15:
              return this.serializeTypedArray(e);
            case 20:
              return this.serializeDataView(e);
            case 14:
              return this.serializeAggregateError(e);
            case 13:
              return this.serializeError(e);
            case 12:
              return this.serializePromise(e);
            case 17:
              return this.serializeWellKnownSymbol(e);
            case 21:
              return this.serializeBoxed(e);
            case 22:
              return this.serializePromiseConstructor(e);
            case 23:
              return this.serializePromiseResolve(e);
            case 24:
              return this.serializePromiseReject(e);
            case 25:
              return this.serializePlugin(e);
            case 26:
              return this.serializeSpecialReference(e);
            case 27:
              return this.serializeIteratorFactory(e);
            case 28:
              return this.serializeIteratorFactoryInstance(e);
            case 29:
              return this.serializeAsyncIteratorFactory(e);
            case 30:
              return this.serializeAsyncIteratorFactoryInstance(e);
            case 31:
              return this.serializeStreamConstructor(e);
            case 32:
              return this.serializeStreamNext(e);
            case 33:
              return this.serializeStreamThrow(e);
            case 34:
              return this.serializeStreamReturn(e);
            default:
              throw new y(e);
          }
        } catch (r) {
          throw new Ce(r);
        }
      }
    };
    D = class extends V {
      constructor(r) {
        super(r);
        this.mode = "cross";
        this.scopeId = r.scopeId;
      }
      getRefParam(r) {
        return Q + "[" + r + "]";
      }
      assignIndexedValue(r, t) {
        return this.getRefParam(r) + "=" + t;
      }
      serializeTop(r) {
        let t = this.serialize(r), n2 = r.i;
        if (n2 == null) return t;
        let a2 = this.resolvePatches(), i3 = this.getRefParam(n2), l2 = this.scopeId == null ? "" : Q, c2 = a2 ? "(" + t + "," + a2 + i3 + ")" : t;
        if (l2 === "") return r.t === 10 && !a2 ? "(" + c2 + ")" : c2;
        let p4 = this.scopeId == null ? "()" : "(" + Q + '["' + d(this.scopeId) + '"])';
        return "(" + this.createFunction([l2], c2) + ")" + p4;
      }
    };
    v = class extends Y {
      parseItems(e) {
        let r = [];
        for (let t = 0, n2 = e.length; t < n2; t++) t in e && (r[t] = this.parseTop(e[t]));
        return r;
      }
      parseArray(e, r) {
        return Ne(e, r, this.parseItems(r));
      }
      parseProperties(e) {
        let r = Object.entries(e), t = [], n2 = [];
        for (let i3 = 0, l2 = r.length; i3 < l2; i3++) t.push(d(r[i3][0])), n2.push(this.parseTop(r[i3][1]));
        let a2 = Symbol.iterator;
        return a2 in e && (t.push(this.parseWellKnownSymbol(a2)), n2.push(M(this.parseIteratorFactory(), this.parseTop(J(e))))), a2 = Symbol.asyncIterator, a2 in e && (t.push(this.parseWellKnownSymbol(a2)), n2.push(U(this.parseAsyncIteratorFactory(), this.parseTop(K())))), a2 = Symbol.toStringTag, a2 in e && (t.push(this.parseWellKnownSymbol(a2)), n2.push(w(e[a2]))), a2 = Symbol.isConcatSpreadable, a2 in e && (t.push(this.parseWellKnownSymbol(a2)), n2.push(e[a2] ? I : A)), { k: t, v: n2, s: t.length };
      }
      parsePlainObject(e, r, t) {
        return this.createObjectNode(e, r, t, this.parseProperties(r));
      }
      parseBoxed(e, r) {
        return be(e, this.parseTop(r.valueOf()));
      }
      parseTypedArray(e, r) {
        return xe(e, r, this.parseTop(r.buffer));
      }
      parseBigIntTypedArray(e, r) {
        return Ie(e, r, this.parseTop(r.buffer));
      }
      parseDataView(e, r) {
        return Ae(e, r, this.parseTop(r.buffer));
      }
      parseError(e, r) {
        let t = j(r, this.features);
        return we(e, r, t ? this.parseProperties(t) : s);
      }
      parseAggregateError(e, r) {
        let t = j(r, this.features);
        return Ee(e, r, t ? this.parseProperties(t) : s);
      }
      parseMap(e, r) {
        let t = [], n2 = [];
        for (let [a2, i3] of r.entries()) t.push(this.parseTop(a2)), n2.push(this.parseTop(i3));
        return this.createMapNode(e, t, n2, r.size);
      }
      parseSet(e, r) {
        let t = [];
        for (let n2 of r.keys()) t.push(this.parseTop(n2));
        return Pe(e, r.size, t);
      }
      parsePlugin(e, r) {
        let t = this.plugins;
        if (t) for (let n2 = 0, a2 = t.length; n2 < a2; n2++) {
          let i3 = t[n2];
          if (i3.parse.sync && i3.test(r)) return _(e, i3.tag, i3.parse.sync(r, this, { id: e }));
        }
      }
      parseStream(e, r) {
        return L(e, this.parseSpecialReference(4), []);
      }
      parsePromise(e, r) {
        return this.createPromiseConstructorNode(e, this.createIndex({}));
      }
      parseObject(e, r) {
        if (Array.isArray(r)) return this.parseArray(e, r);
        if (Fe(r)) return this.parseStream(e, r);
        let t = r.constructor;
        if (t === C) return this.parseTop(r.replacement);
        let n2 = this.parsePlugin(e, r);
        if (n2) return n2;
        switch (t) {
          case Object:
            return this.parsePlainObject(e, r, false);
          case void 0:
            return this.parsePlainObject(e, r, true);
          case Date:
            return he(e, r);
          case RegExp:
            return ye(e, r);
          case Error:
          case EvalError:
          case RangeError:
          case ReferenceError:
          case SyntaxError:
          case TypeError:
          case URIError:
            return this.parseError(e, r);
          case Number:
          case Boolean:
          case String:
          case BigInt:
            return this.parseBoxed(e, r);
          case ArrayBuffer:
            return ve(e, r);
          case Int8Array:
          case Int16Array:
          case Int32Array:
          case Uint8Array:
          case Uint16Array:
          case Uint32Array:
          case Uint8ClampedArray:
          case Float32Array:
          case Float64Array:
            return this.parseTypedArray(e, r);
          case DataView:
            return this.parseDataView(e, r);
          case Map:
            return this.parseMap(e, r);
          case Set:
            return this.parseSet(e, r);
          default:
            break;
        }
        if (t === Promise || r instanceof Promise) return this.parsePromise(e, r);
        let a2 = this.features;
        if (a2 & 16) switch (t) {
          case BigInt64Array:
          case BigUint64Array:
            return this.parseBigIntTypedArray(e, r);
          default:
            break;
        }
        if (a2 & 1 && typeof AggregateError != "undefined" && (t === AggregateError || r instanceof AggregateError)) return this.parseAggregateError(e, r);
        if (r instanceof Error) return this.parseError(e, r);
        if (Symbol.iterator in r || Symbol.asyncIterator in r) return this.parsePlainObject(e, r, !!t);
        throw new g(r);
      }
      parseFunction(e) {
        let r = this.getReference(e);
        if (r.type !== 0) return r.value;
        let t = this.parsePlugin(r.value, e);
        if (t) return t;
        throw new g(e);
      }
      parseTop(e) {
        switch (typeof e) {
          case "boolean":
            return e ? I : A;
          case "undefined":
            return pe;
          case "string":
            return w(e);
          case "number":
            return ge(e);
          case "bigint":
            return Se(e);
          case "object": {
            if (e) {
              let r = this.getReference(e);
              return r.type === 0 ? this.parseObject(r.value, e) : r.value;
            }
            return de;
          }
          case "symbol":
            return this.parseWellKnownSymbol(e);
          case "function":
            return this.parseFunction(e);
          default:
            throw new g(e);
        }
      }
      parse(e) {
        try {
          return this.parseTop(e);
        } catch (r) {
          throw r instanceof E ? r : new E(r);
        }
      }
    };
    oe = class extends v {
      constructor(r) {
        super(r);
        this.alive = true;
        this.pending = 0;
        this.initial = true;
        this.buffer = [];
        this.onParseCallback = r.onParse, this.onErrorCallback = r.onError, this.onDoneCallback = r.onDone;
      }
      onParseInternal(r, t) {
        try {
          this.onParseCallback(r, t);
        } catch (n2) {
          this.onError(n2);
        }
      }
      flush() {
        for (let r = 0, t = this.buffer.length; r < t; r++) this.onParseInternal(this.buffer[r], false);
      }
      onParse(r) {
        this.initial ? this.buffer.push(r) : this.onParseInternal(r, false);
      }
      onError(r) {
        if (this.onErrorCallback) this.onErrorCallback(r);
        else throw r;
      }
      onDone() {
        this.onDoneCallback && this.onDoneCallback();
      }
      pushPendingState() {
        this.pending++;
      }
      popPendingState() {
        --this.pending <= 0 && this.onDone();
      }
      parseProperties(r) {
        let t = Object.entries(r), n2 = [], a2 = [];
        for (let l2 = 0, c2 = t.length; l2 < c2; l2++) n2.push(d(t[l2][0])), a2.push(this.parseTop(t[l2][1]));
        let i3 = Symbol.iterator;
        return i3 in r && (n2.push(this.parseWellKnownSymbol(i3)), a2.push(M(this.parseIteratorFactory(), this.parseTop(J(r))))), i3 = Symbol.asyncIterator, i3 in r && (n2.push(this.parseWellKnownSymbol(i3)), a2.push(U(this.parseAsyncIteratorFactory(), this.parseTop(Ve(r))))), i3 = Symbol.toStringTag, i3 in r && (n2.push(this.parseWellKnownSymbol(i3)), a2.push(w(r[i3]))), i3 = Symbol.isConcatSpreadable, i3 in r && (n2.push(this.parseWellKnownSymbol(i3)), a2.push(r[i3] ? I : A)), { k: n2, v: a2, s: n2.length };
      }
      handlePromiseSuccess(r, t) {
        let n2 = this.parseWithError(t);
        n2 && this.onParse(u(23, r, s, s, s, s, s, s, [this.parseSpecialReference(2), n2], s, s, s)), this.popPendingState();
      }
      handlePromiseFailure(r, t) {
        if (this.alive) {
          let n2 = this.parseWithError(t);
          n2 && this.onParse(u(24, r, s, s, s, s, s, s, [this.parseSpecialReference(3), n2], s, s, s));
        }
        this.popPendingState();
      }
      parsePromise(r, t) {
        let n2 = this.createIndex({});
        return t.then(this.handlePromiseSuccess.bind(this, n2), this.handlePromiseFailure.bind(this, n2)), this.pushPendingState(), this.createPromiseConstructorNode(r, n2);
      }
      parsePlugin(r, t) {
        let n2 = this.plugins;
        if (n2) for (let a2 = 0, i3 = n2.length; a2 < i3; a2++) {
          let l2 = n2[a2];
          if (l2.parse.stream && l2.test(t)) return _(r, l2.tag, l2.parse.stream(t, this, { id: r }));
        }
        return s;
      }
      parseStream(r, t) {
        let n2 = L(r, this.parseSpecialReference(4), []);
        return this.pushPendingState(), t.on({ next: (a2) => {
          if (this.alive) {
            let i3 = this.parseWithError(a2);
            i3 && this.onParse(Re(r, i3));
          }
        }, throw: (a2) => {
          if (this.alive) {
            let i3 = this.parseWithError(a2);
            i3 && this.onParse(Te(r, i3));
          }
          this.popPendingState();
        }, return: (a2) => {
          if (this.alive) {
            let i3 = this.parseWithError(a2);
            i3 && this.onParse(Oe(r, i3));
          }
          this.popPendingState();
        } }), n2;
      }
      parseWithError(r) {
        try {
          return this.parseTop(r);
        } catch (t) {
          return this.onError(t), s;
        }
      }
      start(r) {
        let t = this.parseWithError(r);
        t && (this.onParseInternal(t, true), this.initial = false, this.flush(), this.pending <= 0 && this.destroy());
      }
      destroy() {
        this.alive && (this.onDone(), this.alive = false);
      }
      isAlive() {
        return this.alive;
      }
    };
    G = class extends oe {
      constructor() {
        super(...arguments);
        this.mode = "cross";
      }
    };
    yr = "hjkmoquxzABCDEFGHIJKLNPQRTUVWXYZ$_";
    Sr = yr.length;
    vr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_";
    hr = vr.length;
    De = class {
      constructor(e) {
        this.options = e;
        this.alive = true;
        this.flushed = false;
        this.done = false;
        this.pending = 0;
        this.cleanups = [];
        this.refs = /* @__PURE__ */ new Map();
        this.keys = /* @__PURE__ */ new Set();
        this.ids = 0;
        this.plugins = m(e.plugins);
      }
      write(e, r) {
        this.alive && !this.flushed && (this.pending++, this.keys.add(e), this.cleanups.push(gr(r, { plugins: this.plugins, scopeId: this.options.scopeId, refs: this.refs, disabledFeatures: this.options.disabledFeatures, onError: this.options.onError, onSerialize: (t, n2) => {
          this.alive && this.options.onData(n2 ? this.options.globalIdentifier + '["' + d(e) + '"]=' + t : t);
        }, onDone: () => {
          this.alive && (this.pending--, this.pending <= 0 && this.flushed && !this.done && this.options.onDone && (this.options.onDone(), this.done = true));
        } })));
      }
      getNextID() {
        for (; this.keys.has("" + this.ids); ) this.ids++;
        return "" + this.ids;
      }
      push(e) {
        let r = this.getNextID();
        return this.write(r, e), r;
      }
      flush() {
        this.alive && (this.flushed = true, this.pending <= 0 && !this.done && this.options.onDone && (this.options.onDone(), this.done = true));
      }
      close() {
        if (this.alive) {
          for (let e = 0, r = this.cleanups.length; e < r; e++) this.cleanups[e]();
          !this.done && this.options.onDone && (this.options.onDone(), this.done = true), this.alive = false;
        }
      }
    };
  }
});

// node_modules/seroval-plugins/dist/esm/production/web.mjs
function h(e) {
  e(this.reason);
}
function A2(e) {
  this.addEventListener("abort", h.bind(this, e), { once: true });
}
function E2(e) {
  return new Promise(A2.bind(e));
}
function f2(e) {
  return { detail: e.detail, bubbles: e.bubbles, cancelable: e.cancelable, composed: e.composed };
}
function m2(e) {
  return { bubbles: e.bubbles, cancelable: e.cancelable, composed: e.composed };
}
function g2(e) {
  let r = [];
  return e.forEach((a2, t) => {
    r.push([t, a2]);
  }), r;
}
function y2(e) {
  let r = [];
  return e.forEach((a2, t) => {
    r.push([t, a2]);
  }), r;
}
function w2(e) {
  let r = K(), a2 = e.getReader();
  async function t() {
    try {
      let n2 = await a2.read();
      n2.done ? r.return(n2.value) : (r.next(n2.value), await t());
    } catch (n2) {
      r.throw(n2);
    }
  }
  return t().catch(() => {
  }), r;
}
function P(e, r) {
  return { body: r, cache: e.cache, credentials: e.credentials, headers: e.headers, integrity: e.integrity, keepalive: e.keepalive, method: e.method, mode: e.mode, redirect: e.redirect, referrer: e.referrer, referrerPolicy: e.referrerPolicy };
}
function N(e) {
  return { headers: e.headers, status: e.status, statusText: e.statusText };
}
var o, F, s2, D2, I2, C2, L2, q, H, T2, _2, j2, Y2, W2, c, i, G2, J2, K2, X, l, $, p2, ee2, re, u2, te, ne, se2, ie2, pe2, ue2, fe2, me2;
var init_web = __esm({
  "node_modules/seroval-plugins/dist/esm/production/web.mjs"() {
    init_production();
    init_production();
    init_production();
    init_production();
    init_production();
    init_production();
    init_production();
    init_production();
    init_production();
    init_production();
    init_production();
    init_production();
    init_production();
    init_production();
    o = class {
      constructor() {
        this.controller = new AbortController();
      }
    };
    F = Hr({ tag: "seroval-plugins/web/AbortSignalController", test(e) {
      return e instanceof o;
    }, parse: { stream() {
    } }, serialize(e) {
      return "new AbortController";
    }, deserialize(e) {
      return new o();
    } });
    s2 = class {
      constructor(r, a2) {
        this.controller = r;
        this.reason = a2;
      }
    };
    D2 = Hr({ extends: [F], tag: "seroval-plugins/web/AbortSignalAbort", test(e) {
      return e instanceof s2;
    }, parse: { stream(e, r) {
      return { controller: r.parse(e.controller), reason: r.parse(e.reason) };
    } }, serialize(e, r) {
      return r.serialize(e.controller) + ".abort(" + r.serialize(e.reason) + ")";
    }, deserialize(e, r) {
      let a2 = r.deserialize(e.controller), t = r.deserialize(e.reason);
      return a2.controller.abort(t), new s2(a2, t);
    } });
    I2 = Hr({ tag: "seroval-plugins/web/AbortSignal", extends: [D2], test(e) {
      return typeof AbortSignal == "undefined" ? false : e instanceof AbortSignal;
    }, parse: { sync(e, r) {
      return e.aborted ? { type: 1, reason: r.parse(e.reason) } : { type: 0 };
    }, async async(e, r) {
      if (e.aborted) return { type: 1, reason: await r.parse(e.reason) };
      let a2 = await E2(e);
      return { type: 1, reason: await r.parse(a2) };
    }, stream(e, r) {
      if (e.aborted) return { type: 1, reason: r.parse(e.reason) };
      let a2 = new o();
      return r.pushPendingState(), e.addEventListener("abort", () => {
        let t = r.parseWithError(new s2(a2, e.reason));
        t && r.onParse(t), r.popPendingState();
      }, { once: true }), { type: 2, controller: r.parse(a2) };
    } }, serialize(e, r) {
      return e.type === 0 ? "(new AbortController).signal" : e.type === 1 ? "AbortSignal.abort(" + r.serialize(e.reason) + ")" : "(" + r.serialize(e.controller) + ").signal";
    }, deserialize(e, r) {
      return e.type === 0 ? new AbortController().signal : e.type === 1 ? AbortSignal.abort(r.deserialize(e.reason)) : r.deserialize(e.controller).controller.signal;
    } });
    C2 = I2;
    L2 = Hr({ tag: "seroval-plugins/web/Blob", test(e) {
      return typeof Blob == "undefined" ? false : e instanceof Blob;
    }, parse: { async async(e, r) {
      return { type: await r.parse(e.type), buffer: await r.parse(await e.arrayBuffer()) };
    } }, serialize(e, r) {
      return "new Blob([" + r.serialize(e.buffer) + "],{type:" + r.serialize(e.type) + "})";
    }, deserialize(e, r) {
      return new Blob([r.deserialize(e.buffer)], { type: r.deserialize(e.type) });
    } });
    q = Hr({ tag: "seroval-plugins/web/CustomEvent", test(e) {
      return typeof CustomEvent == "undefined" ? false : e instanceof CustomEvent;
    }, parse: { sync(e, r) {
      return { type: r.parse(e.type), options: r.parse(f2(e)) };
    }, async async(e, r) {
      return { type: await r.parse(e.type), options: await r.parse(f2(e)) };
    }, stream(e, r) {
      return { type: r.parse(e.type), options: r.parse(f2(e)) };
    } }, serialize(e, r) {
      return "new CustomEvent(" + r.serialize(e.type) + "," + r.serialize(e.options) + ")";
    }, deserialize(e, r) {
      return new CustomEvent(r.deserialize(e.type), r.deserialize(e.options));
    } });
    H = q;
    T2 = Hr({ tag: "seroval-plugins/web/DOMException", test(e) {
      return typeof DOMException == "undefined" ? false : e instanceof DOMException;
    }, parse: { sync(e, r) {
      return { name: r.parse(e.name), message: r.parse(e.message) };
    }, async async(e, r) {
      return { name: await r.parse(e.name), message: await r.parse(e.message) };
    }, stream(e, r) {
      return { name: r.parse(e.name), message: r.parse(e.message) };
    } }, serialize(e, r) {
      return "new DOMException(" + r.serialize(e.message) + "," + r.serialize(e.name) + ")";
    }, deserialize(e, r) {
      return new DOMException(r.deserialize(e.message), r.deserialize(e.name));
    } });
    _2 = T2;
    j2 = Hr({ tag: "seroval-plugins/web/Event", test(e) {
      return typeof Event == "undefined" ? false : e instanceof Event;
    }, parse: { sync(e, r) {
      return { type: r.parse(e.type), options: r.parse(m2(e)) };
    }, async async(e, r) {
      return { type: await r.parse(e.type), options: await r.parse(m2(e)) };
    }, stream(e, r) {
      return { type: r.parse(e.type), options: r.parse(m2(e)) };
    } }, serialize(e, r) {
      return "new Event(" + r.serialize(e.type) + "," + r.serialize(e.options) + ")";
    }, deserialize(e, r) {
      return new Event(r.deserialize(e.type), r.deserialize(e.options));
    } });
    Y2 = j2;
    W2 = Hr({ tag: "seroval-plugins/web/File", test(e) {
      return typeof File == "undefined" ? false : e instanceof File;
    }, parse: { async async(e, r) {
      return { name: await r.parse(e.name), options: await r.parse({ type: e.type, lastModified: e.lastModified }), buffer: await r.parse(await e.arrayBuffer()) };
    } }, serialize(e, r) {
      return "new File([" + r.serialize(e.buffer) + "]," + r.serialize(e.name) + "," + r.serialize(e.options) + ")";
    }, deserialize(e, r) {
      return new File([r.deserialize(e.buffer)], r.deserialize(e.name), r.deserialize(e.options));
    } });
    c = W2;
    i = {};
    G2 = Hr({ tag: "seroval-plugins/web/FormDataFactory", test(e) {
      return e === i;
    }, parse: { sync() {
    }, async async() {
      return await Promise.resolve(void 0);
    }, stream() {
    } }, serialize(e, r) {
      return r.createEffectfulFunction(["e", "f", "i", "s", "t"], "f=new FormData;for(i=0,s=e.length;i<s;i++)f.append((t=e[i])[0],t[1]);return f");
    }, deserialize() {
      return i;
    } });
    J2 = Hr({ tag: "seroval-plugins/web/FormData", extends: [c, G2], test(e) {
      return typeof FormData == "undefined" ? false : e instanceof FormData;
    }, parse: { sync(e, r) {
      return { factory: r.parse(i), entries: r.parse(g2(e)) };
    }, async async(e, r) {
      return { factory: await r.parse(i), entries: await r.parse(g2(e)) };
    }, stream(e, r) {
      return { factory: r.parse(i), entries: r.parse(g2(e)) };
    } }, serialize(e, r) {
      return "(" + r.serialize(e.factory) + ")(" + r.serialize(e.entries) + ")";
    }, deserialize(e, r) {
      let a2 = new FormData(), t = r.deserialize(e.entries);
      for (let n2 = 0, R3 = t.length; n2 < R3; n2++) {
        let b2 = t[n2];
        a2.append(b2[0], b2[1]);
      }
      return a2;
    } });
    K2 = J2;
    X = Hr({ tag: "seroval-plugins/web/Headers", test(e) {
      return typeof Headers == "undefined" ? false : e instanceof Headers;
    }, parse: { sync(e, r) {
      return r.parse(y2(e));
    }, async async(e, r) {
      return await r.parse(y2(e));
    }, stream(e, r) {
      return r.parse(y2(e));
    } }, serialize(e, r) {
      return "new Headers(" + r.serialize(e) + ")";
    }, deserialize(e, r) {
      return new Headers(r.deserialize(e));
    } });
    l = X;
    $ = Hr({ tag: "seroval-plugins/web/ImageData", test(e) {
      return typeof ImageData == "undefined" ? false : e instanceof ImageData;
    }, parse: { sync(e, r) {
      return { data: r.parse(e.data), width: r.parse(e.width), height: r.parse(e.height), options: r.parse({ colorSpace: e.colorSpace }) };
    }, async async(e, r) {
      return { data: await r.parse(e.data), width: await r.parse(e.width), height: await r.parse(e.height), options: await r.parse({ colorSpace: e.colorSpace }) };
    }, stream(e, r) {
      return { data: r.parse(e.data), width: r.parse(e.width), height: r.parse(e.height), options: r.parse({ colorSpace: e.colorSpace }) };
    } }, serialize(e, r) {
      return "new ImageData(" + r.serialize(e.data) + "," + r.serialize(e.width) + "," + r.serialize(e.height) + "," + r.serialize(e.options) + ")";
    }, deserialize(e, r) {
      return new ImageData(r.deserialize(e.data), r.deserialize(e.width), r.deserialize(e.height), r.deserialize(e.options));
    } });
    p2 = {};
    ee2 = Hr({ tag: "seroval-plugins/web/ReadableStreamFactory", test(e) {
      return e === p2;
    }, parse: { sync() {
    }, async async() {
      return await Promise.resolve(void 0);
    }, stream() {
    } }, serialize(e, r) {
      return r.createFunction(["d"], "new ReadableStream({start:" + r.createEffectfulFunction(["c"], "d.on({next:" + r.createEffectfulFunction(["v"], "c.enqueue(v)") + ",throw:" + r.createEffectfulFunction(["v"], "c.error(v)") + ",return:" + r.createEffectfulFunction([], "c.close()") + "})") + "})");
    }, deserialize() {
      return p2;
    } });
    re = Hr({ tag: "seroval/plugins/web/ReadableStream", extends: [ee2], test(e) {
      return typeof ReadableStream == "undefined" ? false : e instanceof ReadableStream;
    }, parse: { sync(e, r) {
      return { factory: r.parse(p2), stream: r.parse(K()) };
    }, async async(e, r) {
      return { factory: await r.parse(p2), stream: await r.parse(w2(e)) };
    }, stream(e, r) {
      return { factory: r.parse(p2), stream: r.parse(w2(e)) };
    } }, serialize(e, r) {
      return "(" + r.serialize(e.factory) + ")(" + r.serialize(e.stream) + ")";
    }, deserialize(e, r) {
      let a2 = r.deserialize(e.stream);
      return new ReadableStream({ start(t) {
        a2.on({ next(n2) {
          t.enqueue(n2);
        }, throw(n2) {
          t.error(n2);
        }, return() {
          t.close();
        } });
      } });
    } });
    u2 = re;
    te = Hr({ tag: "seroval-plugins/web/Request", extends: [u2, l], test(e) {
      return typeof Request == "undefined" ? false : e instanceof Request;
    }, parse: { async async(e, r) {
      return { url: await r.parse(e.url), options: await r.parse(P(e, e.body ? await e.clone().arrayBuffer() : null)) };
    }, stream(e, r) {
      return { url: r.parse(e.url), options: r.parse(P(e, e.clone().body)) };
    } }, serialize(e, r) {
      return "new Request(" + r.serialize(e.url) + "," + r.serialize(e.options) + ")";
    }, deserialize(e, r) {
      return new Request(r.deserialize(e.url), r.deserialize(e.options));
    } });
    ne = te;
    se2 = Hr({ tag: "seroval-plugins/web/Response", extends: [u2, l], test(e) {
      return typeof Response == "undefined" ? false : e instanceof Response;
    }, parse: { async async(e, r) {
      return { body: await r.parse(e.body ? await e.clone().arrayBuffer() : null), options: await r.parse(N(e)) };
    }, stream(e, r) {
      return { body: r.parse(e.clone().body), options: r.parse(N(e)) };
    } }, serialize(e, r) {
      return "new Response(" + r.serialize(e.body) + "," + r.serialize(e.options) + ")";
    }, deserialize(e, r) {
      return new Response(r.deserialize(e.body), r.deserialize(e.options));
    } });
    ie2 = se2;
    pe2 = Hr({ tag: "seroval-plugins/web/URL", test(e) {
      return typeof URL == "undefined" ? false : e instanceof URL;
    }, parse: { sync(e, r) {
      return r.parse(e.href);
    }, async async(e, r) {
      return await r.parse(e.href);
    }, stream(e, r) {
      return r.parse(e.href);
    } }, serialize(e, r) {
      return "new URL(" + r.serialize(e) + ")";
    }, deserialize(e, r) {
      return new URL(r.deserialize(e));
    } });
    ue2 = pe2;
    fe2 = Hr({ tag: "seroval-plugins/web/URLSearchParams", test(e) {
      return typeof URLSearchParams == "undefined" ? false : e instanceof URLSearchParams;
    }, parse: { sync(e, r) {
      return r.parse(e.toString());
    }, async async(e, r) {
      return await r.parse(e.toString());
    }, stream(e, r) {
      return r.parse(e.toString());
    } }, serialize(e, r) {
      return "new URLSearchParams(" + r.serialize(e) + ")";
    }, deserialize(e, r) {
      return new URLSearchParams(r.deserialize(e));
    } });
    me2 = fe2;
  }
});

// node_modules/solid-js/web/dist/server.js
function createSerializer({
  onData,
  onDone,
  scopeId,
  onError: onError2,
  plugins: customPlugins
}) {
  const defaultPlugins = [
    C2,
    H,
    _2,
    Y2,
    K2,
    l,
    u2,
    ne,
    ie2,
    me2,
    ue2
  ];
  const allPlugins = customPlugins ? [...customPlugins, ...defaultPlugins] : defaultPlugins;
  return new De({
    scopeId,
    plugins: allPlugins,
    globalIdentifier: GLOBAL_IDENTIFIER,
    disabledFeatures: ES2017FLAG,
    onData,
    onDone,
    onError: onError2
  });
}
function getLocalHeaderScript(id) {
  return xr(id) + ";";
}
function renderToString(code, options = {}) {
  const {
    renderId
  } = options;
  let scripts = "";
  const serializer = createSerializer({
    scopeId: renderId,
    plugins: options.plugins,
    onData(script) {
      if (!scripts) {
        scripts = getLocalHeaderScript(renderId);
      }
      scripts += script + ";";
    },
    onError: options.onError
  });
  sharedConfig.context = {
    id: renderId || "",
    count: 0,
    suspense: {},
    lazy: {},
    assets: [],
    nonce: options.nonce,
    serialize(id, p4) {
      !sharedConfig.context.noHydrate && serializer.write(id, p4);
    },
    roots: 0,
    nextRoot() {
      return this.renderId + "i-" + this.roots++;
    }
  };
  let html2 = createRoot((d2) => {
    setTimeout(d2);
    return resolveSSRNode(escape(code()));
  });
  sharedConfig.context.noHydrate = true;
  serializer.close();
  html2 = injectAssets(sharedConfig.context.assets, html2);
  if (scripts.length) html2 = injectScripts(html2, scripts, options.nonce);
  return html2;
}
function renderToStringAsync(code, options = {}) {
  const {
    timeoutMs = 3e4
  } = options;
  let timeoutHandle;
  const timeout = new Promise((_4, reject) => {
    timeoutHandle = setTimeout(() => reject("renderToString timed out"), timeoutMs);
  });
  return Promise.race([renderToStream(code, options), timeout]).then((html2) => {
    clearTimeout(timeoutHandle);
    return html2;
  });
}
function renderToStream(code, options = {}) {
  let {
    nonce,
    onCompleteShell,
    onCompleteAll,
    renderId,
    noScripts
  } = options;
  let dispose;
  const blockingPromises = [];
  const pushTask = (task) => {
    if (noScripts) return;
    if (!tasks && !firstFlushed) {
      tasks = getLocalHeaderScript(renderId);
    }
    tasks += task + ";";
    if (!timer && firstFlushed) {
      timer = setTimeout(writeTasks);
    }
  };
  const onDone = () => {
    writeTasks();
    doShell();
    onCompleteAll && onCompleteAll({
      write(v2) {
        !completed && buffer.write(v2);
      }
    });
    writable && writable.end();
    completed = true;
    if (firstFlushed) dispose();
  };
  const serializer = createSerializer({
    scopeId: options.renderId,
    plugins: options.plugins,
    onData: pushTask,
    onDone,
    onError: options.onError
  });
  const flushEnd = () => {
    if (!registry.size) {
      queue(() => queue(() => serializer.flush()));
    }
  };
  const registry = /* @__PURE__ */ new Map();
  const writeTasks = () => {
    if (tasks.length && !completed && firstFlushed) {
      buffer.write(`<script${nonce ? ` nonce="${nonce}"` : ""}>${tasks}</script>`);
      tasks = "";
    }
    timer && clearTimeout(timer);
    timer = null;
  };
  let context;
  let writable;
  let tmp = "";
  let tasks = "";
  let firstFlushed = false;
  let completed = false;
  let shellCompleted = false;
  let scriptFlushed = false;
  let timer = null;
  let buffer = {
    write(payload) {
      tmp += payload;
    }
  };
  sharedConfig.context = context = {
    id: renderId || "",
    count: 0,
    async: true,
    resources: {},
    lazy: {},
    suspense: {},
    assets: [],
    nonce,
    block(p4) {
      if (!firstFlushed) blockingPromises.push(p4);
    },
    replace(id, payloadFn) {
      if (firstFlushed) return;
      const placeholder = `<!--!$${id}-->`;
      const first = html2.indexOf(placeholder);
      if (first === -1) return;
      const last = html2.indexOf(`<!--!$/${id}-->`, first + placeholder.length);
      html2 = html2.slice(0, first) + resolveSSRNode(escape(payloadFn())) + html2.slice(last + placeholder.length + 1);
    },
    serialize(id, p4, wait) {
      const serverOnly = sharedConfig.context.noHydrate;
      if (!firstFlushed && wait && typeof p4 === "object" && "then" in p4) {
        blockingPromises.push(p4);
        !serverOnly && p4.then((d2) => {
          serializer.write(id, d2);
        }).catch((e) => {
          serializer.write(id, e);
        });
      } else if (!serverOnly) serializer.write(id, p4);
    },
    roots: 0,
    nextRoot() {
      return this.renderId + "i-" + this.roots++;
    },
    registerFragment(key) {
      if (!registry.has(key)) {
        let resolve3, reject;
        const p4 = new Promise((r, rej) => (resolve3 = r, reject = rej));
        registry.set(key, (err2) => queue(() => queue(() => {
          err2 ? reject(err2) : resolve3(true);
          queue(flushEnd);
        })));
        serializer.write(key, p4);
      }
      return (value, error) => {
        if (registry.has(key)) {
          const resolve3 = registry.get(key);
          registry.delete(key);
          if (waitForFragments(registry, key)) {
            resolve3();
            return;
          }
          if (!completed) {
            if (!firstFlushed) {
              queue(() => html2 = replacePlaceholder(html2, key, value !== void 0 ? value : ""));
              resolve3(error);
            } else {
              buffer.write(`<template id="${key}">${value !== void 0 ? value : " "}</template>`);
              pushTask(`$df("${key}")${!scriptFlushed ? ";" + REPLACE_SCRIPT : ""}`);
              resolve3(error);
              scriptFlushed = true;
            }
          }
        }
        return firstFlushed;
      };
    }
  };
  let html2 = createRoot((d2) => {
    dispose = d2;
    return resolveSSRNode(escape(code()));
  });
  function doShell() {
    if (shellCompleted) return;
    sharedConfig.context = context;
    context.noHydrate = true;
    html2 = injectAssets(context.assets, html2);
    if (tasks.length) html2 = injectScripts(html2, tasks, nonce);
    buffer.write(html2);
    tasks = "";
    onCompleteShell && onCompleteShell({
      write(v2) {
        !completed && buffer.write(v2);
      }
    });
    shellCompleted = true;
  }
  return {
    then(fn) {
      function complete() {
        dispose();
        fn(tmp);
      }
      if (onCompleteAll) {
        let ogComplete = onCompleteAll;
        onCompleteAll = (options2) => {
          ogComplete(options2);
          complete();
        };
      } else onCompleteAll = complete;
      queue(flushEnd);
    },
    pipe(w4) {
      allSettled(blockingPromises).then(() => {
        setTimeout(() => {
          doShell();
          buffer = writable = w4;
          buffer.write(tmp);
          firstFlushed = true;
          if (completed) {
            dispose();
            writable.end();
          } else flushEnd();
        });
      });
    },
    pipeTo(w4) {
      return allSettled(blockingPromises).then(() => {
        let resolve3;
        const p4 = new Promise((r) => resolve3 = r);
        setTimeout(() => {
          doShell();
          const encoder2 = new TextEncoder();
          const writer = w4.getWriter();
          writable = {
            end() {
              writer.releaseLock();
              w4.close();
              resolve3();
            }
          };
          buffer = {
            write(payload) {
              writer.write(encoder2.encode(payload));
            }
          };
          buffer.write(tmp);
          firstFlushed = true;
          if (completed) {
            dispose();
            writable.end();
          } else flushEnd();
        });
        return p4;
      });
    }
  };
}
function ssr(t, ...nodes) {
  if (nodes.length) {
    let result = "";
    for (let i3 = 0; i3 < nodes.length; i3++) {
      result += t[i3];
      const node = nodes[i3];
      if (node !== void 0) result += resolveSSRNode(node);
    }
    t = result + t[nodes.length];
  }
  return {
    t
  };
}
function ssrClassList(value) {
  if (!value) return "";
  let classKeys = Object.keys(value), result = "";
  for (let i3 = 0, len = classKeys.length; i3 < len; i3++) {
    const key = classKeys[i3], classValue = !!value[key];
    if (!key || key === "undefined" || !classValue) continue;
    i3 && (result += " ");
    result += escape(key);
  }
  return result;
}
function ssrStyle(value) {
  if (!value) return "";
  if (typeof value === "string") return escape(value, true);
  let result = "";
  const k2 = Object.keys(value);
  for (let i3 = 0; i3 < k2.length; i3++) {
    const s3 = k2[i3];
    const v2 = value[s3];
    if (v2 != void 0) {
      if (i3) result += ";";
      const r = escape(v2, true);
      if (r != void 0 && r !== "undefined") {
        result += `${s3}:${r}`;
      }
    }
  }
  return result;
}
function ssrElement(tag, props, children2, needsId) {
  if (props == null) props = {};
  else if (typeof props === "function") props = props();
  const skipChildren = VOID_ELEMENTS.test(tag);
  const keys = Object.keys(props);
  let result = `<${tag}${needsId ? ssrHydrationKey() : ""} `;
  let classResolved;
  for (let i3 = 0; i3 < keys.length; i3++) {
    const prop = keys[i3];
    if (ChildProperties.has(prop)) {
      if (children2 === void 0 && !skipChildren) children2 = tag === "script" || tag === "style" || prop === "innerHTML" ? props[prop] : escape(props[prop]);
      continue;
    }
    const value = props[prop];
    if (prop === "style") {
      result += `style="${ssrStyle(value)}"`;
    } else if (prop === "class" || prop === "className" || prop === "classList") {
      if (classResolved) continue;
      let n2;
      result += `class="${escape(((n2 = props.class) ? n2 + " " : "") + ((n2 = props.className) ? n2 + " " : ""), true) + ssrClassList(props.classList)}"`;
      classResolved = true;
    } else if (BooleanAttributes.has(prop)) {
      if (value) result += prop;
      else continue;
    } else if (value == void 0 || prop === "ref" || prop.slice(0, 2) === "on" || prop.slice(0, 5) === "prop:") {
      continue;
    } else if (prop.slice(0, 5) === "bool:") {
      if (!value) continue;
      result += escape(prop.slice(5));
    } else if (prop.slice(0, 5) === "attr:") {
      result += `${escape(prop.slice(5))}="${escape(value, true)}"`;
    } else {
      result += `${Aliases[prop] || escape(prop)}="${escape(value, true)}"`;
    }
    if (i3 !== keys.length - 1) result += " ";
  }
  if (skipChildren) return {
    t: result + "/>"
  };
  if (typeof children2 === "function") children2 = children2();
  return {
    t: result + `>${resolveSSRNode(children2, true)}</${tag}>`
  };
}
function ssrAttribute(key, value, isBoolean) {
  return isBoolean ? value ? " " + key : "" : value != null ? ` ${key}="${value}"` : "";
}
function ssrHydrationKey() {
  const hk = getHydrationKey();
  return hk ? ` data-hk="${hk}"` : "";
}
function escape(s3, attr) {
  const t = typeof s3;
  if (t !== "string") {
    if (!attr && t === "function") return escape(s3());
    if (!attr && Array.isArray(s3)) {
      s3 = s3.slice();
      for (let i3 = 0; i3 < s3.length; i3++) s3[i3] = escape(s3[i3]);
      return s3;
    }
    if (attr && t === "boolean") return String(s3);
    return s3;
  }
  const delim = attr ? '"' : "<";
  const escDelim = attr ? "&quot;" : "&lt;";
  let iDelim = s3.indexOf(delim);
  let iAmp = s3.indexOf("&");
  if (iDelim < 0 && iAmp < 0) return s3;
  let left = 0, out = "";
  while (iDelim >= 0 && iAmp >= 0) {
    if (iDelim < iAmp) {
      if (left < iDelim) out += s3.substring(left, iDelim);
      out += escDelim;
      left = iDelim + 1;
      iDelim = s3.indexOf(delim, left);
    } else {
      if (left < iAmp) out += s3.substring(left, iAmp);
      out += "&amp;";
      left = iAmp + 1;
      iAmp = s3.indexOf("&", left);
    }
  }
  if (iDelim >= 0) {
    do {
      if (left < iDelim) out += s3.substring(left, iDelim);
      out += escDelim;
      left = iDelim + 1;
      iDelim = s3.indexOf(delim, left);
    } while (iDelim >= 0);
  } else while (iAmp >= 0) {
    if (left < iAmp) out += s3.substring(left, iAmp);
    out += "&amp;";
    left = iAmp + 1;
    iAmp = s3.indexOf("&", left);
  }
  return left < s3.length ? out + s3.substring(left) : out;
}
function resolveSSRNode(node, top) {
  const t = typeof node;
  if (t === "string") return node;
  if (node == null || t === "boolean") return "";
  if (Array.isArray(node)) {
    let prev = {};
    let mapped = "";
    for (let i3 = 0, len = node.length; i3 < len; i3++) {
      if (!top && typeof prev !== "object" && typeof node[i3] !== "object") mapped += `<!--!$-->`;
      mapped += resolveSSRNode(prev = node[i3]);
    }
    return mapped;
  }
  if (t === "object") return node.t;
  if (t === "function") return resolveSSRNode(node());
  return String(node);
}
function getHydrationKey() {
  const hydrate = sharedConfig.context;
  return hydrate && !hydrate.noHydrate && sharedConfig.getNextContextId();
}
function generateHydrationScript({
  eventNames = ["click", "input"],
  nonce
} = {}) {
  return `<script${nonce ? ` nonce="${nonce}"` : ""}>window._$HY||(e=>{let t=e=>e&&e.hasAttribute&&(e.hasAttribute("data-hk")?e:t(e.host&&e.host.nodeType?e.host:e.parentNode));["${eventNames.join('", "')}"].forEach((o=>document.addEventListener(o,(o=>{if(!e.events)return;let s=t(o.composedPath&&o.composedPath()[0]||o.target);s&&!e.completed.has(s)&&e.events.push([s,o])}))))})(_$HY={events:[],completed:new WeakSet,r:{},fe(){}});</script><!--xs-->`;
}
function queue(fn) {
  return Promise.resolve().then(fn);
}
function allSettled(promises) {
  let length = promises.length;
  return Promise.allSettled(promises).then(() => {
    if (promises.length !== length) return allSettled(promises);
    return;
  });
}
function injectAssets(assets, html2) {
  if (!assets || !assets.length) return html2;
  let out = "";
  for (let i3 = 0, len = assets.length; i3 < len; i3++) out += assets[i3]();
  const index = html2.indexOf("</head>");
  if (index === -1) return html2;
  return html2.slice(0, index) + out + html2.slice(index);
}
function injectScripts(html2, scripts, nonce) {
  const tag = `<script${nonce ? ` nonce="${nonce}"` : ""}>${scripts}</script>`;
  const index = html2.indexOf("<!--xs-->");
  if (index > -1) {
    return html2.slice(0, index) + tag + html2.slice(index);
  }
  return html2 + tag;
}
function waitForFragments(registry, key) {
  for (const k2 of [...registry.keys()].reverse()) {
    if (key.startsWith(k2)) return true;
  }
  return false;
}
function replacePlaceholder(html2, key, value) {
  const marker = `<template id="pl-${key}">`;
  const close = `<!--pl-${key}-->`;
  const first = html2.indexOf(marker);
  if (first === -1) return html2;
  const last = html2.indexOf(close, first + marker.length);
  return html2.slice(0, first) + value + html2.slice(last + close.length);
}
function notSup() {
  throw new Error("Client-only API called on the server side. Run client-only code in onMount, or conditionally run client-only component with <Show>.");
}
function createDynamic(component, props) {
  const comp = component(), t = typeof comp;
  if (comp) {
    if (t === "function") return comp(props);
    else if (t === "string") {
      return ssrElement(comp, props, void 0, true);
    }
  }
}
function Dynamic(props) {
  const [, others] = splitProps(props, ["component"]);
  return createDynamic(() => props.component, others);
}
var booleans, BooleanAttributes, Properties, ChildProperties, Aliases, memo, ES2017FLAG, GLOBAL_IDENTIFIER, VOID_ELEMENTS, REPLACE_SCRIPT;
var init_server2 = __esm({
  "node_modules/solid-js/web/dist/server.js"() {
    init_server();
    init_server();
    init_production();
    init_web();
    booleans = [
      "allowfullscreen",
      "async",
      "alpha",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "disabled",
      "formnovalidate",
      "hidden",
      "indeterminate",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "seamless",
      "selected",
      "adauctionheaders",
      "browsingtopics",
      "credentialless",
      "defaultchecked",
      "defaultmuted",
      "defaultselected",
      "defer",
      "disablepictureinpicture",
      "disableremoteplayback",
      "preservespitch",
      "shadowrootclonable",
      "shadowrootcustomelementregistry",
      "shadowrootdelegatesfocus",
      "shadowrootserializable",
      "sharedstoragewritable"
    ];
    BooleanAttributes = /* @__PURE__ */ new Set(booleans);
    Properties = /* @__PURE__ */ new Set([
      "className",
      "value",
      "readOnly",
      "noValidate",
      "formNoValidate",
      "isMap",
      "noModule",
      "playsInline",
      "adAuctionHeaders",
      "allowFullscreen",
      "browsingTopics",
      "defaultChecked",
      "defaultMuted",
      "defaultSelected",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "preservesPitch",
      "shadowRootClonable",
      "shadowRootCustomElementRegistry",
      "shadowRootDelegatesFocus",
      "shadowRootSerializable",
      "sharedStorageWritable",
      ...booleans
    ]);
    ChildProperties = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]);
    Aliases = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
      className: "class",
      htmlFor: "for"
    });
    memo = (fn) => createMemo(() => fn());
    ES2017FLAG = R.AggregateError | R.BigIntTypedArray;
    GLOBAL_IDENTIFIER = "_$HY.r";
    VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
    REPLACE_SCRIPT = `function $df(e,n,o,t){if(n=document.getElementById(e),o=document.getElementById("pl-"+e)){for(;o&&8!==o.nodeType&&o.nodeValue!=="pl-"+e;)t=o.nextSibling,o.remove(),o=t;_$HY.done?o.remove():o.replaceWith(n.content)}n.remove(),_$HY.fe(e)}`;
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets/injectHtmlTags.js
function injectHtmlTags(htmlString, htmlTags, position) {
  const htmlFragment = joinHtmlTags(htmlTags.filter((h2) => h2.position === position));
  if (htmlFragment) {
    htmlString = injectHtmlFragment(position, htmlFragment, htmlString);
  }
  return htmlString;
}
function injectHtmlTagsUsingStream(htmlTags, streamFromReactStreamingPackage) {
  const htmlFragment = joinHtmlTags(htmlTags.filter((h2) => h2.position === "HTML_STREAM"));
  if (htmlFragment) {
    assert(!streamFromReactStreamingPackage.hasStreamEnded());
    streamFromReactStreamingPackage.injectToStream(htmlFragment, { flush: true });
  }
}
function joinHtmlTags(htmlTags) {
  const htmlFragment = htmlTags.map((h2) => resolveHtmlTag(h2.htmlTag)).join("");
  return htmlFragment;
}
function injectHtmlFragment(position, htmlFragment, htmlString) {
  if (position === "HTML_BEGIN") {
    {
      const res = injectAtPlaceholder(htmlFragment, htmlString, true);
      if (res)
        return res;
    }
    assert(tagOpeningExists("head", htmlString));
    htmlString = injectAtOpeningTag("head", htmlString, htmlFragment);
    return htmlString;
  }
  if (position === "HTML_END") {
    {
      const res = injectAtPlaceholder(htmlFragment, htmlString, false);
      if (res)
        return res;
    }
    if (tagClosingExists("body", htmlString)) {
      return injectAtClosingTag("body", htmlString, htmlFragment);
    }
    if (tagClosingExists("html", htmlString)) {
      return injectAtClosingTag("html", htmlString, htmlFragment);
    }
    return htmlString + "\n" + htmlFragment;
  }
  assert(false);
}
function resolveHtmlTag(htmlTag) {
  return typeof htmlTag !== "string" ? htmlTag() : htmlTag;
}
function injectAtOpeningTag(tag, htmlString, htmlFragment) {
  const openingTag = getTagOpening(tag);
  const matches = htmlString.match(openingTag);
  assert(matches && matches.length >= 1);
  const tagInstance = matches[0];
  assert(tagInstance);
  const htmlParts = htmlString.split(tagInstance);
  assert(htmlParts.length >= 2);
  const before = slice(htmlParts, 0, 1)[0] + tagInstance;
  const after = slice(htmlParts, 1, 0).join(tagInstance);
  htmlFragment = injectBreakLines(htmlFragment, before, after);
  return before + htmlFragment + after;
}
function injectAtClosingTag(tag, htmlString, htmlFragment) {
  const tagClosing = getTagClosing(tag);
  const matches = htmlString.match(tagClosing);
  assert(matches && matches.length >= 1);
  const tagInstance = matches[0];
  assert(tagInstance);
  const htmlParts = htmlString.split(tagInstance);
  assert(htmlParts.length >= 2);
  const before = slice(htmlParts, 0, -1).join(tagInstance);
  const after = tagInstance + slice(htmlParts, -1, 0);
  htmlFragment = injectBreakLines(htmlFragment, before, after);
  return before + htmlFragment + after;
}
function injectBreakLines(htmlFragment, before, after) {
  assert(htmlFragment.trim() === htmlFragment);
  const currentLineBefore = before.split("\n").slice(-1)[0];
  let paddingParent = currentLineBefore.match(/\s*$/)[0];
  let isBlankLine = !!paddingParent;
  if (!paddingParent) {
    paddingParent = currentLineBefore.match(/^\s*/)[0];
  }
  if (!paddingParent)
    return htmlFragment;
  const whitespaceExtra = paddingParent ? "  " : "";
  const whitespace = `${paddingParent}${whitespaceExtra}`;
  const padding = `
${whitespace}`;
  htmlFragment = htmlFragment.replace(/<[^\/]/g, (match2) => `${padding}${match2}`);
  if (isBlankLine) {
    assert(htmlFragment.startsWith(padding), { htmlFragment });
    htmlFragment = whitespaceExtra + htmlFragment.slice(padding.length);
  }
  const currentLineAfter = after.split("\n")[0];
  if (currentLineAfter.trim().length > 0) {
    htmlFragment += "\n" + paddingParent;
  }
  return htmlFragment;
}
function createHtmlHeadIfMissing(htmlString) {
  const assertion = () => assert(tagOpeningExists("head", htmlString) && tagClosingExists("head", htmlString));
  if (tagOpeningExists("head", htmlString) && tagClosingExists("head", htmlString)) {
    assertion();
    return htmlString;
  }
  const htmlFragment = "<head></head>";
  if (tagOpeningExists("html", htmlString)) {
    htmlString = injectAtOpeningTag("html", htmlString, htmlFragment);
    assertion();
    return htmlString;
  }
  if (tagOpeningExists("!doctype", htmlString)) {
    htmlString = injectAtOpeningTag("!doctype", htmlString, htmlFragment);
    assertion();
    return htmlString;
  }
  htmlString = htmlFragment + "\n" + htmlString;
  assertion();
  return htmlString;
}
function tagOpeningExists(tag, htmlString) {
  const tagOpeningRE = getTagOpening(tag);
  return tagOpeningRE.test(htmlString);
}
function tagClosingExists(tag, htmlString) {
  const tagClosingRE = getTagClosing(tag);
  return tagClosingRE.test(htmlString);
}
function getTagOpening(tag) {
  const tagOpening = new RegExp(`<${tag}(>| [^>]*>)`, "i");
  return tagOpening;
}
function getTagClosing(tag) {
  const tagClosing = new RegExp(`</${tag}>`, "i");
  return tagClosing;
}
function injectAtPlaceholder(htmlFragment, htmlString, isFirst) {
  const placeholder = isFirst ? "__VITE_PLUGIN_SSR__ASSETS_FIRST__" : "__VITE_PLUGIN__SSR_ASSETS_LAST__";
  const parts = htmlString.split(placeholder);
  if (parts.length === 1)
    return null;
  assertUsage(parts.length === 2, "You're inserting assets twice into your HTML", { showStackTrace: true });
  return [parts[0], htmlFragment, parts[1]].join("");
}
var init_injectHtmlTags = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets/injectHtmlTags.js"() {
    init_utils();
  }
});

// node_modules/@brillout/json-serializer/dist/utils/isReactElement.js
function isReactElement(value) {
  return typeof value === "object" && value !== null && String(value["$$typeof"]) === "Symbol(react.element)";
}
var init_isReactElement = __esm({
  "node_modules/@brillout/json-serializer/dist/utils/isReactElement.js"() {
  }
});

// node_modules/@brillout/json-serializer/dist/utils/isCallable.js
function isCallable2(thing) {
  return thing instanceof Function || typeof thing === "function";
}
var init_isCallable2 = __esm({
  "node_modules/@brillout/json-serializer/dist/utils/isCallable.js"() {
  }
});

// node_modules/@brillout/json-serializer/dist/utils/isObject.js
function isObject2(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (Array.isArray(value)) {
    return false;
  }
  return true;
}
var init_isObject2 = __esm({
  "node_modules/@brillout/json-serializer/dist/utils/isObject.js"() {
  }
});

// node_modules/@brillout/json-serializer/dist/utils/addPathToReplacer.js
function addPathToReplacer(replacer) {
  const pathMap = /* @__PURE__ */ new WeakMap();
  return replacerForJsonStringify;
  function replacerForJsonStringify(key, valueAfterNativeJsonStringify) {
    const pathPrevious = pathMap.get(this) ?? [];
    const path = [...pathPrevious];
    if (key !== "") {
      const pathEntry = !Array.isArray(this) ? key : parseInt(key, 10);
      path.push(pathEntry);
    }
    if (isIterable(valueAfterNativeJsonStringify))
      pathMap.set(valueAfterNativeJsonStringify, path);
    return replacer.call(this, key, valueAfterNativeJsonStringify, path);
  }
}
function isIterable(value) {
  return value === Object(value);
}
var init_addPathToReplacer = __esm({
  "node_modules/@brillout/json-serializer/dist/utils/addPathToReplacer.js"() {
  }
});

// node_modules/@brillout/json-serializer/dist/stringify.js
function stringify(value, { forbidReactElements, space, valueName, sortObjectKeys, replacer: replacerUserProvided } = {}) {
  const serializer = (val) => JSON.stringify(val, addPathToReplacer(replacer), space);
  return serializer(value);
  function replacer(key, _valueAfterNativeJsonStringify, path) {
    const valueOriginal = this[key];
    let value2 = valueOriginal;
    {
      const ret = replacerUserProvided?.call(this, key, valueOriginal, serializer);
      if (ret) {
        value2 = ret.replacement;
        if (ret.resolved !== false)
          return value2;
      }
    }
    if (forbidReactElements && isReactElement(value2)) {
      throw genErr({
        value: value2,
        valueType: "React element",
        path,
        rootValueName: valueName
      });
    }
    if (isCallable2(value2)) {
      const functionName = value2.name;
      throw genErr({
        value: value2,
        valueType: "function",
        path,
        rootValueName: valueName,
        problematicValueName: path.length === 0 ? functionName : void 0
      });
    }
    for (const { is, serialize: serialize3 } of types.slice().reverse()) {
      if (is(value2)) {
        return serialize3(value2, serializer);
      }
    }
    if (sortObjectKeys && isObject2(value2)) {
      const copy2 = {};
      Object.keys(value2).sort().forEach((key2) => {
        copy2[key2] = value2[key2];
      });
      value2 = copy2;
    }
    return value2;
  }
}
function genErr({ value, valueType, path, rootValueName, problematicValueName }) {
  const subjectName = getSubjectName({ path, rootValueName, problematicValueName });
  const messageCore = `cannot serialize ${subjectName} because it's a ${valueType}`;
  const err2 = new Error(`[@brillout/json-serializer](https://github.com/brillout/json-serializer) ${messageCore}.`);
  const pathString = getPathString(path, true);
  const errAddendum = {
    [stamp2]: true,
    messageCore,
    value,
    path,
    pathString,
    subjectName
  };
  Object.assign(err2, errAddendum);
  return err2;
}
function isJsonSerializerError(thing) {
  return isObject2(thing) && thing[stamp2] === true;
}
function getSubjectName({ path, rootValueName, problematicValueName }) {
  const pathString = getPathString(path, !rootValueName);
  let subjectName;
  if (!pathString) {
    subjectName = rootValueName || problematicValueName || "value";
  } else {
    if (problematicValueName) {
      subjectName = problematicValueName + " at ";
    } else {
      subjectName = "";
    }
    subjectName = subjectName + (rootValueName || "") + pathString;
  }
  return subjectName;
}
function getPathString(path, canBeFirstKey) {
  const pathString = path.map((key, i3) => {
    if (typeof key === "number") {
      return `[${key}]`;
    }
    if (i3 === 0 && canBeFirstKey && isKeyDotNotationCompatible2(key)) {
      return key;
    }
    return getPropAccessNotation2(key);
  }).join("");
  return pathString;
}
function getPropAccessNotation2(key) {
  return typeof key === "string" && isKeyDotNotationCompatible2(key) ? `.${key}` : `[${JSON.stringify(key)}]`;
}
function isKeyDotNotationCompatible2(key) {
  return /^[a-z0-9\$_]+$/i.test(key);
}
var stamp2;
var init_stringify = __esm({
  "node_modules/@brillout/json-serializer/dist/stringify.js"() {
    init_types();
    init_isReactElement();
    init_isCallable2();
    init_isObject2();
    init_addPathToReplacer();
    stamp2 = "_isJsonSerializerError";
  }
});

// node_modules/vike/dist/shared-server-client/misc/pageContextInitIsPassedToClient.js
var pageContextInitIsPassedToClient;
var init_pageContextInitIsPassedToClient = __esm({
  "node_modules/vike/dist/shared-server-client/misc/pageContextInitIsPassedToClient.js"() {
    pageContextInitIsPassedToClient = "_pageContextInitIsPassedToClient";
  }
});

// node_modules/vike/dist/shared-server-client/misc/isServerSideError.js
var isServerSideError;
var init_isServerSideError = __esm({
  "node_modules/vike/dist/shared-server-client/misc/isServerSideError.js"() {
    isServerSideError = "_isServerSideError";
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/html/propKeys.js
function getPropVal(obj, prop) {
  const keys = getPropKeys(prop);
  let value = obj;
  for (const key of keys) {
    if (isObject(value) && key in value) {
      value = value[key];
    } else {
      return null;
    }
  }
  return { value };
}
function setPropVal(obj, prop, val) {
  const keys = getPropKeys(prop);
  let currentObj = obj;
  for (let i3 = 0; i3 <= keys.length - 2; i3++) {
    const key = keys[i3];
    if (!(key in currentObj)) {
      currentObj[key] = {};
    }
    if (!isObject(currentObj[key])) {
      return;
    }
    currentObj = currentObj[key];
  }
  const finalKey = keys[keys.length - 1];
  currentObj[finalKey] = val;
}
function getPropKeys(prop) {
  return prop.split(/(?<!\\)\./).map((key) => key.replace(/\\\./g, "."));
}
var init_propKeys = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/html/propKeys.js"() {
    init_utils();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/html/serializeContext.js
function getPageContextClientSerialized(pageContext, isHtmlJsonScript) {
  const passToClientPageContext = getPassToClientPageContext(pageContext);
  const res = applyPassToClient(passToClientPageContext, pageContext);
  const pageContextClient = res.objClient;
  const pageContextClientProps = res.objClientProps;
  if (pageContextClientProps.some((prop) => getPropVal(pageContext._pageContextInit, prop))) {
    pageContextClient[pageContextInitIsPassedToClient] = true;
  }
  const pageContextClientSerialized = serializeObject(pageContextClient, passToClientPageContext, "pageContext", isHtmlJsonScript);
  return pageContextClientSerialized;
}
function getGlobalContextClientSerialized(pageContext, isHtmlJsonScript) {
  const passToClient = pageContext._passToClient;
  const globalContext2 = pageContext._globalContext;
  const res = applyPassToClient(passToClient, globalContext2);
  const globalContextClient = res.objClient;
  const globalContextClientSerialized = serializeObject(globalContextClient, passToClient, "globalContext", isHtmlJsonScript);
  return globalContextClientSerialized;
}
function serializeObject(obj, passToClient, objName, isHtmlJsonScript) {
  let serialized;
  try {
    serialized = serializeValue(obj, isHtmlJsonScript);
  } catch (err2) {
    const h2 = (s3) => picocolors_default.cyan(s3);
    let hasWarned = false;
    const propsNonSerializable = [];
    passToClient.forEach((prop) => {
      const res = getPropVal(obj, prop);
      if (!res)
        return;
      const { value } = res;
      const varName = `${objName}${getPropKeys(prop).map(getPropAccessNotation).join("")}`;
      try {
        serializeValue(value, isHtmlJsonScript, varName);
      } catch (err3) {
        propsNonSerializable.push(prop);
        if (prop === "_configFromHook") {
          let pathString = "";
          if (isJsonSerializerError(err3)) {
            pathString = err3.pathString;
          }
          assertUsage(false, `Cannot serialize config value ${h2(pathString)} set by useConfig()`);
        }
        let msg = [
          `${h2(varName)} can't be serialized and, therefore, can't be passed to the client side.`,
          `Make sure ${h2(varName)} is serializable, or remove ${h2(JSON.stringify(prop))} from ${h2("passToClient")}.`
        ].join(" ");
        if (isJsonSerializerError(err3)) {
          msg = `${msg} Serialization error: ${err3.messageCore}.`;
        } else {
          console.warn("Serialization error:");
          console.warn(err3);
          msg = `${msg} The serialization failed because of the error printed above.`;
        }
        assertWarning2(false, msg, { onlyOnce: false });
        hasWarned = true;
      }
    });
    assert(hasWarned);
    propsNonSerializable.forEach((prop) => {
      obj[getPropKeys(prop)[0]] = NOT_SERIALIZABLE;
    });
    try {
      serialized = serializeValue(obj, isHtmlJsonScript);
    } catch (err3) {
      assert(false);
    }
  }
  return serialized;
}
function serializeValue(value, isHtmlJsonScript, varName) {
  return stringify(value, {
    forbidReactElements: true,
    valueName: varName,
    // Prevent Google from crawling URLs in JSON:
    // - https://github.com/vikejs/vike/pull/2603
    // - https://github.com/brillout/json-serializer/blob/38edbb9945de4938da1e65d6285ce1dd123a45ef/test/main.spec.ts#L44-L95
    replacer: !isHtmlJsonScript ? void 0 : (_key, value2) => {
      if (typeof value2 === "string") {
        return { replacement: value2.replaceAll("/", "\\/"), resolved: false };
      }
    }
  });
}
function getPassToClientPageContext(pageContext) {
  assertPageContext(pageContext);
  let passToClient = [...pageContext._passToClient, ...passToClientBuiltInPageContext];
  if (isErrorPage(pageContext.pageId, pageContext._globalContext._pageConfigs)) {
    assert(hasProp(pageContext, "is404", "boolean"));
    addIs404ToPageProps(pageContext);
    passToClient.push(...pageToClientBuiltInPageContextError);
  }
  passToClient = unique(passToClient);
  return passToClient;
}
function getPageContextClientSerializedAbort(pageContext, isHtmlJsonScript) {
  assert(pageContext._urlRedirect || pageContext._urlRewrite || pageContext.abortStatusCode);
  assert(pageContext._abortCall);
  assert(pageContext._abortCaller);
  delete pageContext._abortCaller;
  const unknownProps = Object.keys(pageContext).filter((prop) => ![
    // prettier-ignore
    // biome-ignore format:
    "_abortCall",
    /* Not needed on the client-side
    '_abortCaller',
    */
    "_urlRedirect",
    "_urlRewrite",
    "abortStatusCode",
    "abortReason",
    "is404",
    "pageProps"
  ].includes(prop));
  if (!pageContext._isLegacyRenderErrorPage) {
    assert(unknownProps.length === 0);
  } else {
    assertWarning2(unknownProps.length === 0, [
      "The following pageContext values won't be available on the client-side:",
      unknownProps.map((p4) => `  pageContext[${JSON.stringify(p4)}]`),
      "Use `throw render()` instead of `throw RenderErrorPage()`"
    ].join("\n"), {
      onlyOnce: false
    });
  }
  return serializeValue(pageContext, isHtmlJsonScript);
}
function applyPassToClient(passToClient, obj) {
  const objClient = {};
  const objClientProps = [];
  passToClient.forEach((prop) => {
    const res = getPropVal(obj, prop);
    if (!res)
      return;
    const { value } = res;
    setPropVal(objClient, prop, value);
    objClientProps.push(prop);
  });
  return { objClient, objClientProps };
}
function assertPageContext(pageContext) {
  assertUsage(hasProp(pageContext, "pageId", "string"), `${picocolors_default.bold("pageContext.pageId")} should be a ${picocolors_default.bold("string")}`);
  assertRouteParams(pageContext, `${picocolors_default.bold("pageContext.routeParams")} should`);
}
var passToClientBuiltInPageContext, pageToClientBuiltInPageContextError;
var init_serializeContext = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/html/serializeContext.js"() {
    init_stringify();
    init_utils();
    init_error_page();
    init_addIs404ToPageProps();
    init_picocolors();
    init_NOT_SERIALIZABLE();
    init_pageContextInitIsPassedToClient();
    init_isServerSideError();
    init_propKeys();
    init_resolveRouteFunction();
    passToClientBuiltInPageContext = [
      "abortReason",
      "_urlRewrite",
      "_urlRedirect",
      "abortStatusCode",
      "_abortCall",
      /* Not needed on the client-side
      '_abortCaller',
      */
      pageContextInitIsPassedToClient,
      "pageId",
      "routeParams",
      "data"
      // for data() hook
    ];
    pageToClientBuiltInPageContextError = ["pageProps", "is404", isServerSideError];
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets/sanitizeJson.js
function sanitizeJson(unsafe) {
  const safe = unsafe.replace(/</g, "\\u003c");
  return safe;
}
var init_sanitizeJson = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets/sanitizeJson.js"() {
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/csp.js
async function resolvePageContextCspNone(pageContext) {
  if (pageContext.cspNonce)
    return null;
  const { csp } = pageContext.config;
  const pageContextAddendum = { cspNonce: null };
  if (csp?.nonce) {
    if (csp.nonce === true) {
      pageContextAddendum.cspNonce = await generateNonce();
    } else {
      pageContextAddendum.cspNonce = await csp.nonce(pageContext);
    }
  }
  return pageContextAddendum;
}
async function generateNonce() {
  let cryptoModule;
  try {
    cryptoModule = (await import_("crypto")).default;
  } catch {
    return Math.random().toString(36).substring(2, 18);
  }
  return cryptoModule.randomBytes(16).toString("base64url");
}
function inferNonceAttr(pageContext) {
  const nonceAttr = pageContext.cspNonce ? ` nonce="${pageContext.cspNonce}"` : "";
  return nonceAttr;
}
function addCspResponseHeader(pageContext, headersResponse) {
  assert(pageContext.cspNonce === null || typeof pageContext.cspNonce === "string");
  if (!pageContext.cspNonce)
    return;
  if (headersResponse.get("Content-Security-Policy"))
    return;
  headersResponse.set("Content-Security-Policy", `script-src 'self' 'nonce-${pageContext.cspNonce}'`);
}
var init_csp = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/csp.js"() {
    init_esm();
    init_utils();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets/inferHtmlTags.js
function inferPreloadTag(pageAsset) {
  const { src, assetType, mediaType } = pageAsset;
  const rel = getRel(pageAsset);
  const attributes = [
    `rel="${rel}"`,
    `href="${src}"`,
    !assetType ? null : `as="${assetType}"`,
    !mediaType ? null : `type="${mediaType}"`,
    // `crossorigin` is needed for fonts, see https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload#cors-enabled_fetches
    !isCrossOrigin(pageAsset) ? null : "crossorigin"
  ].filter(Boolean).join(" ");
  return `<link ${attributes}>`;
}
function inferAssetTag(pageAsset, pageContext) {
  const { src, assetType, mediaType } = pageAsset;
  if (assetType === "script") {
    assert(mediaType === "text/javascript");
    const nonceAttr = inferNonceAttr(pageContext);
    return `<script src="${src}" ${scriptCommonAttrs}${nonceAttr}></script>`;
  }
  if (assetType === "style") {
    return `<link rel="stylesheet" type="text/css" href="${src}">`;
  }
  assert(false, { pageAsset });
}
function inferEarlyHintLink(pageAsset) {
  const { src, assetType } = pageAsset;
  const rel = getRel(pageAsset);
  return [`<${src}>`, `rel=${rel}`, !assetType ? null : `as=${assetType}`].filter(Boolean).join("; ");
}
function getRel({ assetType }) {
  if (assetType === "script") {
    return "modulepreload";
  }
  return "preload";
}
function isCrossOrigin({ src, assetType }) {
  return assetType === "font" || src.startsWith("http://") || src.startsWith("https://");
}
var scriptCommonAttrs;
var init_inferHtmlTags = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets/inferHtmlTags.js"() {
    init_utils();
    init_csp();
    scriptCommonAttrs = 'type="module" async';
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets/mergeScriptTags.js
function mergeScriptTags(scriptTagsHtml, pageContext) {
  let scriptTag = "";
  const scripts = parseScripts(scriptTagsHtml);
  {
    const scriptsModule = scripts.filter(({ isModule }) => isModule);
    if (scriptsModule.length === 1) {
      scriptTag += scriptsModule[0].outerHtml;
    } else {
      const contents = [];
      scriptsModule.forEach(({ src, innerHtml }) => {
        const hasInnerHtml = !!innerHtml.trim();
        if (src) {
          assert(!hasInnerHtml);
          contents.push(`import(${JSON.stringify(src)});`);
        } else if (hasInnerHtml) {
          innerHtml = innerHtml.split("\n").filter(Boolean).join("\n");
          contents.push(innerHtml);
        }
      });
      if (contents.length > 0) {
        const nonceAttr = inferNonceAttr(pageContext);
        scriptTag += `<script ${scriptCommonAttrs}${nonceAttr}>
${contents.join("\n")}
</script>`;
      }
    }
  }
  {
    const scriptsES5 = scripts.filter(({ isModule }) => !isModule);
    scriptsES5.forEach(({ outerHtml }) => {
      scriptTag += outerHtml;
    });
  }
  return scriptTag;
}
function parseScripts(htmlString) {
  const scripts = [];
  let match2;
  while (match2 = scriptRE.exec(htmlString)) {
    const [outerHtml, openTag, innerHtml] = match2;
    assert(outerHtml && openTag && innerHtml !== void 0);
    let isModule = false;
    {
      const typeMatch = openTag.match(typeRE);
      const type = typeMatch && (typeMatch[1] || typeMatch[2] || typeMatch[3]);
      isModule = type === "module";
    }
    let src = null;
    {
      const srcMatch = openTag.match(srcRE);
      src = srcMatch && (srcMatch[1] || srcMatch[2] || srcMatch[3]) || "";
    }
    scripts.push({ isModule, src, innerHtml, outerHtml });
  }
  return scripts;
}
var scriptRE, srcRE, typeRE;
var init_mergeScriptTags = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets/mergeScriptTags.js"() {
    init_csp();
    init_utils();
    init_inferHtmlTags();
    scriptRE = /(<script\b(?:\s[^>]*>|>))(.*?)<\/script>/gims;
    srcRE = /\bsrc\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s'">]+))/im;
    typeRE = /\btype\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s'">]+))/im;
  }
});

// node_modules/vike/dist/shared-server-client/htmlElementIds.js
var htmlElementId_pageContext, htmlElementId_globalContext;
var init_htmlElementIds = __esm({
  "node_modules/vike/dist/shared-server-client/htmlElementIds.js"() {
    htmlElementId_pageContext = "vike_pageContext";
    htmlElementId_globalContext = "vike_globalContext";
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/isFontFallback.js
function isFontFallback(asset, pageAssets) {
  if (asset.assetType !== "font") {
    return false;
  }
  const fontUrlBase = removeFileExtensionAndHash(asset.src);
  return pageAssets.some((assetOther) => {
    return assetOther.assetType === "font" && removeFileExtensionAndHash(assetOther.src) === fontUrlBase;
  });
}
function removeFileExtensionAndHash(assetUrl) {
  assert(!assetUrl.includes("\\"));
  assert(!assetUrl.endsWith(".js"));
  const paths = assetUrl.split("/");
  {
    const filename = paths[paths.length - 1];
    const filenameParts = filename.split(".");
    assert(filenameParts.length >= 2);
    const filenameBase = filenameParts.slice(0, filenameParts.length === 2 ? -1 : -2);
    assert(filenameBase.length >= 1);
    paths[paths.length - 1] = filenameBase.join(".");
  }
  return paths.join("/");
}
var init_isFontFallback = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/isFontFallback.js"() {
    init_assert();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets/getHtmlTags.js
async function getHtmlTags(pageContext, streamFromReactStreamingPackage, injectFilter, pageAssets, viteDevScript, isStream2) {
  assert([true, false].includes(pageContext._isHtmlOnly));
  const isHtmlOnly = pageContext._isHtmlOnly;
  const { _isProduction: isProduction } = pageContext._globalContext;
  const injectScriptsAt = getInjectScriptsAt(pageContext.pageId, pageContext._globalContext._pageConfigs);
  const injectFilterEntries = [];
  pageAssets.filter((asset) => {
    if (asset.isEntry && asset.assetType === "script") {
      return false;
    }
    return true;
  }).forEach((asset) => {
    const inject = (() => {
      if (!isProduction) {
        return "HTML_BEGIN";
      }
      if (asset.assetType === "style") {
        return "HTML_BEGIN";
      }
      if (asset.assetType === "font") {
        return !isFontFallback(asset, injectFilterEntries) ? "HTML_BEGIN" : false;
      }
      if (asset.assetType === "script") {
        if (isHtmlOnly)
          return false;
        return "HTML_END";
      }
      return false;
    })();
    const entry = {
      ...asset,
      inject,
      // @ts-ignore
      [stamp3]: true
    };
    injectFilterEntries.push(entry);
  });
  assertInjectFilterEntries(injectFilterEntries);
  if (injectFilter && isProduction) {
    Object.seal(injectFilterEntries);
    Object.values(injectFilterEntries).forEach((entry) => freezePartial(entry, { inject: (val) => val === false || val === "HTML_BEGIN" || val === "HTML_END" }));
    const res = injectFilter(injectFilterEntries);
    assertUsage(res === void 0, `injectFilter() should return ${picocolors_default.cyan("undefined")}, see https://vike.dev/injectFilter`);
    assertInjectFilterUsage(injectFilterEntries);
  }
  const htmlTags = [];
  injectFilterEntries.filter((asset) => asset.assetType !== "script" && asset.inject).forEach((asset) => {
    if (!asset.inject)
      return;
    const htmlTag = asset.isEntry ? inferAssetTag(asset, pageContext) : inferPreloadTag(asset);
    htmlTags.push({ htmlTag, position: asset.inject });
  });
  const positionJavaScriptDefault = "HTML_END";
  const positionJavaScriptEntry = (() => {
    if (injectScriptsAt !== null) {
      if (pageContext._pageContextPromise) {
        assertWarning2(injectScriptsAt === "HTML_END" || !isStream2, `You're setting injectScriptsAt to ${picocolors_default.code(JSON.stringify(injectScriptsAt))} while using HTML streaming with a pageContext promise (https://vike.dev/streaming#initial-data-after-stream-end) which is contradictory: the pageContext promise is skipped.`, { onlyOnce: true });
      }
      if (injectScriptsAt === "HTML_STREAM" && !isStream2) {
        return positionJavaScriptDefault;
      }
      return injectScriptsAt;
    }
    if (pageContext._pageContextPromise) {
      return positionJavaScriptDefault;
    }
    if (streamFromReactStreamingPackage && !streamFromReactStreamingPackage.hasStreamEnded()) {
      return "HTML_STREAM";
    }
    return positionJavaScriptDefault;
  })();
  if (pageContext._pageContextPromise && streamFromReactStreamingPackage) {
    assertWarning2(false, "We recommend against using HTML streaming and a pageContext promise (https://vike.dev/streaming#initial-data-after-stream-end) at the same time, because progressive hydration (https://vike.dev/streaming#progressive-rendering) won't work.", { onlyOnce: true });
  }
  if (!isHtmlOnly) {
    htmlTags.push({
      htmlTag: () => (
        // Needs to be called after resolvePageContextPromise()
        getPageContextJsonScriptTag(pageContext)
      ),
      position: positionJavaScriptEntry
    });
    htmlTags.push({
      htmlTag: () => (
        // Needs to be called after resolvePageContextPromise()
        getGlobalContextJsonScriptTag(pageContext)
      ),
      position: positionJavaScriptEntry
    });
  }
  const scriptEntry = mergeScriptEntries(pageAssets, viteDevScript, pageContext);
  if (scriptEntry) {
    htmlTags.push({
      htmlTag: scriptEntry,
      position: positionJavaScriptEntry
    });
  }
  injectFilterEntries.filter((asset) => asset.assetType === "script").forEach((asset) => {
    assert(!asset.isEntry);
    const htmlTag = inferPreloadTag(asset);
    if (!asset.inject)
      return;
    const position = asset.inject === "HTML_END" ? positionJavaScriptEntry : asset.inject;
    htmlTags.push({ htmlTag, position });
  });
  return htmlTags;
}
function mergeScriptEntries(pageAssets, viteDevScript, pageContext) {
  const scriptEntries = pageAssets.filter((pageAsset) => pageAsset.isEntry && pageAsset.assetType === "script");
  let scriptEntry = `${viteDevScript}${scriptEntries.map((asset) => inferAssetTag(asset, pageContext)).join("")}`;
  scriptEntry = mergeScriptTags(scriptEntry, pageContext);
  return scriptEntry;
}
function getPageContextJsonScriptTag(pageContext) {
  const pageContextClientSerialized = sanitizeJson(getPageContextClientSerialized(pageContext, true));
  const nonceAttr = inferNonceAttr(pageContext);
  const htmlTag = `<script id="${htmlElementId_pageContext}" type="application/json"${nonceAttr}>${pageContextClientSerialized}</script>`;
  pageContext._pageContextHtmlTag = htmlTag;
  return htmlTag;
}
function getGlobalContextJsonScriptTag(pageContext) {
  const globalContextClientSerialized = sanitizeJson(getGlobalContextClientSerialized(pageContext, true));
  const nonceAttr = inferNonceAttr(pageContext);
  const htmlTag = `<script id="${htmlElementId_globalContext}" type="application/json"${nonceAttr}>${globalContextClientSerialized}</script>`;
  return htmlTag;
}
function assertInjectFilterEntries(injectFilterEntries) {
  try {
    checkForWrongUsage(injectFilterEntries);
  } catch (err2) {
    if (err2?.message.includes("[Wrong Usage]")) {
      assert(false);
    }
    throw err2;
  }
}
function assertInjectFilterUsage(injectFilterEntries) {
  checkForWrongUsage(injectFilterEntries);
  checkForWarnings(injectFilterEntries);
}
function checkForWrongUsage(injectFilterEntries) {
  injectFilterEntries.forEach((entry, i3) => {
    assertUsage(isObject(entry), `[injectFilter()] Entry ${i3} isn't an object`);
    assertUsage(typeof entry.src === "string", `[injectFilter()] Entry ${i3} is missing property ${picocolors_default.cyan("src")}`);
    assertUsage(entry[stamp3] === true, `[injectFilter()] Entry ${i3} (${entry.src}) isn't the original object, see https://vike.dev/injectFilter`);
    assert([false, "HTML_BEGIN", "HTML_END"].includes(entry.inject));
    assert(entry.assetType === null || typeof entry.assetType === "string");
    assert(entry.mediaType === null || typeof entry.mediaType === "string");
    assert(typeof entry.isEntry === "boolean");
    assert(Object.keys(entry).length === 6);
  });
}
function checkForWarnings(injectFilterEntries) {
  injectFilterEntries.forEach((a2) => {
    if (a2.assetType === "style" && a2.isEntry) {
      assertWarning2(a2.inject, `[injectFilter()] We recommend against not injecting ${a2.src}`, {
        onlyOnce: true
      });
    }
    if (a2.assetType === "script") {
      assertWarning2(a2.inject, `[injectFilter()] We recommend against not preloading JavaScript (${a2.src})`, {
        onlyOnce: true
      });
    }
  });
}
function getInjectScriptsAt(pageId, pageConfigs) {
  if (pageConfigs.length === 0)
    return null;
  const pageConfig = getPageConfig(pageId, pageConfigs);
  const configValue = getConfigValueRuntime(pageConfig, "injectScriptsAt");
  if (!configValue)
    return null;
  const injectScriptsAt = configValue.value;
  assert(configValue.definedAtData);
  const configDefinedAt = getConfigDefinedAt("Config", "injectScriptsAt", configValue.definedAtData);
  assertUsage(injectScriptsAt === null || injectScriptsAt === "HTML_BEGIN" || injectScriptsAt === "HTML_END" || injectScriptsAt === "HTML_STREAM", `${configDefinedAt} has an invalid value`);
  return injectScriptsAt;
}
var stamp3;
var init_getHtmlTags = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets/getHtmlTags.js"() {
    init_utils();
    init_serializeContext();
    init_sanitizeJson();
    init_inferHtmlTags();
    init_mergeScriptTags();
    init_helpers();
    init_getConfigValueRuntime();
    init_picocolors();
    init_getConfigDefinedAt();
    init_htmlElementIds();
    init_isFontFallback();
    init_csp();
    stamp3 = "__injectFilterEntry";
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets/getViteDevScript.js
async function getViteDevScript(pageContext) {
  const globalContext2 = pageContext._globalContext;
  if (globalContext2._isProduction) {
    return "";
  }
  const { _viteDevServer: viteDevServer } = globalContext2;
  const fakeHtmlBegin = "<html> <head>";
  const fakeHtmlEnd = "</head><body></body></html>";
  let fakeHtml = fakeHtmlBegin + fakeHtmlEnd;
  fakeHtml = viteDevServer ? await viteDevServer.transformIndexHtml("/", fakeHtml) : await getViteRPC().transformIndexHtmlRPC(fakeHtml);
  assertUsage(!fakeHtml.includes("vite-plugin-pwa"), `The HTML transformer of ${picocolors_default.cyan("vite-plugin-pwa")} cannot be applied, see workaround at https://github.com/vikejs/vike/issues/388#issuecomment-1199280084`);
  assertUsage(!fakeHtml.startsWith(fakeHtmlBegin.replace(" ", "")), `Vite plugins that minify the HTML cannot be applied, see https://github.com/vikejs/vike/issues/224`);
  assertUsage(fakeHtml.startsWith(fakeHtmlBegin) && fakeHtml.endsWith(fakeHtmlEnd), `You are using a Vite Plugin that transforms the HTML in a way that conflicts with Vike. ${reachOutCTA}`);
  const viteInjection = fakeHtml.slice(fakeHtmlBegin.length, -1 * fakeHtmlEnd.length);
  assert(viteInjection.includes("script"));
  assertWarning2(!viteInjection.includes("import("), `Unexpected Vite injected HMR code. ${reachOutCTA}`, {
    onlyOnce: true
  });
  const viteDevScript = viteInjection;
  return viteDevScript;
}
var reachOutCTA;
var init_getViteDevScript = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets/getViteDevScript.js"() {
    init_utils();
    init_picocolors();
    reachOutCTA = "Create a new GitHub issue to discuss a solution.";
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets.js
async function injectHtmlTagsToString(htmlParts, pageContext, injectFilter) {
  const pageAssets = await pageContext.__getPageAssets();
  const viteDevScript = await getViteDevScript(pageContext);
  const htmlTags = await getHtmlTags(pageContext, null, injectFilter, pageAssets, viteDevScript, false);
  let htmlString = htmlPartsToString(htmlParts, pageAssets);
  htmlString = injectToHtmlBegin(htmlString, htmlTags);
  htmlString = injectToHtmlEnd(htmlString, htmlTags);
  assert(htmlTags.filter((snippet) => snippet.position === "HTML_STREAM").length === 0);
  return htmlString;
}
function injectHtmlTagsToStream(pageContext, streamFromReactStreamingPackage, injectFilter) {
  let htmlTags;
  return {
    injectAtStreamBegin,
    injectAtStreamAfterFirstChunk,
    injectAtStreamEnd
  };
  async function injectAtStreamBegin(htmlPartsBegin) {
    const pageAssets = await pageContext.__getPageAssets();
    const viteDevScript = await getViteDevScript(pageContext);
    htmlTags = await getHtmlTags(pageContext, streamFromReactStreamingPackage, injectFilter, pageAssets, viteDevScript, true);
    let htmlBegin = htmlPartsToString(htmlPartsBegin, pageAssets);
    htmlBegin = injectToHtmlBegin(htmlBegin, htmlTags);
    if (streamFromReactStreamingPackage) {
      injectHtmlTagsUsingStream(htmlTags, streamFromReactStreamingPackage);
    }
    return htmlBegin;
  }
  function injectAtStreamAfterFirstChunk() {
    if (streamFromReactStreamingPackage)
      return null;
    assert(htmlTags);
    const tags = htmlTags.filter((h2) => h2.position === "HTML_STREAM");
    if (tags.length === 0)
      return null;
    const htmlFragment = joinHtmlTags(tags);
    return htmlFragment;
  }
  async function injectAtStreamEnd(htmlPartsEnd) {
    assert(htmlTags);
    await resolvePageContextPromise(pageContext);
    const pageAssets = await pageContext.__getPageAssets();
    let htmlEnd = htmlPartsToString(htmlPartsEnd, pageAssets);
    htmlEnd = injectToHtmlEnd(htmlEnd, htmlTags);
    return htmlEnd;
  }
}
function injectToHtmlBegin(htmlBegin, htmlTags) {
  htmlBegin = createHtmlHeadIfMissing(htmlBegin);
  htmlBegin = injectHtmlTags(htmlBegin, htmlTags, "HTML_BEGIN");
  return htmlBegin;
}
function injectToHtmlEnd(htmlEnd, htmlTags) {
  htmlEnd = injectHtmlTags(htmlEnd, htmlTags, "HTML_END");
  return htmlEnd;
}
async function resolvePageContextPromise(pageContext) {
  const pageContextPromise = pageContext._pageContextPromise;
  if (!pageContextPromise) {
    return;
  }
  let pageContextProvidedByUser;
  if (isCallable(pageContextPromise)) {
    pageContextProvidedByUser = await pageContextPromise();
  } else if (isPromise(pageContextPromise)) {
    pageContextProvidedByUser = await pageContextPromise;
  } else {
    assert(false);
  }
  assertPageContextProvidedByUser(pageContextProvidedByUser, pageContext._renderHook);
  Object.assign(pageContext, pageContextProvidedByUser);
}
function htmlPartsToString(htmlParts, pageAssets) {
  let htmlString = "";
  htmlParts.forEach((p4) => {
    htmlString += typeof p4 === "string" ? p4 : p4(pageAssets);
  });
  return htmlString;
}
var init_injectAssets = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets.js"() {
    init_utils();
    init_assertPageContextProvidedByUser();
    init_injectHtmlTags();
    init_getHtmlTags();
    init_getViteDevScript();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/html/stream/react-streaming.js
function streamFromReactStreamingPackageToString(stream) {
  if (stream.pipe) {
    return streamPipeNodeToString(stream.pipe);
  }
  if (stream.readable) {
    return streamReadableWebToString(stream.readable);
  }
  assert(false);
}
function isStreamFromReactStreamingPackage(thing) {
  if (hasProp(thing, "injectToStream", "function")) {
    assertUsage(hasProp(thing, "hasStreamEnded", "function"), isVikeReactApp() ? (
      //
      "Update vike-react to its latest version"
    ) : "Update react-streaming to its latest version");
    return true;
  }
  return false;
}
function getStreamOfReactStreamingPackage(stream) {
  if (stream.pipe) {
    return { __streamPipeNode: stream.pipe };
  }
  if (stream.readable) {
    return stream.readable;
  }
  assert(false);
}
var init_react_streaming = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/html/stream/react-streaming.js"() {
    init_utils();
    init_stream();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/html/stream.js
function isStreamReadableWeb(thing) {
  return typeof ReadableStream !== "undefined" && thing instanceof ReadableStream;
}
function isStreamWritableWeb(thing) {
  return typeof WritableStream !== "undefined" && thing instanceof WritableStream;
}
function isStreamReadableNode(thing) {
  if (isStreamReadableWeb(thing)) {
    return false;
  }
  return hasProp(thing, "read", "function");
}
function isStreamWritableNode(thing) {
  if (isStreamWritableWeb(thing)) {
    return false;
  }
  return hasProp(thing, "write", "function");
}
async function streamReadableNodeToString(readableNode) {
  const chunks = [];
  return new Promise((resolve3, reject) => {
    readableNode.on("data", (chunk2) => chunks.push(Buffer.from(chunk2)));
    readableNode.on("error", (err2) => reject(err2));
    readableNode.on("end", () => resolve3(Buffer.concat(chunks).toString("utf8")));
  });
}
async function streamReadableWebToString(readableWeb) {
  const reader = readableWeb.getReader();
  const { decode: decode2, getClosingChunk } = decodeChunks();
  let str = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done)
      break;
    str += decode2(value);
  }
  str += getClosingChunk();
  return str;
}
async function stringToStreamReadableNode(str) {
  const { Readable: Readable4 } = await loadStreamNodeModule();
  return Readable4.from(str);
}
function stringToStreamReadableWeb(str) {
  assertReadableStreamConstructor();
  const readableStream = new ReadableStream({
    start(controller) {
      controller.enqueue(encodeForWebStream(str));
      controller.close();
    }
  });
  return readableStream;
}
function stringToStreamPipeNode(str) {
  return (writable) => {
    writable.write(str);
    writable.end();
  };
}
function stringToStreamPipeWeb(str) {
  return (writable) => {
    const writer = writable.getWriter();
    writer.write(encodeForWebStream(str));
    writer.close();
  };
}
async function streamPipeNodeToString(streamPipeNode) {
  let str = "";
  let resolve3;
  let reject;
  const promise = new Promise((resolve_, reject_) => {
    resolve3 = () => resolve_(str);
    reject = reject_;
  });
  const { Writable } = await loadStreamNodeModule();
  const writable = new Writable({
    write(chunk2, _encoding, callback) {
      const s3 = chunk2.toString();
      assert(typeof s3 === "string");
      str += s3;
      callback();
    },
    final(callback) {
      resolve3();
      callback();
    },
    destroy(err2) {
      if (err2) {
        reject(err2);
      } else {
        resolve3();
      }
    }
  });
  streamPipeNode(writable);
  return promise;
}
function streamPipeWebToString(streamPipeWeb) {
  const { decode: decode2, getClosingChunk } = decodeChunks();
  let str = "";
  let resolve3;
  const promise = new Promise((r) => resolve3 = r);
  const writable = new WritableStream({
    write(chunk2) {
      str += decode2(chunk2);
    },
    close() {
      str += getClosingChunk();
      resolve3(str);
    }
  });
  streamPipeWeb(writable);
  return promise;
}
async function getStreamReadableNode(htmlRender) {
  if (typeof htmlRender === "string") {
    return stringToStreamReadableNode(htmlRender);
  }
  if (isStreamReadableNode(htmlRender)) {
    return htmlRender;
  }
  return null;
}
function getStreamReadableWeb(htmlRender) {
  if (typeof htmlRender === "string") {
    return stringToStreamReadableWeb(htmlRender);
  }
  if (isStreamReadableWeb(htmlRender)) {
    return htmlRender;
  }
  if (isStreamPipeWeb(htmlRender)) {
    const streamPipeWeb = getStreamPipeWeb(htmlRender);
    assert(streamPipeWeb);
    const { readable, writable } = new TransformStream();
    streamPipeWeb(writable);
    return readable;
  }
  return null;
}
function pipeToStreamWritableWeb(htmlRender, writable) {
  if (typeof htmlRender === "string") {
    const streamPipeWeb = stringToStreamPipeWeb(htmlRender);
    streamPipeWeb(writable);
    return true;
  }
  if (isStreamReadableWeb(htmlRender)) {
    htmlRender.pipeTo(writable);
    return true;
  }
  if (isStreamPipeWeb(htmlRender)) {
    const streamPipeWeb = getStreamPipeWeb(htmlRender);
    assert(streamPipeWeb);
    streamPipeWeb(writable);
    return true;
  }
  if (isStreamReadableNode(htmlRender) || isStreamPipeNode(htmlRender)) {
    return false;
  }
  checkType(htmlRender);
  assert(false);
}
function pipeToStreamWritableNode(htmlRender, writable) {
  if (typeof htmlRender === "string") {
    const streamPipeNode = stringToStreamPipeNode(htmlRender);
    streamPipeNode(writable);
    return true;
  }
  if (isStreamReadableNode(htmlRender)) {
    htmlRender.pipe(writable);
    return true;
  }
  if (isStreamPipeNode(htmlRender)) {
    const streamPipeNode = getStreamPipeNode(htmlRender);
    assert(streamPipeNode);
    streamPipeNode(writable);
    return true;
  }
  if (isStreamReadableWeb(htmlRender) || isStreamPipeWeb(htmlRender)) {
    return false;
  }
  checkType(htmlRender);
  assert(false);
}
async function processStream(streamOriginal, { injectStringAtBegin, injectStringAfterFirstChunk, injectStringAtEnd, onErrorWhileStreaming, enableEagerStreaming }) {
  const buffer = [];
  let streamOriginalHasStartedEmitting = false;
  let streamOriginalEnded = false;
  let streamClosed = false;
  let onEndWasCalled = false;
  let isReadyToWrite = false;
  let wrapperCreated = false;
  let shouldFlushStream = false;
  let resolve3;
  let reject;
  let promiseHasResolved = false;
  let injectStringAfterFirstChunk_done = false;
  const streamWrapperPromise = new Promise((resolve_, reject_) => {
    resolve3 = (streamWrapper2) => {
      promiseHasResolved = true;
      resolve_(streamWrapper2);
    };
    reject = (err2) => {
      promiseHasResolved = true;
      reject_(err2);
    };
  });
  let resolveReadyToWrite;
  const promiseReadyToWrite = new Promise((r) => resolveReadyToWrite = r);
  if (injectStringAtBegin) {
    const injectedChunk = await injectStringAtBegin();
    writeStream(injectedChunk);
    flushStream();
  }
  const onStreamDataOrEnd = (cb) => {
    assert(streamOriginalEnded === false);
    streamOriginalHasStartedEmitting = true;
    cb();
    if (wrapperCreated)
      resolvePromise();
  };
  const { streamWrapper, streamWrapperOperations } = await createStreamWrapper({
    streamOriginal,
    onReadyToWrite() {
      debug5("stream begin");
      isReadyToWrite = true;
      flushBuffer();
      resolveReadyToWrite();
    },
    onError(err2) {
      if (!promiseHasResolved) {
        reject(err2);
      } else {
        onErrorWhileStreaming(err2);
      }
    },
    onData(chunk2) {
      onStreamDataOrEnd(() => {
        writeStream(chunk2);
        if (injectStringAfterFirstChunk && !injectStringAfterFirstChunk_done) {
          const injectedChunk = injectStringAfterFirstChunk();
          if (injectedChunk !== null)
            writeStream(injectedChunk);
          injectStringAfterFirstChunk_done = true;
        }
      });
    },
    async onEnd() {
      try {
        assert(!onEndWasCalled);
        onEndWasCalled = true;
        debug5("stream end");
        onStreamDataOrEnd(() => {
          streamOriginalEnded = true;
        });
        if (injectStringAtEnd) {
          const injectedChunk = await injectStringAtEnd();
          writeStream(injectedChunk);
        }
        await promiseReadyToWrite;
        assert(isReady());
        flushBuffer();
        streamClosed = true;
        debug5("stream ended");
      } catch (err2) {
        if (!isVikeBug(err2)) {
          console.error(err2);
          assert(false);
        }
        throw err2;
      }
    },
    onFlush() {
      flushStream();
    }
  });
  wrapperCreated = true;
  flushBuffer();
  if (!delayStreamStart())
    resolvePromise();
  return streamWrapperPromise;
  function writeStream(chunk2) {
    buffer.push(chunk2);
    flushBuffer();
  }
  function flushBuffer() {
    if (!isReady())
      return;
    assert(!streamClosed);
    buffer.forEach((chunk2) => {
      streamWrapperOperations.writeChunk(chunk2);
    });
    buffer.length = 0;
    if (shouldFlushStream)
      flushStream();
  }
  function resolvePromise() {
    assert(!delayStreamStart());
    assert(wrapperCreated);
    debug5("stream promise resolved");
    resolve3(streamWrapper);
  }
  function flushStream() {
    if (!isReady()) {
      shouldFlushStream = true;
      return;
    }
    if (streamWrapperOperations.flushStream === null)
      return;
    streamWrapperOperations.flushStream();
    shouldFlushStream = false;
    debug5("stream flushed");
  }
  function isReady() {
    return isReadyToWrite && // We can't use streamWrapperOperations.writeChunk() if it isn't defined yet
    wrapperCreated && // See comment below
    !delayStreamStart();
  }
  function delayStreamStart() {
    return !enableEagerStreaming && !streamOriginalHasStartedEmitting;
  }
}
async function createStreamWrapper({ streamOriginal, onError: onError2, onData, onEnd, onFlush, onReadyToWrite }) {
  if (isStreamFromReactStreamingPackage(streamOriginal)) {
    debug5(`onRenderHtml() hook returned ${picocolors_default.cyan("react-streaming")} result`);
    const stream = getStreamOfReactStreamingPackage(streamOriginal);
    streamOriginal = stream;
  }
  if (isStreamPipeNode(streamOriginal)) {
    debug5("onRenderHtml() hook returned Node.js Stream Pipe");
    let writableOriginal = null;
    const pipeProxy = (writable_) => {
      writableOriginal = writable_;
      debug5("original Node.js Writable received");
      onReadyToWrite();
      if (hasEnded) {
        writableOriginal.end();
      }
    };
    stampPipe(pipeProxy, "node-stream");
    const writeChunk = (chunk2) => {
      assert(writableOriginal);
      writableOriginal.write(chunk2);
      debugWithChunk("data written (Node.js Writable)", chunk2);
    };
    const flushStream = () => {
      assert(writableOriginal);
      if (typeof writableOriginal.flush === "function") {
        writableOriginal.flush();
        debug5("stream flush() performed (Node.js Writable)");
      }
    };
    let hasEnded = false;
    const endStream = () => {
      hasEnded = true;
      if (writableOriginal) {
        writableOriginal.end();
      }
    };
    const { Writable } = await loadStreamNodeModule();
    const writableProxy = new Writable({
      async write(chunk2, _encoding, callback) {
        onData(chunk2);
        callback();
      },
      async destroy(err2, callback) {
        if (err2) {
          onError2(err2);
        } else {
          await onEnd();
        }
        callback(err2);
        endStream();
      }
    });
    objectAssign(writableProxy, {
      flush: () => {
        onFlush();
      }
    });
    assert(typeof writableProxy.flush === "function");
    const pipeOriginal = getStreamPipeNode(streamOriginal);
    pipeOriginal(writableProxy);
    return { streamWrapper: pipeProxy, streamWrapperOperations: { writeChunk, flushStream } };
  }
  if (isStreamPipeWeb(streamOriginal)) {
    debug5("onRenderHtml() hook returned Web Stream Pipe");
    let writerOriginal = null;
    const pipeProxy = (writableOriginal) => {
      writerOriginal = writableOriginal.getWriter();
      debug5("original Web Writable received");
      (async () => {
        try {
          await writerOriginal.ready;
        } catch (e) {
        }
        onReadyToWrite();
        if (hasEnded) {
          writerOriginal.close();
        }
      })();
    };
    stampPipe(pipeProxy, "web-stream");
    const writeChunk = (chunk2) => {
      assert(writerOriginal);
      writerOriginal.write(encodeForWebStream(chunk2));
      debugWithChunk("data written (Web Writable)", chunk2);
    };
    const flushStream = null;
    let hasEnded = false;
    const endStream = () => {
      hasEnded = true;
      if (writerOriginal) {
        writerOriginal.close();
      }
    };
    let writableProxy;
    if (typeof ReadableStream !== "function") {
      writableProxy = new WritableStream({
        write(chunk2) {
          onData(chunk2);
        },
        async close() {
          await onEnd();
          endStream();
        },
        abort(err2) {
          onError2(err2);
          endStream();
        }
      });
    } else {
      const { readable, writable } = new TransformStream();
      writableProxy = writable;
      handleReadableWeb(readable, {
        onData,
        onError(err2) {
          onError2(err2);
          endStream();
        },
        async onEnd() {
          await onEnd();
          endStream();
        }
      });
    }
    const pipeOriginal = getStreamPipeWeb(streamOriginal);
    pipeOriginal(writableProxy);
    return { streamWrapper: pipeProxy, streamWrapperOperations: { writeChunk, flushStream } };
  }
  if (isStreamReadableWeb(streamOriginal)) {
    debug5("onRenderHtml() hook returned Web Readable");
    const readableOriginal = streamOriginal;
    let isClosed = false;
    let isCancel = false;
    const closeStream = async () => {
      if (isClosed)
        return;
      await onEnd(isCancel);
      isClosed = true;
      controllerProxy.close();
    };
    let controllerProxy;
    assertReadableStreamConstructor();
    const readableProxy = new ReadableStream({
      start(controller) {
        controllerProxy = controller;
        onReadyToWrite();
        handleReadableWeb(readableOriginal, {
          onData,
          onError(err2) {
            onError2(err2);
            controllerProxy.close();
          },
          async onEnd() {
            await closeStream();
          }
        });
      },
      async cancel(...args) {
        isCancel = true;
        await readableOriginal.cancel(...args);
        await closeStream();
      }
    });
    const writeChunk = (chunk2) => {
      if (
        // If readableOriginal doesn't implement readableOriginal.cancel() then it may still emit data after we close the stream. We therefore need to check whether the steam is closed.
        !isClosed
      ) {
        controllerProxy.enqueue(encodeForWebStream(chunk2));
        debugWithChunk("data written (Web Readable)", chunk2);
      } else {
        debugWithChunk("data emitted but not written (Web Readable)", chunk2);
      }
    };
    const flushStream = null;
    return {
      streamWrapper: readableProxy,
      streamWrapperOperations: { writeChunk, flushStream }
    };
  }
  if (isStreamReadableNode(streamOriginal)) {
    debug5("onRenderHtml() hook returned Node.js Readable");
    const readableOriginal = streamOriginal;
    const { Readable: Readable4 } = await loadStreamNodeModule();
    if (readableOriginal._read === Readable4.prototype._read) {
      readableOriginal._read = function() {
      };
    }
    const writeChunk = (chunk2) => {
      readableProxy.push(chunk2);
      debugWithChunk("data written (Node.js Readable)", chunk2);
    };
    const flushStream = null;
    const closeProxy = () => {
      readableProxy.push(null);
    };
    const readableProxy = new Readable4({ read() {
    } });
    onReadyToWrite();
    readableOriginal.on("data", (chunk2) => {
      onData(chunk2);
    });
    readableOriginal.on("error", (err2) => {
      onError2(err2);
      closeProxy();
    });
    readableOriginal.on("end", async () => {
      await onEnd();
      closeProxy();
    });
    return {
      streamWrapper: readableProxy,
      streamWrapperOperations: { writeChunk, flushStream }
    };
  }
  assert(false);
}
async function handleReadableWeb(readable, { onData, onError: onError2, onEnd }) {
  const reader = readable.getReader();
  while (true) {
    let result;
    try {
      result = await reader.read();
    } catch (err2) {
      onError2(err2);
      return;
    }
    const { value, done } = result;
    if (done) {
      break;
    }
    onData(value);
  }
  await onEnd();
}
function isStream(something) {
  if (isStreamReadableWeb(something) || isStreamReadableNode(something) || isStreamPipeNode(something) || isStreamPipeWeb(something) || isStreamFromReactStreamingPackage(something)) {
    checkType(something);
    return true;
  }
  return false;
}
function getStreamPipeWeb(thing) {
  if (!isStreamPipeWeb(thing)) {
    return null;
  }
  if (isObject(thing)) {
    assert(__streamPipeWeb && thing);
    return thing[__streamPipeWeb];
  } else {
    assert(isCallable(thing) && "isWebStreamPipe" in thing);
    return thing;
  }
}
function isStreamPipeWeb(thing) {
  if (isObject(thing) && __streamPipeWeb in thing) {
    return true;
  }
  if (isCallable(thing) && "isWebStreamPipe" in thing) {
    return true;
  }
  return false;
}
function getStreamPipeNode(thing) {
  if (!isStreamPipeNode(thing)) {
    return null;
  }
  if (isObject(thing)) {
    assert(__streamPipeNode in thing);
    return thing[__streamPipeNode];
  } else {
    assert(isCallable(thing) && "isNodeStreamPipe" in thing);
    return thing;
  }
}
function isStreamPipeNode(thing) {
  if (isObject(thing) && __streamPipeNode in thing) {
    return true;
  }
  if (isCallable(thing) && "isNodeStreamPipe" in thing) {
    return true;
  }
  return false;
}
function stampPipe(pipe4, pipeType) {
  assertUsage(pipeType, `stampPipe(pipe, pipeType): argument ${picocolors_default.cyan("pipeType")} is missing.)`, {
    showStackTrace: true
  });
  assertUsage(["web-stream", "node-stream"].includes(pipeType), `stampPipe(pipe, pipeType): argument ${picocolors_default.cyan("pipeType")} should be either ${picocolors_default.cyan("'web-stream'")} or ${picocolors_default.cyan("'node-stream'")}.`, { showStackTrace: true });
  if (pipeType === "node-stream") {
    Object.assign(pipe4, { isNodeStreamPipe: true });
  } else {
    Object.assign(pipe4, { isWebStreamPipe: true });
  }
}
async function streamToString(stream) {
  if (isStreamReadableWeb(stream)) {
    return await streamReadableWebToString(stream);
  }
  if (isStreamReadableNode(stream)) {
    return await streamReadableNodeToString(stream);
  }
  if (isStreamPipeNode(stream)) {
    return await streamPipeNodeToString(getStreamPipeNode(stream));
  }
  if (isStreamPipeWeb(stream)) {
    return await streamPipeWebToString(getStreamPipeWeb(stream));
  }
  if (isStreamFromReactStreamingPackage(stream)) {
    return await streamFromReactStreamingPackageToString(stream);
  }
  assert(false);
}
function assertReadableStreamConstructor() {
  assertUsage(
    typeof ReadableStream === "function",
    // Error message copied from vue's renderToWebStream() implementation
    "ReadableStream constructor isn't available in the global scope. If the target environment does support web streams, consider using pipeToWebWritable() with an existing WritableStream instance instead."
  );
}
function encodeForWebStream(thing) {
  if (!encoder) {
    encoder = new TextEncoder();
  }
  if (typeof thing === "string") {
    return encoder.encode(thing);
  }
  return thing;
}
async function loadStreamNodeModule() {
  const streamModule = (await import_("stream")).default;
  const { Readable: Readable4, Writable } = streamModule;
  return { Readable: Readable4, Writable };
}
function getStreamName(kind, type) {
  let typeName = capitalizeFirstLetter(type);
  if (typeName === "Node") {
    typeName = "Node.js";
  }
  const kindName = capitalizeFirstLetter(kind);
  if (kind !== "pipe") {
    return `a ${kindName} ${typeName} Stream`;
  }
  if (kind === "pipe") {
    return `a ${typeName} Stream Pipe`;
  }
  assert(false);
}
function inferStreamName(stream) {
  if (isStreamReadableWeb(stream)) {
    return getStreamName("readable", "web");
  }
  if (isStreamReadableNode(stream)) {
    return getStreamName("readable", "node");
  }
  if (isStreamPipeNode(stream)) {
    return getStreamName("pipe", "node");
  }
  if (isStreamPipeWeb(stream)) {
    return getStreamName("pipe", "web");
  }
  assert(false);
}
function decodeChunks() {
  const decoder = new TextDecoder();
  const decode2 = (chunk2) => {
    if (typeof chunk2 === "string") {
      return chunk2;
    } else if (chunk2 instanceof Uint8Array) {
      return decoder.decode(chunk2, { stream: true });
    } else {
      assert(false);
    }
  };
  const getClosingChunk = () => {
    return decoder.decode();
  };
  return { decode: decode2, getClosingChunk };
}
function debugWithChunk(msg, chunk2) {
  if (!debug5.isActivated)
    return;
  let chunkStr;
  try {
    chunkStr = new TextDecoder().decode(chunk2);
  } catch (err2) {
    chunkStr = String(chunk2);
  }
  debug5(msg, chunkStr);
}
var debug5, __streamPipeWeb, __streamPipeNode, encoder;
var init_stream = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/html/stream.js"() {
    init_utils();
    init_react_streaming();
    init_esm();
    init_picocolors();
    debug5 = createDebug("vike:stream");
    __streamPipeWeb = "__streamPipeWeb";
    __streamPipeNode = "__streamPipeNode";
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/html/renderHtml.js
function isDocumentHtml(something) {
  if (isTemplateWrapped(something) || isEscapedString(something) || isStream(something)) {
    checkType(something);
    return true;
  }
  return false;
}
async function renderDocumentHtml(documentHtml, pageContext, onErrorWhileStreaming, injectFilter) {
  if (isEscapedString(documentHtml)) {
    objectAssign(pageContext, { _isStream: false });
    let htmlString = getEscapedString(documentHtml);
    htmlString = await injectHtmlTagsToString([htmlString], pageContext, injectFilter);
    return htmlString;
  }
  if (isStream(documentHtml)) {
    objectAssign(pageContext, { _isStream: true });
    const stream = documentHtml;
    const streamWrapper = await renderHtmlStream(stream, null, pageContext, onErrorWhileStreaming, injectFilter);
    return streamWrapper;
  }
  if (isTemplateWrapped(documentHtml)) {
    const templateContent = documentHtml._template;
    const render = renderTemplate(templateContent, pageContext);
    if (!("htmlStream" in render)) {
      objectAssign(pageContext, { _isStream: false });
      const { htmlPartsAll } = render;
      const htmlString = await injectHtmlTagsToString(htmlPartsAll, pageContext, injectFilter);
      return htmlString;
    } else {
      objectAssign(pageContext, { _isStream: true });
      const { htmlStream } = render;
      const streamWrapper = await renderHtmlStream(htmlStream, {
        htmlPartsBegin: render.htmlPartsBegin,
        htmlPartsEnd: render.htmlPartsEnd
      }, pageContext, onErrorWhileStreaming, injectFilter);
      return streamWrapper;
    }
  }
  checkType(documentHtml);
  assert(false);
}
async function renderHtmlStream(streamOriginal, injectString, pageContext, onErrorWhileStreaming, injectFilter) {
  const processStreamOptions = {
    onErrorWhileStreaming,
    enableEagerStreaming: pageContext.enableEagerStreaming
  };
  if (injectString) {
    let streamFromReactStreamingPackage = null;
    if (isStreamFromReactStreamingPackage(streamOriginal) && !streamOriginal.disabled) {
      streamFromReactStreamingPackage = streamOriginal;
    }
    const { injectAtStreamBegin, injectAtStreamAfterFirstChunk, injectAtStreamEnd } = injectHtmlTagsToStream(pageContext, streamFromReactStreamingPackage, injectFilter);
    processStreamOptions.injectStringAtBegin = async () => {
      return await injectAtStreamBegin(injectString.htmlPartsBegin);
    };
    processStreamOptions.injectStringAtEnd = async () => {
      return await injectAtStreamEnd(injectString.htmlPartsEnd);
    };
    processStreamOptions.injectStringAfterFirstChunk = () => {
      return injectAtStreamAfterFirstChunk();
    };
  }
  let makeClosableAgain = () => {
  };
  if (isStreamFromReactStreamingPackage(streamOriginal)) {
    makeClosableAgain = streamOriginal.doNotClose();
  }
  try {
    const streamWrapper = await processStream(streamOriginal, processStreamOptions);
    return streamWrapper;
  } finally {
    makeClosableAgain();
  }
}
function isTemplateWrapped(something) {
  return hasProp(something, "_template");
}
function isEscapedString(something) {
  const result = hasProp(something, "_escaped");
  if (result) {
    assert(hasProp(something, "_escaped", "string"));
    checkType(something);
  }
  return result;
}
function getEscapedString(escapedString) {
  let htmlString;
  assert(hasProp(escapedString, "_escaped"));
  htmlString = escapedString._escaped;
  assert(typeof htmlString === "string");
  return htmlString;
}
function escapeInject(templateStrings, ...templateVariables) {
  assertUsage(templateStrings.length === templateVariables.length + 1 && templateStrings.every((str) => typeof str === "string"), `You're using ${picocolors_default.cyan("escapeInject")} as a function, but ${picocolors_default.cyan("escapeInject")} is a string template tag, see https://vike.dev/escapeInject`, { showStackTrace: true });
  return {
    _template: {
      templateStrings,
      templateVariables
    }
  };
}
function dangerouslySkipEscape(alreadyEscapedString) {
  return _dangerouslySkipEscape(alreadyEscapedString);
}
function _dangerouslySkipEscape(arg) {
  if (hasProp(arg, "_escaped")) {
    assert(isEscapedString(arg));
    return arg;
  }
  assertUsage(!isPromise(arg), `[dangerouslySkipEscape(${picocolors_default.cyan("str")})] Argument ${picocolors_default.cyan("str")} is a promise. It should be a string instead (or a stream). Make sure to ${picocolors_default.cyan("await str")}.`, { showStackTrace: true });
  if (typeof arg === "string") {
    return { _escaped: arg };
  }
  assertWarning2(false, `[dangerouslySkipEscape(${picocolors_default.cyan("str")})] Argument ${picocolors_default.cyan("str")} should be a string but we got ${picocolors_default.cyan(`typeof str === "${typeof arg}"`)}.`, {
    onlyOnce: false,
    showStackTrace: true
  });
  return { _escaped: String(arg) };
}
function renderTemplate(templateContent, pageContext) {
  const htmlPartsBegin = [];
  const htmlPartsEnd = [];
  let htmlStream = null;
  const addHtmlPart = (htmlPart) => {
    if (htmlStream === null) {
      htmlPartsBegin.push(htmlPart);
    } else {
      htmlPartsEnd.push(htmlPart);
    }
  };
  const setStream = (stream) => {
    const { hookName, hookFilePath } = pageContext._renderHook;
    assertUsage(!htmlStream, `Injecting two streams in ${picocolors_default.cyan("escapeInject")} template tag of ${hookName}() hook defined by ${hookFilePath}. Inject only one stream instead.`);
    htmlStream = stream;
  };
  const { templateStrings, templateVariables } = templateContent;
  for (let i3 = 0; i3 < templateVariables.length; i3++) {
    addHtmlPart(templateStrings[i3]);
    let templateVar = templateVariables[i3];
    if (isEscapedString(templateVar)) {
      const htmlString = getEscapedString(templateVar);
      addHtmlPart(htmlString);
      continue;
    }
    if (isTemplateWrapped(templateVar)) {
      const templateContentInner = templateVar._template;
      const result = renderTemplate(templateContentInner, pageContext);
      if (!("htmlStream" in result)) {
        result.htmlPartsAll.forEach(addHtmlPart);
      } else {
        result.htmlPartsBegin.forEach(addHtmlPart);
        setStream(result.htmlStream);
        result.htmlPartsEnd.forEach(addHtmlPart);
      }
      continue;
    }
    if (isStream(templateVar)) {
      setStream(templateVar);
      continue;
    }
    const getErrMsg3 = (msg) => {
      const { hookName, hookFilePath } = pageContext._renderHook;
      const nth = i3 === 0 && "1st" || i3 === 1 && "2nd" || i3 === 2 && "3rd" || `${i3}-th`;
      return [
        `The ${nth} HTML variable is ${msg}`,
        `The HTML was provided by the ${hookName}() hook at ${hookFilePath}.`
      ].filter(Boolean).join(" ");
    };
    assertUsage(!isPromise(templateVar), getErrMsg3(`a promise, did you forget to ${picocolors_default.cyan("await")} the promise?`));
    if (templateVar === void 0 || templateVar === null) {
      const msgVal = picocolors_default.cyan(String(templateVar));
      const msgEmptyString = picocolors_default.cyan("''");
      const msg = `${msgVal} which will be converted to an empty string. Pass the empty string ${msgEmptyString} instead of ${msgVal} to remove this warning.`;
      assertWarning2(false, getErrMsg3(msg), { onlyOnce: false });
      templateVar = "";
    }
    {
      const varType = typeof templateVar;
      if (varType !== "string") {
        const msgType = picocolors_default.cyan(`typeof htmlVariable === "${varType}"`);
        const msg = `${msgType} but a string or stream (https://vike.dev/streaming) is expected instead.`;
        assertUsage(false, getErrMsg3(msg));
      }
    }
    {
      const { _isProduction: isProduction } = pageContext._globalContext;
      if (isHtml(templateVar) && // We don't show this warning in production because it's expected that some users may (un)willingly do some XSS injection: we avoid flooding the production logs.
      !isProduction) {
        const msgVal = picocolors_default.cyan(String(templateVar));
        const msg = `${msgVal} which seems to be HTML code. Did you forget to wrap the value with dangerouslySkipEscape()?`;
        assertWarning2(false, getErrMsg3(msg), { onlyOnce: false });
      }
    }
    addHtmlPart(escapeHtml(templateVar));
  }
  assert(templateStrings.length === templateVariables.length + 1);
  addHtmlPart(templateStrings[templateStrings.length - 1]);
  if (htmlStream === null) {
    assert(htmlPartsEnd.length === 0);
    return {
      htmlPartsAll: htmlPartsBegin
    };
  }
  return {
    htmlStream,
    htmlPartsBegin,
    htmlPartsEnd
  };
}
async function getHtmlString(htmlRender) {
  if (typeof htmlRender === "string") {
    return htmlRender;
  }
  if (isStream(htmlRender)) {
    return streamToString(htmlRender);
  }
  checkType(htmlRender);
  assert(false);
}
var init_renderHtml = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/html/renderHtml.js"() {
    init_utils();
    init_injectAssets();
    init_stream();
    init_react_streaming();
    init_picocolors();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/getHttpResponseBody.js
function getHttpResponseBody(htmlRender, renderHook) {
  if (typeof htmlRender !== "string") {
    assertUsage(false, getErrMsg2(htmlRender, renderHook, "body", `Use ${picocolors_default.cyan("pageContext.httpResponse.pipe()")} instead`));
  }
  const body = htmlRender;
  return body;
}
function getHttpResponseBodyStreamHandlers(htmlRender, renderHook) {
  return {
    pipe(writable) {
      const getErrMsgMixingStreamTypes = (writableType) => `The ${getErrMsgBody(htmlRender, renderHook)} while a ${writableType} was passed to pageContext.httpResponse.pipe() which is contradictory. You cannot mix a Web Stream with a Node.js Stream.`;
      if (isStreamWritableWeb(writable)) {
        const success = pipeToStreamWritableWeb(htmlRender, writable);
        if (success) {
          return;
        } else {
          assert(isStreamReadableNode(htmlRender) || isStreamPipeNode(htmlRender));
          assertUsage(false, getErrMsgMixingStreamTypes("Web Writable"));
        }
      }
      if (isStreamWritableNode(writable)) {
        const success = pipeToStreamWritableNode(htmlRender, writable);
        if (success) {
          return;
        } else {
          assert(isStreamReadableWeb(htmlRender) || isStreamPipeWeb(htmlRender));
          assertUsage(false, getErrMsgMixingStreamTypes("Node.js Writable"));
        }
      }
      assertUsage(false, `The argument ${picocolors_default.cyan("writable")} passed to ${picocolors_default.cyan("pageContext.httpResponse.pipe(writable)")} doesn't seem to be ${getStreamName("writable", "web")} nor ${getStreamName("writable", "node")}.`);
    },
    getReadableWebStream() {
      const webStream = getStreamReadableWeb(htmlRender);
      if (webStream === null) {
        assertUsage(false, getErrMsg2(htmlRender, renderHook, "getReadableWebStream()", getFixMsg("readable", "web")));
      }
      return webStream;
    },
    async getReadableNodeStream() {
      const nodeStream = await getStreamReadableNode(htmlRender);
      if (nodeStream === null) {
        assertUsage(false, getErrMsg2(htmlRender, renderHook, "getReadableNodeStream()", getFixMsg("readable", "node")));
      }
      return nodeStream;
    },
    async getBody() {
      const body = await getHtmlString(htmlRender);
      return body;
    },
    // TO-DO/next-major-release: remove
    async getNodeStream() {
      assertWarning2(false, "`pageContext.httpResponse.getNodeStream()` is outdated, use `pageContext.httpResponse.getReadableNodeStream()` instead. " + streamDocs, { onlyOnce: true, showStackTrace: true });
      const nodeStream = await getStreamReadableNode(htmlRender);
      if (nodeStream === null) {
        assertUsage(false, getErrMsg2(htmlRender, renderHook, "getNodeStream()", getFixMsg("readable", "node")));
      }
      return nodeStream;
    },
    // TO-DO/next-major-release: remove
    getWebStream() {
      assertWarning2(false, "`pageContext.httpResponse.getWebStream(res)` is outdated, use `pageContext.httpResponse.getReadableWebStream(res)` instead. " + streamDocs, { onlyOnce: true, showStackTrace: true });
      const webStream = getStreamReadableWeb(htmlRender);
      if (webStream === null) {
        assertUsage(false, getErrMsg2(htmlRender, renderHook, "getWebStream()", getFixMsg("readable", "web")));
      }
      return webStream;
    },
    // TO-DO/next-major-release: remove
    pipeToWebWritable(writable) {
      assertWarning2(false, "`pageContext.httpResponse.pipeToWebWritable(res)` is outdated, use `pageContext.httpResponse.pipe(res)` instead. " + streamDocs, { onlyOnce: true, showStackTrace: true });
      const success = pipeToStreamWritableWeb(htmlRender, writable);
      if (!success) {
        assertUsage(false, getErrMsg2(htmlRender, renderHook, "pipeToWebWritable()"));
      }
    },
    // TO-DO/next-major-release: remove
    pipeToNodeWritable(writable) {
      assertWarning2(false, "`pageContext.httpResponse.pipeToNodeWritable(res)` is outdated, use `pageContext.httpResponse.pipe(res)` instead. " + streamDocs, { onlyOnce: true, showStackTrace: true });
      const success = pipeToStreamWritableNode(htmlRender, writable);
      if (!success) {
        assertUsage(false, getErrMsg2(htmlRender, renderHook, "pipeToNodeWritable()"));
      }
    }
  };
  function getFixMsg(kind, type) {
    const streamName = getStreamName(kind, type);
    assert(["a ", "an ", "the "].some((s3) => streamName.startsWith(s3)));
    assert(renderHook);
    const { hookFilePath, hookName } = renderHook;
    return `Make sure the ${hookName}() hook defined by ${hookFilePath} provides ${streamName} instead`;
  }
}
function getErrMsg2(htmlRender, renderHook, method, msgAddendum) {
  assert(!msgAddendum || !msgAddendum.endsWith("."));
  const errMsgBody = getErrMsgBody(htmlRender, renderHook);
  return [`pageContext.httpResponse.${method} can't be used because the ${errMsgBody}`, msgAddendum, streamDocs].filter(Boolean).join(". ");
}
function getErrMsgBody(htmlRender, renderHook) {
  assert(renderHook);
  const { hookFilePath, hookName } = renderHook;
  const hookReturnType = getHookReturnType(htmlRender);
  assert(["a ", "an ", "the "].some((s3) => hookReturnType.startsWith(s3)));
  const errMsgBody = `${hookName}() hook defined by ${hookFilePath} provides ${hookReturnType}`;
  assert(!errMsgBody.endsWith(" "));
  return errMsgBody;
}
function getHookReturnType(htmlRender) {
  if (typeof htmlRender === "string") {
    return "an HTML string";
  } else if (isStream(htmlRender)) {
    return inferStreamName(htmlRender);
  } else {
    assert(false);
  }
}
var streamDocs;
var init_getHttpResponseBody = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/getHttpResponseBody.js"() {
    init_stream();
    init_utils();
    init_renderHtml();
    init_picocolors();
    streamDocs = "See https://vike.dev/streaming for more information.";
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/getEarlyHints.js
function getEarlyHints(assets) {
  const earlyHints = [];
  {
    assets.forEach((asset) => {
      if (isFontFallback(asset, earlyHints))
        return;
      earlyHints.push({
        ...asset,
        earlyHintLink: inferEarlyHintLink(asset)
      });
    });
  }
  return earlyHints;
}
var init_getEarlyHints = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/getEarlyHints.js"() {
    init_isFontFallback();
    init_inferHtmlTags();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/createHttpResponse/assertNoInfiniteHttpRedirect.js
function assertNoInfiniteHttpRedirect(urlRedirectTarget, pageContextInit) {
  if (true)
    return "DISABLED";
  if (!urlRedirectTarget.startsWith("/")) {
    return;
  }
  const urlOriginalNormalized = removeUrlOrigin(pageContextInit.urlOriginal).urlModified;
  assert(urlOriginalNormalized.startsWith("/"));
  const graph = copy(globalObject11.redirectGraph);
  graph[urlRedirectTarget] ?? (graph[urlRedirectTarget] = /* @__PURE__ */ new Set());
  graph[urlRedirectTarget].add(urlOriginalNormalized);
  validate(graph);
  globalObject11.redirectGraph = graph;
}
function copy(G4) {
  return Object.fromEntries(Object.entries(G4).map(([key, val]) => [key, new Set(val)]));
}
function validate(G4) {
  Object.keys(G4).forEach((n2) => check(G4, n2, []));
}
function check(G4, n2, path) {
  if (path.includes(n2)) {
    const cycle = path.slice(path.indexOf(n2)).concat(n2);
    assertUsage(false, `Infinite loop of HTTP URL redirects: ${cycle.map(picocolors_default.cyan).join(" -> ")}`);
  }
  G4[n2]?.forEach((node) => check(G4, node, [...path, n2]));
}
var globalObject11;
var init_assertNoInfiniteHttpRedirect = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/createHttpResponse/assertNoInfiniteHttpRedirect.js"() {
    init_utils();
    init_picocolors();
    globalObject11 = getGlobalObject("createHttpResponse/assertNoInfiniteHttpRedirect.ts", {
      redirectGraph: {}
    });
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/getCacheControl.js
function getCacheControl(pageId, pageConfigs) {
  if (pageConfigs.length === 0)
    return cacheControlDisable;
  if (pageId) {
    const pageConfig = getPageConfig(pageId, pageConfigs);
    const configValue = getConfigValueRuntime(pageConfig, "cacheControl", "string");
    const value = configValue?.value;
    if (value)
      return value;
  }
  return cacheControlDisable;
}
var cacheControlDisable;
var init_getCacheControl = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/getCacheControl.js"() {
    init_helpers();
    init_getConfigValueRuntime();
    cacheControlDisable = "no-store, max-age=0";
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/headersResponse.js
function resolveHeadersResponseFinal(pageContext, statusCode) {
  const headersResponse = pageContext.headersResponse || new Headers();
  if (statusCode >= 500)
    headersResponse.set("Cache-Control", cacheControlDisable);
  const headers = [];
  headersResponse.forEach((value, key) => {
    headers.push([key, value]);
  });
  return headers;
}
async function resolveHeadersResponseEarly(pageContext) {
  const headersResponse = await resolveHeadersResponseConfig(pageContext);
  if (!headersResponse.get("Cache-Control")) {
    const cacheControl = getCacheControl(pageContext.pageId, pageContext._globalContext._pageConfigs);
    if (cacheControl)
      headersResponse.set("Cache-Control", cacheControl);
  }
  addCspResponseHeader(pageContext, headersResponse);
  const pageContextAddendum = {
    headersResponse
  };
  return pageContextAddendum;
}
async function resolveHeadersResponseConfig(pageContext) {
  const headersMerged = new Headers();
  await Promise.all((pageContext.config.headersResponse ?? []).map(async (headers) => {
    let headersInit;
    if (isCallable(headers)) {
      headersInit = await headers(pageContext);
    } else {
      headersInit = headers;
    }
    new Headers(headersInit).forEach((value, key) => {
      headersMerged.append(key, value);
    });
  }));
  return headersMerged;
}
var init_headersResponse = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/headersResponse.js"() {
    init_csp();
    init_utils();
    init_getCacheControl();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/createHttpResponse.js
async function createHttpResponsePage(htmlRender, renderHook, pageContext) {
  let statusCode = pageContext.abortStatusCode;
  if (!statusCode) {
    const isError2 = !pageContext.pageId || isErrorPage(pageContext.pageId, pageContext._globalContext._pageConfigs);
    if (pageContext.errorWhileRendering) {
      assert(isError2);
    }
    if (!isError2) {
      assert(pageContext.is404 === null);
      statusCode = 200;
    } else {
      assert(pageContext.is404 === true || pageContext.is404 === false);
      statusCode = pageContext.is404 ? 404 : 500;
    }
  }
  const earlyHints = getEarlyHints(await pageContext.__getPageAssets());
  const headers = resolveHeadersResponseFinal(pageContext, statusCode);
  return createHttpResponse(statusCode, "text/html;charset=utf-8", headers, htmlRender, earlyHints, renderHook);
}
function createHttpResponse404(errMsg404) {
  const httpResponse = createHttpResponse(404, "text/html;charset=utf-8", [], `<p>${errMsg404}.</p><script>console.log('This HTML was generated by Vike.')</script>`);
  return httpResponse;
}
function createHttpResponseBaseIsMissing(urlOriginal, baseServer2) {
  const httpResponse = createHttpResponse(
    // We use the error code `500` to signal a failing state because this HTTP response should never be used, see https://vike.dev/base-url#setup
    // In other words: this HTTP response is expected to be generated but isn't expected to be actually used.
    500,
    "text/html;charset=utf-8",
    [],
    `
<h1>Error: Base URL is missing</h1>
<p>
  <a href="https://vike.dev/renderPage"><code>renderPage(pageContextInit)</code></a> called with <code>pageContextInit.urlOriginal===${JSON.stringify(urlOriginal)}</code> which doesn't start with the Base URL <code>${baseServer2}</code>.
</p>
<p>
  See <a href="https://vike.dev/base-url#setup">vike.dev/base-url#setup</a> for how to properly setup your server while using a Base URL.
</p>
<style>
  code {
    font-family: monospace;
    background-color: #eaeaea;
    padding: 3px 5px;
    border-radius: 4px;
  }
</style>
`
  );
  return httpResponse;
}
function createHttpResponseErrorFallback(pageContext) {
  const reason = (() => {
    const errorPageId = getErrorPageId(pageContext._globalContext._pageFilesAll, pageContext._globalContext._pageConfigs);
    if (errorPageId) {
      return "the error page (https://vike.dev/error-page) couldn't be rendered (for example if an error occurred while rendering the error page)";
    } else {
      return "no error page (https://vike.dev/error-page) is defined, make sure to create one";
    }
  })();
  return createHttpResponseError_(reason);
}
function createHttpResponseErrorFallback_noGlobalContext() {
  return createHttpResponseError_("no error page (https://vike.dev/error-page) could be rendered");
}
function createHttpResponseError_(reason) {
  const httpResponse = createHttpResponse(500, "text/html;charset=utf-8", [], `<p>An error occurred.</p><script>console.log(${JSON.stringify(`This HTML was generated by Vike. Vike returned this HTML because ${reason}.`)})</script>`);
  return httpResponse;
}
async function createHttpResponsePageContextJson(pageContextSerialized) {
  const httpResponse = createHttpResponse(200, "application/json", [], pageContextSerialized, [], null);
  return httpResponse;
}
function createHttpResponseRedirect({ url: url5, statusCode }, pageContextInit) {
  assertNoInfiniteHttpRedirect(url5, pageContextInit);
  assert(url5);
  assert(statusCode);
  assert(300 <= statusCode && statusCode <= 399);
  const headers = [["Location", url5]];
  return createHttpResponse(
    statusCode,
    "text/html;charset=utf-8",
    headers,
    // For bots / programmatic crawlig: show what's going on.
    // For users: showing a blank page is probably better than a flickering text.
    `<p style="display: none">Redirecting to ${escapeHtml(url5)}</p><script>console.log('This HTML was generated by Vike.')</script>`
  );
}
function createHttpResponse(statusCode, contentType, headers, htmlRender, earlyHints = [], renderHook = null) {
  headers.push(["Content-Type", contentType]);
  assert(renderHook || typeof htmlRender === "string");
  return {
    statusCode,
    headers,
    // TO-DO/next-major-release: remove
    get contentType() {
      assertWarning2(false, "pageContext.httpResponse.contentType is deprecated and will be removed in the next major release. Use pageContext.httpResponse.headers instead, see https://vike.dev/migration/0.4.134", { onlyOnce: true });
      return contentType;
    },
    earlyHints,
    get body() {
      return getHttpResponseBody(htmlRender, renderHook);
    },
    ...getHttpResponseBodyStreamHandlers(htmlRender, renderHook)
  };
}
var init_createHttpResponse = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/createHttpResponse.js"() {
    init_utils();
    init_error_page();
    init_getHttpResponseBody();
    init_getEarlyHints();
    init_assertNoInfiniteHttpRedirect();
    init_headersResponse();
  }
});

// node_modules/vike/dist/shared-server-client/getPageFiles/getAllPageIdFiles.js
function getPageFilesClientSide(pageFilesAll, pageId) {
  return determine(pageFilesAll, pageId, true);
}
function getPageFilesServerSide(pageFilesAll, pageId) {
  return determine(pageFilesAll, pageId, false);
}
function determine(pageFilesAll, pageId, envIsClient) {
  const env3 = envIsClient ? "CLIENT_ONLY" : "SERVER_ONLY";
  const pageFilesRelevant = pageFilesAll.filter((p4) => p4.isRelevant(pageId) && p4.fileType !== ".page.route").sort(getPageFilesSorter(envIsClient, pageId));
  const getPageIdFile = (iso) => {
    const files = pageFilesRelevant.filter((p4) => p4.pageId === pageId && p4.isEnv(iso ? "CLIENT_AND_SERVER" : env3));
    assertUsage(files.length <= 1, `Merge the following files into a single file: ${files.map((p4) => p4.filePath).join(" ")}`);
    const pageIdFile = files[0];
    assert(pageIdFile === void 0 || !pageIdFile.isDefaultPageFile);
    return pageIdFile;
  };
  const pageIdFileEnv = getPageIdFile(false);
  const pageIdFileIso = getPageIdFile(true);
  const getRendererFile = (iso) => pageFilesRelevant.filter((p4) => p4.isRendererPageFile && p4.isEnv(iso ? "CLIENT_AND_SERVER" : env3))[0];
  const rendererFileEnv = getRendererFile(false);
  const rendererFileIso = getRendererFile(true);
  const defaultFilesNonRenderer = pageFilesRelevant.filter((p4) => p4.isDefaultPageFile && !p4.isRendererPageFile && (p4.isEnv(env3) || p4.isEnv("CLIENT_AND_SERVER")));
  const pageFiles = [pageIdFileEnv, pageIdFileIso, ...defaultFilesNonRenderer, rendererFileEnv, rendererFileIso].filter(isNotNullish);
  return pageFiles;
}
function getPageFilesSorter(envIsClient, pageId) {
  const env3 = envIsClient ? "CLIENT_ONLY" : "SERVER_ONLY";
  const e1First = -1;
  const e2First = 1;
  const noOrder = 0;
  return (e1, e2) => {
    if (!e1.isDefaultPageFile && e2.isDefaultPageFile) {
      return e1First;
    }
    if (!e2.isDefaultPageFile && e1.isDefaultPageFile) {
      return e2First;
    }
    {
      const e1_isRenderer = e1.isRendererPageFile;
      const e2_isRenderer = e2.isRendererPageFile;
      if (!e1_isRenderer && e2_isRenderer) {
        return e1First;
      }
      if (!e2_isRenderer && e1_isRenderer) {
        return e2First;
      }
      assert(e1_isRenderer === e2_isRenderer);
    }
    {
      const e1_distance = getPathDistance(pageId, e1.filePath);
      const e2_distance = getPathDistance(pageId, e2.filePath);
      if (e1_distance < e2_distance) {
        return e1First;
      }
      if (e2_distance < e1_distance) {
        return e2First;
      }
      assert(e1_distance === e2_distance);
    }
    {
      if (e1.isEnv(env3) && e2.isEnv("CLIENT_AND_SERVER")) {
        return e1First;
      }
      if (e2.isEnv(env3) && e1.isEnv("CLIENT_AND_SERVER")) {
        return e2First;
      }
    }
    return noOrder;
  };
}
function getPathDistance(pathA, pathB) {
  let idx = 0;
  for (; idx < pathA.length && idx < pathB.length; idx++) {
    if (pathA[idx] !== pathB[idx])
      break;
  }
  const pathAWithoutCommon = pathA.slice(idx);
  const pathBWithoutCommon = pathB.slice(idx);
  const distanceA = pathAWithoutCommon.split("/").length;
  const distanceB = pathBWithoutCommon.split("/").length;
  const distance = distanceA + distanceB;
  return distance;
}
var init_getAllPageIdFiles = __esm({
  "node_modules/vike/dist/shared-server-client/getPageFiles/getAllPageIdFiles.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/shared-server-client/getPageFiles.js
var init_getPageFiles = __esm({
  "node_modules/vike/dist/shared-server-client/getPageFiles.js"() {
    init_getAllPageIdFiles();
    init_getAllPageIdFiles();
  }
});

// node_modules/vike/dist/shared-server-client/getPageFiles/analyzePageClientSide/getExportNames.js
function getExportNames(p4) {
  if (p4.fileType === ".css") {
    return [];
  }
  if (p4.exportNames) {
    return p4.exportNames;
  }
  assert(p4.fileExports, p4.filePath);
  const exportNames = Object.keys(p4.fileExports);
  return exportNames;
}
var init_getExportNames = __esm({
  "node_modules/vike/dist/shared-server-client/getPageFiles/analyzePageClientSide/getExportNames.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/shared-server-client/getPageFiles/analyzePageClientSide/analyzeExports.js
function analyzeExports({ pageFilesClientSide, pageFilesServerSide, pageId }) {
  return { isHtmlOnly: isHtmlOnly(), isClientRouting: isClientRouting() };
  function isHtmlOnly() {
    {
      const hasPageIdIsmrphFile = pageFilesServerSide.some((p4) => p4.pageId === pageId && p4.fileType === ".page");
      if (hasPageIdIsmrphFile) {
        assertClientSideRenderHook();
        return false;
      }
    }
    {
      const hasPageIdServerFile = pageFilesServerSide.some((p4) => p4.pageId === pageId && p4.fileType === ".page.server");
      if (!hasPageIdServerFile) {
        return false;
      }
    }
    {
      const definesClientRenderer = pageFilesClientSide.some((p4) => p4.pageId === pageId && p4.fileType === ".page.client" && getExportNames(p4).includes("render"));
      if (definesClientRenderer) {
        return false;
      }
    }
    return true;
  }
  function assertClientSideRenderHook() {
    const hasClientSideRenderHook = pageFilesClientSide.some((p4) => {
      return getExportNames(p4).includes("render");
    });
    assertUsage(hasClientSideRenderHook, [
      "No client-side `render()` hook found.",
      "See https://vike.dev/render-modes for more information.",
      [
        "Loaded client-side page files (none of them `export { render }`):",
        ...pageFilesClientSide.map((p4, i3) => ` (${i3 + 1}): ${p4.filePath}`)
      ].join("\n")
    ].join(" "));
  }
  function isClientRouting() {
    const hasClientRoutingExport = pageFilesClientSide.some((p4) => {
      return getExportNames(p4).includes("clientRouting");
    });
    return hasClientRoutingExport;
  }
}
var init_analyzeExports = __esm({
  "node_modules/vike/dist/shared-server-client/getPageFiles/analyzePageClientSide/analyzeExports.js"() {
    init_getExportNames();
    init_utils5();
  }
});

// node_modules/vike/dist/shared-server-client/getPageFiles/analyzePageClientSide/determineClientEntry.js
function determineClientEntry({ pageFilesClientSide, pageFilesServerSide, isHtmlOnly, isClientRouting }) {
  let clientEntries = [];
  const pageFilesServerSideOnly = pageFilesServerSide.filter((p4) => !pageFilesClientSide.includes(p4));
  const clientDependencies = [];
  clientDependencies.push(...pageFilesClientSide.map((p4) => ({ id: p4.filePath, onlyAssets: false, eagerlyImported: false })));
  clientDependencies.push(...pageFilesServerSideOnly.map((p4) => ({ id: p4.filePath, onlyAssets: true, eagerlyImported: false })));
  if (isHtmlOnly) {
    clientEntries = pageFilesClientSide.map((p4) => p4.filePath);
  } else {
    const clientEntry = getVikeClientEntry(isClientRouting);
    clientDependencies.push({ id: clientEntry, onlyAssets: false, eagerlyImported: false });
    clientEntries = [clientEntry];
  }
  return { clientEntries, clientDependencies };
}
function getVikeClientEntry(isClientRouting) {
  return isClientRouting ? "@@vike/dist/client/runtime-client-routing/entry.js" : "@@vike/dist/client/runtime-server-routing/entry.js";
}
var init_determineClientEntry = __esm({
  "node_modules/vike/dist/shared-server-client/getPageFiles/analyzePageClientSide/determineClientEntry.js"() {
  }
});

// node_modules/vike/dist/shared-server-client/getPageFiles/analyzePageClientSide.js
function analyzePageClientSide(pageFilesAll, pageId) {
  let pageFilesClientSide = getPageFilesClientSide(pageFilesAll, pageId);
  const pageFilesServerSide = getPageFilesServerSide(pageFilesAll, pageId);
  const { isHtmlOnly, isClientRouting } = analyzeExports({ pageFilesClientSide, pageFilesServerSide, pageId });
  if (isHtmlOnly) {
    pageFilesClientSide = pageFilesClientSide.filter((p4) => p4.isEnv("CLIENT_ONLY") && !getExportNames(p4).includes("render"));
    pageFilesClientSide = removeOverriddenPageFiles(pageFilesClientSide);
  }
  const { clientEntries, clientDependencies } = determineClientEntry({
    pageFilesClientSide,
    pageFilesServerSide,
    isHtmlOnly,
    isClientRouting
  });
  return { isHtmlOnly, isClientRouting, clientEntries, clientDependencies, pageFilesClientSide, pageFilesServerSide };
}
async function analyzePageClientSideInit(pageFilesAll, pageId, { sharedPageFilesAlreadyLoaded }) {
  const pageFilesClientSide = getPageFilesClientSide(pageFilesAll, pageId);
  await Promise.all(pageFilesClientSide.map(async (p4) => {
    assert(p4.isEnv("CLIENT_ONLY") || p4.isEnv("CLIENT_AND_SERVER"));
    if (sharedPageFilesAlreadyLoaded && p4.isEnv("CLIENT_AND_SERVER")) {
      return;
    }
    await p4.loadExportNames?.();
  }));
}
function removeOverriddenPageFiles(pageFilesClientSide) {
  const pageFilesClientSide_ = [];
  for (const p4 of pageFilesClientSide) {
    pageFilesClientSide_.push(p4);
    if (getExportNames(p4).includes("overrideDefaultPages")) {
      break;
    }
  }
  return pageFilesClientSide_;
}
var init_analyzePageClientSide = __esm({
  "node_modules/vike/dist/shared-server-client/getPageFiles/analyzePageClientSide.js"() {
    init_analyzeExports();
    init_determineClientEntry();
    init_getAllPageIdFiles();
    init_getAllPageIdFiles();
    init_utils5();
    init_getExportNames();
  }
});

// node_modules/vike/dist/shared-server-node/prependEntriesDir.js
function prependEntriesDir(entryName) {
  if (entryName.startsWith("/")) {
    entryName = entryName.slice(1);
  }
  assert(!entryName.startsWith("/"));
  assert(entryName);
  entryName = `entries/${entryName}`;
  return entryName;
}
var init_prependEntriesDir = __esm({
  "node_modules/vike/dist/shared-server-node/prependEntriesDir.js"() {
    init_utils4();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/getPageAssets/getManifestEntry.js
function getManifestEntry(id, assetsManifest) {
  const debugInfo = getDebugInfo(id, assetsManifest);
  if (id.startsWith("@@vike/")) {
    const manifestKeyEnd = slice(id, "@@vike".length, 0);
    const { manifestKey: manifestKey2, manifestEntry: manifestEntry2 } = findEntryWithKeyEnd(manifestKeyEnd, assetsManifest, id);
    assert(manifestEntry2 && manifestKey2, debugInfo);
    return { manifestEntry: manifestEntry2, manifestKey: manifestKey2 };
  }
  const virtualFile = parseVirtualFileId(id);
  if (virtualFile && virtualFile.type === "page-entry") {
    {
      const manifestKey3 = id;
      const manifestEntry3 = assetsManifest[manifestKey3];
      if (manifestEntry3) {
        return { manifestEntry: manifestEntry3, manifestKey: manifestKey3 };
      }
    }
    const manifestKeyEnd = id;
    const { manifestKey: manifestKey2, manifestEntry: manifestEntry2 } = getEntryWithKeyEnd(manifestKeyEnd, assetsManifest, id);
    assert(manifestEntry2, debugInfo);
    return { manifestEntry: manifestEntry2, manifestKey: manifestKey2 };
  }
  if (id.startsWith("/")) {
    const manifestKey2 = id.slice(1);
    let manifestEntry2 = assetsManifest[manifestKey2];
    assert(manifestEntry2, debugInfo);
    return { manifestEntry: manifestEntry2, manifestKey: manifestKey2 };
  }
  assertIsImportPathNpmPackage(id);
  const found = Object.entries(assetsManifest).find(([, e]) => e.name === prependEntriesDir(id));
  assert(found);
  const [manifestKey, manifestEntry] = found;
  return { manifestEntry, manifestKey };
}
function findEntryWithKeyEnd(manifestKeyEnd, assetsManifest, id) {
  const debugInfo = getDebugInfo(id, assetsManifest, manifestKeyEnd);
  assert(manifestKeyEnd.startsWith("/"), debugInfo);
  const manifestKeys = [];
  for (const manifestKey2 in assetsManifest) {
    if (manifestKey2.endsWith(manifestKeyEnd)) {
      manifestKeys.push(manifestKey2);
    }
  }
  const manifestKeysRelative = manifestKeys.filter((k2) => k2.startsWith("../"));
  assert(manifestKeysRelative.length <= 1, debugInfo);
  const manifestKey = manifestKeysRelative[0] ?? manifestKeys[0] ?? null;
  if (!manifestKey) {
    return { manifestEntry: null, manifestKey: null };
  }
  const manifestEntry = assetsManifest[manifestKey];
  return { manifestEntry, manifestKey };
}
function getEntryWithKeyEnd(manifestKeyEnd, assetsManifest, id) {
  const debugInfo = getDebugInfo(id, assetsManifest, manifestKeyEnd);
  const manifestKeys = [];
  for (const manifestKey2 in assetsManifest) {
    if (manifestKey2.endsWith(manifestKeyEnd)) {
      manifestKeys.push(manifestKey2);
    }
  }
  assert(manifestKeys.length <= 1, debugInfo);
  const manifestKey = manifestKeys[0];
  if (!manifestKey) {
    return { manifestEntry: null, manifestKey: null };
  }
  const manifestEntry = assetsManifest[manifestKey];
  return { manifestEntry, manifestKey };
}
function getDebugInfo(id, assetsManifest, manifestKeyEnd) {
  const manifestKeys = Object.keys(assetsManifest);
  if (manifestKeyEnd === void 0) {
    return { manifestKeys, id };
  } else {
    return { manifestKeys, manifestKeyEnd, id };
  }
}
var init_getManifestEntry = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/getPageAssets/getManifestEntry.js"() {
    init_utils();
    init_virtualFileId2();
    init_prependEntriesDir();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/getPageAssets/retrievePageAssetsProd.js
function retrievePageAssetsProd(assetsManifest, clientDependencies, clientEntries, config) {
  const clientEntriesSrc = clientEntries.map((clientEntry) => getClientEntrySrcProd(clientEntry, assetsManifest));
  const assetUrls = getAssetsUrl(clientDependencies, assetsManifest, config);
  return { clientEntriesSrc, assetUrls };
}
function getClientEntrySrcProd(clientEntry, assetsManifest) {
  const { manifestEntry } = getManifestEntry(clientEntry, assetsManifest);
  assert(manifestEntry.isEntry || manifestEntry.isDynamicEntry || clientEntry.endsWith(".css"), { clientEntry });
  let { file } = manifestEntry;
  assert(!file.startsWith("/"));
  return "/" + file;
}
function getAssetsUrl(clientDependencies, assetsManifest, config) {
  const includeAssetsImportedByServer = resolveIncludeAssetsImportedByServer(config);
  let assetUrls = /* @__PURE__ */ new Set();
  assert(assetsManifest);
  const visistedAssets = /* @__PURE__ */ new Set();
  clientDependencies.forEach(({ id, onlyAssets, eagerlyImported }) => {
    if (eagerlyImported)
      return;
    if (includeAssetsImportedByServer && onlyAssets && id.includes(".page.server.") && // We assume that all npm packages have already built their files: bundlers (Rollup, esbuild, tsup, ...) extract the CSS out of JavaScript => we can assume JavaScript to not import any CSS/assets.
    !isImportPathNpmPackage(id, {
      // I presume Vite already resolves path aliases when Vite sets the module's id
      cannotBePathAlias: true
    })) {
      id = extractAssetsAddQuery(id);
    }
    const { manifestKey } = getManifestEntry(id, assetsManifest);
    collectAssets(manifestKey, assetUrls, visistedAssets, assetsManifest, onlyAssets);
  });
  collectSingleStyle(assetUrls, assetsManifest);
  return Array.from(assetUrls);
}
function collectAssets(manifestKey, assetUrls, visistedAssets, assetsManifest, onlyCollectStaticAssets) {
  if (visistedAssets.has(manifestKey))
    return;
  visistedAssets.add(manifestKey);
  const manifestEntry = assetsManifest[manifestKey];
  assert(manifestEntry, { manifestKey });
  const { file } = manifestEntry;
  if (!onlyCollectStaticAssets) {
    assetUrls.add(`/${file}`);
  }
  const { imports = [], assets = [], css = [] } = manifestEntry;
  for (const manifestKey2 of imports) {
    const importManifestEntry = assetsManifest[manifestKey2];
    assert(importManifestEntry);
    collectAssets(manifestKey2, assetUrls, visistedAssets, assetsManifest, onlyCollectStaticAssets);
  }
  for (const cssAsset of css) {
    assetUrls.add(`/${cssAsset}`);
  }
  for (const asset of assets) {
    assetUrls.add(`/${asset}`);
  }
}
function collectSingleStyle(assetUrls, assetsManifest) {
  const style = assetsManifest["style.css"];
  if (style && Object.values(assetsManifest).filter((asset) => asset.file.endsWith(".css")).length === 1) {
    assetUrls.add(`/${style.file}`);
  }
}
function resolveIncludeAssetsImportedByServer(config) {
  return config.includeAssetsImportedByServer ?? true;
}
var init_retrievePageAssetsProd = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/getPageAssets/retrievePageAssetsProd.js"() {
    init_utils();
    init_getManifestEntry();
    init_extractAssetsQuery();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/getPageAssets/retrievePageAssetsDev.js
async function retrievePageAssetsDev(viteDevServer, clientDependencies, clientEntries) {
  const clientEntriesSrc = clientEntries.map((clientEntry) => globalObject12.getClientEntrySrcDev(clientEntry, viteDevServer));
  const assetUrls = await getAssetUrls(clientDependencies, viteDevServer);
  return { clientEntriesSrc, assetUrls };
}
async function getAssetUrls(clientDependencies, viteDevServer) {
  const assetUrls = /* @__PURE__ */ new Set();
  await Promise.all(clientDependencies.map(async ({ id }) => {
    if (id.startsWith("@@vike"))
      return;
    assert(id);
    const virtualFile = parseVirtualFileId(id);
    assert(!virtualFile || virtualFile.type !== "global-entry");
    const { moduleGraph } = viteDevServer;
    const [_4, graphId] = await moduleGraph.resolveUrl(id);
    assert(graphId, { id });
    const mod = moduleGraph.getModuleById(graphId);
    if (!mod) {
      return;
    }
    assert(mod, { id });
    collectCss(mod, assetUrls, /* @__PURE__ */ new Set());
  }));
  return Array.from(assetUrls);
}
function collectCss(mod, styleUrls, visitedModules, importer) {
  assert(mod);
  if (!mod.url)
    return;
  if (visitedModules.has(mod.url))
    return;
  visitedModules.add(mod.url);
  const virtualFile = parseVirtualFileId(mod.id || mod.url);
  if (virtualFile && virtualFile.type === "global-entry")
    return;
  if (isStyle(mod) && (!importer || !isStyle(importer))) {
    if (mod.url.startsWith("/")) {
      styleUrls.add(mod.url);
    } else if (mod.url.startsWith("\0")) {
      styleUrls.add(`/@id/__x00__${mod.url.substring(1)}`);
    } else {
      styleUrls.add(`/@id/${mod.url}`);
    }
  }
  mod.importedModules.forEach((dep) => {
    collectCss(dep, styleUrls, visitedModules, mod);
  });
}
function isStyle(mod) {
  return (
    // CSS-in-JS libraries such as [wyw-in-js](https://github.com/vikejs/vike/issues/2039)
    mod.type === "css" || // .css, .less, ...
    styleFileRE.test(mod.url) || // CSS of .vue files
    mod.id && /\?vue&type=style/.test(mod.id)
  );
}
var globalObject12;
var init_retrievePageAssetsDev = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/getPageAssets/retrievePageAssetsDev.js"() {
    init_utils();
    init_virtualFileId2();
    globalObject12 = getGlobalObject("getPageAssets/retrievePageAssetsDev.ts", {
      // We cannot define getClientEntrySrcDev() in this file because it depends on utils/requireResolve.ts which isn't available in production
      getClientEntrySrcDev: null
    });
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/inferMediaType.js
function inferMediaType(href) {
  if (styleFileRE.test(href)) {
    return { mediaType: "text/css", assetType: "style" };
  }
  if (isScriptFile(href)) {
    return { mediaType: "text/javascript", assetType: "script" };
  }
  if (href.endsWith(".png")) {
    return { assetType: "image", mediaType: "image/png" };
  }
  if (href.endsWith(".webp")) {
    return { assetType: "image", mediaType: "image/webp" };
  }
  if (href.endsWith(".jpg") || href.endsWith(".jpeg")) {
    return { assetType: "image", mediaType: "image/jpeg" };
  }
  if (href.endsWith(".gif")) {
    return { assetType: "image", mediaType: "image/gif" };
  }
  if (href.endsWith(".svg")) {
    return { assetType: "image", mediaType: "image/svg+xml" };
  }
  if (href.endsWith(".avif")) {
    return { assetType: "image", mediaType: "image/avif" };
  }
  if (href.endsWith(".ttf")) {
    return { assetType: "font", mediaType: "font/ttf" };
  }
  if (href.endsWith(".woff")) {
    return { assetType: "font", mediaType: "font/woff" };
  }
  if (href.endsWith(".woff2")) {
    return { assetType: "font", mediaType: "font/woff2" };
  }
  if (href.endsWith(".mp4")) {
    return { assetType: "video", mediaType: "video/mp4" };
  }
  if (href.endsWith(".webm")) {
    return { assetType: "video", mediaType: "video/webm" };
  }
  if (href.endsWith(".ogv")) {
    return { assetType: "video", mediaType: "video/ogg" };
  }
  if (href.endsWith(".mpeg") || href.endsWith(".mpg")) {
    return { assetType: "video", mediaType: "video/mpeg" };
  }
  if (href.endsWith(".avi")) {
    return { assetType: "video", mediaType: "video/x-msvideo" };
  }
  if (href.endsWith(".mov") || href.endsWith(".qt")) {
    return { assetType: "video", mediaType: "video/quicktime" };
  }
  if (href.endsWith(".mp3")) {
    return { assetType: "audio", mediaType: "audio/mpeg" };
  }
  if (href.endsWith(".wav")) {
    return { assetType: "audio", mediaType: "audio/wav" };
  }
  if (href.endsWith(".ogg")) {
    return { assetType: "audio", mediaType: "audio/ogg" };
  }
  if (href.endsWith(".m4a")) {
    return { assetType: "audio", mediaType: "audio/aac" };
  }
  if (href.endsWith("midi") || href.endsWith(".mid")) {
    return { assetType: "audio", mediaType: "audio/midi" };
  }
  if (href.endsWith(".flac")) {
    return { assetType: "audio", mediaType: "audio/flac" };
  }
  return null;
}
var init_inferMediaType = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/inferMediaType.js"() {
    init_utils();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/getPageAssets/sortPageAssetsForEarlyHintsHeader.js
async function sortPageAssetsForEarlyHintsHeader(pageAssets, isProduction) {
  pageAssets.sort(higherFirst(({ assetType }) => {
    if (!isProduction && assetType === "script") {
      return 1;
    }
    let priority = 0;
    if (assetType === "style")
      return priority;
    priority--;
    if (assetType === "font")
      return priority;
    priority--;
    if (assetType === "image")
      return priority;
    priority--;
    if (assetType === "video")
      return priority;
    priority--;
    if (assetType === "audio")
      return priority;
    priority--;
    if (assetType !== "script")
      return priority;
    priority--;
    return priority;
  }));
}
var init_sortPageAssetsForEarlyHintsHeader = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/getPageAssets/sortPageAssetsForEarlyHintsHeader.js"() {
    init_utils();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/getPageAssets.js
async function getPageAssets(pageContext, clientDependencies, clientEntries) {
  const globalContext2 = pageContext._globalContext;
  const { _isProduction: isProduction } = globalContext2;
  const isDev = !isProduction;
  const { assetUrls, clientEntriesSrc } = isDev ? !globalContext2._viteDevServer ? await getViteRPC().retrievePageAssetsDevRPC(clientDependencies, clientEntries) : await retrievePageAssetsDev(globalContext2._viteDevServer, clientDependencies, clientEntries) : retrievePageAssetsProd(globalContext2.assetsManifest, clientDependencies, clientEntries, globalContext2.config);
  let pageAssets = [];
  unique([...clientEntriesSrc, ...assetUrls]).forEach((src) => {
    const { mediaType = null, assetType = null } = inferMediaType(src) || {};
    if (isDev && assetType === "style") {
      if (src.endsWith("?inline")) {
        return;
      }
      src = src + "?direct";
    }
    const isEntry = clientEntriesSrc.includes(src) || // Vite automatically injects CSS, not only in development, but also in production (albeit with a FOUC). Therefore, strictly speaking, CSS aren't entries. We still, however, set `isEntry: true` for CSS, in order to denote page assets that should absolutely be injected in the HTML, regardless of preload strategy (not injecting CSS leads to FOUC).
    assetType === "style";
    pageAssets.push({
      src,
      assetType,
      mediaType,
      isEntry
    });
  });
  pageAssets.forEach(({ src }) => {
    assert(1 === pageAssets.filter((p4) => p4.src === src).length);
  });
  pageAssets = pageAssets.map((pageAsset) => {
    const baseServerAssets = pageContext._baseAssets || pageContext._baseServer;
    pageAsset.src = prependBase(toPosixPath(pageAsset.src), baseServerAssets);
    return pageAsset;
  });
  await sortPageAssetsForEarlyHintsHeader(pageAssets, isProduction);
  return pageAssets;
}
var init_getPageAssets = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/getPageAssets.js"() {
    init_retrievePageAssetsProd();
    init_retrievePageAssetsDev();
    init_inferMediaType();
    init_sortPageAssetsForEarlyHintsHeader();
    init_utils();
  }
});

// node_modules/vike/dist/shared-server-client/page-configs/findPageConfig.js
function findPageConfig(pageConfigs, pageId) {
  const result = pageConfigs.filter((p4) => p4.pageId === pageId);
  assert(result.length <= 1);
  const pageConfig = result[0] ?? null;
  return pageConfig;
}
var init_findPageConfig = __esm({
  "node_modules/vike/dist/shared-server-client/page-configs/findPageConfig.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/shared-server-client/getPageFiles/analyzeClientSide.js
function analyzeClientSide(pageConfig, pageFilesAll, pageId) {
  if (pageConfig) {
    const isClientRouting = getConfigValueRuntime(pageConfig, "clientRouting", "boolean")?.value ?? false;
    const isClientRuntimeLoaded = getConfigValueRuntime(pageConfig, "isClientRuntimeLoaded", "boolean")?.value ?? false;
    return { isClientRuntimeLoaded, isClientRouting };
  } else {
    const { isHtmlOnly, isClientRouting } = analyzePageClientSide(pageFilesAll, pageId);
    return { isClientRuntimeLoaded: !isHtmlOnly, isClientRouting };
  }
}
var init_analyzeClientSide = __esm({
  "node_modules/vike/dist/shared-server-client/getPageFiles/analyzeClientSide.js"() {
    init_getConfigValueRuntime();
    init_analyzePageClientSide();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/analyzePage.js
function analyzePage(pageContext) {
  const { pageId, _pageConfig: pageConfig, _globalContext: globalContext2 } = pageContext;
  const { _pageFilesAll: pageFilesAll } = globalContext2;
  if (pageConfig) {
    const { isClientRuntimeLoaded, isClientRouting } = analyzeClientSide(pageConfig, pageFilesAll, pageId);
    const clientEntries = [];
    const clientFilePath = getConfigValueRuntime(pageConfig, "client", "string")?.value ?? null;
    if (clientFilePath)
      clientEntries.push(clientFilePath);
    if (isClientRuntimeLoaded)
      clientEntries.push(getVikeClientEntry(isClientRouting));
    const clientDependencies = [];
    clientDependencies.push({
      id: generateVirtualFileId({ type: "page-entry", pageId: pageConfig.pageId, isForClientSide: true }),
      onlyAssets: isClientRuntimeLoaded ? false : true,
      eagerlyImported: false
    });
    if (!globalContext2._isProduction) {
      clientDependencies.push({
        id: generateVirtualFileId({ type: "page-entry", pageId: pageConfig.pageId, isForClientSide: false }),
        onlyAssets: true,
        eagerlyImported: false
      });
    }
    clientEntries.forEach((clientEntry) => {
      clientDependencies.push({
        id: clientEntry,
        onlyAssets: false,
        eagerlyImported: false
      });
    });
    return {
      isHtmlOnly: !isClientRuntimeLoaded,
      isClientRouting,
      clientEntries,
      clientDependencies,
      // pageFilesClientSide and pageFilesServerSide are only used for debugging
      pageFilesClientSide: [],
      pageFilesServerSide: []
    };
  } else {
    return analyzePageClientSide(pageFilesAll, pageId);
  }
}
var init_analyzePage = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/analyzePage.js"() {
    init_determineClientEntry();
    init_analyzePageClientSide();
    init_virtualFileId2();
    init_analyzeClientSide();
    init_getConfigValueRuntime();
  }
});

// node_modules/vike/dist/shared-server-client/page-configs/loadAndParseVirtualFilePageEntry.js
async function loadAndParseVirtualFilePageEntry(pageConfig, isDev) {
  if ("isPageEntryLoaded" in pageConfig && // We don't need to cache in dev, since Vite already caches the virtual module
  !isDev) {
    return pageConfig;
  }
  const { moduleId, moduleExportsPromise } = pageConfig.loadVirtualFilePageEntry();
  const moduleExports = await moduleExportsPromise;
  assertVirtualFileExports(moduleExports, () => "configValuesSerialized" in moduleExports, moduleId);
  const virtualFileExportsPageEntry = moduleExports;
  const configValues = parseVirtualFileExportsPageEntry(virtualFileExportsPageEntry);
  Object.assign(pageConfig.configValues, configValues);
  objectAssign(pageConfig, { isPageEntryLoaded: true });
  return pageConfig;
}
function parseVirtualFileExportsPageEntry(virtualFileExportsPageEntry) {
  const configValues = parseConfigValuesSerialized(virtualFileExportsPageEntry.configValuesSerialized);
  return configValues;
}
var init_loadAndParseVirtualFilePageEntry = __esm({
  "node_modules/vike/dist/shared-server-client/page-configs/loadAndParseVirtualFilePageEntry.js"() {
    init_utils5();
    init_parsePageConfigsSerialized();
    init_assertVirtualFileExports();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/preparePageContextForPublicUsageServer.js
function preparePageContextForPublicUsageServer(pageContext) {
  assertPropertyGetters(pageContext);
  const pageContextPublic = preparePageContextForPublicUsage(pageContext);
  return pageContextPublic;
}
var init_preparePageContextForPublicUsageServer = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/preparePageContextForPublicUsageServer.js"() {
    init_preparePageContextForPublicUsage();
  }
});

// node_modules/vike/dist/shared-server-node/getFileSuffixes.js
function getFileSuffixes(fileName) {
  return suffixes.filter((suffix) => fileName.includes(`.${suffix}.`));
}
var suffixesAssertFileEnv, suffixes;
var init_getFileSuffixes = __esm({
  "node_modules/vike/dist/shared-server-node/getFileSuffixes.js"() {
    suffixesAssertFileEnv = [
      // .server.js
      "server",
      // .client.js
      "client",
      // .ssr.js
      "ssr"
    ];
    suffixes = [
      ...suffixesAssertFileEnv,
      // .shared.js
      "shared",
      // .clear.js
      "clear",
      // .default.js
      "default"
    ];
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/execHookServer.js
async function execHookServer(hookName, pageContext) {
  const allHooks = getHookFromPageContextNew(hookName, pageContext);
  const hooks = !pageContext.isClientSideNavigation ? allHooks : (
    // Don't execute `.ssr.js` hooks upon client-side navigation
    allHooks.filter((hook) => !getFileSuffixes(hook.hookFilePath).includes("ssr"))
  );
  return await execHookDirect(hooks, pageContext, preparePageContextForPublicUsageServer);
}
var init_execHookServer = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/execHookServer.js"() {
    init_execHook();
    init_preparePageContextForPublicUsageServer();
    init_getHook();
    init_getFileSuffixes();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/loadPageConfigsLazyServerSide.js
async function loadPageConfigsLazyServerSide(pageContext) {
  objectAssign(pageContext, {
    _pageConfig: findPageConfig(pageContext._globalContext._pageConfigs, pageContext.pageId)
  });
  objectAssign(pageContext, await loadPageUserFiles(pageContext));
  updateType(pageContext, await resolvePageContext(pageContext));
  await execHookServer("onCreatePageContext", pageContext);
  return pageContext;
}
async function resolvePageContext(pageContext) {
  const { isHtmlOnly, clientEntries, clientDependencies } = analyzePage(pageContext);
  const passToClient = [];
  const errMsgSuffix = " should be an array of strings.";
  const isV1Design = !!pageContext._pageConfig;
  if (!isV1Design) {
    pageContext.exportsAll.passToClient?.forEach((e) => {
      assertUsage(hasProp(e, "exportValue", "string[]"), `${e.exportSource}${errMsgSuffix}`);
      passToClient.push(...e.exportValue);
    });
  } else {
    pageContext.from.configsCumulative.passToClient?.values.forEach((v2) => {
      const { value, definedAt } = v2;
      const errMsg = `+passToClient value defined at ${definedAt}${errMsgSuffix}`;
      assertUsage(isArray(value), `+passToClient value defined at ${definedAt} should be an array`);
      const valS = value.map((el) => {
        if (isObject(el)) {
          assertWarning2(!("once" in el), "The passToClient once setting is deprecated and no longer has any effect. Instead, see the upcoming .once.js suffix (see https://github.com/vikejs/vike/issues/2566 for more information).", { onlyOnce: true });
          assertUsage(hasProp(el, "prop", "string"), errMsg);
          return el.prop;
        }
        assertUsage(typeof el === "string", errMsg);
        return el;
      });
      passToClient.push(...valS);
    });
  }
  objectAssign(pageContext, await resolvePageContextCspNone(pageContext));
  objectAssign(pageContext, {
    Page: pageContext.exports.Page,
    _isHtmlOnly: isHtmlOnly,
    _passToClient: passToClient
  });
  objectAssign(pageContext, await resolveHeadersResponseEarly(pageContext));
  objectAssign(pageContext, {
    __getPageAssets: async () => {
      if ("_pageAssets" in pageContext) {
        return pageContext._pageAssets;
      } else {
        const pageAssets = await getPageAssets(pageContext, clientDependencies, clientEntries);
        objectAssign(pageContext, { _pageAssets: pageAssets });
        return pageContext._pageAssets;
      }
    }
  });
  Object.assign(pageContext, {
    _getPageAssets: async () => {
      assertWarning2(false, "pageContext._getPageAssets() deprecated, see https://vike.dev/preloading", {
        onlyOnce: true,
        showStackTrace: true
      });
      const pageAssetsOldFormat = [];
      (await pageContext.__getPageAssets()).forEach((p4) => {
        if (p4.assetType === "script" && p4.isEntry) {
          pageAssetsOldFormat.push({
            src: p4.src,
            preloadType: null,
            assetType: "script",
            mediaType: p4.mediaType
          });
        }
        pageAssetsOldFormat.push({
          src: p4.src,
          preloadType: p4.assetType,
          assetType: p4.assetType === "style" ? "style" : "preload",
          mediaType: p4.mediaType
        });
      });
      return pageAssetsOldFormat;
    }
  });
  return pageContext;
}
async function loadPageUserFiles(pageContext) {
  const [{ pageContextAddendum }] = await Promise.all([
    (async () => {
      const pageFilesServerSide = getPageFilesServerSide(pageContext._pageFilesAll, pageContext.pageId);
      const isDev = !pageContext._globalContext._isProduction;
      const pageConfigLoaded = !pageContext._pageConfig ? null : await loadAndParseVirtualFilePageEntry(pageContext._pageConfig, isDev);
      await Promise.all(pageFilesServerSide.map((p4) => p4.loadFile?.()));
      const pageContextAddendum2 = resolvePageContextConfig(pageFilesServerSide, pageConfigLoaded, pageContext._globalContext._pageConfigGlobal);
      return { pageContextAddendum: pageContextAddendum2 };
    })(),
    analyzePageClientSideInit(pageContext._globalContext._pageFilesAll, pageContext.pageId, {
      sharedPageFilesAlreadyLoaded: true
    })
  ]);
  return pageContextAddendum;
}
var init_loadPageConfigsLazyServerSide = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/loadPageConfigsLazyServerSide.js"() {
    init_getPageFiles();
    init_resolveVikeConfigPublic();
    init_analyzePageClientSide();
    init_utils();
    init_getPageAssets();
    init_findPageConfig();
    init_analyzePage();
    init_loadAndParseVirtualFilePageEntry();
    init_execHookServer();
    init_headersResponse();
    init_csp();
  }
});

// node_modules/vike/dist/shared-server-client/assertHookReturnedObject.js
function assertHookReturnedObject(obj, keysExpected, errPrefix) {
  assert(!errPrefix.endsWith(" "));
  const keysUnknown = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (!keysExpected.includes(key)) {
      keysUnknown.push(key);
    }
  }
  assertUsage(keysUnknown.length === 0, [
    errPrefix,
    "returned an object with following unknown keys:",
    stringifyStringArray(keysUnknown) + ".",
    "Only following keys are allowed:",
    stringifyStringArray(keysExpected) + "."
  ].join(" "));
}
var init_assertHookReturnedObject = __esm({
  "node_modules/vike/dist/shared-server-client/assertHookReturnedObject.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/execHookOnRenderHtml.js
async function execHookOnRenderHtml(pageContext) {
  const hook = getRenderHook(pageContext);
  objectAssign(pageContext, { _renderHook: hook });
  const { hookReturn } = await execHookDirectSingleWithReturn(hook, pageContext, preparePageContextForPublicUsageServer);
  const { documentHtml, pageContextProvidedByRenderHook, pageContextPromise, injectFilter } = processHookReturnValue(hookReturn, hook);
  Object.assign(pageContext, pageContextProvidedByRenderHook);
  objectAssign(pageContext, { _pageContextPromise: pageContextPromise });
  const onErrorWhileStreaming = (err2) => {
    logRuntimeError(err2, pageContext);
    if (!pageContext.errorWhileRendering) {
      pageContext.errorWhileRendering = err2;
    }
  };
  const htmlRender = await renderDocumentHtml(documentHtml, pageContext, onErrorWhileStreaming, injectFilter);
  assert(typeof htmlRender === "string" || isStream(htmlRender));
  return { htmlRender, renderHook: hook };
}
function getRenderHook(pageContext) {
  let hookFound;
  {
    let hook;
    let hookName = void 0;
    hook = getHookFromPageContext(pageContext, "onRenderHtml");
    if (hook) {
      hookName = "onRenderHtml";
    } else {
      hook = getHookFromPageContext(pageContext, "render");
      if (hook) {
        hookName = "render";
      }
    }
    if (hook) {
      assert(hookName);
      const { hookFilePath, hookFn, hookTimeout } = hook;
      hookFound = { hookFn, hookFilePath, hookName, hookTimeout };
    }
  }
  if (!hookFound) {
    const hookName = pageContext._globalContext._pageConfigs.length > 0 ? "onRenderHtml" : "render";
    assertUsage(false, `No ${hookName}() hook found, see https://vike.dev/${hookName}`);
  }
  return hookFound;
}
function processHookReturnValue(hookReturnValue, renderHook) {
  let documentHtml;
  let pageContextPromise = null;
  let pageContextProvidedByRenderHook = null;
  let injectFilter = null;
  if (isDocumentHtml(hookReturnValue)) {
    documentHtml = hookReturnValue;
    return { documentHtml, pageContextProvidedByRenderHook, pageContextPromise, injectFilter };
  }
  const errPrefix = `The ${renderHook.hookName}() hook defined at ${renderHook.hookFilePath}`;
  const errSuffix = `a string generated with ${picocolors_default.cyan("escapeInject`<html>...</html>`")} or the value returned by ${picocolors_default.cyan("dangerouslySkipEscape()")}, see https://vike.dev/escapeInject`;
  if (typeof hookReturnValue === "string") {
    assertWarning2(false, [
      errPrefix,
      `returned a plain JavaScript string which is ${picocolors_default.red(picocolors_default.bold("dangerous"))}: it should instead return`,
      errSuffix
    ].join(" "), { onlyOnce: true });
    hookReturnValue = dangerouslySkipEscape(hookReturnValue);
  }
  const wrongReturnValue = `should return the value ${picocolors_default.cyan("documentHtml")} or an object ${picocolors_default.cyan("{ documentHtml }")} where ${picocolors_default.cyan("documentHtml")} is ${errSuffix}`;
  assertUsage(isObject(hookReturnValue), `${errPrefix} ${wrongReturnValue}`);
  assertHookReturnedObject(hookReturnValue, ["documentHtml", "pageContext", "injectFilter"], errPrefix);
  assertUsage(hookReturnValue.documentHtml, `${errPrefix} returned an object that is missing the ${picocolors_default.code("documentHtml")} property: it ${wrongReturnValue}`);
  if (hookReturnValue.injectFilter) {
    assertUsage(isCallable(hookReturnValue.injectFilter), "injectFilter should be a function");
    injectFilter = hookReturnValue.injectFilter;
  }
  {
    let val = hookReturnValue.documentHtml;
    const errBegin = `${errPrefix} returned ${picocolors_default.cyan("{ documentHtml }")}, but ${picocolors_default.cyan("documentHtml")}`;
    if (typeof val === "string") {
      assertWarning2(false, [
        errBegin,
        `is a plain JavaScript string which is ${picocolors_default.bold(picocolors_default.red("dangerous"))}: ${picocolors_default.cyan("documentHtml")} should be`,
        errSuffix
      ].join(" "), { onlyOnce: true });
      val = dangerouslySkipEscape(val);
    }
    assertUsage(isDocumentHtml(val), [errBegin, "should be", errSuffix].join(" "));
    documentHtml = val;
  }
  if (hookReturnValue.pageContext) {
    const val = hookReturnValue.pageContext;
    const errBegin = `${errPrefix} returned ${picocolors_default.cyan("{ pageContext }")}, but ${picocolors_default.cyan("pageContext")}`;
    if (isPromise(val) || isCallable(val)) {
      assertWarning2(!isPromise(val), `${errBegin} is a promise which is deprecated in favor of async functions, see https://vike.dev/streaming#initial-data-after-stream-end`, { onlyOnce: true });
      pageContextPromise = val;
    } else {
      assertUsage(isObject(val), `${errBegin} should be an object or an async function, see https://vike.dev/streaming#initial-data-after-stream-end`);
      assertPageContextProvidedByUser(val, renderHook);
      pageContextProvidedByRenderHook = val;
    }
  }
  return { documentHtml, pageContextProvidedByRenderHook, pageContextPromise, injectFilter };
}
var init_execHookOnRenderHtml = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/execHookOnRenderHtml.js"() {
    init_renderHtml();
    init_getHook();
    init_utils();
    init_stream();
    init_assertPageContextProvidedByUser();
    init_preparePageContextForPublicUsageServer();
    init_assertHookReturnedObject();
    init_loggerRuntime();
    init_picocolors();
    init_execHook();
  }
});

// node_modules/vike/dist/shared-server-client/assertOnBeforeRenderHookReturn.js
function assertOnBeforeRenderHookReturn(hookReturnValue, hookFilePath) {
  if (hookReturnValue === void 0 || hookReturnValue === null) {
    return;
  }
  const errPrefix = `The onBeforeRender() hook defined by ${hookFilePath}`;
  assertUsage(isPlainObject(hookReturnValue), `${errPrefix} should return a plain JavaScript object, ${picocolors_default.cyan("undefined")}, or ${picocolors_default.cyan("null")}`);
  assertHookReturnedObject(hookReturnValue, ["pageContext"], errPrefix);
  if (hookReturnValue.pageContext) {
    assertPageContextProvidedByUser(hookReturnValue["pageContext"], { hookName: "onBeforeRender", hookFilePath });
  }
}
var init_assertOnBeforeRenderHookReturn = __esm({
  "node_modules/vike/dist/shared-server-client/assertOnBeforeRenderHookReturn.js"() {
    init_utils5();
    init_assertPageContextProvidedByUser();
    init_assertHookReturnedObject();
    init_picocolors();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/execHookDataAndOnBeforeRender.js
async function execHookDataAndOnBeforeRender(pageContext) {
  if (pageContext._pageContextAlreadyProvidedByOnPrerenderHook) {
    return;
  }
  const hooks = await execHookServer("data", pageContext);
  const dataHook = hooks[0];
  if (dataHook) {
    const pageContextFromHook = {
      data: dataHook.hookReturn
    };
    Object.assign(pageContext, pageContextFromHook);
    if (!pageContext.isClientSideNavigation) {
      await execHookServer("onData", pageContext);
    }
  }
  const res = await execHookServer("onBeforeRender", pageContext);
  const onBeforeRenderHook = res[0];
  if (onBeforeRenderHook) {
    const { hookReturn } = onBeforeRenderHook;
    assertOnBeforeRenderHookReturn(hookReturn, onBeforeRenderHook.hookFilePath);
    const pageContextFromHook = hookReturn?.pageContext;
    Object.assign(pageContext, pageContextFromHook);
  }
}
var init_execHookDataAndOnBeforeRender = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/execHookDataAndOnBeforeRender.js"() {
    init_assertOnBeforeRenderHookReturn();
    init_execHookServer();
  }
});

// node_modules/vike/dist/shared-server-client/route/execHookGuard.js
async function execHookGuard(pageContext, prepareForPublicUsage) {
  let hook;
  if (pageContext._globalContext._pageFilesAll.length > 0) {
    assert(pageContext._globalContext._pageConfigs.length === 0);
    hook = findPageGuard(pageContext.pageId, pageContext._globalContext._pageFilesAll);
  } else {
    hook = getHookFromPageContext(pageContext, "guard");
  }
  if (!hook)
    return;
  await execHookDirectSingle(hook, pageContext, prepareForPublicUsage);
}
function findPageGuard(pageId, pageFilesAll) {
  const pageRouteFile = pageFilesAll.find((p4) => p4.pageId === pageId && p4.fileType === ".page.route");
  if (!pageRouteFile)
    return null;
  const { filePath, fileExports } = pageRouteFile;
  assert(fileExports);
  const hookFn = fileExports.guard;
  if (!hookFn)
    return null;
  const hookFilePath = filePath;
  const hookTimeout = getHookTimeoutDefault("guard");
  assertUsage(isCallable(hookFn), `${errIntro} ${hookFilePath} should be a function`);
  return { hookFn, hookName: "guard", hookFilePath, hookTimeout };
}
var errIntro;
var init_execHookGuard = __esm({
  "node_modules/vike/dist/shared-server-client/route/execHookGuard.js"() {
    init_getHook();
    init_utils6();
    init_execHook();
    errIntro = "The guard() hook defined by";
  }
});

// node_modules/vike/dist/server/runtime/asyncHook.js
async function install() {
  let mod;
  try {
    mod = await import_("node:async_hooks");
  } catch {
    return;
  }
  globalObject13.asyncLocalStorage = new mod.AsyncLocalStorage();
}
async function getAsyncLocalStorage() {
  await globalObject13.installPromise;
  return globalObject13.asyncLocalStorage;
}
function getAsyncStore() {
  if (globalObject13.asyncLocalStorage === null)
    return null;
  const asyncStore = globalObject13.asyncLocalStorage.getStore();
  assert(asyncStore === void 0 || isObject(asyncStore));
  return asyncStore ?? null;
}
function getPageContext_withAsyncHook() {
  const asyncStore = getAsyncStore();
  const pageContext = asyncStore?.pageContext;
  if (!pageContext)
    return null;
  return preparePageContextForPublicUsageServer(pageContext);
}
var globalObject13;
var init_asyncHook = __esm({
  "node_modules/vike/dist/server/runtime/asyncHook.js"() {
    init_preparePageContextForPublicUsageServer();
    init_utils();
    init_esm();
    assertIsNotBrowser();
    globalObject13 = getGlobalObject("server/runtime/asyncHook.ts", {
      asyncLocalStorage: null,
      installPromise: install()
    });
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/renderPageServerAfterRoute.js
async function renderPageServerAfterRoute(pageContext) {
  assert(hasProp(pageContext, "pageId", "string"));
  const isError2 = pageContext.is404 || !!pageContext.errorWhileRendering;
  assert(isError2 === (pageContext.pageId === getErrorPageId(pageContext._globalContext._pageFilesAll, pageContext._globalContext._pageConfigs)));
  updateType(pageContext, await loadPageConfigsLazyServerSide(pageContext));
  if (!isError2) {
    await execHookGuard(pageContext, (pageContext2) => preparePageContextForPublicUsageServer(pageContext2));
  }
  if (!isError2) {
    await execHookDataAndOnBeforeRender(pageContext);
  } else {
    try {
      await execHookDataAndOnBeforeRender(pageContext);
    } catch (err2) {
      if (isSameErrorMessage(err2, pageContext.errorWhileRendering)) {
        logRuntimeError(err2, pageContext);
      }
    }
  }
  if (pageContext.isClientSideNavigation) {
    if (isError2) {
      objectAssign(pageContext, { [isServerSideError]: true });
    }
    const pageContextSerialized = getPageContextClientSerialized(pageContext, false);
    const httpResponse2 = await createHttpResponsePageContextJson(pageContextSerialized);
    objectAssign(pageContext, { httpResponse: httpResponse2 });
    return pageContext;
  }
  const renderHookResult = await execHookOnRenderHtml(pageContext);
  const { htmlRender, renderHook } = renderHookResult;
  const httpResponse = await createHttpResponsePage(htmlRender, renderHook, pageContext);
  objectAssign(pageContext, { httpResponse });
  return pageContext;
}
var init_renderPageServerAfterRoute = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/renderPageServerAfterRoute.js"() {
    init_error_page();
    init_renderHtml();
    init_utils();
    init_serializeContext();
    init_createHttpResponse();
    init_loadPageConfigsLazyServerSide();
    init_execHookOnRenderHtml();
    init_execHookDataAndOnBeforeRender();
    init_loggerRuntime();
    init_preparePageContextForPublicUsageServer();
    init_execHookGuard();
    init_picocolors();
    init_isServerSideError();
    init_asyncHook();
  }
});

// node_modules/vike/dist/shared-server-client/getPageContextUrlComputed.js
function getPageContextUrlComputed(pageContext) {
  assert(typeof pageContext.urlOriginal === "string");
  assertPropertyGetters(pageContext);
  const pageContextUrlComputed = {};
  objectDefineProperty(pageContextUrlComputed, "urlPathname", {
    get: urlPathnameGetter,
    enumerable: true,
    configurable: true
  });
  objectDefineProperty(pageContextUrlComputed, "url", {
    get: urlGetter,
    enumerable: false,
    configurable: true
  });
  objectDefineProperty(pageContextUrlComputed, "urlParsed", {
    get: urlParsedGetter,
    enumerable: true,
    configurable: true
  });
  return pageContextUrlComputed;
}
function getUrlParsed(pageContext) {
  const assertUrlResolved = (src) => assert(
    typeof urlResolved === "string",
    // TO-DO/eventually: remove debug logs, see:
    // - https://github.com/vikejs/vike/issues/2138#issuecomment-2631713411
    // - https://github.com/vikejs/vike/commit/5c7810f3080ab62536950f26e019bb2a3a517082
    { src, urlResolved }
  );
  let urlResolved;
  let isBaseToBeRemoved;
  if (pageContext.urlLogical) {
    urlResolved = pageContext.urlLogical;
    isBaseToBeRemoved = false;
    assertUrlResolved(1);
  } else if (pageContext._urlRewrite) {
    urlResolved = pageContext._urlRewrite;
    isBaseToBeRemoved = false;
    assertUrlResolved(2);
  } else {
    urlResolved = pageContext.urlOriginal;
    isBaseToBeRemoved = true;
    assertUrlResolved(3);
  }
  assertUrlResolved(4);
  let urlHandler = pageContext._urlHandler;
  if (!urlHandler)
    urlHandler = (url5) => url5;
  urlResolved = urlHandler(urlResolved);
  const baseServer2 = !isBaseToBeRemoved ? "/" : pageContext._baseServer;
  return parseUrl(urlResolved, baseServer2);
}
function urlPathnameGetter() {
  const { pathname } = getUrlParsed(this);
  const urlPathname = pathname;
  assert(urlPathname.startsWith("/"));
  return urlPathname;
}
function urlGetter() {
  assertWarning2(false, "`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vike.dev/migration/0.4.23 for more information.)", { onlyOnce: true, showStackTrace: true });
  return urlPathnameGetter.call(this);
}
function urlParsedGetter() {
  const {
    // remove isBaseMissing as it isn't part of UrlPublic
    isBaseMissing: _4,
    ...urlParsed
  } = getUrlParsed(this);
  const hashIsAvailable = isBrowser2();
  const warnHashNotAvailable = (prop) => {
    assertWarning2(hashIsAvailable, `pageContext.urlParsed.${prop} isn't available on the server-side (HTTP requests don't include the URL hash)`, { onlyOnce: true, showStackTrace: true });
  };
  const urlParsedEnhanced = {
    ...urlParsed,
    get hash() {
      warnHashNotAvailable("hash");
      return urlParsed.hash;
    },
    get hashOriginal() {
      warnHashNotAvailable("hashOriginal");
      return urlParsed.hashOriginal;
    },
    // TO-DO/next-major-release: remove
    get hashString() {
      assertWarning2(false, "pageContext.urlParsed.hashString has been renamed to pageContext.urlParsed.hashOriginal", {
        onlyOnce: true,
        showStackTrace: true
      });
      warnHashNotAvailable("hashString");
      return urlParsed.hashOriginal;
    },
    // TO-DO/next-major-release: remove
    get searchString() {
      assertWarning2(false, "pageContext.urlParsed.searchString has been renamed to pageContext.urlParsed.searchOriginal", { onlyOnce: true, showStackTrace: true });
      return urlParsed.searchOriginal;
    }
  };
  changeEnumerable(urlParsedEnhanced, "hashString", false);
  changeEnumerable(urlParsedEnhanced, "searchString", false);
  if (!hashIsAvailable) {
    changeEnumerable(urlParsedEnhanced, "hash", false);
    changeEnumerable(urlParsedEnhanced, "hashOriginal", false);
  }
  return urlParsedEnhanced;
}
var init_getPageContextUrlComputed = __esm({
  "node_modules/vike/dist/shared-server-client/getPageContextUrlComputed.js"() {
    init_objectDefineProperty();
    init_preparePageContextForPublicUsage();
    init_utils5();
  }
});

// node_modules/vike/dist/shared-server-client/createPageContextShared.js
function createPageContextShared(pageContextCreated, globalConfigPublic) {
  objectAssign(pageContextCreated, globalConfigPublic);
  return pageContextCreated;
}
function createPageContextObject() {
  const pageContext = {
    _isOriginalObject: true,
    isPageContext: true
  };
  changeEnumerable(pageContext, "_isOriginalObject", false);
  return pageContext;
}
var init_createPageContextShared = __esm({
  "node_modules/vike/dist/shared-server-client/createPageContextShared.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/createPageContextServerSide.js
function createPageContextServerSide(pageContextInit, globalContext2, args) {
  assert(pageContextInit.urlOriginal);
  const pageContextCreated = createPageContext(pageContextInit, args.isPrerendering, args.requestId);
  objectAssign(pageContextCreated, {
    _globalContext: globalContext2,
    _pageFilesAll: globalContext2._pageFilesAll,
    // TO-DO/next-major-release: remove
    // We use pageContext._baseServer and pageContext._baseAssets instead of pageContext._globalContext.baseServer and pageContext._globalContext.baseAssets because the Base URLs can (eventually one day if needed) be made non-global
    _baseServer: globalContext2.baseServer,
    _baseAssets: globalContext2.baseAssets,
    _pageContextInit: pageContextInit,
    _urlHandler: args.isPrerendering ? null : args.urlHandler,
    isClientSideNavigation: args.isPrerendering ? false : args.isClientSideNavigation
  });
  objectAssign(pageContextCreated, globalContext2._globalConfigPublic);
  const pageContextUrlComputed = getPageContextUrlComputed(pageContextCreated);
  objectAssign(pageContextCreated, pageContextUrlComputed);
  {
    let headers;
    if (pageContextInit.headersOriginal) {
      headers = normalizeHeaders(pageContextInit.headersOriginal);
      assertUsage(!("headers" in pageContextInit), "You're defining pageContextInit.headersOriginal as well as pageContextInit.headers but you should only define pageContextInit.headersOriginal instead, see https://vike.dev/headers");
    } else if (pageContextInit.headers) {
      headers = pageContextInit.headers;
      assertWarning2(false, "Setting pageContextInit.headers is deprecated: set pageContextInit.headersOriginal instead, see https://vike.dev/headers", { onlyOnce: true });
    } else {
      headers = null;
    }
    objectAssign(pageContextCreated, { headers });
  }
  const pageContextAugmented = createPageContextShared(pageContextCreated, globalContext2._globalConfigPublic);
  updateType(pageContextCreated, pageContextAugmented);
  return pageContextCreated;
}
function createPageContextServerSideWithoutGlobalContext(pageContextInit, requestId) {
  const pageContext = createPageContext(pageContextInit, false, requestId);
  return pageContext;
}
function createPageContext(pageContextInit, isPrerendering, requestId) {
  const pageContext = createPageContextObject();
  objectAssign(pageContext, {
    isClientSide: false,
    isPrerendering,
    _requestId: requestId
  });
  objectAssign(pageContext, pageContextInit);
  return pageContext;
}
var init_createPageContextServerSide = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/createPageContextServerSide.js"() {
    init_utils();
    init_getPageContextUrlComputed();
    init_createPageContextShared();
  }
});

// node_modules/vike/dist/shared-server-client/getPageContextRequestUrl.js
var pageContextJsonFileExtension, doNotCreateExtraDirectory;
var init_getPageContextRequestUrl = __esm({
  "node_modules/vike/dist/shared-server-client/getPageContextRequestUrl.js"() {
    init_urlToFile();
    pageContextJsonFileExtension = ".pageContext.json";
    doNotCreateExtraDirectory = false;
  }
});

// node_modules/vike/dist/shared-server-client/modifyUrlSameOrigin.js
function modifyUrlSameOrigin(url5, modify) {
  const urlParsed = parseUrl(url5, "/");
  const pathname = modify.pathname ?? urlParsed.pathnameOriginal;
  assertUsageUrlPathAbsolute(pathname, "modify.pathname");
  let search = modify.search === null ? "" : !modify.search ? urlParsed.searchOriginal : resolveSearch(urlParsed, modify.search);
  if (search === "?")
    search = "";
  let hash;
  if (modify.hash === null) {
    hash = "";
  } else if (modify.hash === void 0) {
    hash = urlParsed.hashOriginal ?? "";
  } else {
    hash = modify.hash;
    if (!hash.startsWith("#"))
      hash = "#" + hash;
  }
  const urlModified = createUrlFromComponents(urlParsed.origin, pathname, search, hash);
  return urlModified;
}
function resolveSearch(urlParsed, modifySearch) {
  let searchParams;
  if (modifySearch instanceof URLSearchParams) {
    searchParams = modifySearch;
  } else {
    const searchMap = objectFilter({ ...urlParsed.search, ...objectFilter(modifySearch, isNotUndefined) }, isNotNullish_keyVal);
    searchParams = new URLSearchParams(searchMap);
  }
  return "?" + searchParams.toString();
}
function isNotUndefined(arg) {
  return arg[1] !== void 0;
}
var init_modifyUrlSameOrigin = __esm({
  "node_modules/vike/dist/shared-server-client/modifyUrlSameOrigin.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/shared-server-client/modifyUrl.js
function modifyUrl(url5, modify) {
  url5 = modifyUrlSameOrigin(url5, modify);
  const urlParsed = parseUrl(url5, "/");
  const originParts = [
    modify.protocol ?? urlParsed.protocol ?? "",
    modify.hostname ?? urlParsed.hostname ?? ""
  ];
  const port = modify.port ?? urlParsed.port;
  if (port || port === 0) {
    originParts.push(`:${port}`);
  }
  const origin = originParts.join("");
  const urlModified = createUrlFromComponents(origin, urlParsed.pathname, urlParsed.searchOriginal, urlParsed.hashOriginal);
  return urlModified;
}
var init_modifyUrl = __esm({
  "node_modules/vike/dist/shared-server-client/modifyUrl.js"() {
    init_modifyUrlSameOrigin();
    init_utils5();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/handlePageContextRequestUrl.js
function handlePageContextRequestUrl(url5) {
  const urlParsed = parseUrl(url5, baseServer);
  if (!isMatch(urlParsed)) {
    return {
      isPageContextJsonRequest: false,
      urlWithoutPageContextRequestSuffix: url5
    };
  } else {
    const { urlWithoutPageContextRequestSuffix, searchVikeArgs } = processUrl(urlParsed, url5);
    const previousUrl = parseSearchVikeArgs(searchVikeArgs);
    return {
      /* TO-DO/soon/once: pass & use previousUrl
      isPageContextJsonRequest: { previousUrl },
      /*/
      isPageContextJsonRequest: true,
      //*/
      urlWithoutPageContextRequestSuffix
    };
  }
}
function isMatch(urlParsed) {
  const { pathnameOriginal, pathname } = urlParsed;
  assert(pathname.endsWith(pageContextJsonFileExtension) === pathnameOriginal.endsWith(pageContextJsonFileExtension));
  return pathname.endsWith(pageContextJsonFileExtension);
}
function processUrl(urlParsed, url5) {
  const { pathnameOriginal, search } = urlParsed;
  assert(doNotCreateExtraDirectory === false);
  const urlSuffix = `/index${pageContextJsonFileExtension}`;
  assert(pathnameOriginal.endsWith(urlSuffix), { url: url5 });
  let pathnameModified = slice(pathnameOriginal, 0, -1 * urlSuffix.length);
  if (pathnameModified === "")
    pathnameModified = "/";
  const searchVikeArgs = search?._vike;
  const urlWithoutPageContextRequestSuffix = modifyUrl(url5, {
    pathname: pathnameModified,
    search: {
      _vike: searchVikeArgs ? null : void 0
    }
  });
  return {
    searchVikeArgs,
    urlWithoutPageContextRequestSuffix
  };
}
function parseSearchVikeArgs(searchVikeArgs) {
  const args = {
    previousUrl: null
  };
  if (searchVikeArgs) {
    const parsed = JSON.parse(searchVikeArgs);
    assert(isObject(parsed));
    if ("previousUrl" in parsed) {
      assert(hasProp(parsed, "previousUrl", "string"));
      args.previousUrl = parsed.previousUrl;
    }
  }
  return args;
}
var init_handlePageContextRequestUrl = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/handlePageContextRequestUrl.js"() {
    init_getPageContextRequestUrl();
    init_modifyUrl();
    init_utils();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/assertArguments.js
function assertArguments(...args) {
  const prefix2 = `${picocolors_default.code("renderPage(pageContextInit)")} (https://vike.dev/renderPage)`;
  const pageContextInit = args[0];
  assertUsage(pageContextInit !== void 0 && pageContextInit !== null, prefix2 + ` argument ${picocolors_default.cyan("pageContextInit")} is missing`, { showStackTrace: true });
  const len = args.length;
  assertUsage(len === 1, `${prefix2} called with ${len} arguments but renderPage() accepts only one argument.'`, {
    showStackTrace: true
  });
  assertUsage(isObject(pageContextInit), `${prefix2} called with ${picocolors_default.code(`typeof pageContextInit === ${JSON.stringify(typeof pageContextInit)}`)} but ${picocolors_default.code("pageContextInit")} should be an object.`, { showStackTrace: true });
  if ("url" in pageContextInit) {
    assertWarning2(false, "`pageContextInit.url` has been renamed to `pageContextInit.urlOriginal`: replace `renderPage({ url })` with `renderPage({ urlOriginal })`. (See https://vike.dev/migration/0.4.23 for more information.)", { showStackTrace: true, onlyOnce: true });
    pageContextInit.urlOriginal = pageContextInit.url;
    delete pageContextInit.url;
  }
  assert(!("url" in pageContextInit));
  assertUsage(hasProp(pageContextInit, "urlOriginal"), prefix2 + ` ${picocolors_default.cyan("pageContextInit")} is missing the property ${picocolors_default.cyan("pageContextInit.urlOriginal")}`, { showStackTrace: true });
  const { urlOriginal } = pageContextInit;
  assertUsage(typeof urlOriginal === "string", prefix2 + ` ${picocolors_default.cyan("pageContextInit.urlOriginal")} should be a string but ${picocolors_default.cyan(`typeof pageContextInit.urlOriginal === ${JSON.stringify(typeof urlOriginal)}`)}`, { showStackTrace: true });
  assertUsage(urlOriginal.startsWith("/") || urlOriginal.startsWith("https://") || urlOriginal.startsWith("http://"), prefix2 + ` ${picocolors_default.cyan("pageContextInit.urlOriginal")} should start with ${picocolors_default.cyan("/")} (e.g. ${picocolors_default.cyan("/product/42")}), ${picocolors_default.cyan("http://")}, or ${picocolors_default.cyan("https://")} (e.g. ${picocolors_default.cyan("https://example.com/product/42")}), but ${picocolors_default.cyan(`pageContextInit.urlOriginal === ${JSON.stringify(urlOriginal)}`)}`, { showStackTrace: true });
  const urlOriginalWithoutOrigin = urlOriginal.startsWith("http") ? urlOriginal : "http://fake-origin.example.org" + urlOriginal;
  try {
    new URL(urlOriginalWithoutOrigin);
  } catch (err2) {
    assertUsage(false, prefix2 + ` ${picocolors_default.cyan("pageContextInit.urlOriginal")} should be a URL but ${picocolors_default.cyan(`pageContextInit.urlOriginal === ${JSON.stringify(urlOriginal)}`)}`, { showStackTrace: true });
  }
}
var init_assertArguments = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/assertArguments.js"() {
    init_utils();
    init_picocolors();
  }
});

// node_modules/vike/dist/shared-server-client/route/noRouteMatch.js
var noRouteMatch;
var init_noRouteMatch = __esm({
  "node_modules/vike/dist/shared-server-client/route/noRouteMatch.js"() {
    noRouteMatch = "doesn't match the route of any of your pages";
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/log404/index.js
function log404(pageContext) {
  const { urlPathname } = pageContext;
  const pageRoutes = pageContext._globalContext._pageRoutes;
  assertUsage(pageRoutes.length > 0, "No page found.");
  const globalContext2 = pageContext._globalContext;
  if (!globalContext2._isProduction && !isFileRequest(urlPathname) && !pageContext.isClientSideNavigation) {
    const routesInfo = getRoutesInfo(pageRoutes);
    let msg = `URL ${picocolors_default.cyan(urlPathname)} ${noRouteMatch}`;
    const outro = "See https://vike.dev/routing for more information about routing.";
    if (!routesInfo) {
      msg = `${msg}. ${picocolors_default.dim(outro)}`;
    } else {
      msg = `${msg}:
${routesInfo}
${outro}`;
    }
    assertInfo(false, msg, { onlyOnce: false });
  }
}
function getRoutesInfo(pageRoutes) {
  const entries = pageRoutes.map((pageRoute) => {
    let routeStr;
    let routeTypeSrc;
    let routeDefinedBy;
    if (pageRoute.routeType === "FILESYSTEM") {
      assert(pageRoute.routeFilesystemDefinedBy);
      routeDefinedBy = pageRoute.routeFilesystemDefinedBy;
    } else {
      assert(pageRoute.routeDefinedAtString);
      routeDefinedBy = pageRoute.routeDefinedAtString;
    }
    if (pageRoute.routeType === "STRING") {
      routeStr = pageRoute.routeString;
      routeTypeSrc = "Route String";
    } else if (pageRoute.routeType === "FUNCTION") {
      routeStr = String(pageRoute.routeFunction);
      routeTypeSrc = "Route Function";
    } else {
      routeStr = pageRoute.routeString;
      routeTypeSrc = "Filesystem Route";
    }
    assert(routeStr && routeTypeSrc && routeDefinedBy);
    return { routeStr, routeTypeSrc, routeDefinedBy };
  }).sort((e1, e2) => {
    if (e1.routeTypeSrc !== "Route Function" && e2.routeTypeSrc === "Route Function") {
      return -1;
    }
    if (e1.routeTypeSrc === "Route Function" && e2.routeTypeSrc !== "Route Function") {
      return 1;
    }
    return compareString(e1.routeStr, e2.routeStr);
  });
  const linesContent = [
    {
      routeStr: "ROUTE",
      routeTypeSrc: "TYPE",
      routeDefinedBy: "DEFINED BY"
    },
    ...entries
  ];
  const terminalWidth = getTerminalWidth() || 134;
  let width2 = Math.max(...linesContent.map(({ routeTypeSrc }) => stripAnsi2(routeTypeSrc).length));
  let width3 = Math.max(...linesContent.map(({ routeDefinedBy }) => stripAnsi2(routeDefinedBy).length));
  const width1_max = terminalWidth - width3 - width2 - // Total width of table border & padding
  10;
  if (width1_max < 10)
    return null;
  linesContent.forEach((lineContent) => {
    let { routeStr } = lineContent;
    if (lineContent.routeTypeSrc === "Route Function") {
      routeStr = truncateRouteFunction(routeStr, width1_max);
      assert(stripAnsi2(routeStr).length <= width1_max);
    }
    lineContent.routeStr = routeStr;
  });
  let width1 = Math.max(...linesContent.map(({ routeStr }) => stripAnsi2(routeStr).length));
  if (width1 > width1_max)
    return null;
  let lines = linesContent.map(({ routeStr, routeTypeSrc, routeDefinedBy }, i3) => {
    let cell1 = padEnd(routeStr, width1 + (stripAnsi2(routeStr).length - stripAnsi2(routeStr).length));
    let cell2 = padEnd(routeTypeSrc, width2);
    let cell3 = padEnd(routeDefinedBy, width3);
    const isHeader = i3 === 0;
    if (isHeader) {
      cell1 = picocolors_default.dim(cell1);
      cell2 = picocolors_default.dim(cell2);
      cell3 = picocolors_default.dim(cell3);
    }
    let line = [cell1, cell2, cell3].join(picocolors_default.dim(" \u2502 "));
    line = picocolors_default.dim("\u2502 ") + line + picocolors_default.dim(" \u2502");
    return line;
  });
  width1 = width1 + 2;
  width2 = width2 + 2;
  width3 = width3 + 2;
  lines = [
    picocolors_default.dim(`\u250C${"\u2500".repeat(width1)}\u252C${"\u2500".repeat(width2)}\u252C${"\u2500".repeat(width3)}\u2510`),
    lines[0],
    picocolors_default.dim(`\u251C${"\u2500".repeat(width1)}\u253C${"\u2500".repeat(width2)}\u253C${"\u2500".repeat(width3)}\u2524`),
    ...lines.slice(1),
    picocolors_default.dim(`\u2514${"\u2500".repeat(width1)}\u2534${"\u2500".repeat(width2)}\u2534${"\u2500".repeat(width3)}\u2518`)
  ];
  lines.forEach((line) => {
    assert(stripAnsi2(line).length <= terminalWidth);
  });
  return lines.join("\n");
}
function truncateRouteFunction(routeStr, lenMax) {
  routeStr = stripAnsi2(routeStr);
  routeStr = removeNonAscii(routeStr);
  routeStr = routeStr.split(/\s/).filter(Boolean).join(" ");
  routeStr = truncateString(routeStr, lenMax);
  return routeStr;
}
function padEnd(str, width) {
  const padWidth = Math.max(0, width - stripAnsi2(str).length);
  return str + "".padEnd(padWidth, " ");
}
function removeNonAscii(str) {
  return str.replace(/[^\x00-\x7F]/g, "");
}
function isFileRequest(urlPathname) {
  assert(urlPathname.startsWith("/"));
  const paths = urlPathname.split("/");
  const lastPath = paths[paths.length - 1];
  assert(typeof lastPath === "string");
  const parts = lastPath.split(".");
  if (parts.length < 2) {
    return false;
  }
  const fileExtension = parts[parts.length - 1];
  assert(typeof fileExtension === "string");
  return /^[a-z0-9]+$/.test(fileExtension);
}
var init_log404 = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/log404/index.js"() {
    init_noRouteMatch();
    init_utils();
    init_picocolors();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/handleErrorWithoutErrorPage.js
async function handleErrorWithoutErrorPage(pageContext) {
  assert(pageContext.pageId === null);
  assert(pageContext.errorWhileRendering || pageContext.is404);
  {
    const isV1 = pageContext._globalContext._pageConfigs.length > 0;
    warnMissingErrorPage(isV1, pageContext._globalContext._isProduction);
  }
  if (!pageContext.isClientSideNavigation) {
    const httpResponse = createHttpResponseErrorFallback(pageContext);
    objectAssign(pageContext, { httpResponse });
    return pageContext;
  } else {
    const __getPageAssets = async () => [];
    objectAssign(pageContext, { __getPageAssets });
    const httpResponse = await createHttpResponsePage(stringify({ serverSideError: true }), null, pageContext);
    objectAssign(pageContext, { httpResponse });
    return pageContext;
  }
}
function warnMissingErrorPage(isV1, isProduction) {
  if (!isProduction) {
    const msg = [
      `No ${isV1 ? "error page" : picocolors_default.cyan("_error.page.js")} found,`,
      "we recommend defining one",
      "https://vike.dev/error-page"
    ].join(" ");
    assertWarning2(false, msg, { onlyOnce: true });
  }
}
var init_handleErrorWithoutErrorPage = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/handleErrorWithoutErrorPage.js"() {
    init_stringify();
    init_utils();
    init_createHttpResponse();
    init_picocolors();
  }
});

// node_modules/vike/dist/shared-server-client/route/resolveUrlPathname.js
function resolveUrlPathname(routeString, routeParams) {
  let parts = [{ val: routeString, type: "ROUTE_STRING" }];
  Object.entries(routeParams).forEach(([key, val]) => {
    if (key.startsWith("*")) {
      assert(key === "*" || /\d+/.test(key.slice(1)));
      assertUsage(key === "*", "Resolving URL with multiple globs isn't implemented yet");
    } else {
      key = `@${key}`;
    }
    parts = parts.map((part) => {
      if (part.type === "URL") {
        return part;
      } else {
        return part.val.split(key).map((rest, i3) => {
          const partURL = { val, type: "URL" };
          const partRouteString = { val: rest, type: "ROUTE_STRING" };
          return i3 === 0 ? [partRouteString] : [partURL, partRouteString];
        }).flat();
      }
    }).flat();
  });
  const urlPathname = parts.map((p4) => p4.val).join("");
  return urlPathname;
}
var init_resolveUrlPathname = __esm({
  "node_modules/vike/dist/shared-server-client/route/resolveUrlPathname.js"() {
    init_assertIsNotBrowser();
    init_utils5();
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/resolveRedirects.js
function resolveRedirects(redirectsAll, urlPathname) {
  const redirects = merge(redirectsAll);
  for (const [urlSource, urlTarget] of Object.entries(redirects)) {
    const urlResolved = resolveRouteStringRedirect(urlSource, urlTarget, urlPathname);
    if (urlResolved)
      return urlResolved;
  }
  return null;
}
function resolveRouteStringRedirect(urlSource, urlTarget, urlPathname) {
  assertRedirect(urlSource, urlTarget);
  const match2 = resolveRouteString(urlSource, urlPathname);
  if (!match2)
    return null;
  const urlResolved = resolveUrlPathname(urlTarget, match2.routeParams);
  if (urlResolved === urlPathname)
    return null;
  assert(isUrlRedirectTarget(urlResolved));
  return urlResolved;
}
function assertRedirect(urlSource, urlTarget) {
  assertRouteString(urlSource, `${redirectsErrPrefix} Invalid`);
  assertUsageUrlRedirectTarget(urlTarget, `${redirectsErrPrefix} The URL redirection target`, true);
  assertParams(urlSource, urlTarget);
}
function assertParams(urlSource, urlTarget) {
  const routeSegments = urlTarget.split("/");
  routeSegments.forEach((routeSegment) => {
    if (routeSegment.startsWith("@") || routeSegment.startsWith("*")) {
      const segments = urlSource.split("/");
      assertUsage(segments.includes(routeSegment), `${redirectsErrPrefix} The redirection source URL ${picocolors_default.string(urlSource)} is missing the URL parameter ${picocolors_default.string(routeSegment)} used by the redirection target URL ${picocolors_default.string(urlTarget)}`);
    }
  });
}
function merge(objs) {
  const obj = {};
  objs.forEach((e) => {
    Object.assign(obj, e);
  });
  return obj;
}
var redirectsErrPrefix;
var init_resolveRedirects = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/resolveRedirects.js"() {
    init_assertIsNotBrowser();
    init_utils5();
    init_resolveUrlPathname();
    init_resolveRouteString();
    init_picocolors();
    assertIsNotBrowser();
    redirectsErrPrefix = "[+redirects]";
  }
});

// node_modules/vike/dist/shared-server-client/forkPageContext.js
function forkPageContext(pageContext) {
  const pageContextNew = {};
  objectAssign(pageContextNew, pageContext, true);
  return pageContextNew;
}
var init_forkPageContext = __esm({
  "node_modules/vike/dist/shared-server-client/forkPageContext.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer.js
async function renderPageServer(pageContextInit) {
  assertArguments(...arguments);
  assert(hasProp(pageContextInit, "urlOriginal", "string"));
  assertIsUrl(pageContextInit.urlOriginal);
  onSetupRuntime();
  const requestId = getRequestId();
  const pageContextSkipRequest = getPageContextSkipRequest(pageContextInit, requestId);
  if (pageContextSkipRequest)
    return pageContextSkipRequest;
  const urlOriginalPretty = getUrlPretty(pageContextInit.urlOriginal);
  logHttpRequest(urlOriginalPretty, pageContextInit, requestId);
  const asyncLocalStorage = await getAsyncLocalStorage();
  const asyncStore = !asyncLocalStorage ? null : { requestId };
  const render = async () => await renderPageServerEntryOnce(pageContextInit, requestId, asyncStore);
  const pageContextFinish = !asyncLocalStorage ? await render() : await asyncLocalStorage.run(asyncStore, render);
  logHttpResponse(urlOriginalPretty, pageContextFinish);
  checkType(pageContextFinish);
  assert(pageContextFinish.httpResponse);
  return pageContextFinish;
}
async function renderPageServerEntryOnce(pageContextInit, requestId, asyncStore) {
  {
    const vikeConfigError = getVikeConfigError();
    if (vikeConfigError) {
      return getPageContextInvalidVikeConfig(vikeConfigError.err, pageContextInit, requestId);
    }
  }
  try {
    await initGlobalContext_renderPage();
  } catch (err2) {
    assert(!isAbortError(err2));
    const pageContext_logRuntime = getPageContext_logRuntimeEarly(pageContextInit, requestId);
    logRuntimeError(err2, pageContext_logRuntime);
    const pageContextHttpErrorFallback = getPageContextHttpErrorFallback_noGlobalContext(err2, pageContextInit, requestId);
    return pageContextHttpErrorFallback;
  }
  {
    const vikeConfigError = getVikeConfigError();
    if (vikeConfigError) {
      return getPageContextInvalidVikeConfig(vikeConfigError.err, pageContextInit, requestId);
    } else {
    }
  }
  const { globalContext: globalContext2 } = await getGlobalContextServerInternal();
  const pageContextBegin = getPageContextBegin(pageContextInit, globalContext2, requestId, asyncStore);
  {
    const pageContextHttpResponse = await checkBaseUrl(pageContextBegin, globalContext2);
    if (pageContextHttpResponse)
      return pageContextHttpResponse;
  }
  {
    const pageContextHttpResponse = await normalizeUrl(pageContextBegin, globalContext2);
    if (pageContextHttpResponse)
      return pageContextHttpResponse;
  }
  {
    const pageContextHttpResponse = await getPermanentRedirect(pageContextBegin, globalContext2);
    if (pageContextHttpResponse)
      return pageContextHttpResponse;
  }
  return await renderPageServerEntryRecursive(pageContextBegin, globalContext2, requestId);
}
async function renderPageServerEntryRecursive(pageContextBegin, globalContext2, requestId) {
  catchInfiniteLoop("renderPageServerEntryRecursive()");
  const pageContextNominalPageBegin = fork(pageContextBegin);
  const pageContextAddendumAbort = getPageContextAddendumAbort(pageContextBegin.pageContextsAborted);
  objectAssign(pageContextNominalPageBegin, pageContextAddendumAbort);
  objectAssign(pageContextNominalPageBegin, { errorWhileRendering: null });
  const onError2 = async (err2) => {
    assert(err2);
    assert(pageContextNominalPageSuccess === void 0);
    logRuntimeError(err2, pageContextNominalPageBegin);
    return await renderPageServerEntryRecursive_onError(err2, pageContextBegin, pageContextNominalPageBegin, globalContext2, requestId);
  };
  let pageContextFromRoute;
  try {
    pageContextFromRoute = await route(pageContextNominalPageBegin);
  } catch (err2) {
    return await onError2(err2);
  }
  objectAssign(pageContextNominalPageBegin, pageContextFromRoute);
  if (pageContextNominalPageBegin.pageId !== null) {
    assert(pageContextNominalPageBegin.pageId);
    objectAssign(pageContextNominalPageBegin, { is404: null });
  } else {
    objectAssign(pageContextNominalPageBegin, { is404: true });
    log404(pageContextNominalPageBegin);
    const errorPageId = getErrorPageId(pageContextNominalPageBegin._globalContext._pageFilesAll, pageContextNominalPageBegin._globalContext._pageConfigs);
    if (!errorPageId) {
      assert(hasProp(pageContextNominalPageBegin, "pageId", "null"));
      return await handleErrorWithoutErrorPage(pageContextNominalPageBegin);
    }
    objectAssign(pageContextNominalPageBegin, { pageId: errorPageId });
  }
  assert(hasProp(pageContextNominalPageBegin, "pageId", "string"));
  assert(pageContextNominalPageBegin.errorWhileRendering === null);
  var pageContextNominalPageSuccess;
  try {
    pageContextNominalPageSuccess = await renderPageServerAfterRoute(pageContextNominalPageBegin);
  } catch (err2) {
    return await onError2(err2);
  }
  assert(pageContextNominalPageBegin === pageContextNominalPageSuccess);
  return pageContextNominalPageSuccess;
}
async function renderPageServerEntryRecursive_onError(err2, pageContextBegin, pageContextNominalPageBegin, globalContext2, requestId) {
  assert(pageContextNominalPageBegin);
  assert(hasProp(pageContextNominalPageBegin, "urlOriginal", "string"));
  assert(err2);
  const pageContextErrorPageInit = fork(pageContextBegin);
  objectAssign(pageContextErrorPageInit, {
    is404: false,
    errorWhileRendering: err2,
    routeParams: {}
  });
  if (isAbortError(err2)) {
    const handled = await handleAbort(err2, pageContextBegin, pageContextNominalPageBegin, requestId, pageContextErrorPageInit, globalContext2);
    if (handled.pageContextReturn) {
      return handled.pageContextReturn;
    } else {
      objectAssign(pageContextErrorPageInit, handled.pageContextAbort);
    }
  }
  {
    const errorPageId = getErrorPageId(globalContext2._pageFilesAll, globalContext2._pageConfigs);
    if (!errorPageId) {
      objectAssign(pageContextErrorPageInit, { pageId: null });
      return await handleErrorWithoutErrorPage(pageContextErrorPageInit);
    }
    objectAssign(pageContextErrorPageInit, { pageId: errorPageId });
  }
  let pageContextErrorPage;
  try {
    pageContextErrorPage = await renderPageServerAfterRoute(pageContextErrorPageInit);
  } catch (errErrorPage) {
    if (isAbortError(errErrorPage)) {
      const handled = await handleAbort(errErrorPage, pageContextBegin, pageContextNominalPageBegin, requestId, pageContextErrorPageInit, globalContext2);
      if (handled.pageContextReturn) {
        return handled.pageContextReturn;
      } else {
        const pageContextAbort = errErrorPage._pageContextAbort;
        assertWarning2(false, `Failed to render error page because ${picocolors_default.cyan(pageContextAbort._abortCall)} was called: make sure ${picocolors_default.cyan(pageContextAbort._abortCaller)} doesn't occur while the error page is being rendered.`, { onlyOnce: false });
        const pageContextHttpErrorFallback2 = getPageContextHttpErrorFallback(err2, pageContextBegin);
        return pageContextHttpErrorFallback2;
      }
    }
    if (isSameErrorMessage(errErrorPage, err2)) {
      logRuntimeError(errErrorPage, pageContextErrorPageInit);
    }
    const pageContextHttpErrorFallback = getPageContextHttpErrorFallback(err2, pageContextBegin);
    return pageContextHttpErrorFallback;
  }
  return pageContextErrorPage;
}
function logHttpRequest(urlOriginal, pageContextInit, requestId) {
  const pageContext_logRuntime = getPageContext_logRuntimeEarly(pageContextInit, requestId);
  logRuntimeInfo?.(getRequestInfoMessage(urlOriginal), pageContext_logRuntime, "info");
}
function getRequestInfoMessage(urlOriginal) {
  return `HTTP request  ${arrowRight} ${prettyUrl(urlOriginal)}`;
}
function logHttpResponse(urlOriginalPretty, pageContextReturn) {
  const statusCode = pageContextReturn.httpResponse?.statusCode ?? null;
  let msg;
  let isNominal;
  {
    const { errorWhileRendering } = pageContextReturn;
    const isSkipped = statusCode === null && !errorWhileRendering;
    if (isSkipped) {
      assert(errorWhileRendering === null || errorWhileRendering === void 0);
      msg = `HTTP response ${arrowLeft} ${prettyUrl(urlOriginalPretty)} ${picocolors_default.dim("null")}`;
      isNominal = true;
    } else {
      const isSuccess = statusCode !== null && statusCode >= 200 && statusCode <= 399;
      isNominal = isSuccess || statusCode === 404;
      const color = (s3) => picocolors_default.bold(isSuccess ? picocolors_default.green(String(s3)) : picocolors_default.red(String(s3)));
      const isRedirect = statusCode && 300 <= statusCode && statusCode <= 399;
      const type = isRedirect ? "redirect" : `response ${arrowLeft}`;
      if (isRedirect) {
        assert(pageContextReturn.httpResponse);
        const headerRedirect = pageContextReturn.httpResponse.headers.slice().reverse().find((header) => header[0] === "Location");
        assert(headerRedirect);
        const urlRedirect = headerRedirect[1];
        urlOriginalPretty = urlRedirect;
      }
      msg = `HTTP ${type} ${prettyUrl(urlOriginalPretty)} ${color(statusCode ?? "ERR")}`;
    }
  }
  logRuntimeInfo?.(msg, pageContextReturn, isNominal ? "info" : "error");
}
function prettyUrl(url5) {
  try {
    url5 = decodeURI(url5);
  } catch {
  }
  return picocolors_default.bold(url5);
}
function getPageContextHttpErrorFallback(err2, pageContextBegin) {
  const pageContextHttpErrorFallback = fork(pageContextBegin);
  const httpResponse = createHttpResponseErrorFallback(pageContextBegin);
  objectAssign(pageContextHttpErrorFallback, {
    httpResponse,
    errorWhileRendering: err2
  });
  return pageContextHttpErrorFallback;
}
function getPageContextHttpErrorFallback_noGlobalContext(err2, pageContextInit, requestId) {
  const pageContextHttpErrorFallback = createPageContextServerSideWithoutGlobalContext(pageContextInit, requestId);
  const httpResponse = createHttpResponseErrorFallback_noGlobalContext();
  objectAssign(pageContextHttpErrorFallback, {
    httpResponse,
    errorWhileRendering: err2
  });
  return pageContextHttpErrorFallback;
}
function getPageContextBegin(pageContextInit, globalContext2, requestId, asyncStore) {
  const { isClientSideNavigation, _urlHandler, _isPageContextJsonRequest } = handlePageContextUrl(pageContextInit.urlOriginal);
  const pageContextBegin = createPageContextServerSide(pageContextInit, globalContext2, {
    isPrerendering: false,
    urlHandler: _urlHandler,
    isClientSideNavigation,
    requestId
  });
  objectAssign(pageContextBegin, {
    _requestId: requestId,
    _asyncStore: asyncStore,
    _isPageContextJsonRequest,
    // This array is shared between all pageContext objects, i.e. the following is true for any `i` and `j` index:
    // ```js
    // const pageContextsAborted_i = pageContextsAborted[i].pageContextsAborted
    // const pageContextsAborted_j = pageContextsAborted[j].pageContextsAborted
    // assert(pageContextsAborted_i === pageContextsAborted_j)
    // ```
    pageContextsAborted: []
  });
  return pageContextBegin;
}
function handlePageContextUrl(urlOriginal) {
  const { isPageContextJsonRequest } = handlePageContextRequestUrl(urlOriginal);
  return {
    isClientSideNavigation: !!isPageContextJsonRequest,
    _isPageContextJsonRequest: isPageContextJsonRequest,
    _urlHandler: (url5) => handlePageContextRequestUrl(url5).urlWithoutPageContextRequestSuffix
  };
}
function getRequestId() {
  const requestId = ++globalObject14.httpRequestsCount;
  assert(requestId >= 1);
  return requestId;
}
function assertIsUrl(urlOriginal) {
  assertUsage(isUrl(urlOriginal), `${picocolors_default.code("renderPage(pageContextInit)")} (https://vike.dev/renderPage) called with ${picocolors_default.code(`pageContextInit.urlOriginal===${JSON.stringify(urlOriginal)}`)} which isn't a valid URL.`);
}
function assertIsNotViteRequest(urlPathname, urlOriginal) {
  const isViteRequest = urlPathname.startsWith("/@vite/client") || urlPathname.startsWith("/@fs/") || urlPathname.startsWith("/__vite_ping");
  if (!isViteRequest)
    return;
  assertUsage(false, `${picocolors_default.code("renderPage(pageContextInit)")} called with ${picocolors_default.code(`pageContextInit.urlOriginal===${JSON.stringify(urlOriginal)}`)} which is unexpected because the URL ${picocolors_default.bold(urlOriginal)} should have already been handled by the development middleware: make sure the ${picocolors_default.cyan("createDevMiddleware()")} middleware is executed *before* the ${picocolors_default.cyan("renderPage()")} middleware, see ${picocolors_default.underline("https://vike.dev/renderPage")}`);
}
async function normalizeUrl(pageContextBegin, globalContext2) {
  const pageContext = fork(pageContextBegin);
  const { trailingSlash, disableUrlNormalization } = globalContext2.config;
  if (disableUrlNormalization)
    return null;
  const { urlOriginal } = pageContext;
  const { isPageContextJsonRequest } = handlePageContextRequestUrl(urlOriginal);
  if (isPageContextJsonRequest)
    return null;
  const urlNormalized = normalizeUrlPathname(urlOriginal, trailingSlash ?? false, globalContext2.baseServer);
  if (!urlNormalized)
    return null;
  logRuntimeInfo?.(`URL normalized from ${picocolors_default.cyan(urlOriginal)} to ${picocolors_default.cyan(urlNormalized)} (https://vike.dev/url-normalization)`, pageContext, "info");
  const httpResponse = createHttpResponseRedirect({ url: urlNormalized, statusCode: 301 }, pageContext);
  objectAssign(pageContext, { httpResponse });
  return pageContext;
}
async function getPermanentRedirect(pageContextBegin, globalContext2) {
  const pageContext = fork(pageContextBegin);
  const urlWithoutBase = removeBaseServer2(pageContext.urlOriginal, globalContext2.baseServer);
  let origin = null;
  let urlTargetExternal = null;
  let urlTarget = modifyUrlPathname(urlWithoutBase, (urlPathname) => {
    const urlTarget2 = resolveRedirects(globalContext2.config.redirects ?? [], urlPathname);
    if (urlTarget2 === null)
      return null;
    if (!isUrl(urlTarget2)) {
      assert(isUri(urlTarget2));
      urlTargetExternal = urlTarget2;
      return null;
    }
    const { urlModified, origin: origin_ } = removeUrlOrigin(urlTarget2);
    origin = origin_;
    return urlModified;
  });
  if (urlTargetExternal) {
    urlTarget = urlTargetExternal;
  } else {
    let originChanged = false;
    if (origin) {
      const urlModified = setUrlOrigin(urlTarget, origin);
      if (urlModified !== false) {
        originChanged = true;
        urlTarget = urlModified;
      }
    }
    if (normalize2(urlTarget) === normalize2(urlWithoutBase))
      return null;
    if (!originChanged)
      urlTarget = prependBase(urlTarget, globalContext2.baseServer);
    assert(urlTarget !== pageContext.urlOriginal);
  }
  logRuntimeInfo?.(`Permanent redirection defined by config.redirects (https://vike.dev/redirects)`, pageContext, "info");
  const httpResponse = createHttpResponseRedirect({ url: urlTarget, statusCode: 301 }, pageContext);
  objectAssign(pageContext, { httpResponse });
  return pageContext;
}
function normalize2(url5) {
  return url5 || "/";
}
async function handleAbort(errAbort, pageContextBegin, pageContextNominalPageBegin, requestId, pageContextErrorPageInit, globalContext2) {
  logAbort(errAbort, globalContext2._isProduction, pageContextNominalPageBegin);
  const pageContextAbort = errAbort._pageContextAbort;
  assert(pageContextAbort);
  addNewPageContextAborted(pageContextBegin.pageContextsAborted, pageContextNominalPageBegin, pageContextAbort);
  const pageContext = fork(pageContextBegin);
  const pageContextAddendumAbort = getPageContextAddendumAbort(pageContextBegin.pageContextsAborted);
  objectAssign(pageContext, pageContextAddendumAbort);
  assert(pageContextAddendumAbort === pageContextAbort);
  if (pageContextBegin.isClientSideNavigation) {
    let pageContextSerialized;
    if (pageContextAbort.abortStatusCode) {
      const errorPageId = getErrorPageId(globalContext2._pageFilesAll, globalContext2._pageConfigs);
      const abortCall = pageContextAbort._abortCall;
      assert(abortCall);
      assertUsage(errorPageId, `You called ${picocolors_default.cyan(abortCall)} but you didn't define an error page, make sure to define one https://vike.dev/error-page`);
      objectAssign(pageContext, { pageId: errorPageId });
      objectAssign(pageContext, pageContextErrorPageInit, true);
      updateType(pageContext, await loadPageConfigsLazyServerSide(pageContext));
      pageContextSerialized = getPageContextClientSerialized(pageContext, false);
    } else {
      pageContextSerialized = getPageContextClientSerializedAbort(pageContextAbort, false);
    }
    const httpResponse = await createHttpResponsePageContextJson(pageContextSerialized);
    objectAssign(pageContext, { httpResponse });
    return { pageContextReturn: pageContext };
  }
  if (pageContextAbort._urlRewrite) {
    const pageContextReturn = await renderPageServerEntryRecursive(pageContextBegin, globalContext2, requestId);
    return { pageContextReturn };
  }
  if (pageContextAbort._urlRedirect) {
    const httpResponse = createHttpResponseRedirect(pageContextAbort._urlRedirect, pageContextBegin);
    objectAssign(pageContext, { httpResponse });
    return { pageContextReturn: pageContext };
  }
  assert(pageContextAbort.abortStatusCode);
  return { pageContextAbort };
}
async function checkBaseUrl(pageContextBegin, globalContext2) {
  const pageContext = fork(pageContextBegin);
  const { baseServer: baseServer2 } = globalContext2;
  const { urlOriginal } = pageContext;
  const { isBaseMissing } = parseUrl(urlOriginal, baseServer2);
  if (!isBaseMissing)
    return;
  const httpResponse = createHttpResponseBaseIsMissing(urlOriginal, baseServer2);
  objectAssign(pageContext, {
    httpResponse,
    isBaseMissing: true
  });
  checkType(pageContext);
  return pageContext;
}
function getPageContextSkipRequest(pageContextInit, requestId) {
  const urlPathnameWithBase = parseUrl(pageContextInit.urlOriginal, "/").pathname;
  assertIsNotViteRequest(urlPathnameWithBase, pageContextInit.urlOriginal);
  let errMsg404;
  if (urlPathnameWithBase.endsWith("/favicon.ico")) {
    errMsg404 = "No favicon.ico found";
  }
  if (urlPathnameWithBase.endsWith(".well-known/appspecific/com.chrome.devtools.json")) {
    errMsg404 = "Not supported";
  }
  if (!errMsg404)
    return;
  const pageContext = createPageContextServerSideWithoutGlobalContext(pageContextInit, requestId);
  const httpResponse = createHttpResponse404(errMsg404);
  objectAssign(pageContext, { httpResponse });
  checkType(pageContext);
  return pageContext;
}
function getPageContextInvalidVikeConfig(err2, pageContextInit, requestId) {
  const pageContext_logRuntime = getPageContext_logRuntimeEarly(pageContextInit, requestId);
  logRuntimeInfo?.(picocolors_default.bold(picocolors_default.red("Error loading Vike config \u2014 see error above")), pageContext_logRuntime, "error");
  const pageContextHttpErrorFallback = getPageContextHttpErrorFallback_noGlobalContext(err2, pageContextInit, requestId);
  return pageContextHttpErrorFallback;
}
function getPageContext_logRuntimeEarly(pageContextInit, requestId) {
  const pageContext_logRuntime = {
    ...pageContextInit,
    _requestId: requestId
  };
  return pageContext_logRuntime;
}
function fork(pageContext) {
  const pageContextNew = forkPageContext(pageContext);
  if (pageContext._asyncStore)
    pageContext._asyncStore.pageContext = pageContextNew;
  assert(pageContextNew._asyncStore === pageContext._asyncStore);
  return pageContextNew;
}
var globalObject14, arrowRight, arrowLeft;
var init_renderPageServer = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer.js"() {
    init_renderPageServerAfterRoute();
    init_createPageContextServerSide();
    init_route();
    init_utils();
    init_abort();
    init_globalContext();
    init_handlePageContextRequestUrl();
    init_createHttpResponse();
    init_loggerRuntime();
    init_assertArguments();
    init_log404();
    init_picocolors();
    init_serializeContext();
    init_error_page();
    init_handleErrorWithoutErrorPage();
    init_loadPageConfigsLazyServerSide();
    init_resolveRedirects();
    init_getVikeConfigError();
    init_forkPageContext();
    init_asyncHook();
    globalObject14 = getGlobalObject("runtime/renderPageServer.ts", {
      httpRequestsCount: 0
    });
    arrowRight = picocolors_default.dim("\u2192");
    arrowLeft = picocolors_default.dim("\u2190");
  }
});

// node_modules/vike/dist/server/runtime/createDevMiddleware.js
var init_createDevMiddleware = __esm({
  "node_modules/vike/dist/server/runtime/createDevMiddleware.js"() {
  }
});

// node_modules/vike/dist/types/index-dreprecated.js
var init_index_dreprecated = __esm({
  "node_modules/vike/dist/types/index-dreprecated.js"() {
  }
});

// node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets/injectAssets__public.js
var init_injectAssets_public = __esm({
  "node_modules/vike/dist/server/runtime/renderPageServer/html/injectAssets/injectAssets__public.js"() {
    init_utils();
    init_injectAssets();
  }
});

// node_modules/vike/dist/server/createPageRenderer.js
var init_createPageRenderer = __esm({
  "node_modules/vike/dist/server/createPageRenderer.js"() {
    init_renderPageServer();
    init_utils();
  }
});

// node_modules/vike/dist/server/runtime/index.js
var init_runtime2 = __esm({
  "node_modules/vike/dist/server/runtime/index.js"() {
    init_isBrowser();
    init_assert();
    init_renderPageServer();
    init_renderHtml();
    init_stream();
    init_utils();
    init_globalContext();
    init_createDevMiddleware();
    init_index_dreprecated();
    init_injectAssets_public();
    init_createPageRenderer();
    init_utils();
    init_picocolors();
    init_abort();
    assert(!isBrowser2());
  }
});

// node_modules/vike-solid/dist/includes-B0OUVLz0.js
function includes(values, x4) {
  return values.includes(x4);
}
var configsCumulative;
var init_includes_B0OUVLz0 = __esm({
  "node_modules/vike-solid/dist/includes-B0OUVLz0.js"() {
    configsCumulative = ["Head", "bodyAttributes", "htmlAttributes"];
  }
});

// node_modules/vike-solid/dist/hooks/usePageContext.js
function getGlobalObject2(key, defaultValue) {
  const globalObjectsAll = globalThis[projectKey] = globalThis[projectKey] || {};
  const globalObject15 = globalObjectsAll[key] = globalObjectsAll[key] || defaultValue;
  return globalObject15;
}
function PageContextProvider(props) {
  const {
    solidContext
  } = globalContext;
  return createComponent(solidContext.Provider, {
    get value() {
      return props.pageContext;
    },
    get children() {
      return props.children;
    }
  });
}
function usePageContext() {
  const {
    solidContext
  } = globalContext;
  const pageContext = useContext(solidContext);
  return pageContext;
}
var projectKey, globalContext;
var init_usePageContext = __esm({
  "node_modules/vike-solid/dist/hooks/usePageContext.js"() {
    init_server2();
    init_server();
    projectKey = "_vike_solid";
    globalContext = getGlobalObject2("PageContextProvider.ts", {
      solidContext: createContext(void 0)
    });
  }
});

// node_modules/solid-js/store/dist/server.js
function isWrappable(obj) {
  return obj != null && typeof obj === "object" && (Object.getPrototypeOf(obj) === Object.prototype || Array.isArray(obj));
}
function setProperty(state2, property, value, force) {
  if (!force && state2[property] === value) return;
  if (value === void 0) {
    delete state2[property];
  } else state2[property] = value;
}
function mergeStoreNode(state2, value, force) {
  const keys = Object.keys(value);
  for (let i3 = 0; i3 < keys.length; i3 += 1) {
    const key = keys[i3];
    setProperty(state2, key, value[key], force);
  }
}
function updateArray(current, next) {
  if (typeof next === "function") next = next(current);
  if (Array.isArray(next)) {
    if (current === next) return;
    let i3 = 0, len = next.length;
    for (; i3 < len; i3++) {
      const value = next[i3];
      if (current[i3] !== value) setProperty(current, i3, value);
    }
    setProperty(current, "length", len);
  } else mergeStoreNode(current, next);
}
function updatePath(current, path, traversed = []) {
  let part, next = current;
  if (path.length > 1) {
    part = path.shift();
    const partType = typeof part, isArray2 = Array.isArray(current);
    if (Array.isArray(part)) {
      for (let i3 = 0; i3 < part.length; i3++) {
        updatePath(current, [part[i3]].concat(path), traversed);
      }
      return;
    } else if (isArray2 && partType === "function") {
      for (let i3 = 0; i3 < current.length; i3++) {
        if (part(current[i3], i3)) updatePath(current, [i3].concat(path), traversed);
      }
      return;
    } else if (isArray2 && partType === "object") {
      const {
        from = 0,
        to = current.length - 1,
        by = 1
      } = part;
      for (let i3 = from; i3 <= to; i3 += by) {
        updatePath(current, [i3].concat(path), traversed);
      }
      return;
    } else if (path.length > 1) {
      updatePath(current[part], path, [part].concat(traversed));
      return;
    }
    next = current[part];
    traversed = [part].concat(traversed);
  }
  let value = path[0];
  if (typeof value === "function") {
    value = value(next, traversed);
    if (value === next) return;
  }
  if (part === void 0 && value == void 0) return;
  if (part === void 0 || isWrappable(next) && isWrappable(value) && !Array.isArray(value)) {
    mergeStoreNode(next, value);
  } else setProperty(current, part, value);
}
function createStore(state2) {
  const isArray2 = Array.isArray(state2);
  function setStore(...args) {
    isArray2 && args.length === 1 ? updateArray(state2, args[0]) : updatePath(state2, args);
  }
  return [state2, setStore];
}
function reconcile(value, options = {}) {
  return (state2) => {
    if (!isWrappable(state2) || !isWrappable(value)) return value;
    const targetKeys = Object.keys(value);
    for (let i3 = 0, len = targetKeys.length; i3 < len; i3++) {
      const key = targetKeys[i3];
      setProperty(state2, key, value[key]);
    }
    const previousKeys = Object.keys(state2);
    for (let i3 = 0, len = previousKeys.length; i3 < len; i3++) {
      if (value[previousKeys[i3]] === void 0) setProperty(state2, previousKeys[i3], void 0);
    }
    return state2;
  };
}
var init_server3 = __esm({
  "node_modules/solid-js/store/dist/server.js"() {
  }
});

// node_modules/isbot-fast/index.js
var require_isbot_fast = __commonJS({
  "node_modules/isbot-fast/index.js"(exports, module) {
    var bots = [
      // generic
      "bot",
      // googlebot, bingbot, telegrambot, twitterbot, yandexbot, etc.
      "check",
      "cloud",
      // cloudflare, cloudinary, etc.
      "crawler",
      "download",
      "monitor",
      // monitor & monitoring
      "preview",
      // skypeuripreview, bingpreview, yahoo link preview, etc.
      "scan",
      "spider",
      // baiduspider, 360spider, screaming frog seo spider, etc.
      // search engines
      "google",
      "qwantify",
      "yahoo",
      // aggregators, messengers and social networks
      "facebookexternalhit",
      "flipboard",
      "tumblr",
      "vkshare",
      "whatsapp",
      // downloaders
      "curl",
      "perl",
      "python",
      "wget",
      // high activity scanners
      "heritrix",
      "ia_archiver"
    ];
    var createRegex = () => new RegExp(`(${bots.join("|")})`, "i");
    var isBotRegex = createRegex();
    module.exports = (userAgent) => isBotRegex.test(userAgent);
    module.exports.extend = (additionalBots) => {
      bots = [...new Set(bots.concat(additionalBots))];
      isBotRegex = createRegex();
    };
  }
});

// node_modules/vike-solid/dist/integration/onRenderHtml.js
function isCallable3(thing) {
  return thing instanceof Function || typeof thing === "function";
}
function getHeadSetting(configName, pageContext) {
  const valFromUseConfig = pageContext._configFromHook?.[configName];
  const valFromConfig = pageContext.config[configName];
  const getCallable = (val) => isCallable3(val) ? val(pageContext) : val;
  if (!includes(configsCumulative, configName)) {
    if (valFromUseConfig !== void 0) return valFromUseConfig;
    return getCallable(valFromConfig);
  } else {
    return [
      //
      ...(valFromConfig ?? []).map(getCallable),
      ...valFromUseConfig ?? []
    ];
  }
}
function getPageElement(pageContext) {
  const page = createComponent(PageContextProvider, {
    pageContext,
    get children() {
      return createComponent(Wrapper, {
        get children() {
          return createComponent(Page, {});
        }
      });
    }
  });
  return page;
}
function Wrapper(props) {
  const pageContext = usePageContext();
  const [wrappers, setWrappers] = createStore([]);
  createComputed(() => {
    setWrappers(reconcile([
      // Inner wrapping
      ...pageContext.config.Layout || [],
      // Outer wrapping
      ...pageContext.config.Wrapper || []
    ].reverse()));
  });
  const renderWrappers = (i3) => {
    let item = wrappers[i3];
    if (!item) return props.children;
    if (typeof item !== "function") item = Passthrough;
    return createComponent(item, {
      get children() {
        return renderWrappers(i3 + 1);
      }
    });
  };
  return renderWrappers(0);
}
function Page() {
  const pageContext = usePageContext();
  return createComponent(Dynamic, {
    get component() {
      return pageContext.Page;
    }
  });
}
function Passthrough(props) {
  return props.children;
}
function getTagAttributesString(tagAttributes) {
  const tagAttributesString = Object.entries(tagAttributes).filter(([_key, value]) => value !== false && value !== null && value !== void 0).map(([key, value]) => `${ensureIsValidAttributeName(key)}=${JSON.stringify(String(value))}`).join(" ");
  if (tagAttributesString.length === 0) return "";
  return ` ${tagAttributesString}`;
}
function ensureIsValidAttributeName(str) {
  if (/^[a-z][a-z0-9\-]*$/i.test(str) && !str.endsWith("-")) return str;
  throw new Error(`Invalid HTML tag attribute name ${JSON.stringify(str)}`);
}
function isNullish2(val) {
  return val === null || val === void 0;
}
function isNotNullish2(p4) {
  return !isNullish2(p4);
}
function isObject3(value) {
  return typeof value === "object" && value !== null;
}
async function getPageHtml(pageContext) {
  let pageHtml = "";
  const userAgent = pageContext.headers?.["user-agent"] || // TODO/eventually: remove old way of acccessing the User Agent header.
  // @ts-expect-error Property 'userAgent' does not exist on type
  pageContext.userAgent;
  if (pageContext.Page) {
    const streamSetting = resolveStreamSetting(pageContext);
    if (userAgent && (0, import_isbot_fast.default)(userAgent)) {
      pageHtml = dangerouslySkipEscape(await renderToStringAsync(() => getPageElement(pageContext)));
    } else if (!streamSetting.enable) {
      pageHtml = dangerouslySkipEscape(renderToString(() => getPageElement(pageContext)));
    } else if (streamSetting.type === "web") {
      pageHtml = renderToStream(() => getPageElement(pageContext), {
        onCompleteShell(info) {
          pageContext._stream ??= info;
        }
      }).pipeTo;
      stampPipe(pageHtml, "web-stream");
    } else {
      pageHtml = renderToStream(() => getPageElement(pageContext), {
        onCompleteShell(info) {
          pageContext._stream ??= info;
        }
      }).pipe;
      stampPipe(pageHtml, "node-stream");
    }
  }
  return pageHtml;
}
function getHeadHtml(pageContext) {
  pageContext._headAlreadySet = true;
  const title = getHeadSetting("title", pageContext);
  const favicon = getHeadSetting("favicon", pageContext);
  const description = getHeadSetting("description", pageContext);
  const image = getHeadSetting("image", pageContext);
  const titleTags = !title ? "" : escapeInject`<title>${title}</title><meta property="og:title" content="${title}">`;
  const faviconTag = !favicon ? "" : escapeInject`<link rel="icon" href="${favicon}" />`;
  const descriptionTags = !description ? "" : escapeInject`<meta name="description" content="${description}"><meta property="og:description" content="${description}">`;
  const imageTags = !image ? "" : escapeInject`<meta property="og:image" content="${image}"><meta name="twitter:card" content="summary_large_image">`;
  const viewportTag = dangerouslySkipEscape(getViewportTag(getHeadSetting("viewport", pageContext)));
  const headElementsHtml = dangerouslySkipEscape([
    // Added by +Head
    ...pageContext.config.Head ?? [],
    // Added by useConfig()
    ...pageContext._configFromHook?.Head ?? []
  ].filter((Head) => Head !== null && Head !== void 0).map((Head) => getHeadElementHtml(Head, pageContext)).join("\n"));
  const headHtml = escapeInject`
    ${titleTags}
    ${viewportTag}
    ${headElementsHtml}
    ${faviconTag}
    ${descriptionTags}
    ${imageTags}
  `;
  return headHtml;
}
function getHeadElementHtml(Head, pageContext) {
  let headElement;
  if (isElement(Head)) {
    headElement = () => Head;
  } else {
    headElement = () => createComponent(PageContextProvider, {
      pageContext,
      get children() {
        return createComponent(Head, {});
      }
    });
  }
  const headElementHtml = renderToString(headElement);
  return headElementHtml;
}
function isElement(value) {
  return !isCallable3(value);
}
function getTagAttributes(pageContext) {
  let lang = getHeadSetting("lang", pageContext);
  if (lang === void 0) lang = "en";
  const bodyAttributes = mergeTagAttributesList(getHeadSetting("bodyAttributes", pageContext));
  const htmlAttributes = mergeTagAttributesList(getHeadSetting("htmlAttributes", pageContext));
  const bodyAttributesString = getTagAttributesString(bodyAttributes);
  const htmlAttributesString = getTagAttributesString({
    ...htmlAttributes,
    lang: lang ?? htmlAttributes.lang
  });
  return {
    htmlAttributesString,
    bodyAttributesString
  };
}
function mergeTagAttributesList(tagAttributesList = []) {
  const tagAttributes = {};
  tagAttributesList.forEach((tagAttrs) => Object.assign(tagAttributes, tagAttrs));
  return tagAttributes;
}
function getViewportTag(viewport) {
  if (viewport === "responsive" || viewport === void 0) {
    return '<meta name="viewport" content="width=device-width,initial-scale=1">';
  }
  if (typeof viewport === "number") {
    return `<meta name="viewport" content="width=${viewport}">`;
  }
  return "";
}
function resolveStreamSetting(pageContext) {
  const {
    stream
  } = pageContext.config;
  const streamSetting = {
    type: null,
    enable: null
  };
  stream?.reverse().filter(isNotNullish2).forEach((setting) => {
    if (typeof setting === "boolean") {
      streamSetting.enable = setting;
      return;
    }
    if (typeof setting === "string") {
      streamSetting.type = setting;
      streamSetting.enable = true;
      return;
    }
    if (isObject3(setting)) {
      if (setting.enable !== null) streamSetting.enable = setting.enable ?? true;
      if (setting.type !== void 0) streamSetting.type = setting.type;
      return;
    }
    throw new Error(`Unexpected +stream value ${setting}`);
  });
  return streamSetting;
}
var import_isbot_fast, onRenderHtml;
var init_onRenderHtml = __esm({
  "node_modules/vike-solid/dist/integration/onRenderHtml.js"() {
    init_server2();
    init_runtime2();
    init_includes_B0OUVLz0();
    init_usePageContext();
    init_server();
    init_server3();
    import_isbot_fast = __toESM(require_isbot_fast(), 1);
    onRenderHtml = async (pageContext) => {
      const pageHtml = await getPageHtml(pageContext);
      const headHtml = getHeadHtml(pageContext);
      const {
        htmlAttributesString,
        bodyAttributesString
      } = getTagAttributes(pageContext);
      delete pageContext._configFromHook;
      return escapeInject`<!DOCTYPE html>
    <html${dangerouslySkipEscape(htmlAttributesString)}>
      <head>
        <meta charset="UTF-8" />
        ${headHtml}
        ${dangerouslySkipEscape(generateHydrationScript())}
      </head>
      <body${dangerouslySkipEscape(bodyAttributesString)}>
        <div id="root">${pageHtml}</div>
      </body>
    </html>`;
    };
  }
});

// node_modules/vike/dist/server/runtime/getPageContext.js
function getPageContext({ asyncHook } = {}) {
  {
    const pageContext = getPageContext_sync();
    if (pageContext)
      return pageContext;
  }
  if (asyncHook) {
    const pageContext = getPageContext_withAsyncHook();
    if (pageContext)
      return pageContext;
  }
  return null;
}
var init_getPageContext = __esm({
  "node_modules/vike/dist/server/runtime/getPageContext.js"() {
    init_asyncHook();
    init_execHook();
  }
});

// node_modules/vike-solid/dist/hooks/useConfig/useConfig-server.js
function objectKeys(obj) {
  return Object.keys(obj);
}
function useConfig() {
  let pageContext = getPageContext({
    asyncHook: false
  });
  if (pageContext) return (config) => setPageContextConfigFromHook(config, pageContext);
  pageContext = usePageContext();
  return (config) => {
    if (!pageContext._headAlreadySet) {
      setPageContextConfigFromHook(config, pageContext);
    } else {
      apply(config, pageContext._stream);
    }
  };
}
function setPageContextConfigFromHook(config, pageContext) {
  pageContext._configFromHook ??= {};
  objectKeys(config).forEach((configName) => {
    if (pageContext.isClientSideNavigation && !configsClientSide.includes(configName)) return;
    if (!includes(configsCumulative, configName)) {
      const configValue = config[configName];
      if (configValue === void 0) return;
      pageContext._configFromHook[configName] = configValue;
    } else {
      const configValue = config[configName];
      if (!configValue) return;
      pageContext._configFromHook[configName] ??= [];
      pageContext._configFromHook[configName].push(configValue);
    }
  });
}
function apply(config, stream) {
  const {
    title
  } = config;
  if (title) {
    const htmlSnippet = `<script>document.title = ${JSON.stringify(title)}</script>`;
    stream.write(htmlSnippet);
  }
}
var configsClientSide;
var init_useConfig_server = __esm({
  "node_modules/vike-solid/dist/hooks/useConfig/useConfig-server.js"() {
    init_usePageContext();
    init_getPageContext();
    init_includes_B0OUVLz0();
    configsClientSide = ["title"];
  }
});

// node_modules/vike-metadata-solid/dist/index.js
function $2(e) {
  if (!e) return;
  let r = "";
  return typeof e?.email < "u" && (e.email ? r += "email=yes," : r += "email=no,"), typeof e?.telephone < "u" && (e.telephone ? r += "telephone=yes," : r += "telephone=no,"), typeof e?.address < "u" && (e.address ? r += "address=yes," : r += "address=no,"), typeof e?.url < "u" && (e.url ? r += "url=yes," : r += "url=no,"), typeof e?.date < "u" && (e.date ? r += "date=yes" : r += "date=no"), r;
}
function w3(e) {
  if (!e) return null;
  if (typeof e == "string") return e;
  let r = [];
  return (e?.follow !== void 0 || e?.nofollow !== void 0) && (e.follow === true || e.nofollow === false ? r.push("follow") : r.push("nofollow")), (e?.index !== void 0 || e?.noindex !== void 0) && (e.index === true || e.noindex === false ? r.push("index") : r.push("noindex")), e?.indexifembedded === true && r.push("indexifembedded"), e?.["max-image-preview"] !== void 0 && r.push(`max-image-preview:${e["max-image-preview"]}`), e?.["max-snippet"] !== void 0 && r.push(`max-snippet:${e["max-snippet"]}`), e?.["max-video-preview"] !== void 0 && r.push(`max-video-preview:${e["max-video-preview"]}`), e?.noarchive === true && r.push("noarchive"), e?.nocache === true && r.push("nocache"), e?.noimageindex === true && r.push("noimageindex"), e?.nositelinkssearchbox === true && r.push("nositelinkssearchbox"), e?.nosnippet === true && r.push("nosnippet"), e?.notranslate === true && r.push("notranslate"), e?.unavailable_after !== void 0 && r.push(`unavailable_after: ${e.unavailable_after}`), r.join(", ");
}
function S2(e) {
  if (!e) return null;
  let r = [];
  return e.width !== void 0 && r.push(`width=${e.width}`), e.height !== void 0 && r.push(`height=${e.height}`), e.initialScale !== void 0 && r.push(`initial-scale=${e.initialScale}`), e.interactiveWidget !== void 0 && r.push(`interactive-widget=${e.interactiveWidget}`), e.maximumScale !== void 0 && r.push(`maximum-scale=${e.maximumScale}`), e.minimumScale !== void 0 && r.push(`minimum-scale=${e.minimumScale}`), e.userScalable !== void 0 && (e.userScalable === true && r.push("user-scalable=yes"), r.push("user-scalable=no")), e.viewportFit !== void 0 && r.push(`viewport-fit=${e.viewportFit}`), r.join(", ");
}
function y3(e) {
  return typeof e == "string" ? e : e.join(",");
}
function g3(e, r) {
  let o2 = document.querySelector(`meta[name="${e}"]`);
  o2 || (o2 = document.createElement("meta"), o2.setAttribute("name", e), document.head.appendChild(o2)), o2.setAttribute("content", r);
}
function b(e, r) {
  let o2 = document.querySelector(`meta[property="${e}"]`);
  o2 || (o2 = document.createElement("meta"), o2.setAttribute("property", e), document.head.appendChild(o2)), o2.setAttribute("content", r);
}
function P2(e, r) {
  let o2 = useConfig(), d2 = { title: e.title ?? r.title, description: e.description ?? r.description, generator: e.generator ?? r.generator, applicationName: e.applicationName ?? r.applicationName, referrer: e.referrer ?? r.referrer, keywords: e.keywords ?? r.keywords, authors: e.authors ?? r.authors, creator: e.creator ?? r.creator, publisher: e.publisher ?? r.publisher, formatDetection: e.formatDetection ?? r.formatDetection, openGraph: { title: e.openGraph?.title ?? e.title ?? r.title, description: e.openGraph?.description ?? e.description ?? r.description, url: e.openGraph?.url ?? r?.openGraph?.url, siteName: e.openGraph?.siteName ?? r?.openGraph?.siteName, images: e.openGraph?.images ?? r?.openGraph?.images, videos: e.openGraph?.videos ?? r?.openGraph?.videos, audio: e.openGraph?.audio ?? r?.openGraph?.audio, locale: e.openGraph?.locale ?? r?.openGraph?.locale, type: e.openGraph?.type ?? r?.openGraph?.type }, robots: e.robots ?? r.robots, manifest: e.manifest ?? r.manifest, twitter: { creator: e.twitter?.creator ?? r?.twitter?.creator, creatorId: e.twitter?.creatorId ?? r?.twitter?.creatorId, description: e.twitter?.description ?? e.description ?? r.description, images: e.twitter?.images ?? r?.twitter?.images, site: e.twitter?.site ?? r?.twitter?.site, siteId: e.twitter?.siteId ?? r?.twitter?.siteId, title: e.twitter?.title ?? e.title ?? r.title, card: e.twitter?.card ?? r?.twitter?.card, players: e.twitter?.players ?? r?.twitter?.players, app: e?.twitter?.app ?? r?.twitter?.app }, viewport: e.viewport ?? r.viewport, verification: e.verification ?? r.verification, other: e.other ?? r.other, otherJSX: e.otherJSX ?? r.otherJSX };
  function u3() {
    return [memo(() => a("generator", d2.generator)), memo(() => a("application-name", d2.applicationName)), memo(() => a("referrer", d2.referrer)), memo(() => a("keywords", d2?.keywords?.length ? y3(d2.keywords) : null)), memo(() => p3(d2?.authors, (f3) => [memo(() => a("author", f3.name)), memo(() => memo(() => !!f3.url)() ? (() => {
      var m3 = J3();
      return createRenderEffect(() => notSup(m3, "href", f3.url?.toString())), m3;
    })() : null)])), memo(() => a("creator", d2?.creator)), memo(() => a("publisher", d2?.publisher)), memo(() => a("format-detection", d2?.formatDetection ? $2(d2.formatDetection) : null)), memo(() => W3(d2?.openGraph)), memo(() => a("robots", d2?.robots ? w3(d2.robots) : null)), memo(() => a("googlebot", d2?.robots?.googleBot ? w3(d2?.robots?.googleBot) : null)), memo(() => memo(() => !!d2?.manifest)() ? (() => {
      var f3 = X2();
      return createRenderEffect(() => notSup(f3, "href", d2.manifest?.toString())), f3;
    })() : null), memo(() => G3(d2.twitter)), memo(() => z2(d2.viewport)), memo(() => k(d2?.verification)), memo(() => k(d2?.other)), memo(() => d2.otherJSX)];
  }
  o2({ title: d2.title, description: d2.description, Head: u3 }), typeof window > "u" || (d2.openGraph.title && b("og:title", d2.openGraph.title), d2.description && g3("description", d2.description), d2.openGraph.description && b("og:description", d2.openGraph.description), d2.twitter.title && g3("twitter:title", d2.twitter.title), d2.twitter.description && g3("twitter:description", d2.twitter.description), d2.keywords?.length && g3("keywords", y3(d2.keywords)));
}
function H2(e) {
  _3 = e;
}
function a(e, r) {
  return r ? (() => {
    var o2 = R2();
    return notSup(o2, "name", e), notSup(o2, "content", r), o2;
  })() : null;
}
function n(e, r) {
  return r ? (() => {
    var o2 = R2();
    return notSup(o2, "property", e), notSup(o2, "content", r), o2;
  })() : null;
}
function p3(e, r) {
  return e ? Array.isArray(e) ? e.map(r) : r(e, 0) : null;
}
function W3(e) {
  if (!e) return null;
  function r(i3) {
    return i3.type !== "article" ? null : [memo(() => p3(i3.authors, (s3) => n("article:author", s3))), memo(() => n("article:expiration_time", i3.expirationTime)), memo(() => n("article:modified_time", i3.modifiedTime)), memo(() => n("article:published_time", i3.publishedTime)), memo(() => n("article:section", i3.section)), memo(() => p3(i3.tags, (s3) => n("article:tag", s3)))];
  }
  function o2(i3) {
    return i3.type !== "book" ? null : [memo(() => p3(i3.authors, (s3) => n("article:author", s3))), memo(() => n("book:isbn", i3.isbn)), memo(() => n("book:release_date", i3.releaseDate)), memo(() => p3(i3.tags, (s3) => n("article:tag", s3)))];
  }
  function d2(i3) {
    return i3.type !== "profile" ? null : [memo(() => n("profile:first_name", i3.firstName)), memo(() => n("profile:last_name", i3.lastName)), memo(() => n("profile:username", i3.username)), memo(() => n("profile:gender", i3.gender))];
  }
  function u3(i3) {
    return i3.type !== "music.song" ? null : [memo(() => p3(i3.albums, (s3) => typeof s3 == "string" || s3 instanceof URL ? n("music:album", s3) : [memo(() => n("music:album:disc", s3?.disc)), memo(() => n("music:album:track", s3?.track)), memo(() => n("music:album", s3?.url))])), memo(() => n("music:duration", i3.duration)), memo(() => p3(i3.musicians, (s3) => n("music:musician", s3)))];
  }
  function f3(i3) {
    return i3.type !== "music.album" ? null : [memo(() => p3(i3.musicians, (s3) => n("music:musician", s3))), memo(() => n("music:release_date", i3.releaseDate)), memo(() => p3(i3.songs, (s3) => typeof s3 == "string" || s3 instanceof URL ? n("music:song", s3) : [memo(() => n("music:song:disc", s3?.disc)), memo(() => n("music:song:track", s3?.track)), memo(() => n("music:song", s3?.url))]))];
  }
  function m3(i3) {
    return i3.type !== "music.playlist" ? null : [memo(() => p3(i3.creators, (s3) => n("music:creator", s3))), memo(() => p3(i3.songs, (s3) => typeof s3 == "string" || s3 instanceof URL ? n("music:song", s3) : [memo(() => n("music:song:disc", s3?.disc)), memo(() => n("music:song:track", s3?.track)), memo(() => n("music:song", s3?.url))]))];
  }
  function V2(i3) {
    return i3.type !== "music.radio_station" ? null : memo(() => p3(i3.creators, (s3) => n("music:creator", s3)));
  }
  function j3(i3) {
    return i3.type !== "video.movie" ? null : [memo(() => p3(i3.actors, (s3) => typeof s3 == "string" || s3 instanceof URL ? n("video:actor", s3) : [memo(() => n("video:actor:role", s3?.role)), memo(() => n("video:actor", s3?.url))])), memo(() => p3(i3.directors, (s3) => n("video:director", s3))), memo(() => n("video:duration", i3.duration)), memo(() => n("video:release_date", i3.releaseDate)), memo(() => p3(i3.tags, (s3) => n("video.tag", s3))), memo(() => p3(i3.writers, (s3) => n("video:writer", s3)))];
  }
  function B(i3) {
    return i3.type !== "video.episode" ? null : [memo(() => p3(i3.actors, (s3) => typeof s3 == "string" || s3 instanceof URL ? n("video:actor", s3) : [memo(() => n("video:actor:role", s3?.role)), memo(() => n("video:actor", s3?.url))])), memo(() => p3(i3.directors, (s3) => n("video:director", s3))), memo(() => n("video:duration", i3.duration)), memo(() => n("video:release_date", i3.releaseDate)), memo(() => n("video:series", i3.series)), memo(() => p3(i3.tags, (s3) => n("video.tag", s3))), memo(() => p3(i3.writers, (s3) => n("video:writer", s3)))];
  }
  return [memo(() => p3(e?.alternateLocale, (i3) => n("og:locale:alternate", i3))), memo(() => p3(e?.audio, (i3) => typeof i3 == "string" || i3 instanceof URL ? n("og:audio", i3?.toString()) : [memo(() => n("og:audio", i3?.url)), memo(() => n("og:audio:type", i3?.type))])), memo(() => n("og:country-name", e?.countryName)), memo(() => n("og:determiner", e?.determiner)), memo(() => p3(e?.emails, (i3) => n("og:email", i3))), memo(() => p3(e?.faxNumbers, (i3) => n("og:fax_number", i3))), memo(() => p3(e?.images, (i3) => typeof i3 == "string" || i3 instanceof URL ? n("og:image", i3?.toString()) : [memo(() => n("og:image", i3?.url)), memo(() => n("og:image:secure_url", i3?.secureUrl)), memo(() => n("og:image:width", i3?.width)), memo(() => n("og:image:height", i3?.height)), memo(() => n("og:image:alt", i3?.alt))])), memo(() => n("og:locale", e?.locale)), memo(() => p3(e?.phoneNumbers, (i3) => n("og:phone_number", i3))), memo(() => n("og:site_name", e?.siteName)), memo(() => n("og:ttl", e?.ttl)), memo(() => n("og:url", e?.url)), memo(() => p3(e?.videos, (i3) => typeof i3 == "string" || i3 instanceof URL ? n("og:video", i3?.toString()) : [memo(() => n("og:video", i3?.url)), memo(() => n("og:video:secure_url", i3?.secureUrl)), memo(() => n("og:video:type", i3?.type)), memo(() => n("og:video:width", i3?.width)), memo(() => n("og:video:height", i3?.height))])), memo(() => n("og:type", e?.type)), memo(() => r(e)), memo(() => o2(e)), memo(() => d2(e)), memo(() => u3(e)), memo(() => f3(e)), memo(() => m3(e)), memo(() => V2(e)), memo(() => j3(e)), memo(() => B(e))];
}
function G3(e) {
  if (!e) return null;
  function r(o2) {
    return o2 ? [memo(() => a("twitter:app:id:googleplay", o2?.id?.googleplay)), memo(() => a("twitter:app:url:googleplay", o2?.url?.googleplay)), memo(() => a("twitter:app:id:iphone", o2?.id?.iphone)), memo(() => a("twitter:app:url:iphone", o2?.url?.iphone)), memo(() => a("twitter:app:id:ipad", o2?.id?.ipad)), memo(() => a("twitter:app:url:ipad", o2?.url?.ipad)), memo(() => a("twitter:app:name:googleplay", o2?.id?.googleplay ? o2?.name : void 0)), memo(() => a("twitter:app:name:iphone", o2?.id?.iphone ? o2?.name : void 0)), memo(() => a("twitter:app:name:ipad", o2?.id?.ipad ? o2?.name : void 0))] : null;
  }
  return [memo(() => a("twitter:creator", e.creator)), memo(() => a("twitter:creator:id", e.creatorId)), memo(() => a("twitter:description", e.description)), memo(() => a("twitter:site", e.site)), memo(() => a("twitter:site:id", e.siteId)), memo(() => a("twitter:title", e.title)), memo(() => a("twitter:card", e.card)), memo(() => p3(e?.images, (o2) => typeof o2 == "string" || o2 instanceof URL ? (() => {
    var d2 = M2();
    return createRenderEffect(() => notSup(d2, "content", o2?.toString())), d2;
  })() : [(() => {
    var d2 = M2();
    return createRenderEffect(() => notSup(d2, "content", o2.url?.toString())), d2;
  })(), ";", memo(() => a("twitter:image:alt", o2.alt))])), memo(() => p3(e?.players, (o2) => [memo(() => a("twitter:player", o2.playerUrl)), memo(() => a("twitter:player:width", o2.width)), memo(() => a("twitter:player:height", o2.height)), memo(() => a("twitter:player:stream", o2.streamUrl))])), memo(() => r(e?.app))];
}
function z2(e) {
  return e ? [memo(() => a("color-scheme", e.colorScheme)), memo(() => p3(e.themeColor, (r) => typeof r == "string" ? (() => {
    var o2 = x2();
    return notSup(o2, "content", r), o2;
  })() : r.media ? (() => {
    var o2 = x2();
    return createRenderEffect((d2) => {
      var u3 = r.media, f3 = r.color;
      return u3 !== d2.e && notSup(o2, "media", d2.e = u3), f3 !== d2.t && notSup(o2, "content", d2.t = f3), d2;
    }, { e: void 0, t: void 0 }), o2;
  })() : (() => {
    var o2 = x2();
    return createRenderEffect(() => notSup(o2, "content", r.color)), o2;
  })())), memo(() => a("viewport", S2(e)))] : null;
}
function k(e) {
  return e ? Object.entries(e).map(([r, o2]) => Array.isArray(o2) ? p3(o2, (d2) => a(r, d2)) : a(r, o2)) : null;
}
var J3, X2, R2, M2, x2, _3, K3;
var init_dist = __esm({
  "node_modules/vike-metadata-solid/dist/index.js"() {
    init_server2();
    init_useConfig_server();
    J3 = notSup("<link rel=author>");
    X2 = notSup("<link rel=manifest>");
    R2 = notSup("<meta>");
    M2 = notSup("<meta name=twitter:image>");
    x2 = notSup("<meta name=theme-color>");
    _3 = {};
    K3 = (e) => P2(e, _3);
    K3.setGlobalDefaults = H2;
  }
});

// .vercel/output/_tmp/chunks/chunk-BmptMkqR.js
function getRoute(route2, ...args) {
  const options = args[0] || {};
  let result = route2;
  if (options.params) {
    const params = { ...options.params };
    Object.entries(params).forEach(([key, value]) => {
      if (key !== "@") {
        result = result.replace(`@${key}`, String(value));
      }
    });
    if (route2.endsWith("/@") && "@" in params) {
      const catchallValue = params["@"];
      result = result.substring(0, result.length - 2);
      if (Array.isArray(catchallValue)) {
        result += `/${catchallValue.join("/")}`;
      } else if (typeof catchallValue === "string") {
        const prefix2 = catchallValue.startsWith("/") ? "" : "/";
        result += `${prefix2}${catchallValue}`;
      }
    }
  }
  if (options.search) {
    const searchParams = new URLSearchParams(options.search);
    result += `?${searchParams.toString()}`;
  }
  return result;
}
function getTitle(title = "Home") {
  return TITLE_TEMPLATE.replace("%s", title);
}
function RootLayout(props) {
  return ssr(_tmpl$, ssrHydrationKey(), ssrAttribute("href", escape(getRoute("/"), true), false), ssrAttribute("href", escape(getRoute("/dashboard"), true), false), escape(createComponent(Counter, {})), escape(props.children));
}
function Counter() {
  const [count, setCount] = createSignal(0);
  return ssr(_tmpl$2, ssrHydrationKey(), escape(count()));
}
var TITLE_TEMPLATE, _tmpl$, _tmpl$2, import3;
var init_chunk_BmptMkqR = __esm({
  ".vercel/output/_tmp/chunks/chunk-BmptMkqR.js"() {
    "use strict";
    init_server2();
    init_server();
    init_dist();
    init_usePageContext();
    TITLE_TEMPLATE = "%s | Solid Hop";
    _tmpl$ = ["<div", "><nav><a", ">Home</a><span> | </span><a", ">Dashboard</a><span> | </span><!--$-->", "<!--/--></nav><!--$-->", "<!--/--></div>"];
    _tmpl$2 = ["<button", ' type="button">Root Counter <!--$-->', "<!--/--></button>"];
    K3.setGlobalDefaults({
      title: getTitle("Home"),
      description: "Demo showcasing Vike and Solid."
    });
    import3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: RootLayout
    }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .vercel/output/_tmp/entries/src_pages_error.mjs
var src_pages_error_exports = {};
__export(src_pages_error_exports, {
  configValuesSerialized: () => configValuesSerialized
});
function Page2() {
  const {
    is404: is4042
  } = usePageContext();
  return createComponent(Show, {
    when: is4042,
    get fallback() {
      return [ssr(_tmpl$32, ssrHydrationKey()), ssr(_tmpl$4, ssrHydrationKey())];
    },
    get children() {
      return [ssr(_tmpl$3, ssrHydrationKey()), ssr(_tmpl$22, ssrHydrationKey())];
    }
  });
}
var _tmpl$3, _tmpl$22, _tmpl$32, _tmpl$4, import2, configValuesSerialized;
var init_src_pages_error = __esm({
  ".vercel/output/_tmp/entries/src_pages_error.mjs"() {
    "use strict";
    init_onRenderHtml();
    init_server2();
    init_server();
    init_usePageContext();
    init_chunk_BmptMkqR();
    _tmpl$3 = ["<h1", ">404 Page Not Found</h1>"];
    _tmpl$22 = ["<p", ">This page could not be found.</p>"];
    _tmpl$32 = ["<h1", ">500 Internal Server Error</h1>"];
    _tmpl$4 = ["<p", ">Something went wrong.</p>"];
    import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: Page2
    }, Symbol.toStringTag, { value: "Module" }));
    configValuesSerialized = {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["onRenderHtml"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-solid/__internal/integration/onRenderHtml", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "pointer-import",
          value: onRenderHtml
        }
      },
      ["Page"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/_error/+Page.tsx", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "plus-file",
          exportValues: import2
        }
      },
      ["passToClient"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "vike-solid/config", "fileExportPathToShowToUser": ["default", "passToClient"] }],
        valueSerialized: [{
          type: "js-serialized",
          value: ["_configFromHook"]
        }]
      },
      ["Layout"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "/src/pages/+Layout.tsx", "fileExportPathToShowToUser": [] }],
        valueSerialized: [{
          type: "plus-file",
          exportValues: import3
        }]
      },
      ["stream"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "vike-photon/config", "fileExportPathToShowToUser": ["default", "stream"] }],
        valueSerialized: [{
          type: "js-serialized",
          value: { "enable": null, "type": "web" }
        }]
      }
    };
  }
});

// .vercel/output/_tmp/chunks/chunk-C6HzFhMK.js
function DashboardLayout(props) {
  return ssr(_tmpl$5, ssrHydrationKey(), ssrAttribute("href", escape(getRoute("/dashboard"), true), false), ssrAttribute("href", escape(getRoute("/dashboard/settings"), true), false), escape(createComponent(Counter2, {})), escape(props.children));
}
function Counter2() {
  const [count, setCount] = createSignal(0);
  return ssr(_tmpl$23, ssrHydrationKey(), escape(count()));
}
var _tmpl$5, _tmpl$23, import32;
var init_chunk_C6HzFhMK = __esm({
  ".vercel/output/_tmp/chunks/chunk-C6HzFhMK.js"() {
    "use strict";
    init_server2();
    init_server();
    init_chunk_BmptMkqR();
    _tmpl$5 = ["<div", "><aside><a", ">Dashboard</a><span> | </span><a", ">Settings</a><span> | </span><!--$-->", "<!--/--></aside><!--$-->", "<!--/--></div>"];
    _tmpl$23 = ["<button", ' type="button">Dashboard Counter <!--$-->', "<!--/--></button>"];
    import32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: DashboardLayout
    }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .vercel/output/_tmp/entries/src_pages_dashboard.mjs
var src_pages_dashboard_exports = {};
__export(src_pages_dashboard_exports, {
  configValuesSerialized: () => configValuesSerialized2
});
function Page3() {
  K3({
    title: getTitle("Dashboard")
  });
  return ssr(_tmpl$6, ssrHydrationKey());
}
var _tmpl$6, import22, configValuesSerialized2;
var init_src_pages_dashboard = __esm({
  ".vercel/output/_tmp/entries/src_pages_dashboard.mjs"() {
    "use strict";
    init_onRenderHtml();
    init_server2();
    init_dist();
    init_chunk_BmptMkqR();
    init_chunk_C6HzFhMK();
    init_usePageContext();
    _tmpl$6 = ["<div", "><h1>This is the /dashboard</h1><p>Demonstrating nested layout.</p></div>"];
    import22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: Page3
    }, Symbol.toStringTag, { value: "Module" }));
    configValuesSerialized2 = {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["onRenderHtml"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-solid/__internal/integration/onRenderHtml", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "pointer-import",
          value: onRenderHtml
        }
      },
      ["Page"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/dashboard/+Page.tsx", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "plus-file",
          exportValues: import22
        }
      },
      ["passToClient"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "vike-solid/config", "fileExportPathToShowToUser": ["default", "passToClient"] }],
        valueSerialized: [{
          type: "js-serialized",
          value: ["_configFromHook"]
        }]
      },
      ["Layout"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "/src/pages/dashboard/+Layout.tsx", "fileExportPathToShowToUser": [] }, { "filePathToShowToUser": "/src/pages/+Layout.tsx", "fileExportPathToShowToUser": [] }],
        valueSerialized: [{
          type: "plus-file",
          exportValues: import32
        }, {
          type: "plus-file",
          exportValues: import3
        }]
      },
      ["stream"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "vike-photon/config", "fileExportPathToShowToUser": ["default", "stream"] }],
        valueSerialized: [{
          type: "js-serialized",
          value: { "enable": null, "type": "web" }
        }]
      }
    };
  }
});

// .vercel/output/_tmp/entries/src_pages_dashboard_settings.mjs
var src_pages_dashboard_settings_exports = {};
__export(src_pages_dashboard_settings_exports, {
  configValuesSerialized: () => configValuesSerialized3
});
function Page4() {
  K3({
    title: getTitle("Home")
  });
  return ssr(_tmpl$7, ssrHydrationKey());
}
var _tmpl$7, import23, configValuesSerialized3;
var init_src_pages_dashboard_settings = __esm({
  ".vercel/output/_tmp/entries/src_pages_dashboard_settings.mjs"() {
    "use strict";
    init_onRenderHtml();
    init_server2();
    init_dist();
    init_chunk_BmptMkqR();
    init_chunk_C6HzFhMK();
    init_usePageContext();
    _tmpl$7 = ["<div", "><h1>This is the /dashboard/settings</h1><p>Demonstrating nested layout.</p></div>"];
    import23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: Page4
    }, Symbol.toStringTag, { value: "Module" }));
    configValuesSerialized3 = {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["onRenderHtml"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-solid/__internal/integration/onRenderHtml", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "pointer-import",
          value: onRenderHtml
        }
      },
      ["Page"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/dashboard/settings/+Page.tsx", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "plus-file",
          exportValues: import23
        }
      },
      ["passToClient"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "vike-solid/config", "fileExportPathToShowToUser": ["default", "passToClient"] }],
        valueSerialized: [{
          type: "js-serialized",
          value: ["_configFromHook"]
        }]
      },
      ["Layout"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "/src/pages/dashboard/+Layout.tsx", "fileExportPathToShowToUser": [] }, { "filePathToShowToUser": "/src/pages/+Layout.tsx", "fileExportPathToShowToUser": [] }],
        valueSerialized: [{
          type: "plus-file",
          exportValues: import32
        }, {
          type: "plus-file",
          exportValues: import3
        }]
      },
      ["stream"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "vike-photon/config", "fileExportPathToShowToUser": ["default", "stream"] }],
        valueSerialized: [{
          type: "js-serialized",
          value: { "enable": null, "type": "web" }
        }]
      }
    };
  }
});

// node_modules/hono/dist/utils/url.js
var splitPath, splitRoutingPath, extractGroupsFromPath, replaceGroupMarks, patternCache, getPattern, tryDecode, tryDecodeURI, getPath, getPathNoStrict, mergePath, checkOptionalParameter, _decodeURI, _getQueryParam, getQueryParam, getQueryParams, decodeURIComponent_;
var init_url = __esm({
  "node_modules/hono/dist/utils/url.js"() {
    splitPath = (path) => {
      const paths = path.split("/");
      if (paths[0] === "") {
        paths.shift();
      }
      return paths;
    };
    splitRoutingPath = (routePath) => {
      const { groups, path } = extractGroupsFromPath(routePath);
      const paths = splitPath(path);
      return replaceGroupMarks(paths, groups);
    };
    extractGroupsFromPath = (path) => {
      const groups = [];
      path = path.replace(/\{[^}]+\}/g, (match2, index) => {
        const mark = `@${index}`;
        groups.push([mark, match2]);
        return mark;
      });
      return { groups, path };
    };
    replaceGroupMarks = (paths, groups) => {
      for (let i3 = groups.length - 1; i3 >= 0; i3--) {
        const [mark] = groups[i3];
        for (let j3 = paths.length - 1; j3 >= 0; j3--) {
          if (paths[j3].includes(mark)) {
            paths[j3] = paths[j3].replace(mark, groups[i3][1]);
            break;
          }
        }
      }
      return paths;
    };
    patternCache = {};
    getPattern = (label, next) => {
      if (label === "*") {
        return "*";
      }
      const match2 = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
      if (match2) {
        const cacheKey = `${label}#${next}`;
        if (!patternCache[cacheKey]) {
          if (match2[2]) {
            patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match2[1], new RegExp(`^${match2[2]}(?=/${next})`)] : [label, match2[1], new RegExp(`^${match2[2]}$`)];
          } else {
            patternCache[cacheKey] = [label, match2[1], true];
          }
        }
        return patternCache[cacheKey];
      }
      return null;
    };
    tryDecode = (str, decoder) => {
      try {
        return decoder(str);
      } catch {
        return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match2) => {
          try {
            return decoder(match2);
          } catch {
            return match2;
          }
        });
      }
    };
    tryDecodeURI = (str) => tryDecode(str, decodeURI);
    getPath = (request) => {
      const url5 = request.url;
      const start = url5.indexOf("/", url5.indexOf(":") + 4);
      let i3 = start;
      for (; i3 < url5.length; i3++) {
        const charCode = url5.charCodeAt(i3);
        if (charCode === 37) {
          const queryIndex = url5.indexOf("?", i3);
          const path = url5.slice(start, queryIndex === -1 ? void 0 : queryIndex);
          return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
        } else if (charCode === 63) {
          break;
        }
      }
      return url5.slice(start, i3);
    };
    getPathNoStrict = (request) => {
      const result = getPath(request);
      return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
    };
    mergePath = (base, sub, ...rest) => {
      if (rest.length) {
        sub = mergePath(sub, ...rest);
      }
      return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
    };
    checkOptionalParameter = (path) => {
      if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
        return null;
      }
      const segments = path.split("/");
      const results = [];
      let basePath = "";
      segments.forEach((segment) => {
        if (segment !== "" && !/\:/.test(segment)) {
          basePath += "/" + segment;
        } else if (/\:/.test(segment)) {
          if (/\?/.test(segment)) {
            if (results.length === 0 && basePath === "") {
              results.push("/");
            } else {
              results.push(basePath);
            }
            const optionalSegment = segment.replace("?", "");
            basePath += "/" + optionalSegment;
            results.push(basePath);
          } else {
            basePath += "/" + segment;
          }
        }
      });
      return results.filter((v2, i3, a2) => a2.indexOf(v2) === i3);
    };
    _decodeURI = (value) => {
      if (!/[%+]/.test(value)) {
        return value;
      }
      if (value.indexOf("+") !== -1) {
        value = value.replace(/\+/g, " ");
      }
      return value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value;
    };
    _getQueryParam = (url5, key, multiple) => {
      let encoded;
      if (!multiple && key && !/[%+]/.test(key)) {
        let keyIndex2 = url5.indexOf("?", 8);
        if (keyIndex2 === -1) {
          return void 0;
        }
        if (!url5.startsWith(key, keyIndex2 + 1)) {
          keyIndex2 = url5.indexOf(`&${key}`, keyIndex2 + 1);
        }
        while (keyIndex2 !== -1) {
          const trailingKeyCode = url5.charCodeAt(keyIndex2 + key.length + 1);
          if (trailingKeyCode === 61) {
            const valueIndex = keyIndex2 + key.length + 2;
            const endIndex = url5.indexOf("&", valueIndex);
            return _decodeURI(url5.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
          } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
            return "";
          }
          keyIndex2 = url5.indexOf(`&${key}`, keyIndex2 + 1);
        }
        encoded = /[%+]/.test(url5);
        if (!encoded) {
          return void 0;
        }
      }
      const results = {};
      encoded ??= /[%+]/.test(url5);
      let keyIndex = url5.indexOf("?", 8);
      while (keyIndex !== -1) {
        const nextKeyIndex = url5.indexOf("&", keyIndex + 1);
        let valueIndex = url5.indexOf("=", keyIndex);
        if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
          valueIndex = -1;
        }
        let name = url5.slice(
          keyIndex + 1,
          valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
        );
        if (encoded) {
          name = _decodeURI(name);
        }
        keyIndex = nextKeyIndex;
        if (name === "") {
          continue;
        }
        let value;
        if (valueIndex === -1) {
          value = "";
        } else {
          value = url5.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
          if (encoded) {
            value = _decodeURI(value);
          }
        }
        if (multiple) {
          if (!(results[name] && Array.isArray(results[name]))) {
            results[name] = [];
          }
          ;
          results[name].push(value);
        } else {
          results[name] ??= value;
        }
      }
      return key ? results[key] : results;
    };
    getQueryParam = _getQueryParam;
    getQueryParams = (url5, key) => {
      return _getQueryParam(url5, key, true);
    };
    decodeURIComponent_ = decodeURIComponent;
  }
});

// node_modules/hono/dist/utils/cookie.js
var _serialize, serialize;
var init_cookie = __esm({
  "node_modules/hono/dist/utils/cookie.js"() {
    init_url();
    _serialize = (name, value, opt = {}) => {
      let cookie = `${name}=${value}`;
      if (name.startsWith("__Secure-") && !opt.secure) {
        throw new Error("__Secure- Cookie must have Secure attributes");
      }
      if (name.startsWith("__Host-")) {
        if (!opt.secure) {
          throw new Error("__Host- Cookie must have Secure attributes");
        }
        if (opt.path !== "/") {
          throw new Error('__Host- Cookie must have Path attributes with "/"');
        }
        if (opt.domain) {
          throw new Error("__Host- Cookie must not have Domain attributes");
        }
      }
      if (opt && typeof opt.maxAge === "number" && opt.maxAge >= 0) {
        if (opt.maxAge > 3456e4) {
          throw new Error(
            "Cookies Max-Age SHOULD NOT be greater than 400 days (34560000 seconds) in duration."
          );
        }
        cookie += `; Max-Age=${opt.maxAge | 0}`;
      }
      if (opt.domain && opt.prefix !== "host") {
        cookie += `; Domain=${opt.domain}`;
      }
      if (opt.path) {
        cookie += `; Path=${opt.path}`;
      }
      if (opt.expires) {
        if (opt.expires.getTime() - Date.now() > 3456e7) {
          throw new Error(
            "Cookies Expires SHOULD NOT be greater than 400 days (34560000 seconds) in the future."
          );
        }
        cookie += `; Expires=${opt.expires.toUTCString()}`;
      }
      if (opt.httpOnly) {
        cookie += "; HttpOnly";
      }
      if (opt.secure) {
        cookie += "; Secure";
      }
      if (opt.sameSite) {
        cookie += `; SameSite=${opt.sameSite.charAt(0).toUpperCase() + opt.sameSite.slice(1)}`;
      }
      if (opt.priority) {
        cookie += `; Priority=${opt.priority.charAt(0).toUpperCase() + opt.priority.slice(1)}`;
      }
      if (opt.partitioned) {
        if (!opt.secure) {
          throw new Error("Partitioned Cookie must have Secure attributes");
        }
        cookie += "; Partitioned";
      }
      return cookie;
    };
    serialize = (name, value, opt) => {
      value = encodeURIComponent(value);
      return _serialize(name, value, opt);
    };
  }
});

// node_modules/hono/dist/client/fetch-result-please.js
var init_fetch_result_please = __esm({
  "node_modules/hono/dist/client/fetch-result-please.js"() {
  }
});

// node_modules/hono/dist/client/utils.js
function isObject4(item) {
  return typeof item === "object" && item !== null && !Array.isArray(item);
}
function deepMerge(target, source) {
  if (!isObject4(target) && !isObject4(source)) {
    return source;
  }
  const merged = { ...target };
  for (const key in source) {
    const value = source[key];
    if (isObject4(merged[key]) && isObject4(value)) {
      merged[key] = deepMerge(merged[key], value);
    } else {
      merged[key] = value;
    }
  }
  return merged;
}
var mergePath2, replaceUrlParam, buildSearchParams, replaceUrlProtocol, removeIndexString;
var init_utils7 = __esm({
  "node_modules/hono/dist/client/utils.js"() {
    init_fetch_result_please();
    mergePath2 = (base, path) => {
      base = base.replace(/\/+$/, "");
      base = base + "/";
      path = path.replace(/^\/+/, "");
      return base + path;
    };
    replaceUrlParam = (urlString, params) => {
      for (const [k2, v2] of Object.entries(params)) {
        const reg = new RegExp("/:" + k2 + "(?:{[^/]+})?\\??");
        urlString = urlString.replace(reg, v2 ? `/${v2}` : "");
      }
      return urlString;
    };
    buildSearchParams = (query2) => {
      const searchParams = new URLSearchParams();
      for (const [k2, v2] of Object.entries(query2)) {
        if (v2 === void 0) {
          continue;
        }
        if (Array.isArray(v2)) {
          for (const v22 of v2) {
            searchParams.append(k2, v22);
          }
        } else {
          searchParams.set(k2, v2);
        }
      }
      return searchParams;
    };
    replaceUrlProtocol = (urlString, protocol) => {
      switch (protocol) {
        case "ws":
          return urlString.replace(/^http/, "ws");
        case "http":
          return urlString.replace(/^ws/, "http");
      }
    };
    removeIndexString = (urlString) => {
      if (/^https?:\/\/[^\/]+?\/index(?=\?|$)/.test(urlString)) {
        return urlString.replace(/\/index(?=\?|$)/, "/");
      }
      return urlString.replace(/\/index(?=\?|$)/, "");
    };
  }
});

// node_modules/hono/dist/client/client.js
var createProxy, ClientRequestImpl, hc;
var init_client = __esm({
  "node_modules/hono/dist/client/client.js"() {
    init_cookie();
    init_utils7();
    createProxy = (callback, path) => {
      const proxy2 = new Proxy(() => {
      }, {
        get(_obj, key) {
          if (typeof key !== "string" || key === "then") {
            return void 0;
          }
          return createProxy(callback, [...path, key]);
        },
        apply(_1, _22, args) {
          return callback({
            path,
            args
          });
        }
      });
      return proxy2;
    };
    ClientRequestImpl = class {
      url;
      method;
      buildSearchParams;
      queryParams = void 0;
      pathParams = {};
      rBody;
      cType = void 0;
      constructor(url5, method, options) {
        this.url = url5;
        this.method = method;
        this.buildSearchParams = options.buildSearchParams;
      }
      fetch = async (args, opt) => {
        if (args) {
          if (args.query) {
            this.queryParams = this.buildSearchParams(args.query);
          }
          if (args.form) {
            const form = new FormData();
            for (const [k2, v2] of Object.entries(args.form)) {
              if (Array.isArray(v2)) {
                for (const v22 of v2) {
                  form.append(k2, v22);
                }
              } else {
                form.append(k2, v2);
              }
            }
            this.rBody = form;
          }
          if (args.json) {
            this.rBody = JSON.stringify(args.json);
            this.cType = "application/json";
          }
          if (args.param) {
            this.pathParams = args.param;
          }
        }
        let methodUpperCase = this.method.toUpperCase();
        const headerValues = {
          ...args?.header,
          ...typeof opt?.headers === "function" ? await opt.headers() : opt?.headers
        };
        if (args?.cookie) {
          const cookies = [];
          for (const [key, value] of Object.entries(args.cookie)) {
            cookies.push(serialize(key, value, { path: "/" }));
          }
          headerValues["Cookie"] = cookies.join(",");
        }
        if (this.cType) {
          headerValues["Content-Type"] = this.cType;
        }
        const headers = new Headers(headerValues ?? void 0);
        let url5 = this.url;
        url5 = removeIndexString(url5);
        url5 = replaceUrlParam(url5, this.pathParams);
        if (this.queryParams) {
          url5 = url5 + "?" + this.queryParams.toString();
        }
        methodUpperCase = this.method.toUpperCase();
        const setBody = !(methodUpperCase === "GET" || methodUpperCase === "HEAD");
        return (opt?.fetch || fetch)(url5, {
          body: setBody ? this.rBody : void 0,
          method: methodUpperCase,
          headers,
          ...opt?.init
        });
      };
    };
    hc = (baseUrl, options) => createProxy(function proxyCallback(opts) {
      const buildSearchParamsOption = options?.buildSearchParams ?? buildSearchParams;
      const parts = [...opts.path];
      const lastParts = parts.slice(-3).reverse();
      if (lastParts[0] === "toString") {
        if (lastParts[1] === "name") {
          return lastParts[2] || "";
        }
        return proxyCallback.toString();
      }
      if (lastParts[0] === "valueOf") {
        if (lastParts[1] === "name") {
          return lastParts[2] || "";
        }
        return proxyCallback;
      }
      let method = "";
      if (/^\$/.test(lastParts[0])) {
        const last = parts.pop();
        if (last) {
          method = last.replace(/^\$/, "");
        }
      }
      const path = parts.join("/");
      const url5 = mergePath2(baseUrl, path);
      if (method === "url") {
        let result = url5;
        if (opts.args[0]) {
          if (opts.args[0].param) {
            result = replaceUrlParam(url5, opts.args[0].param);
          }
          if (opts.args[0].query) {
            result = result + "?" + buildSearchParamsOption(opts.args[0].query).toString();
          }
        }
        result = removeIndexString(result);
        return new URL(result);
      }
      if (method === "ws") {
        const webSocketUrl = replaceUrlProtocol(
          opts.args[0] && opts.args[0].param ? replaceUrlParam(url5, opts.args[0].param) : url5,
          "ws"
        );
        const targetUrl = new URL(webSocketUrl);
        const queryParams = opts.args[0]?.query;
        if (queryParams) {
          Object.entries(queryParams).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              value.forEach((item) => targetUrl.searchParams.append(key, item));
            } else {
              targetUrl.searchParams.set(key, value);
            }
          });
        }
        const establishWebSocket = (...args) => {
          if (options?.webSocket !== void 0 && typeof options.webSocket === "function") {
            return options.webSocket(...args);
          }
          return new WebSocket(...args);
        };
        return establishWebSocket(targetUrl.toString());
      }
      const req = new ClientRequestImpl(url5, method, {
        buildSearchParams: buildSearchParamsOption
      });
      if (method) {
        options ??= {};
        const args = deepMerge(options, { ...opts.args[1] });
        return req.fetch(opts.args[0], args);
      }
      return req;
    }, []);
  }
});

// node_modules/hono/dist/client/index.js
var init_client2 = __esm({
  "node_modules/hono/dist/client/index.js"() {
    init_client();
    init_utils7();
  }
});

// node_modules/hono/dist/http-exception.js
var HTTPException;
var init_http_exception = __esm({
  "node_modules/hono/dist/http-exception.js"() {
    HTTPException = class extends Error {
      res;
      status;
      /**
       * Creates an instance of `HTTPException`.
       * @param status - HTTP status code for the exception. Defaults to 500.
       * @param options - Additional options for the exception.
       */
      constructor(status2 = 500, options) {
        super(options?.message, { cause: options?.cause });
        this.res = options?.res;
        this.status = status2;
      }
      /**
       * Returns the response object associated with the exception.
       * If a response object is not provided, a new response is created with the error message and status code.
       * @returns The response object.
       */
      getResponse() {
        if (this.res) {
          const newResponse = new Response(this.res.body, {
            status: this.status,
            headers: this.res.headers
          });
          return newResponse;
        }
        return new Response(this.message, {
          status: this.status
        });
      }
    };
  }
});

// .vercel/output/_tmp/entries/src_pages_index.mjs
var src_pages_index_exports = {};
__export(src_pages_index_exports, {
  configValuesSerialized: () => configValuesSerialized4
});
function formatZodIssues(issues) {
  if (!issues?.length) return void 0;
  return issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`).join(", ");
}
function Page5() {
  K3({
    title: getTitle("Home")
  });
  const [data] = createResource(async () => {
    const res = await honoClient.todos.$get();
    return res.json();
  });
  return ssr(_tmpl$8, ssrHydrationKey(), escape(createComponent(Counter3, {})), data.loading ? "Loading..." : data.error ? `Error: ${escape(data.error.message)}` : escape(JSON.stringify(data())));
}
function Counter3() {
  const [count, setCount] = createSignal(0);
  return ssr(_tmpl$24, ssrHydrationKey(), escape(count()));
}
var initHonoClient, baseurl, honoClient, _tmpl$8, _tmpl$24, import24, configValuesSerialized4;
var init_src_pages_index = __esm({
  ".vercel/output/_tmp/entries/src_pages_index.mjs"() {
    "use strict";
    init_onRenderHtml();
    init_server2();
    init_server();
    init_dist();
    init_client2();
    init_http_exception();
    init_chunk_BmptMkqR();
    init_usePageContext();
    initHonoClient = (baseUrl, ssrProxyParams) => hc(`${baseUrl}/api`, {
      headers: {},
      fetch: async (input, init) => {
        const response = await fetch(input, { ...init, cache: "no-store" });
        if (!response.ok) {
          const json = await response.json();
          const errorMessage = (() => {
            if (json?.error?.name === "ZodError")
              return formatZodIssues(json.error.issues);
            return json.error.message;
          })();
          throw new HTTPException(response.status, {
            message: errorMessage || response.statusText,
            cause: json.error.cause,
            res: response
          });
        }
        for (const [key, value] of response.headers) {
          key.toLowerCase();
        }
        return response;
      }
    });
    baseurl = typeof window === "undefined" ? "" : window?.location?.origin ?? "";
    honoClient = initHonoClient(baseurl);
    _tmpl$8 = ["<div", "><h1>My Vike + Solid app</h1>This page is:<ul><li>Rendered to HTML.</li><li>Interactive. <!--$-->", "<!--/--></li><li>Working fetch: <!--$-->", "<!--/--></li></ul></div>"];
    _tmpl$24 = ["<button", ' type="button">Counter <!--$-->', "<!--/--></button>"];
    import24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: Page5
    }, Symbol.toStringTag, { value: "Module" }));
    configValuesSerialized4 = {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["onRenderHtml"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-solid/__internal/integration/onRenderHtml", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "pointer-import",
          value: onRenderHtml
        }
      },
      ["Page"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/index/+Page.tsx", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "plus-file",
          exportValues: import24
        }
      },
      ["passToClient"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "vike-solid/config", "fileExportPathToShowToUser": ["default", "passToClient"] }],
        valueSerialized: [{
          type: "js-serialized",
          value: ["_configFromHook"]
        }]
      },
      ["Layout"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "/src/pages/+Layout.tsx", "fileExportPathToShowToUser": [] }],
        valueSerialized: [{
          type: "plus-file",
          exportValues: import3
        }]
      },
      ["stream"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "vike-photon/config", "fileExportPathToShowToUser": ["default", "stream"] }],
        valueSerialized: [{
          type: "js-serialized",
          value: { "enable": null, "type": "web" }
        }]
      }
    };
  }
});

// node_modules/regexparam/dist/index.mjs
var init_dist2 = __esm({
  "node_modules/regexparam/dist/index.mjs"() {
  }
});

// node_modules/@universal-middleware/express/node_modules/@universal-middleware/core/dist/index.js
function getRuntime(args) {
  const key = getRuntimeKey();
  return {
    runtime: key,
    ...args
  };
}
function getAdapter(key, args) {
  return {
    adapter: key,
    ...args
  };
}
function getAdapterRuntime(adapter, adapterArgs, runtimeArgs) {
  const a2 = getAdapter(adapter, adapterArgs);
  const r = getRuntime(runtimeArgs);
  return { ...r, ...a2 };
}
function nodeHeadersToWeb(nodeHeaders) {
  const headers = [];
  const keys = Object.keys(nodeHeaders);
  for (const key of keys) {
    headers.push([key, normalizeHttpHeader(nodeHeaders[key])]);
  }
  return new Headers(headers);
}
function normalizeHttpHeader(value) {
  if (Array.isArray(value)) {
    return value.join(", ");
  }
  return value || "";
}
function url(request) {
  if (request[urlSymbol]) {
    return request[urlSymbol];
  }
  if (Object.isFrozen(request) || Object.isSealed(request)) {
    return new URL(request.url);
  }
  request[urlSymbol] = new URL(request.url);
  return request[urlSymbol];
}
function getUniversal(subject) {
  return universalSymbol in subject ? subject[universalSymbol] : subject;
}
function getUniversalProp(subject, prop, defaultValue) {
  if (prop in subject) return subject[prop];
  if (universalSymbol in subject) return subject[universalSymbol][prop];
  return defaultValue;
}
function ordered(middlewares) {
  return Array.from(middlewares).sort(
    (a2, b2) => getUniversalProp(a2, orderSymbol, 0) - getUniversalProp(b2, orderSymbol, 0)
  );
}
function bindUniversal(universal, fn, wrapper) {
  const unboundFn = unboundSymbol in fn ? fn[unboundSymbol] : fn;
  const self2 = { [universalSymbol]: universal, [unboundSymbol]: unboundFn };
  const boundFn = unboundFn.bind(self2);
  Object.assign(boundFn, self2);
  return wrapper ? wrapper(boundFn) : boundFn;
}
function isHandler(m3) {
  const order = getUniversalProp(m3, orderSymbol);
  const path = getUniversalProp(m3, pathSymbol);
  if (typeof order === "number") {
    if (order !== 0 && path) {
      console.warn(
        `Found a Universal Middleware with "path" metadata. This will lead to unpredictable behaviour. Please open an issue at https://github.com/magne4000/universal-middleware and explain your use case with the expected behaviour.`
      );
    }
    return order === 0;
  }
  return Boolean(path);
}
function pipe(...a2) {
  const ordererArgs = ordered(a2);
  const fn = async function pipeInternal(request, context, runtime) {
    const pending = [];
    let _response;
    for (const m3 of ordererArgs) {
      if (isHandler(m3) && _response) {
        continue;
      }
      const um = getUniversal(m3);
      const response = await um(request, context ?? {}, runtime);
      if (typeof response === "function") {
        pending.push(response);
      } else if (response !== null && typeof response === "object") {
        if (response instanceof Response) {
          if (!_response) {
            _response = response;
          }
        } else {
          context = response;
        }
      }
    }
    if (!_response) {
      throw new Error("No Response found");
    }
    for (const m3 of pending) {
      const r = await m3(_response);
      if (r) {
        _response = r;
      }
    }
    return _response;
  };
  if (!this?.noCast) {
    const lastMiddleware = a2.at(-1);
    if (lastMiddleware && universalSymbol in lastMiddleware) {
      return bindUniversal(fn, lastMiddleware);
    }
  }
  return fn;
}
function createRouter() {
  const ctx = {
    root: { key: "" },
    static: new NullProtoObj()
  };
  return ctx;
}
function splitPath2(path) {
  const [_4, ...s3] = path.split("/");
  return s3[s3.length - 1] === "" ? s3.slice(0, -1) : s3;
}
function getMatchParams(segments, paramsMap) {
  const params2 = new NullProtoObj();
  for (const [index, name] of paramsMap) {
    const segment = index < 0 ? segments.slice(-1 * index).join("/") : segments[index];
    if (typeof name === "string") params2[name] = segment;
    else {
      const match2 = segment.match(name);
      if (match2) for (const key in match2.groups) params2[key] = match2.groups[key];
    }
  }
  return params2;
}
function addRoute(ctx, method = "", path, data) {
  method = method.toUpperCase();
  if (path.charCodeAt(0) !== 47) path = `/${path}`;
  const segments = splitPath2(path);
  let node = ctx.root;
  let _unnamedParamIndex = 0;
  const paramsMap = [];
  const paramsRegexp = [];
  for (let i3 = 0; i3 < segments.length; i3++) {
    const segment = segments[i3];
    if (segment.startsWith("**")) {
      if (!node.wildcard) node.wildcard = { key: "**" };
      node = node.wildcard;
      paramsMap.push([
        -i3,
        segment.split(":")[1] || "_",
        segment.length === 2
      ]);
      break;
    }
    if (segment === "*" || segment.includes(":")) {
      if (!node.param) node.param = { key: "*" };
      node = node.param;
      if (segment === "*") paramsMap.push([
        i3,
        `_${_unnamedParamIndex++}`,
        true
      ]);
      else if (segment.includes(":", 1)) {
        const regexp = getParamRegexp(segment);
        paramsRegexp[i3] = regexp;
        node.hasRegexParam = true;
        paramsMap.push([
          i3,
          regexp,
          false
        ]);
      } else paramsMap.push([
        i3,
        segment.slice(1),
        false
      ]);
      continue;
    }
    const child = node.static?.[segment];
    if (child) node = child;
    else {
      const staticNode = { key: segment };
      if (!node.static) node.static = new NullProtoObj();
      node.static[segment] = staticNode;
      node = staticNode;
    }
  }
  const hasParams = paramsMap.length > 0;
  if (!node.methods) node.methods = new NullProtoObj();
  node.methods[method] ??= [];
  node.methods[method].push({
    data: data || null,
    paramsRegexp,
    paramsMap: hasParams ? paramsMap : void 0
  });
  if (!hasParams) ctx.static[path] = node;
}
function getParamRegexp(segment) {
  const regex = segment.replace(/:(\w+)/g, (_4, id) => `(?<${id}>[^/]+)`).replace(/\./g, "\\.");
  return new RegExp(`^${regex}$`);
}
function findRoute(ctx, method = "", path, opts) {
  if (path.charCodeAt(path.length - 1) === 47) path = path.slice(0, -1);
  const staticNode = ctx.static[path];
  if (staticNode && staticNode.methods) {
    const staticMatch = staticNode.methods[method] || staticNode.methods[""];
    if (staticMatch !== void 0) return staticMatch[0];
  }
  const segments = splitPath2(path);
  const match2 = _lookupTree(ctx, ctx.root, method, segments, 0)?.[0];
  if (match2 === void 0) return;
  if (opts?.params === false) return match2;
  return {
    data: match2.data,
    params: match2.paramsMap ? getMatchParams(segments, match2.paramsMap) : void 0
  };
}
function _lookupTree(ctx, node, method, segments, index) {
  if (index === segments.length) {
    if (node.methods) {
      const match2 = node.methods[method] || node.methods[""];
      if (match2) return match2;
    }
    if (node.param && node.param.methods) {
      const match2 = node.param.methods[method] || node.param.methods[""];
      if (match2) {
        const pMap = match2[0].paramsMap;
        if (pMap?.[pMap?.length - 1]?.[2]) return match2;
      }
    }
    if (node.wildcard && node.wildcard.methods) {
      const match2 = node.wildcard.methods[method] || node.wildcard.methods[""];
      if (match2) {
        const pMap = match2[0].paramsMap;
        if (pMap?.[pMap?.length - 1]?.[2]) return match2;
      }
    }
    return void 0;
  }
  const segment = segments[index];
  if (node.static) {
    const staticChild = node.static[segment];
    if (staticChild) {
      const match2 = _lookupTree(ctx, staticChild, method, segments, index + 1);
      if (match2) return match2;
    }
  }
  if (node.param) {
    const match2 = _lookupTree(ctx, node.param, method, segments, index + 1);
    if (match2) {
      if (node.param.hasRegexParam) {
        const exactMatch = match2.find((m3) => m3.paramsRegexp[index]?.test(segment)) || match2.find((m3) => !m3.paramsRegexp[index]);
        return exactMatch ? [exactMatch] : void 0;
      }
      return match2;
    }
  }
  if (node.wildcard && node.wildcard.methods) return node.wildcard.methods[method] || node.wildcard.methods[""];
  return;
}
function apply2(router, middlewares, defer) {
  const ms = ordered(middlewares);
  for (const m3 of ms) {
    if (isHandler(m3)) {
      router.route(m3);
    } else {
      router.use(m3);
    }
  }
  if (!defer) {
    router.applyCatchAll();
  }
}
function assertRoute(middleware) {
  const path = getUniversalProp(middleware, pathSymbol);
  if (!path) {
    const name = getUniversalProp(middleware, nameSymbol);
    throw new TypeError(assertRouteErrorMessage("path", name));
  }
  const method = getUniversalProp(middleware, methodSymbol);
  if (!method) {
    const name = getUniversalProp(middleware, nameSymbol);
    throw new TypeError(assertRouteErrorMessage("method", name));
  }
  return { path, method };
}
function assertRouteErrorMessage(key, name) {
  if (name) {
    return `Route ${name} is defined without a "${key}". See https://universal-middleware.dev/helpers/enhance for details.`;
  }
  return `Unnamed route is defined without a "${key}". See https://universal-middleware.dev/helpers/enhance for details.`;
}
var knownUserAgents, _getRuntimeKey, runtimeKey, getRuntimeKey, checkUserAgentEquals, universalSymbol, unboundSymbol, contextSymbol, pathSymbol, methodSymbol, orderSymbol, nameSymbol, urlSymbol, NullProtoObj, UniversalRouter;
var init_dist3 = __esm({
  "node_modules/@universal-middleware/express/node_modules/@universal-middleware/core/dist/index.js"() {
    init_dist2();
    knownUserAgents = {
      deno: "Deno",
      bun: "Bun",
      workerd: "Cloudflare-Workers",
      node: "Node.js"
    };
    _getRuntimeKey = () => {
      const global2 = globalThis;
      const userAgentSupported = typeof navigator !== "undefined" && typeof navigator.userAgent === "string";
      if (userAgentSupported) {
        for (const [runtimeKey22, userAgent] of Object.entries(knownUserAgents)) {
          if (checkUserAgentEquals(userAgent)) {
            return runtimeKey22;
          }
        }
      }
      if (typeof global2?.EdgeRuntime === "string") {
        return "edge-light";
      }
      if (global2?.fastly !== void 0) {
        return "fastly";
      }
      if (global2?.process?.release?.name === "node") {
        return "node";
      }
      return "other";
    };
    getRuntimeKey = () => {
      if (runtimeKey === void 0) {
        runtimeKey = _getRuntimeKey();
      }
      return runtimeKey;
    };
    checkUserAgentEquals = (platform) => {
      const userAgent = navigator.userAgent;
      return userAgent.startsWith(platform);
    };
    universalSymbol = /* @__PURE__ */ Symbol.for("universal");
    unboundSymbol = /* @__PURE__ */ Symbol.for("unbound");
    contextSymbol = /* @__PURE__ */ Symbol.for("unContext");
    pathSymbol = /* @__PURE__ */ Symbol.for("unPath");
    methodSymbol = /* @__PURE__ */ Symbol.for("unMethod");
    orderSymbol = /* @__PURE__ */ Symbol.for("unOrder");
    nameSymbol = /* @__PURE__ */ Symbol.for("unName");
    urlSymbol = /* @__PURE__ */ Symbol.for("unUrl");
    NullProtoObj = /* @__PURE__ */ (() => {
      const e = function() {
      };
      return e.prototype = /* @__PURE__ */ Object.create(null), Object.freeze(e.prototype), e;
    })();
    UniversalRouter = class {
      router;
      #middlewares;
      #pipeMiddlewaresInUniversalRoute;
      #handle404;
      constructor(pipeMiddlewaresInUniversalRoute = true, handle404 = false) {
        this.router = createRouter();
        this.#middlewares = [];
        this.#pipeMiddlewaresInUniversalRoute = pipeMiddlewaresInUniversalRoute;
        this.#handle404 = handle404;
      }
      use(middleware) {
        this.#middlewares.push(middleware);
        return this;
      }
      route(handler) {
        const { path, method } = assertRoute(handler);
        const umHandler = getUniversal(handler);
        if (Array.isArray(method)) {
          for (const m3 of method) {
            addRoute(this.router, m3, path, umHandler);
          }
        } else {
          addRoute(this.router, method, path, umHandler);
        }
        return this;
      }
      applyCatchAll() {
        if (this.#handle404) {
          for (const method of ["GET", "POST", "PATCH"]) {
            addRoute(this.router, method, "/**", () => {
              return new Response("NOT FOUND", {
                status: 404
              });
            });
          }
        }
        return this;
      }
      get [universalSymbol]() {
        const noCastPipe = pipe.bind({ noCast: true });
        return (request, ctx, runtime) => {
          const router = findRoute(this.router, request.method, url(request).pathname);
          if (router) {
            const routerCtx = getUniversalProp(router.data, contextSymbol);
            if (routerCtx) {
              Object.assign(ctx, routerCtx);
            }
            const handler = this.#pipeMiddlewaresInUniversalRoute && this.#middlewares.length > 0 ? (
              // biome-ignore lint/suspicious/noExplicitAny: ignored
              noCastPipe(...this.#middlewares, router.data)
            ) : router.data;
            if (router.params) {
              runtime.params ??= {};
              Object.assign(runtime.params, router.params);
            }
            return handler(request, ctx, runtime);
          }
          if (this.#pipeMiddlewaresInUniversalRoute && this.#middlewares.length > 0) {
            const middlewares = noCastPipe(...this.#middlewares);
            return middlewares(request, ctx, runtime);
          }
          if (this.#handle404) {
            return new Response("NOT FOUND", {
              status: 404
            });
          }
        };
      }
    };
  }
});

// node_modules/@universal-middleware/express/dist/index.js
var dist_exports = {};
__export(dist_exports, {
  apply: () => apply3,
  connectToWeb: () => connectToWeb,
  createHandler: () => createHandler,
  createIncomingMessage: () => createIncomingMessage,
  createMiddleware: () => createMiddleware,
  createRequestAdapter: () => createRequestAdapter,
  createServerResponse: () => createServerResponse,
  getContext: () => getContext,
  sendResponse: () => sendResponse
});
import { ServerResponse } from "node:http";
import { PassThrough, Readable } from "node:stream";
function createRequestAdapter(options = {}) {
  const { origin = env2.ORIGIN, trustProxy = env2.TRUST_PROXY === "1" } = options;
  let { protocol: protocolOverride, host: hostOverride } = origin ? new URL(origin) : {};
  if (protocolOverride) {
    protocolOverride = protocolOverride.slice(0, -1);
  }
  let warned = false;
  return function requestAdapter(req) {
    if (req[requestSymbol]) {
      return req[requestSymbol];
    }
    function parseForwardedHeader(name) {
      return (headers[`x-forwarded-${name}`] || "").split(",", 1)[0].trim();
    }
    let headers = req.headers;
    if (headers[":method"]) {
      headers = Object.fromEntries(Object.entries(headers).filter(([key]) => !key.startsWith(":")));
    }
    const protocol = protocolOverride || trustProxy && parseForwardedHeader("proto") || req.protocol || // biome-ignore lint/suspicious/noExplicitAny: encrypted can exist in some express versions
    req.socket?.encrypted && "https" || "http";
    let host = hostOverride || trustProxy && parseForwardedHeader("host") || headers.host;
    if (!host && !warned) {
      console.warn(
        "Could not automatically determine the origin host, using 'localhost'. Use the 'origin' option or the 'ORIGIN' environment variable to set the origin explicitly."
      );
      warned = true;
      host = "localhost";
    }
    const request = new Request(`${protocol}://${host}${req.originalUrl ?? req.url}`, {
      method: req.method,
      headers,
      body: convertBody(req),
      // @ts-expect-error
      duplex: "half"
    });
    req[requestSymbol] = request;
    return request;
  };
}
function convertBody(req) {
  if (req.method === "GET" || req.method === "HEAD") {
    return;
  }
  if (req.rawBody !== void 0) {
    return req.rawBody;
  }
  if (!bun && !deno) {
    return req;
  }
  return new ReadableStream({
    start(controller) {
      req.on("data", (chunk2) => controller.enqueue(chunk2));
      req.on("end", () => controller.close());
      req.on("error", (err2) => controller.error(err2));
    }
  });
}
async function sendResponse(fetchResponse, nodeResponse) {
  const fetchBody = fetchResponse.body;
  let body = null;
  if (!fetchBody) {
    body = null;
  } else if (typeof fetchBody.pipe === "function") {
    body = fetchBody;
  } else if (typeof fetchBody.pipeTo === "function") {
    const { Readable: Readable22 } = await import("node:stream");
    if (!deno2 && Readable22.fromWeb) {
      body = Readable22.fromWeb(fetchBody);
    } else {
      const reader = fetchBody.getReader();
      body = new Readable22({
        async read() {
          try {
            const { done, value } = await reader.read();
            if (done) {
              this.push(null);
            } else {
              const canContinue = this.push(value);
              if (!canContinue) {
                reader.releaseLock();
              }
            }
          } catch (e) {
            this.destroy(e);
          }
        }
      });
    }
  } else if (fetchBody) {
    const { Readable: Readable22 } = await import("node:stream");
    body = Readable22.from(fetchBody);
  }
  setHeaders(fetchResponse, nodeResponse);
  if (body) {
    body.pipe(nodeResponse);
    await new Promise((resolve3, reject) => {
      body.on("error", (err2) => {
        nodeResponse.destroy(err2);
        reject(err2);
      });
      nodeResponse.on("error", (err2) => {
        body.destroy(err2);
        reject(err2);
      });
      nodeResponse.on("finish", resolve3);
      nodeResponse.on("drain", () => {
        body.resume();
      });
    });
  } else {
    nodeResponse.setHeader("content-length", "0");
    nodeResponse.end();
  }
}
function createTransformStream() {
  const textEncoder2 = new TextEncoder();
  return new TransformStream({
    transform(chunk2, ctrl) {
      if (typeof chunk2 === "string") {
        ctrl.enqueue(textEncoder2.encode(chunk2));
      } else if (chunk2 instanceof Uint8Array) {
        ctrl.enqueue(chunk2);
      } else {
        ctrl.enqueue(new Uint8Array(chunk2));
      }
    }
  });
}
function override(nodeResponse, key, forwardTo) {
  const original = nodeResponse[key];
  nodeResponse[key] = (...args) => {
    if (!nodeResponse.headersSent) {
      nodeResponse.writeHead(nodeResponse.statusCode);
    }
    if (args[0] && args[0].length > 0) {
      forwardTo.write(args[0]).catch(console.error);
    }
    if (key === "end") {
      forwardTo.close().catch(() => {
      });
    }
    return true;
  };
  return {
    original(...args) {
      original.apply(nodeResponse, args);
    },
    restore() {
      nodeResponse[key] = original;
    }
  };
}
function overrideWriteHead(nodeResponse, callback) {
  const original = nodeResponse.writeHead;
  let alreadyCalled = false;
  nodeResponse.writeHead = () => {
    if (!alreadyCalled) {
      callback().catch(console.error);
      alreadyCalled = true;
    }
    return nodeResponse;
  };
  return {
    original(...args) {
      original.apply(nodeResponse, args);
    },
    restore() {
      nodeResponse.writeHead = original;
    }
  };
}
function getFullUrl(pathnameOrFull, req) {
  try {
    return new URL(pathnameOrFull).href;
  } catch {
    const protocol = req.socket?.encrypted || req.headers["x-forwarded-proto"] === "https" ? "https" : "http";
    const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
    const baseUrl = `${protocol}://${host}`;
    return new URL(pathnameOrFull, baseUrl).href;
  }
}
function responseAdapter(nodeResponse, bodyInit) {
  if ([301, 302, 303, 307, 308].includes(nodeResponse.statusCode) && nodeResponse.req) {
    const location = nodeResponse.getHeader("location");
    if (location) {
      const fullUrl = getFullUrl(location, nodeResponse.req);
      return Response.redirect(fullUrl, nodeResponse.statusCode);
    }
  }
  return new Response([204, 304].includes(nodeResponse.statusCode) ? null : bodyInit, {
    status: nodeResponse.statusCode,
    statusText: nodeResponse.statusMessage,
    headers: nodeHeadersToWeb(nodeResponse.getHeaders())
  });
}
function wrapResponse(nodeResponse, next) {
  if (nodeResponse[wrappedResponseSymbol]) return;
  nodeResponse[wrappedResponseSymbol] = true;
  const body = createTransformStream();
  const writer = body.writable.getWriter();
  const [reader1, reader2] = body.readable.tee();
  const original = {
    write: override(nodeResponse, "write", writer),
    end: override(nodeResponse, "end", writer),
    writeHead: overrideWriteHead(nodeResponse, triggerPendingMiddlewares)
  };
  async function triggerPendingMiddlewares() {
    if (!nodeResponse[pendingMiddlewaresSymbol]) {
      return;
    }
    const middlewares = nodeResponse[pendingMiddlewaresSymbol];
    delete nodeResponse[pendingMiddlewaresSymbol];
    let response;
    try {
      response = responseAdapter(nodeResponse, reader1);
      for (const middleware of middlewares) {
        const tmp = await middleware(response);
        if (tmp) response = tmp;
      }
    } catch (e) {
      response = void 0;
      await writer.abort();
      original.writeHead.restore();
      original.write.restore();
      original.end.restore();
      if (next) {
        next(e);
      } else {
        throw e;
      }
    }
    if (!response) return;
    const readableToOriginal = response.body ?? reader2;
    setHeaders(response, nodeResponse, true);
    original.writeHead.restore();
    nodeResponse.flushHeaders();
    const wait = readableToOriginal.pipeTo(
      new WritableStream({
        write(chunk2) {
          original.write.original(chunk2);
        },
        close() {
          original.end.original();
        },
        abort() {
          original.end.original();
        }
      })
    );
    await wait;
    original.write.restore();
    original.end.restore();
  }
}
function setHeaders(fetchResponse, nodeResponse, mirror = false) {
  nodeResponse.statusCode = fetchResponse.status;
  if (fetchResponse.statusText) {
    nodeResponse.statusMessage = fetchResponse.statusText;
  }
  const nodeResponseHeaders = new Set(Object.keys(nodeResponse.getHeaders()));
  const setCookie2 = fetchResponse.headers.getSetCookie();
  for (const cookie of setCookie2) {
    nodeResponse.appendHeader("set-cookie", cookie);
  }
  fetchResponse.headers.forEach((value, key) => {
    nodeResponseHeaders.delete(key);
    if (key === "set-cookie") return;
    nodeResponse.setHeader(key, value);
  });
  if (mirror) {
    nodeResponseHeaders.forEach((key) => {
      nodeResponse.removeHeader(key);
    });
  }
}
function nextOr404(res, next) {
  if (next) {
    next();
  } else {
    res.statusCode = 404;
    res.end();
  }
}
function createHandler(handlerFactory, options = {}) {
  const requestAdapter = createRequestAdapter(options);
  return (...args) => {
    const handler = handlerFactory(...args);
    return bindUniversal(handler, async function universalHandlerExpress(req, res, next) {
      try {
        req[contextSymbol] ??= {};
        const request = requestAdapter(req);
        const response = await this[universalSymbol](
          request,
          req[contextSymbol],
          getRuntime2(req, res)
        );
        if (!response) {
          nextOr404(res, next);
        } else {
          await sendResponse(response, res);
        }
      } catch (error) {
        if (next) {
          next(error);
        } else {
          console.error(error);
          if (!res.headersSent) {
            res.statusCode = 500;
          }
          if (!res.writableEnded) {
            res.end();
          }
        }
      }
    });
  };
}
function createMiddleware(middlewareFactory, options = {}) {
  const requestAdapter = createRequestAdapter(options);
  return (...args) => {
    const middleware = middlewareFactory(...args);
    return bindUniversal(middleware, async function universalMiddlewareExpress(req, res, next) {
      try {
        req[contextSymbol] ??= {};
        const request = requestAdapter(req);
        const response = await this[universalSymbol](request, getContext(req), getRuntime2(req, res));
        if (!response) {
          return nextOr404(res, next);
        }
        if (typeof response === "function") {
          if (res.headersSent) {
            throw new Error(
              "Universal Middleware called after headers have been sent. Please open an issue at https://github.com/magne4000/universal-middleware"
            );
          }
          if (req.complete === void 0) req.complete = req._readableState?.ended ?? true;
          wrapResponse(res, next);
          res[pendingMiddlewaresSymbol] ??= [];
          res[pendingMiddlewaresSymbol].push(response);
          return nextOr404(res, next);
        }
        if (response instanceof Response) {
          await sendResponse(response, res);
        } else {
          req[contextSymbol] = response;
          return nextOr404(res, next);
        }
      } catch (error) {
        if (next) {
          next(error);
        } else {
          console.error(error);
          if (!res.headersSent) {
            res.statusCode = 500;
          }
          if (!res.writableEnded) {
            res.end();
          }
        }
      }
    });
  };
}
function getContext(req) {
  return req[contextSymbol];
}
function getRuntime2(request, response) {
  return getAdapterRuntime("express", {
    params: request.params,
    // biome-ignore lint/suspicious/noExplicitAny: cast
    req: request,
    // biome-ignore lint/suspicious/noExplicitAny: cast
    res: response,
    express: Object.freeze({
      // biome-ignore lint/suspicious/noExplicitAny: cast
      req: request,
      // biome-ignore lint/suspicious/noExplicitAny: cast
      res: response
    })
  });
}
function connectToWeb(handler) {
  return async (request, _context, runtime) => {
    const req = runtime && "req" in runtime && runtime.req ? runtime.req : (
      // biome-ignore lint/suspicious/noExplicitAny: srvx request
      request.runtime?.node?.req ?? createIncomingMessage(request)
    );
    const { res, onReadable } = createServerResponse(req);
    return new Promise(async (resolve3, reject) => {
      onReadable(({ readable, headers, statusCode }) => {
        const responseBody = statusCodesWithoutBody.includes(statusCode) ? null : "from" in ReadableStream ? (
          // biome-ignore lint/suspicious/noExplicitAny: definition clash between Web and Node
          ReadableStream.from(readable)
        ) : (
          // biome-ignore lint/suspicious/noExplicitAny: definition clash between Web and Node
          Readable.toWeb(readable)
        );
        resolve3(
          new Response(responseBody, {
            status: statusCode,
            headers: flattenHeaders(headers)
          })
        );
      });
      const next = (error) => {
        if (error) {
          reject(error instanceof Error ? error : new Error(String(error)));
        } else {
          resolve3(void 0);
        }
      };
      try {
        const handled = await handler(req, res, next);
        if (handled === false) {
          res.destroy();
          resolve3(void 0);
        }
      } catch (e) {
        next(e);
      }
    });
  };
}
function createIncomingMessage(request) {
  const parsedUrl = new URL(request.url, "http://localhost");
  const pathnameAndQuery = (parsedUrl.pathname || "") + (parsedUrl.search || "");
  const body = request.body ? Readable.fromWeb(request.body) : Readable.from([]);
  return Object.assign(body, {
    url: pathnameAndQuery,
    method: request.method,
    headers: Object.fromEntries(request.headers)
  });
}
function createServerResponse(incomingMessage) {
  const res = new ServerResponse(incomingMessage);
  const passThrough = new PassThrough();
  let handled = false;
  const onReadable = (cb) => {
    const handleReadable = () => {
      if (handled) return;
      handled = true;
      cb({ readable: Readable.from(passThrough), headers: res.getHeaders(), statusCode: res.statusCode });
    };
    passThrough.once("readable", handleReadable);
    passThrough.once("end", handleReadable);
  };
  passThrough.once("finish", () => {
    res.emit("finish");
  });
  passThrough.once("close", () => {
    res.destroy();
    res.emit("close");
  });
  passThrough.on("drain", () => {
    res.emit("drain");
  });
  res.write = passThrough.write.bind(passThrough);
  res.end = passThrough.end.bind(passThrough);
  res.writeHead = function writeHead2(statusCode, statusMessage, headers) {
    res.statusCode = statusCode;
    if (typeof statusMessage === "object") {
      headers = statusMessage;
      statusMessage = void 0;
    }
    if (headers) {
      for (const [key, value] of Object.entries(headers)) {
        if (value !== void 0) {
          res.setHeader(key, value);
        }
      }
    }
    return res;
  };
  return {
    res,
    onReadable
  };
}
function flattenHeaders(headers) {
  const flatHeaders = [];
  for (const [key, value] of Object.entries(headers)) {
    if (value === void 0 || value === null) {
      continue;
    }
    if (Array.isArray(value)) {
      for (const v2 of value) {
        if (v2 != null) {
          flatHeaders.push([key, String(v2)]);
        }
      }
    } else {
      flatHeaders.push([key, String(value)]);
    }
  }
  return flatHeaders;
}
function isExpressV4(app2) {
  return "del" in app2;
}
function isExpressV5(app2) {
  return !isExpressV4(app2);
}
function apply3(app2, middlewares) {
  const router = new UniversalExpressRouter(app2);
  apply2(router, middlewares, true);
  Promise.resolve().then(() => router.applyCatchAll());
}
var deno, bun, deno2, requestSymbol, pendingMiddlewaresSymbol, wrappedResponseSymbol, env2, statusCodesWithoutBody, UniversalExpressRouter;
var init_dist4 = __esm({
  "node_modules/@universal-middleware/express/dist/index.js"() {
    init_dist3();
    init_dist3();
    init_dist3();
    deno = typeof Deno !== "undefined";
    bun = typeof Bun !== "undefined";
    deno2 = typeof Deno !== "undefined";
    requestSymbol = /* @__PURE__ */ Symbol.for("unRequest");
    pendingMiddlewaresSymbol = /* @__PURE__ */ Symbol.for("unPendingMiddlewares");
    wrappedResponseSymbol = /* @__PURE__ */ Symbol.for("unWrappedResponse");
    env2 = typeof globalThis.process?.env !== "undefined" ? globalThis.process.env : typeof import.meta?.env !== "undefined" ? import.meta.env : {};
    statusCodesWithoutBody = [
      100,
      // Continue
      101,
      // Switching Protocols
      102,
      // Processing (WebDAV)
      103,
      // Early Hints
      204,
      // No Content
      205,
      // Reset Content
      304
      // Not Modified
    ];
    UniversalExpressRouter = class extends UniversalRouter {
      #app;
      constructor(app2) {
        super(false);
        this.#app = app2;
      }
      use(middleware) {
        this.#app.use(createMiddleware(() => getUniversal(middleware))());
        return this;
      }
      applyCatchAll() {
        if (isExpressV5(this.#app)) {
          this.#app.all("/{*catchAll}", createHandler(() => this[universalSymbol])());
        }
        if (isExpressV4(this.#app)) {
          this.#app.all("/**", createHandler(() => this[universalSymbol])());
        }
        return this;
      }
    };
  }
});

// node_modules/rou3/dist/index.mjs
function createRouter2() {
  return {
    root: { key: "" },
    static: new NullProtoObj2()
  };
}
function splitPath3(path) {
  const [_4, ...s3] = path.split("/");
  return s3[s3.length - 1] === "" ? s3.slice(0, -1) : s3;
}
function getMatchParams2(segments, paramsMap) {
  const params = new NullProtoObj2();
  for (const [index, name] of paramsMap) {
    const segment = index < 0 ? segments.slice(-(index + 1)).join("/") : segments[index];
    if (typeof name === "string") params[name] = segment;
    else {
      const match2 = segment.match(name);
      if (match2) for (const key in match2.groups) params[key] = match2.groups[key];
    }
  }
  return params;
}
function addRoute2(ctx, method = "", path, data) {
  method = method.toUpperCase();
  if (path.charCodeAt(0) !== 47) path = `/${path}`;
  path = path.replace(/\\:/g, "%3A");
  const segments = splitPath3(path);
  let node = ctx.root;
  let _unnamedParamIndex = 0;
  const paramsMap = [];
  const paramsRegexp = [];
  for (let i3 = 0; i3 < segments.length; i3++) {
    let segment = segments[i3];
    if (segment.startsWith("**")) {
      if (!node.wildcard) node.wildcard = { key: "**" };
      node = node.wildcard;
      paramsMap.push([
        -(i3 + 1),
        segment.split(":")[1] || "_",
        segment.length === 2
      ]);
      break;
    }
    if (segment === "*" || segment.includes(":")) {
      if (!node.param) node.param = { key: "*" };
      node = node.param;
      if (segment === "*") paramsMap.push([
        i3,
        `_${_unnamedParamIndex++}`,
        true
      ]);
      else if (segment.includes(":", 1)) {
        const regexp = getParamRegexp2(segment);
        paramsRegexp[i3] = regexp;
        node.hasRegexParam = true;
        paramsMap.push([
          i3,
          regexp,
          false
        ]);
      } else paramsMap.push([
        i3,
        segment.slice(1),
        false
      ]);
      continue;
    }
    if (segment === "\\*") segment = segments[i3] = "*";
    else if (segment === "\\*\\*") segment = segments[i3] = "**";
    const child = node.static?.[segment];
    if (child) node = child;
    else {
      const staticNode = { key: segment };
      if (!node.static) node.static = new NullProtoObj2();
      node.static[segment] = staticNode;
      node = staticNode;
    }
  }
  const hasParams = paramsMap.length > 0;
  if (!node.methods) node.methods = new NullProtoObj2();
  node.methods[method] ??= [];
  node.methods[method].push({
    data: data || null,
    paramsRegexp,
    paramsMap: hasParams ? paramsMap : void 0
  });
  if (!hasParams) ctx.static["/" + segments.join("/")] = node;
}
function getParamRegexp2(segment) {
  const regex = segment.replace(/:(\w+)/g, (_4, id) => `(?<${id}>[^/]+)`).replace(/\./g, "\\.");
  return /* @__PURE__ */ new RegExp(`^${regex}$`);
}
function findRoute2(ctx, method = "", path, opts) {
  if (path.charCodeAt(path.length - 1) === 47) path = path.slice(0, -1);
  const staticNode = ctx.static[path];
  if (staticNode && staticNode.methods) {
    const staticMatch = staticNode.methods[method] || staticNode.methods[""];
    if (staticMatch !== void 0) return staticMatch[0];
  }
  const segments = splitPath3(path);
  const match2 = _lookupTree2(ctx, ctx.root, method, segments, 0)?.[0];
  if (match2 === void 0) return;
  if (opts?.params === false) return match2;
  return {
    data: match2.data,
    params: match2.paramsMap ? getMatchParams2(segments, match2.paramsMap) : void 0
  };
}
function _lookupTree2(ctx, node, method, segments, index) {
  if (index === segments.length) {
    if (node.methods) {
      const match2 = node.methods[method] || node.methods[""];
      if (match2) return match2;
    }
    if (node.param && node.param.methods) {
      const match2 = node.param.methods[method] || node.param.methods[""];
      if (match2) {
        const pMap = match2[0].paramsMap;
        if (pMap?.[pMap?.length - 1]?.[2]) return match2;
      }
    }
    if (node.wildcard && node.wildcard.methods) {
      const match2 = node.wildcard.methods[method] || node.wildcard.methods[""];
      if (match2) {
        const pMap = match2[0].paramsMap;
        if (pMap?.[pMap?.length - 1]?.[2]) return match2;
      }
    }
    return;
  }
  const segment = segments[index];
  if (node.static) {
    const staticChild = node.static[segment];
    if (staticChild) {
      const match2 = _lookupTree2(ctx, staticChild, method, segments, index + 1);
      if (match2) return match2;
    }
  }
  if (node.param) {
    const match2 = _lookupTree2(ctx, node.param, method, segments, index + 1);
    if (match2) {
      if (node.param.hasRegexParam) {
        const exactMatch = match2.find((m3) => m3.paramsRegexp[index]?.test(segment)) || match2.find((m3) => !m3.paramsRegexp[index]);
        return exactMatch ? [exactMatch] : void 0;
      }
      return match2;
    }
  }
  if (node.wildcard && node.wildcard.methods) return node.wildcard.methods[method] || node.wildcard.methods[""];
}
function routeToRegExp(route2 = "/") {
  const reSegments = [];
  let idCtr = 0;
  for (const segment of route2.split("/")) {
    if (!segment) continue;
    if (segment === "*") reSegments.push(`(?<_${idCtr++}>[^/]*)`);
    else if (segment.startsWith("**")) reSegments.push(segment === "**" ? "?(?<_>.*)" : `?(?<${segment.slice(3)}>.+)`);
    else if (segment.includes(":")) reSegments.push(segment.replace(/:(\w+)/g, (_4, id) => `(?<${id}>[^/]+)`).replace(/\./g, "\\."));
    else reSegments.push(segment);
  }
  return /* @__PURE__ */ new RegExp(`^/${reSegments.join("/")}/?$`);
}
var NullProtoObj2;
var init_dist5 = __esm({
  "node_modules/rou3/dist/index.mjs"() {
    NullProtoObj2 = /* @__PURE__ */ (() => {
      const e = function() {
      };
      return e.prototype = /* @__PURE__ */ Object.create(null), Object.freeze(e.prototype), e;
    })();
  }
});

// node_modules/srvx/dist/_chunks/_inherit.mjs
function lazyInherit(target, source, sourceKey) {
  for (const key of [...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source)]) {
    if (key === "constructor") continue;
    const targetDesc = Object.getOwnPropertyDescriptor(target, key);
    const desc = Object.getOwnPropertyDescriptor(source, key);
    let modified = false;
    if (desc.get) {
      modified = true;
      desc.get = targetDesc?.get || function() {
        return this[sourceKey][key];
      };
    }
    if (desc.set) {
      modified = true;
      desc.set = targetDesc?.set || function(value) {
        this[sourceKey][key] = value;
      };
    }
    if (!targetDesc?.value && typeof desc.value === "function") {
      modified = true;
      desc.value = function(...args) {
        return this[sourceKey][key](...args);
      };
    }
    if (modified) Object.defineProperty(target, key, desc);
  }
}
var init_inherit = __esm({
  "node_modules/srvx/dist/_chunks/_inherit.mjs"() {
  }
});

// node_modules/srvx/dist/_chunks/_url.mjs
var FastURL;
var init_url2 = __esm({
  "node_modules/srvx/dist/_chunks/_url.mjs"() {
    init_inherit();
    FastURL = /* @__PURE__ */ (() => {
      const NativeURL = globalThis.URL;
      const FastURL$1 = class URL {
        #url;
        #href;
        #protocol;
        #host;
        #pathname;
        #search;
        #searchParams;
        #pos;
        constructor(url5) {
          if (typeof url5 === "string") this.#href = url5;
          else {
            this.#protocol = url5.protocol;
            this.#host = url5.host;
            this.#pathname = url5.pathname;
            this.#search = url5.search;
          }
        }
        static [Symbol.hasInstance](val) {
          return val instanceof NativeURL;
        }
        get _url() {
          if (this.#url) return this.#url;
          this.#url = new NativeURL(this.href);
          this.#href = void 0;
          this.#protocol = void 0;
          this.#host = void 0;
          this.#pathname = void 0;
          this.#search = void 0;
          this.#searchParams = void 0;
          this.#pos = void 0;
          return this.#url;
        }
        get href() {
          if (this.#url) return this.#url.href;
          if (!this.#href) this.#href = `${this.#protocol || "http:"}//${this.#host || "localhost"}${this.#pathname || "/"}${this.#search || ""}`;
          return this.#href;
        }
        #getPos() {
          if (!this.#pos) {
            const url5 = this.href;
            const protoIndex = url5.indexOf("://");
            const pathnameIndex = protoIndex === -1 ? -1 : url5.indexOf("/", protoIndex + 4);
            this.#pos = [
              protoIndex,
              pathnameIndex,
              pathnameIndex === -1 ? -1 : url5.indexOf("?", pathnameIndex)
            ];
          }
          return this.#pos;
        }
        get pathname() {
          if (this.#url) return this.#url.pathname;
          if (this.#pathname === void 0) {
            const [, pathnameIndex, queryIndex] = this.#getPos();
            if (pathnameIndex === -1) return this._url.pathname;
            this.#pathname = this.href.slice(pathnameIndex, queryIndex === -1 ? void 0 : queryIndex);
          }
          return this.#pathname;
        }
        get search() {
          if (this.#url) return this.#url.search;
          if (this.#search === void 0) {
            const [, pathnameIndex, queryIndex] = this.#getPos();
            if (pathnameIndex === -1) return this._url.search;
            const url5 = this.href;
            this.#search = queryIndex === -1 || queryIndex === url5.length - 1 ? "" : url5.slice(queryIndex);
          }
          return this.#search;
        }
        get searchParams() {
          if (this.#url) return this.#url.searchParams;
          if (!this.#searchParams) this.#searchParams = new URLSearchParams(this.search);
          return this.#searchParams;
        }
        get protocol() {
          if (this.#url) return this.#url.protocol;
          if (this.#protocol === void 0) {
            const [protocolIndex] = this.#getPos();
            if (protocolIndex === -1) return this._url.protocol;
            this.#protocol = this.href.slice(0, protocolIndex + 1);
          }
          return this.#protocol;
        }
        toString() {
          return this.href;
        }
        toJSON() {
          return this.href;
        }
      };
      lazyInherit(FastURL$1.prototype, NativeURL.prototype, "_url");
      Object.setPrototypeOf(FastURL$1.prototype, NativeURL.prototype);
      Object.setPrototypeOf(FastURL$1, NativeURL);
      return FastURL$1;
    })();
  }
});

// node_modules/srvx/dist/_chunks/_utils.mjs
function resolvePortAndHost(opts) {
  const _port = opts.port ?? globalThis.process?.env.PORT ?? 3e3;
  const port = typeof _port === "number" ? _port : Number.parseInt(_port, 10);
  if (port < 0 || port > 65535) throw new RangeError(`Port must be between 0 and 65535 (got "${port}").`);
  return {
    port,
    hostname: opts.hostname ?? globalThis.process?.env.HOST
  };
}
function fmtURL(host, port, secure) {
  if (!host || !port) return;
  if (host.includes(":")) host = `[${host}]`;
  return `http${secure ? "s" : ""}://${host}:${port}/`;
}
function printListening(opts, url5) {
  if (!url5 || (opts.silent ?? globalThis.process?.env?.TEST)) return;
  const _url = new URL(url5);
  const allInterfaces = _url.hostname === "[::]" || _url.hostname === "0.0.0.0";
  if (allInterfaces) {
    _url.hostname = "localhost";
    url5 = _url.href;
  }
  let listeningOn = `\u279C Listening on:`;
  let additionalInfo = allInterfaces ? " (all interfaces)" : "";
  if (globalThis.process.stdout?.isTTY) {
    listeningOn = `\x1B[32m${listeningOn}\x1B[0m`;
    url5 = `\x1B[36m${url5}\x1B[0m`;
    additionalInfo = `\x1B[2m${additionalInfo}\x1B[0m`;
  }
  console.log(`${listeningOn} ${url5}${additionalInfo}`);
}
function resolveTLSOptions(opts) {
  if (!opts.tls || opts.protocol === "http") return;
  const cert = resolveCertOrKey(opts.tls.cert);
  const key = resolveCertOrKey(opts.tls.key);
  if (!cert && !key) {
    if (opts.protocol === "https") throw new TypeError("TLS `cert` and `key` must be provided for `https` protocol.");
    return;
  }
  if (!cert || !key) throw new TypeError("TLS `cert` and `key` must be provided together.");
  return {
    cert,
    key,
    passphrase: opts.tls.passphrase
  };
}
function resolveCertOrKey(value) {
  if (!value) return;
  if (typeof value !== "string") throw new TypeError("TLS certificate and key must be strings in PEM format or file paths.");
  if (value.startsWith("-----BEGIN ")) return value;
  const { readFileSync } = process.getBuiltinModule("node:fs");
  return readFileSync(value, "utf8");
}
function createWaitUntil() {
  const promises = /* @__PURE__ */ new Set();
  return {
    waitUntil: (promise) => {
      if (typeof promise?.then !== "function") return;
      promises.add(Promise.resolve(promise).catch(console.error).finally(() => {
        promises.delete(promise);
      }));
    },
    wait: () => {
      return Promise.all(promises);
    }
  };
}
var init_utils8 = __esm({
  "node_modules/srvx/dist/_chunks/_utils.mjs"() {
  }
});

// node_modules/srvx/dist/_chunks/_color.mjs
var noColor, _c, red, gray;
var init_color = __esm({
  "node_modules/srvx/dist/_chunks/_color.mjs"() {
    noColor = /* @__PURE__ */ (() => {
      const env3 = globalThis.process?.env ?? {};
      return env3.NO_COLOR === "1" || env3.TERM === "dumb";
    })();
    _c = (c2, r = 39) => (t) => noColor ? t : `\x1B[${c2}m${t}\x1B[${r}m`;
    red = /* @__PURE__ */ _c(31);
    gray = /* @__PURE__ */ _c(90);
  }
});

// node_modules/srvx/dist/_chunks/_plugins.mjs
function wrapFetch(server) {
  const fetchHandler = server.options.fetch;
  const middleware = server.options.middleware || [];
  return middleware.length === 0 ? fetchHandler : (request) => callMiddleware(request, fetchHandler, middleware, 0);
}
function callMiddleware(request, fetchHandler, middleware, index) {
  if (index === middleware.length) return fetchHandler(request);
  return middleware[index](request, () => callMiddleware(request, fetchHandler, middleware, index + 1));
}
var errorPlugin, gracefulShutdownPlugin;
var init_plugins = __esm({
  "node_modules/srvx/dist/_chunks/_plugins.mjs"() {
    init_color();
    errorPlugin = (server) => {
      const errorHandler2 = server.options.error;
      if (!errorHandler2) return;
      server.options.middleware.unshift((_req, next) => {
        try {
          const res = next();
          return res instanceof Promise ? res.catch((error) => errorHandler2(error)) : res;
        } catch (error) {
          return errorHandler2(error);
        }
      });
    };
    gracefulShutdownPlugin = (server) => {
      const config = server.options?.gracefulShutdown;
      if (!globalThis.process?.on || config === false || config === void 0 && (process.env.CI || process.env.TEST)) return;
      const gracefulShutdown = config === true || !config?.gracefulTimeout ? Number.parseInt(process.env.SERVER_SHUTDOWN_TIMEOUT || "") || 3 : config.gracefulTimeout;
      const forceShutdown = config === true || !config?.forceTimeout ? Number.parseInt(process.env.SERVER_FORCE_SHUTDOWN_TIMEOUT || "") || 5 : config.forceTimeout;
      let isShuttingDown = false;
      const shutdown = async () => {
        if (isShuttingDown) return;
        isShuttingDown = true;
        const w4 = process.stderr.write.bind(process.stderr);
        w4(gray(`
Shutting down server in ${gracefulShutdown}s...`));
        let timeout;
        await Promise.race([server.close().finally(() => {
          clearTimeout(timeout);
          w4(gray(" Server closed.\n"));
        }), new Promise((resolve3) => {
          timeout = setTimeout(() => {
            w4(gray(`
Force closing connections in ${forceShutdown}s...`));
            timeout = setTimeout(() => {
              w4(red("\nCould not close connections in time, force exiting."));
              resolve3();
            }, forceShutdown * 1e3);
            return server.close(true);
          }, gracefulShutdown * 1e3);
        })]);
        globalThis.process.exit(0);
      };
      for (const sig of ["SIGINT", "SIGTERM"]) globalThis.process.on(sig, shutdown);
    };
  }
});

// node_modules/srvx/dist/_chunks/call.mjs
var NodeResponse;
var init_call = __esm({
  "node_modules/srvx/dist/_chunks/call.mjs"() {
    init_inherit();
    NodeResponse = /* @__PURE__ */ (() => {
      const NativeResponse = globalThis.Response;
      const STATUS_CODES = globalThis.process?.getBuiltinModule?.("node:http")?.STATUS_CODES || {};
      class NodeResponse$1 {
        #body;
        #init;
        #headers;
        #response;
        constructor(body, init) {
          this.#body = body;
          this.#init = init;
        }
        static [Symbol.hasInstance](val) {
          return val instanceof NativeResponse;
        }
        get status() {
          return this.#response?.status || this.#init?.status || 200;
        }
        get statusText() {
          return this.#response?.statusText || this.#init?.statusText || STATUS_CODES[this.status] || "";
        }
        get headers() {
          if (this.#response) return this.#response.headers;
          if (this.#headers) return this.#headers;
          const initHeaders = this.#init?.headers;
          return this.#headers = initHeaders instanceof Headers ? initHeaders : new Headers(initHeaders);
        }
        get ok() {
          if (this.#response) return this.#response.ok;
          const status2 = this.status;
          return status2 >= 200 && status2 < 300;
        }
        get _response() {
          if (this.#response) return this.#response;
          this.#response = new NativeResponse(this.#body, this.#headers ? {
            ...this.#init,
            headers: this.#headers
          } : this.#init);
          this.#init = void 0;
          this.#headers = void 0;
          this.#body = void 0;
          return this.#response;
        }
        _toNodeResponse() {
          const status2 = this.status;
          const statusText = this.statusText;
          let body;
          let contentType;
          let contentLength;
          if (this.#response) body = this.#response.body;
          else if (this.#body) if (this.#body instanceof ReadableStream) body = this.#body;
          else if (typeof this.#body === "string") {
            body = this.#body;
            contentType = "text/plain; charset=UTF-8";
            contentLength = Buffer.byteLength(this.#body);
          } else if (this.#body instanceof ArrayBuffer) {
            body = Buffer.from(this.#body);
            contentLength = this.#body.byteLength;
          } else if (this.#body instanceof Uint8Array) {
            body = this.#body;
            contentLength = this.#body.byteLength;
          } else if (this.#body instanceof DataView) {
            body = Buffer.from(this.#body.buffer);
            contentLength = this.#body.byteLength;
          } else if (this.#body instanceof Blob) {
            body = this.#body.stream();
            contentType = this.#body.type;
            contentLength = this.#body.size;
          } else if (typeof this.#body.pipe === "function") body = this.#body;
          else body = this._response.body;
          const headers = [];
          const initHeaders = this.#init?.headers;
          const headerEntries = this.#response?.headers || this.#headers || (initHeaders ? Array.isArray(initHeaders) ? initHeaders : initHeaders?.entries ? initHeaders.entries() : Object.entries(initHeaders).map(([k2, v2]) => [k2.toLowerCase(), v2]) : void 0);
          let hasContentTypeHeader;
          let hasContentLength;
          if (headerEntries) for (const [key, value] of headerEntries) {
            if (Array.isArray(value)) for (const v2 of value) headers.push([key, v2]);
            else headers.push([key, value]);
            if (key === "content-type") hasContentTypeHeader = true;
            else if (key === "content-length") hasContentLength = true;
          }
          if (contentType && !hasContentTypeHeader) headers.push(["content-type", contentType]);
          if (contentLength && !hasContentLength) headers.push(["content-length", String(contentLength)]);
          this.#init = void 0;
          this.#headers = void 0;
          this.#response = void 0;
          this.#body = void 0;
          return {
            status: status2,
            statusText,
            headers,
            body
          };
        }
      }
      lazyInherit(NodeResponse$1.prototype, NativeResponse.prototype, "_response");
      Object.setPrototypeOf(NodeResponse$1, NativeResponse);
      Object.setPrototypeOf(NodeResponse$1.prototype, NativeResponse.prototype);
      return NodeResponse$1;
    })();
  }
});

// node_modules/srvx/dist/adapters/node.mjs
import nodeHTTP, { IncomingMessage, ServerResponse as ServerResponse2 } from "node:http";
import { Duplex, Readable as Readable2 } from "node:stream";
import nodeHTTPS from "node:https";
import nodeHTTP2 from "node:http2";
async function sendNodeResponse(nodeRes, webRes) {
  if (!webRes) {
    nodeRes.statusCode = 500;
    return endNodeResponse(nodeRes);
  }
  if (webRes._toNodeResponse) {
    const res = webRes._toNodeResponse();
    writeHead(nodeRes, res.status, res.statusText, res.headers);
    if (res.body) {
      if (res.body instanceof ReadableStream) return streamBody(res.body, nodeRes);
      else if (typeof res.body?.pipe === "function") {
        res.body.pipe(nodeRes);
        return new Promise((resolve3) => nodeRes.on("close", resolve3));
      }
      nodeRes.write(res.body);
    }
    return endNodeResponse(nodeRes);
  }
  const rawHeaders = [...webRes.headers];
  writeHead(nodeRes, webRes.status, webRes.statusText, rawHeaders);
  return webRes.body ? streamBody(webRes.body, nodeRes) : endNodeResponse(nodeRes);
}
function writeHead(nodeRes, status2, statusText, rawHeaders) {
  const writeHeaders = globalThis.Deno ? rawHeaders : rawHeaders.flat();
  if (!nodeRes.headersSent) if (nodeRes.req?.httpVersion === "2.0") nodeRes.writeHead(status2, writeHeaders);
  else nodeRes.writeHead(status2, statusText, writeHeaders);
}
function endNodeResponse(nodeRes) {
  return new Promise((resolve3) => nodeRes.end(resolve3));
}
function streamBody(stream, nodeRes) {
  if (nodeRes.destroyed) {
    stream.cancel();
    return;
  }
  const reader = stream.getReader();
  function streamCancel(error) {
    reader.cancel(error).catch(() => {
    });
    if (error) nodeRes.destroy(error);
  }
  function streamHandle({ done, value }) {
    try {
      if (done) nodeRes.end();
      else if (nodeRes.write(value)) reader.read().then(streamHandle, streamCancel);
      else nodeRes.once("drain", () => reader.read().then(streamHandle, streamCancel));
    } catch (error) {
      streamCancel(error instanceof Error ? error : void 0);
    }
  }
  nodeRes.on("close", streamCancel);
  nodeRes.on("error", streamCancel);
  reader.read().then(streamHandle, streamCancel);
  return reader.closed.catch(streamCancel).finally(() => {
    nodeRes.off("close", streamCancel);
    nodeRes.off("error", streamCancel);
  });
}
function readBody(req) {
  return new Promise((resolve3, reject) => {
    const chunks = [];
    const onData = (chunk2) => {
      chunks.push(chunk2);
    };
    const onError2 = (err2) => {
      reject(err2);
    };
    const onEnd = () => {
      req.off("error", onError2);
      req.off("data", onData);
      resolve3(Buffer.concat(chunks));
    };
    req.on("data", onData).once("end", onEnd).once("error", onError2);
  });
}
function toNodeHandler(handler) {
  if (handler.__nodeHandler) return handler.__nodeHandler;
  function convertedNodeHandler(nodeReq, nodeRes) {
    const res = handler(new NodeRequest({
      req: nodeReq,
      res: nodeRes
    }));
    return res instanceof Promise ? res.then((resolvedRes) => sendNodeResponse(nodeRes, resolvedRes)) : sendNodeResponse(nodeRes, res);
  }
  convertedNodeHandler.__fetchHandler = handler;
  assignFnName(convertedNodeHandler, handler, " (converted to Node handler)");
  return convertedNodeHandler;
}
function assignFnName(target, source, suffix) {
  if (source.name) try {
    Object.defineProperty(target, "name", { value: `${source.name}${suffix}` });
  } catch {
  }
}
function serve(options) {
  return new NodeServer(options);
}
var NodeRequestURL, NodeRequestHeaders, NodeRequest, NodeServer;
var init_node = __esm({
  "node_modules/srvx/dist/adapters/node.mjs"() {
    init_inherit();
    init_url2();
    init_utils8();
    init_plugins();
    init_call();
    NodeRequestURL = class extends FastURL {
      #req;
      constructor({ req }) {
        const path = req.url || "/";
        if (path[0] === "/") {
          const qIndex = path.indexOf("?");
          const pathname = qIndex === -1 ? path : path?.slice(0, qIndex) || "/";
          const search = qIndex === -1 ? "" : path?.slice(qIndex) || "";
          const host = req.headers.host || req.headers[":authority"] || `${req.socket.localFamily === "IPv6" ? "[" + req.socket.localAddress + "]" : req.socket.localAddress}:${req.socket?.localPort || "80"}`;
          const protocol = req.socket?.encrypted || req.headers["x-forwarded-proto"] === "https" || req.headers[":scheme"] === "https" ? "https:" : "http:";
          super({
            protocol,
            host,
            pathname,
            search
          });
        } else super(path);
        this.#req = req;
      }
      get pathname() {
        return super.pathname;
      }
      set pathname(value) {
        this._url.pathname = value;
        this.#req.url = this._url.pathname + this._url.search;
      }
    };
    NodeRequestHeaders = /* @__PURE__ */ (() => {
      const NativeHeaders = globalThis.Headers;
      class Headers2 {
        #req;
        #headers;
        constructor(req) {
          this.#req = req;
        }
        static [Symbol.hasInstance](val) {
          return val instanceof NativeHeaders;
        }
        get _headers() {
          if (!this.#headers) {
            const headers = new NativeHeaders();
            const rawHeaders = this.#req.rawHeaders;
            const len = rawHeaders.length;
            for (let i3 = 0; i3 < len; i3 += 2) {
              const key = rawHeaders[i3];
              if (key.charCodeAt(0) === 58) continue;
              const value = rawHeaders[i3 + 1];
              headers.append(key, value);
            }
            this.#headers = headers;
          }
          return this.#headers;
        }
        get(name) {
          if (this.#headers) return this.#headers.get(name);
          const value = this.#req.headers[name.toLowerCase()];
          return Array.isArray(value) ? value.join(", ") : value || null;
        }
        has(name) {
          if (this.#headers) return this.#headers.has(name);
          return name.toLowerCase() in this.#req.headers;
        }
        getSetCookie() {
          if (this.#headers) return this.#headers.getSetCookie();
          const value = this.#req.headers["set-cookie"];
          return Array.isArray(value) ? value : value ? [value] : [];
        }
        *_entries() {
          const rawHeaders = this.#req.rawHeaders;
          const len = rawHeaders.length;
          for (let i3 = 0; i3 < len; i3 += 2) {
            const key = rawHeaders[i3];
            if (key.charCodeAt(0) === 58) continue;
            yield [key.toLowerCase(), rawHeaders[i3 + 1]];
          }
        }
        entries() {
          return this.#headers ? this.#headers.entries() : this._entries();
        }
        [Symbol.iterator]() {
          return this.entries();
        }
      }
      lazyInherit(Headers2.prototype, NativeHeaders.prototype, "_headers");
      Object.setPrototypeOf(Headers2, NativeHeaders);
      Object.setPrototypeOf(Headers2.prototype, NativeHeaders.prototype);
      return Headers2;
    })();
    NodeRequest = /* @__PURE__ */ (() => {
      const NativeRequest = globalThis[/* @__PURE__ */ Symbol.for("srvx.nativeRequest")] ??= globalThis.Request;
      const PatchedRequest = class Request$1 extends NativeRequest {
        static _srvx = true;
        static [Symbol.hasInstance](instance) {
          if (this === PatchedRequest) return instance instanceof NativeRequest;
          else return Object.prototype.isPrototypeOf.call(this.prototype, instance);
        }
        constructor(input, options) {
          if (typeof input === "object" && "_request" in input) input = input._request;
          if (options?.body?.getReader !== void 0) options.duplex ??= "half";
          super(input, options);
        }
      };
      if (!globalThis.Request._srvx) globalThis.Request = PatchedRequest;
      class Request2 {
        runtime;
        #req;
        #url;
        #bodyStream;
        #request;
        #headers;
        #abortController;
        constructor(ctx) {
          this.#req = ctx.req;
          this.runtime = {
            name: "node",
            node: ctx
          };
        }
        static [Symbol.hasInstance](val) {
          return val instanceof NativeRequest;
        }
        get ip() {
          return this.#req.socket?.remoteAddress;
        }
        get method() {
          if (this.#request) return this.#request.method;
          return this.#req.method || "GET";
        }
        get _url() {
          return this.#url ||= new NodeRequestURL({ req: this.#req });
        }
        set _url(url5) {
          this.#url = url5;
        }
        get url() {
          if (this.#request) return this.#request.url;
          return this._url.href;
        }
        get headers() {
          if (this.#request) return this.#request.headers;
          return this.#headers ||= new NodeRequestHeaders(this.#req);
        }
        get _abortController() {
          if (!this.#abortController) {
            this.#abortController = new AbortController();
            const { req, res } = this.runtime.node;
            const abortController = this.#abortController;
            const abort = (err2) => abortController.abort?.(err2);
            req.once("error", abort);
            if (res) res.once("close", () => {
              const reqError = req.errored;
              if (reqError) abort(reqError);
              else if (!res.writableEnded) abort();
            });
            else req.once("close", () => {
              if (!req.complete) abort();
            });
          }
          return this.#abortController;
        }
        get signal() {
          return this.#request ? this.#request.signal : this._abortController.signal;
        }
        get body() {
          if (this.#request) return this.#request.body;
          if (this.#bodyStream === void 0) {
            const method = this.method;
            this.#bodyStream = !(method === "GET" || method === "HEAD") ? Readable2.toWeb(this.#req) : null;
          }
          return this.#bodyStream;
        }
        text() {
          if (this.#request) return this.#request.text();
          if (this.#bodyStream !== void 0) return this.#bodyStream ? new Response(this.#bodyStream).text() : Promise.resolve("");
          return readBody(this.#req).then((buf) => buf.toString());
        }
        json() {
          if (this.#request) return this.#request.json();
          return this.text().then((text) => JSON.parse(text));
        }
        get _request() {
          if (!this.#request) {
            this.#request = new PatchedRequest(this.url, {
              method: this.method,
              headers: this.headers,
              body: this.body,
              signal: this._abortController.signal
            });
            this.#headers = void 0;
            this.#bodyStream = void 0;
          }
          return this.#request;
        }
      }
      lazyInherit(Request2.prototype, NativeRequest.prototype, "_request");
      Object.setPrototypeOf(Request2.prototype, NativeRequest.prototype);
      return Request2;
    })();
    NodeServer = class {
      runtime = "node";
      options;
      node;
      serveOptions;
      fetch;
      #isSecure;
      #listeningPromise;
      #wait;
      constructor(options) {
        this.options = {
          ...options,
          middleware: [...options.middleware || []]
        };
        for (const plugin of options.plugins || []) plugin(this);
        errorPlugin(this);
        gracefulShutdownPlugin(this);
        const fetchHandler = this.fetch = wrapFetch(this);
        this.#wait = createWaitUntil();
        const handler = (nodeReq, nodeRes) => {
          const request = new NodeRequest({
            req: nodeReq,
            res: nodeRes
          });
          request.waitUntil = this.#wait.waitUntil;
          const res = fetchHandler(request);
          return res instanceof Promise ? res.then((resolvedRes) => sendNodeResponse(nodeRes, resolvedRes)) : sendNodeResponse(nodeRes, res);
        };
        const tls = resolveTLSOptions(this.options);
        const { port, hostname: host } = resolvePortAndHost(this.options);
        this.serveOptions = {
          port,
          host,
          exclusive: !this.options.reusePort,
          ...tls ? {
            cert: tls.cert,
            key: tls.key,
            passphrase: tls.passphrase
          } : {},
          ...this.options.node
        };
        let server;
        this.#isSecure = !!this.serveOptions.cert && this.options.protocol !== "http";
        if (this.options.node?.http2 ?? this.#isSecure) if (this.#isSecure) server = nodeHTTP2.createSecureServer({
          allowHTTP1: true,
          ...this.serveOptions
        }, handler);
        else throw new Error("node.http2 option requires tls certificate!");
        else if (this.#isSecure) server = nodeHTTPS.createServer(this.serveOptions, handler);
        else server = nodeHTTP.createServer(this.serveOptions, handler);
        this.node = {
          server,
          handler
        };
        if (!options.manual) this.serve();
      }
      serve() {
        if (this.#listeningPromise) return Promise.resolve(this.#listeningPromise).then(() => this);
        this.#listeningPromise = new Promise((resolve3) => {
          this.node.server.listen(this.serveOptions, () => {
            printListening(this.options, this.url);
            resolve3();
          });
        });
      }
      get url() {
        const addr = this.node?.server?.address();
        if (!addr) return;
        return typeof addr === "string" ? addr : fmtURL(addr.address, addr.port, this.#isSecure);
      }
      ready() {
        return Promise.resolve(this.#listeningPromise).then(() => this);
      }
      async close(closeAll) {
        await Promise.all([this.#wait.wait(), new Promise((resolve3, reject) => {
          const server = this.node?.server;
          if (!server) return resolve3();
          if (closeAll && "closeAllConnections" in server) server.closeAllConnections();
          server.close((error) => error ? reject(error) : resolve3());
        })]);
      }
    };
  }
});

// node_modules/h3/dist/h3.mjs
function freezeApp(app2) {
  app2.config = Object.freeze(app2.config);
  app2["~addRoute"] = () => {
    throw new Error("Cannot add routes after the server init.");
  };
}
function definePlugin(def) {
  return ((opts) => (h3) => def(h3, opts));
}
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) return defaultStatusCode;
  if (typeof statusCode === "string") statusCode = +statusCode;
  if (statusCode < 100 || statusCode > 599) return defaultStatusCode;
  return statusCode;
}
function hasProp2(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}
function isJSONSerializable(value, _type) {
  if (value === null || value === void 0) return true;
  if (_type !== "object") return _type === "boolean" || _type === "number" || _type === "string";
  if (typeof value.toJSON === "function") return true;
  if (Array.isArray(value)) return true;
  if (typeof value.pipe === "function" || typeof value.pipeTo === "function") return false;
  if (value instanceof NullProtoObj2) return true;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
function toResponse(val, event, config = {}) {
  if (typeof val?.then === "function") return (val.catch?.((error) => error) || Promise.resolve(val)).then((resolvedVal) => toResponse(resolvedVal, event, config));
  const response = prepareResponse(val, event, config);
  if (typeof response?.then === "function") return toResponse(response, event, config);
  const { onResponse: onResponse$1 } = config;
  return onResponse$1 ? Promise.resolve(onResponse$1(response, event)).then(() => response) : response;
}
function prepareResponse(val, event, config, nested) {
  if (val === kHandled) return new NodeResponse(null);
  if (val === kNotFound) val = new HTTPError({
    status: 404,
    message: `Cannot find any route matching [${event.req.method}] ${event.url}`
  });
  if (val && val instanceof Error) {
    const isHTTPError = HTTPError.isError(val);
    const error = isHTTPError ? val : new HTTPError(val);
    if (!isHTTPError) {
      error.unhandled = true;
      if (val?.stack) error.stack = val.stack;
    }
    if (error.unhandled && !config.silent) console.error(error);
    const { onError: onError$1 } = config;
    return onError$1 && !nested ? Promise.resolve(onError$1(error, event)).catch((error$1) => error$1).then((newVal) => prepareResponse(newVal ?? val, event, config, true)) : errorResponse(error, config.debug);
  }
  const preparedRes = event[kEventRes];
  const preparedHeaders = preparedRes?.[kEventResHeaders];
  event[kEventRes] = void 0;
  if (!(val instanceof Response)) {
    const res = prepareResponseBody(val, event, config);
    const status2 = res.status || preparedRes?.status;
    return new NodeResponse(nullBody(event.req.method, status2) ? null : res.body, {
      status: status2,
      statusText: res.statusText || preparedRes?.statusText,
      headers: res.headers && preparedHeaders ? mergeHeaders$1(res.headers, preparedHeaders) : res.headers || preparedHeaders
    });
  }
  if (!preparedHeaders || nested || !val.ok) return val;
  try {
    mergeHeaders$1(val.headers, preparedHeaders, val.headers);
    return val;
  } catch {
    return new NodeResponse(nullBody(event.req.method, val.status) ? null : val.body, {
      status: val.status,
      statusText: val.statusText,
      headers: mergeHeaders$1(val.headers, preparedHeaders)
    });
  }
}
function mergeHeaders$1(base, overrides, target = new Headers(base)) {
  for (const [name, value] of overrides) if (name === "set-cookie") target.append(name, value);
  else target.set(name, value);
  return target;
}
function prepareResponseBody(val, event, config) {
  if (val === null || val === void 0) return {
    body: "",
    headers: emptyHeaders
  };
  const valType = typeof val;
  if (valType === "string") return { body: val };
  if (val instanceof Uint8Array) {
    event.res.headers.set("content-length", val.byteLength.toString());
    return { body: val };
  }
  if (val instanceof HTTPResponse || val?.constructor?.name === "HTTPResponse") return val;
  if (isJSONSerializable(val, valType)) return {
    body: JSON.stringify(val, void 0, config.debug ? 2 : void 0),
    headers: jsonHeaders
  };
  if (valType === "bigint") return {
    body: val.toString(),
    headers: jsonHeaders
  };
  if (val instanceof Blob) {
    const headers = new Headers({
      "content-type": val.type,
      "content-length": val.size.toString()
    });
    let filename = val.name;
    if (filename) {
      filename = encodeURIComponent(filename);
      headers.set("content-disposition", `filename="${filename}"; filename*=UTF-8''${filename}`);
    }
    return {
      body: val.stream(),
      headers
    };
  }
  if (valType === "symbol") return { body: val.toString() };
  if (valType === "function") return { body: `${val.name}()` };
  return { body: val };
}
function nullBody(method, status2) {
  return method === "HEAD" || status2 === 100 || status2 === 101 || status2 === 102 || status2 === 204 || status2 === 205 || status2 === 304;
}
function errorResponse(error, debug6) {
  return new NodeResponse(JSON.stringify({
    ...error.toJSON(),
    stack: debug6 && error.stack ? error.stack.split("\n").map((l2) => l2.trim()) : void 0
  }, void 0, debug6 ? 2 : void 0), {
    status: error.status,
    statusText: error.statusText,
    headers: error.headers ? mergeHeaders$1(jsonHeaders, error.headers) : new Headers(jsonHeaders)
  });
}
function defineMiddleware(input) {
  return input;
}
function normalizeMiddleware(input, opts = {}) {
  const matcher = createMatcher(opts);
  if (!matcher && (input.length > 1 || input.constructor?.name === "AsyncFunction")) return input;
  return (event, next) => {
    if (matcher && !matcher(event)) return next();
    const res = input(event, next);
    return res === void 0 || res === kNotFound ? next() : res;
  };
}
function createMatcher(opts) {
  if (!opts.route && !opts.method && !opts.match) return;
  const routeMatcher = opts.route ? routeToRegExp(opts.route) : void 0;
  const method = opts.method?.toUpperCase();
  return function _middlewareMatcher(event) {
    if (method && event.req.method !== method) return false;
    if (opts.match && !opts.match(event)) return false;
    if (!routeMatcher) return true;
    const match2 = event.url.pathname.match(routeMatcher);
    if (!match2) return false;
    if (match2.groups) event.context.middlewareParams = {
      ...event.context.middlewareParams,
      ...match2.groups
    };
    return true;
  };
}
function callMiddleware2(event, middleware, handler, index = 0) {
  if (index === middleware.length) return handler(event);
  const fn = middleware[index];
  let nextCalled;
  let nextResult;
  const next = () => {
    if (nextCalled) return nextResult;
    nextCalled = true;
    nextResult = callMiddleware2(event, middleware, handler, index + 1);
    return nextResult;
  };
  const ret = fn(event, next);
  return isUnhandledResponse(ret) ? next() : typeof ret?.then === "function" ? ret.then((resolved) => isUnhandledResponse(resolved) ? next() : resolved) : ret;
}
function isUnhandledResponse(val) {
  return val === void 0 || val === kNotFound;
}
function toMiddleware(input) {
  let h2 = input.handler || input;
  let isFunction = typeof h2 === "function";
  if (!isFunction && typeof input?.fetch === "function") {
    isFunction = true;
    h2 = function _fetchHandler(event) {
      return input.fetch(event.req);
    };
  }
  if (!isFunction) return function noopMiddleware(event, next) {
    return next();
  };
  if (h2.length === 2) return h2;
  return function _middlewareHandler(event, next) {
    const res = h2(event);
    return typeof res?.then === "function" ? res.then((r) => {
      return is404(r) ? next() : r;
    }) : is404(res) ? next() : res;
  };
}
function is404(val) {
  return isUnhandledResponse(val) || val?.status === 404 && val instanceof Response;
}
function parseQuery(input) {
  const params = new NullProtoObj2();
  if (!input || input === "?") return params;
  const inputLength = input.length;
  let key = "";
  let value = "";
  let startingIndex = -1;
  let equalityIndex = -1;
  let shouldDecodeKey = false;
  let shouldDecodeValue = false;
  let keyHasPlus = false;
  let valueHasPlus = false;
  let hasBothKeyValuePair = false;
  let c2 = 0;
  for (let i3 = 0; i3 < inputLength + 1; i3++) {
    c2 = i3 === inputLength ? 38 : input.charCodeAt(i3);
    switch (c2) {
      case 38:
        hasBothKeyValuePair = equalityIndex > startingIndex;
        if (!hasBothKeyValuePair) equalityIndex = i3;
        key = input.slice(startingIndex + 1, equalityIndex);
        if (hasBothKeyValuePair || key.length > 0) {
          if (keyHasPlus) key = key.replace(plusRegex, " ");
          if (shouldDecodeKey) try {
            key = decodeURIComponent(key);
          } catch {
          }
          if (hasBothKeyValuePair) {
            value = input.slice(equalityIndex + 1, i3);
            if (valueHasPlus) value = value.replace(plusRegex, " ");
            if (shouldDecodeValue) try {
              value = decodeURIComponent(value);
            } catch {
            }
          }
          const currentValue = params[key];
          if (currentValue === void 0) params[key] = value;
          else if (Array.isArray(currentValue)) currentValue.push(value);
          else params[key] = [currentValue, value];
        }
        value = "";
        startingIndex = i3;
        equalityIndex = i3;
        shouldDecodeKey = false;
        shouldDecodeValue = false;
        keyHasPlus = false;
        valueHasPlus = false;
        break;
      case 61:
        if (equalityIndex <= startingIndex) equalityIndex = i3;
        else shouldDecodeValue = true;
        break;
      case 43:
        if (equalityIndex > startingIndex) valueHasPlus = true;
        else keyHasPlus = true;
        break;
      case 37:
        if (equalityIndex > startingIndex) shouldDecodeValue = true;
        else shouldDecodeKey = true;
        break;
    }
  }
  return params;
}
async function validateData(data, fn) {
  if ("~standard" in fn) {
    const result = await fn["~standard"].validate(data);
    if (result.issues) throw createValidationError({
      message: "Validation failed",
      issues: result.issues
    });
    return result.value;
  }
  try {
    const res = await fn(data);
    if (res === false) throw createValidationError({ message: "Validation failed" });
    if (res === true) return data;
    return res ?? data;
  } catch (error) {
    throw createValidationError(error);
  }
}
function validatedRequest(req, validate2) {
  if (validate2.headers) {
    const validatedheaders = syncValidate("headers", Object.fromEntries(req.headers.entries()), validate2.headers);
    for (const [key, value] of Object.entries(validatedheaders)) req.headers.set(key, value);
  }
  if (!validate2.body) return req;
  return new Proxy(req, { get(_target, prop) {
    if (validate2.body) {
      if (prop === "json") return function _validatedJson() {
        return req.json().then((data) => validate2.body["~standard"].validate(data)).then((result) => result.issues ? Promise.reject(createValidationError(result)) : result.value);
      };
      else if (reqBodyKeys.has(prop)) throw new TypeError(`Cannot access .${prop} on request with JSON validation enabled. Use .json() instead.`);
    }
    return Reflect.get(req, prop);
  } });
}
function validatedURL(url5, validate2) {
  if (!validate2.query) return url5;
  const validatedQuery = syncValidate("query", Object.fromEntries(url5.searchParams.entries()), validate2.query);
  for (const [key, value] of Object.entries(validatedQuery)) url5.searchParams.set(key, value);
  return url5;
}
function syncValidate(type, data, fn) {
  const result = fn["~standard"].validate(data);
  if (result instanceof Promise) throw new TypeError(`Asynchronous validation is not supported for ${type}`);
  if (result.issues) throw createValidationError({ issues: result.issues });
  return result.value;
}
function createValidationError(validateError) {
  return new HTTPError({
    status: 400,
    statusText: "Validation failed",
    message: validateError?.message,
    data: validateError,
    cause: validateError
  });
}
function isEvent(input) {
  return input instanceof H3Event || input?.constructor?.__is_event__;
}
function isHTTPEvent(input) {
  return input?.req instanceof Request;
}
function getEventContext(event) {
  if (event.context) return event.context;
  event.req.context ??= {};
  return event.req.context;
}
function mockEvent(_request, options) {
  let request;
  if (typeof _request === "string") {
    let url5 = _request;
    if (url5[0] === "/") url5 = `http://localhost${url5}`;
    request = new Request(url5, options);
  } else if (options || _request instanceof URL) request = new Request(_request, options);
  else request = _request;
  return new H3Event(request);
}
function toRequest(input, options) {
  if (typeof input === "string") {
    let url5 = input;
    if (url5[0] === "/") {
      const headers = options?.headers ? new Headers(options.headers) : void 0;
      const host = headers?.get("host") || "localhost";
      url5 = `${headers?.get("x-forwarded-proto") === "https" ? "https" : "http"}://${host}${url5}`;
    }
    return new Request(url5, options);
  } else if (options || input instanceof URL) return new Request(input, options);
  return input;
}
function getQuery(event) {
  return parseQuery((event.url || new URL(event.req.url)).search.slice(1));
}
function getValidatedQuery(event, validate2) {
  return validateData(getQuery(event), validate2);
}
function getRouterParams(event, opts = {}) {
  let params = getEventContext(event).params || {};
  if (opts.decode) {
    params = { ...params };
    for (const key in params) params[key] = decodeURIComponent(params[key]);
  }
  return params;
}
function getValidatedRouterParams(event, validate2, opts = {}) {
  return validateData(getRouterParams(event, opts), validate2);
}
function getRouterParam(event, name, opts = {}) {
  return getRouterParams(event, opts)[name];
}
function isMethod(event, expected, allowHead) {
  if (allowHead && event.req.method === "HEAD") return true;
  if (typeof expected === "string") {
    if (event.req.method === expected) return true;
  } else if (expected.includes(event.req.method)) return true;
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected, allowHead)) throw new HTTPError({ status: 405 });
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = (event.req.headers.get("x-forwarded-host") || "").split(",").shift()?.trim();
    if (xForwardedHost) return xForwardedHost;
  }
  return event.req.headers.get("host") || "";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false) {
    const forwardedProto = event.req.headers.get("x-forwarded-proto");
    if (forwardedProto === "https") return "https";
    if (forwardedProto === "http") return "http";
  }
  return (event.url || new URL(event.req.url)).protocol.slice(0, -1);
}
function getRequestURL(event, opts = {}) {
  const url5 = new URL(event.url || event.req.url);
  url5.protocol = getRequestProtocol(event, opts);
  if (opts.xForwardedHost) {
    const host = getRequestHost(event, opts);
    if (host) {
      url5.host = host;
      if (!host.includes(":")) url5.port = "";
    }
  }
  return url5;
}
function getRequestIP(event, opts = {}) {
  if (opts.xForwardedFor) {
    const _header = event.req.headers.get("x-forwarded-for");
    if (_header) {
      const xForwardedFor = _header.split(",")[0].trim();
      if (xForwardedFor) return xForwardedFor;
    }
  }
  return event.req.context?.clientAddress || event.req.ip || void 0;
}
function defineHandler(input) {
  if (typeof input === "function") return handlerWithFetch(input);
  const handler = input.handler || (input.fetch ? function _fetchHandler(event) {
    return input.fetch(event.req);
  } : NoHandler);
  return Object.assign(handlerWithFetch(input.middleware?.length ? function _handlerMiddleware(event) {
    return callMiddleware2(event, input.middleware, handler);
  } : handler), input);
}
function defineValidatedHandler(def) {
  if (!def.validate) return defineHandler(def);
  return defineHandler({
    ...def,
    handler: function _validatedHandler(event) {
      event.req = validatedRequest(event.req, def.validate);
      event.url = validatedURL(event.url, def.validate);
      return def.handler(event);
    }
  });
}
function handlerWithFetch(handler) {
  if ("fetch" in handler) return handler;
  return Object.assign(handler, { fetch: (req) => {
    if (typeof req === "string") req = new URL(req, "http://_");
    if (req instanceof URL) req = new Request(req);
    const event = new H3Event(req);
    try {
      return Promise.resolve(toResponse(handler(event), event));
    } catch (error) {
      return Promise.resolve(toResponse(error, event));
    }
  } });
}
function dynamicEventHandler(initial) {
  let current = toEventHandler(initial);
  return Object.assign(defineHandler(function _dynamicEventHandler(event) {
    return current?.(event);
  }), { set: (handler) => {
    current = toEventHandler(handler);
  } });
}
function defineLazyEventHandler(loader) {
  let handler;
  let promise;
  const resolveLazyHandler = () => {
    if (handler) return Promise.resolve(handler);
    return promise ??= Promise.resolve(loader()).then((r) => {
      handler = toEventHandler(r) || toEventHandler(r.default);
      if (typeof handler !== "function") throw new TypeError("Invalid lazy handler", { cause: { resolved: r } });
      return handler;
    });
  };
  return defineHandler(function lazyHandler(event) {
    return handler ? handler(event) : resolveLazyHandler().then((r) => r(event));
  });
}
function toEventHandler(handler) {
  if (typeof handler === "function") return handler;
  if (typeof handler?.handler === "function") return handler.handler;
  if (typeof handler?.fetch === "function") return function _fetchHandler(event) {
    return handler.fetch(event.req);
  };
}
function toWebHandler(app2) {
  return (request, context) => {
    return Promise.resolve(app2.request(request, void 0, context || request.context));
  };
}
function fromWebHandler(handler) {
  return function _webHandler(event) {
    return handler(event.req, event.context);
  };
}
function fromNodeHandler(handler) {
  if (typeof handler !== "function") throw new TypeError(`Invalid handler. It should be a function: ${handler}`);
  return function _nodeHandler(event) {
    if (!event.runtime?.node?.res) throw new Error("[h3] Executing Node.js middleware is not supported in this server!");
    return callNodeHandler2(handler, event.runtime?.node.req, event.runtime?.node.res);
  };
}
function defineNodeHandler(handler) {
  return handler;
}
function defineNodeMiddleware(handler) {
  return handler;
}
function callNodeHandler2(handler, req, res) {
  const isMiddleware = handler.length > 2;
  return new Promise((resolve3, reject) => {
    res.once("close", () => resolve3(kHandled));
    res.once("finish", () => resolve3(kHandled));
    res.once("pipe", (stream) => resolve3(stream));
    res.once("error", (error) => reject(error));
    try {
      if (isMiddleware) Promise.resolve(handler(req, res, (error) => error ? reject(new HTTPError({
        cause: error,
        unhandled: true
      })) : resolve3(void 0))).catch((error) => reject(new HTTPError({
        cause: error,
        unhandled: true
      })));
      else return Promise.resolve(handler(req, res)).then(() => resolve3(kHandled)).catch((error) => reject(new HTTPError({
        cause: error,
        unhandled: true
      })));
    } catch (error) {
      reject(new HTTPError({
        cause: error,
        unhandled: true
      }));
    }
  });
}
function defineRoute(def) {
  const handler = defineValidatedHandler(def);
  return (h3) => {
    h3.on(def.method, def.route, handler);
  };
}
function base64Encode(data) {
  const buff = validateBinaryLike(data);
  if (globalThis.Buffer) return globalThis.Buffer.from(buff).toString("base64url");
  const bytes = [];
  let i3;
  const len = buff.length;
  for (i3 = 2; i3 < len; i3 += 3) bytes.push(base64Code[buff[i3 - 2] >> 2], base64Code[(buff[i3 - 2] & 3) << 4 | buff[i3 - 1] >> 4], base64Code[(buff[i3 - 1] & 15) << 2 | buff[i3] >> 6], base64Code[buff[i3] & 63]);
  if (i3 === len + 1) bytes.push(base64Code[buff[i3 - 2] >> 2], base64Code[(buff[i3 - 2] & 3) << 4]);
  if (i3 === len) bytes.push(base64Code[buff[i3 - 2] >> 2], base64Code[(buff[i3 - 2] & 3) << 4 | buff[i3 - 1] >> 4], base64Code[(buff[i3 - 1] & 15) << 2]);
  return String.fromCharCode(...bytes);
}
function base64Decode(b64Url) {
  if (globalThis.Buffer) return new Uint8Array(globalThis.Buffer.from(b64Url, "base64url"));
  const b64 = b64Url.replace(/-/g, "+").replace(/_/g, "/");
  const binString = atob(b64);
  const size = binString.length;
  const bytes = new Uint8Array(size);
  for (let i3 = 0; i3 < size; i3++) bytes[i3] = binString.charCodeAt(i3);
  return bytes;
}
function validateBinaryLike(source) {
  if (typeof source === "string") return textEncoder.encode(source);
  else if (source instanceof Uint8Array) return source;
  else if (source instanceof ArrayBuffer) return new Uint8Array(source);
  throw new TypeError(`The input must be a Uint8Array, a string, or an ArrayBuffer.`);
}
function serializeIterableValue(value) {
  switch (typeof value) {
    case "string":
      return textEncoder.encode(value);
    case "boolean":
    case "number":
    case "bigint":
    case "symbol":
      return textEncoder.encode(value.toString());
    case "object":
      if (value instanceof Uint8Array) return value;
      return textEncoder.encode(JSON.stringify(value));
  }
  return new Uint8Array();
}
function coerceIterable(iterable$1) {
  if (typeof iterable$1 === "function") iterable$1 = iterable$1();
  if (Symbol.iterator in iterable$1) return iterable$1[Symbol.iterator]();
  if (Symbol.asyncIterator in iterable$1) return iterable$1[Symbol.asyncIterator]();
  return iterable$1;
}
function noContent(status2 = 204) {
  return new HTTPResponse(null, {
    status: status2,
    statusText: "No Content"
  });
}
function redirect(location, status2 = 302, statusText) {
  return new HTTPResponse(`<html><head><meta http-equiv="refresh" content="0; url=${location.replace(/"/g, "%22")}" /></head></html>`, {
    status: status2,
    statusText: statusText || (status2 === 301 ? "Moved Permanently" : "Found"),
    headers: {
      "content-type": "text/html; charset=utf-8",
      location
    }
  });
}
function writeEarlyHints(event, hints) {
  if (!event.runtime?.node?.res?.writeEarlyHints) return;
  return new Promise((resolve3) => {
    event.runtime?.node?.res?.writeEarlyHints(hints, () => resolve3());
  });
}
function iterable(iterable$1, options) {
  const serializer = options?.serializer ?? serializeIterableValue;
  const iterator = coerceIterable(iterable$1);
  return new HTTPResponse(new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();
      if (value !== void 0) {
        const chunk2 = serializer(value);
        if (chunk2 !== void 0) controller.enqueue(chunk2);
      }
      if (done) controller.close();
    },
    cancel() {
      iterator.return?.();
    }
  }));
}
function html(first, ...values) {
  return new HTTPResponse(typeof first === "string" ? first : first.reduce((out, str, i3) => out + str + (values[i3] ?? ""), ""), { headers: { "content-type": "text/html; charset=utf-8" } });
}
function parseURLEncodedBody(body) {
  const form = new URLSearchParams(body);
  const parsedForm = new NullProtoObj2();
  for (const [key, value] of form.entries()) if (hasProp2(parsedForm, key)) {
    if (!Array.isArray(parsedForm[key])) parsedForm[key] = [parsedForm[key]];
    parsedForm[key].push(value);
  } else parsedForm[key] = value;
  return parsedForm;
}
async function readBody2(event) {
  const text = await event.req.text();
  if (!text) return;
  if ((event.req.headers.get("content-type") || "").startsWith("application/x-www-form-urlencoded")) return parseURLEncodedBody(text);
  try {
    return JSON.parse(text);
  } catch {
    throw new HTTPError({
      status: 400,
      statusText: "Bad Request",
      message: "Invalid JSON body"
    });
  }
}
async function readValidatedBody(event, validate2) {
  return validateData(await readBody2(event), validate2);
}
async function assertBodySize(event, limit) {
  if (!await isBodySizeWithin(event, limit)) throw new HTTPError({
    status: 413,
    statusText: "Request Entity Too Large",
    message: `Request body size exceeds the limit of ${limit} bytes`
  });
}
async function isBodySizeWithin(event, limit) {
  const req = event.req;
  if (req.body === null) return true;
  const contentLength = req.headers.get("content-length");
  if (contentLength) {
    if (req.headers.get("transfer-encoding")) throw new HTTPError({ status: 400 });
    return +contentLength <= limit;
  }
  const reader = req.clone().body.getReader();
  let chunk2 = await reader.read();
  let size = 0;
  while (!chunk2.done) {
    size += chunk2.value.byteLength;
    if (size > limit) return false;
    chunk2 = await reader.read();
  }
  return true;
}
function onRequest(hook) {
  return async function _onRequestMiddleware(event) {
    await hook(event);
  };
}
function onResponse(hook) {
  return async function _onResponseMiddleware(event, next) {
    const response = await toResponse(await next(), event);
    return await hook(response, event) || response;
  };
}
function onError(hook) {
  return async (event, next) => {
    try {
      return await next();
    } catch (rawError) {
      const isHTTPError = HTTPError.isError(rawError);
      const error = isHTTPError ? rawError : new HTTPError(rawError);
      if (!isHTTPError) {
        error.unhandled = true;
        if (rawError?.stack) error.stack = rawError.stack;
      }
      const hookResponse = await hook(error, event);
      if (hookResponse !== void 0) return hookResponse;
      throw error;
    }
  };
}
function bodyLimit(limit) {
  return async (event, next) => {
    await assertBodySize(event, limit);
    return next();
  };
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"), (match2, prefix2, previousValue) => {
    let newValue;
    if (previousValue in _map) newValue = _map[previousValue];
    else if ("*" in _map) newValue = _map["*"];
    else return match2;
    return newValue ? prefix2 + newValue : "";
  });
}
function mergeHeaders(defaults$1, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) return defaults$1;
  const merged = new Headers(defaults$1);
  for (const input of _inputs) {
    const entries = Array.isArray(input) ? input : typeof input.entries === "function" ? input.entries() : Object.entries(input);
    for (const [key, value] of entries) if (value !== void 0) merged.set(key, value);
  }
  return merged;
}
async function proxyRequest(event, target, opts = {}) {
  const requestBody = PayloadMethods.has(event.req.method) ? event.req.body : void 0;
  const method = opts.fetchOptions?.method || event.req.method;
  const fetchHeaders = mergeHeaders(getProxyRequestHeaders(event, {
    host: target.startsWith("/"),
    forwardHeaders: opts.forwardHeaders,
    filterHeaders: opts.filterHeaders
  }), opts.fetchOptions?.headers, opts.headers);
  return proxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body: requestBody,
      duplex: requestBody ? "half" : void 0,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function proxy(event, target, opts = {}) {
  const fetchOptions = {
    headers: opts.headers,
    ...opts.fetchOptions
  };
  let response;
  try {
    response = target[0] === "/" ? await event.app.fetch(createSubRequest(event, target, fetchOptions)) : await fetch(target, fetchOptions);
  } catch (error) {
    throw new HTTPError({
      status: 502,
      cause: error
    });
  }
  const headers = new Headers();
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding" || key === "content-length" || key === "transfer-encoding") continue;
    if (key === "set-cookie") {
      cookies.push(value);
      continue;
    }
    headers.append(key, value);
  }
  if (cookies.length > 0) {
    const _cookies = cookies.map((cookie) => {
      if (opts.cookieDomainRewrite) cookie = rewriteCookieProperty(cookie, opts.cookieDomainRewrite, "domain");
      if (opts.cookiePathRewrite) cookie = rewriteCookieProperty(cookie, opts.cookiePathRewrite, "path");
      return cookie;
    });
    for (const cookie of _cookies) headers.append("set-cookie", cookie);
  }
  if (opts.onResponse) await opts.onResponse(event, response);
  return new HTTPResponse(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}
function getProxyRequestHeaders(event, opts) {
  const headers = new NullProtoObj2();
  for (const [name, value] of event.req.headers.entries()) {
    if (opts?.filterHeaders?.includes(name)) continue;
    if (opts?.forwardHeaders?.includes(name)) {
      headers[name] = value;
      continue;
    }
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = value;
      continue;
    }
  }
  return headers;
}
async function fetchWithEvent(event, url5, init) {
  if (url5[0] !== "/") return fetch(url5, init);
  return event.app.fetch(createSubRequest(event, url5, {
    ...init,
    headers: mergeHeaders(getProxyRequestHeaders(event, { host: true }), init?.headers)
  }));
}
function createSubRequest(event, path, init) {
  const url5 = new URL(path, event.url);
  const req = new Request(url5, init);
  req.runtime = event.req.runtime;
  req.waitUntil = event.req.waitUntil;
  req.ip = event.req.ip;
  return req;
}
function parse3(str, options) {
  if (typeof str !== "string") throw new TypeError("argument str must be a string");
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) break;
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) endIdx = str.length;
    else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) val = val.slice(1, -1);
      obj[key] = tryDecode2(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode2(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}
function serialize2(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encodeURIComponent;
  if (typeof enc !== "function") throw new TypeError("option encode is invalid");
  if (!fieldContentRegExp.test(name)) throw new TypeError("argument name is invalid");
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) throw new TypeError("argument val is invalid");
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) throw new TypeError("option maxAge is invalid");
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) throw new TypeError("option domain is invalid");
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) throw new TypeError("option path is invalid");
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) throw new TypeError("option expires is invalid");
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) str += "; HttpOnly";
  if (opt.secure) str += "; Secure";
  if (opt.priority) switch (typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority) {
    case "low":
      str += "; Priority=Low";
      break;
    case "medium":
      str += "; Priority=Medium";
      break;
    case "high":
      str += "; Priority=High";
      break;
    default:
      throw new TypeError("option priority is invalid");
  }
  if (opt.sameSite) switch (typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite) {
    case true:
      str += "; SameSite=Strict";
      break;
    case "lax":
      str += "; SameSite=Lax";
      break;
    case "strict":
      str += "; SameSite=Strict";
      break;
    case "none":
      str += "; SameSite=None";
      break;
    default:
      throw new TypeError("option sameSite is invalid");
  }
  if (opt.partitioned) str += "; Partitioned";
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}
function parseSetCookie(setCookieValue, options) {
  const parts = (setCookieValue || "").split(";").filter((str) => typeof str === "string" && !!str.trim());
  const parsed = _parseNameValuePair(parts.shift() || "");
  const name = parsed.name;
  let value = parsed.value;
  try {
    value = options?.decode === false ? value : (options?.decode || decodeURIComponent)(value);
  } catch {
  }
  const cookie = {
    name,
    value
  };
  for (const part of parts) {
    const sides = part.split("=");
    const partKey = (sides.shift() || "").trimStart().toLowerCase();
    const partValue = sides.join("=");
    switch (partKey) {
      case "expires":
        cookie.expires = new Date(partValue);
        break;
      case "max-age":
        cookie.maxAge = Number.parseInt(partValue, 10);
        break;
      case "secure":
        cookie.secure = true;
        break;
      case "httponly":
        cookie.httpOnly = true;
        break;
      case "samesite":
        cookie.sameSite = partValue;
        break;
      default:
        cookie[partKey] = partValue;
    }
  }
  return cookie;
}
function _parseNameValuePair(nameValuePairStr) {
  let name = "";
  let value = "";
  const nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else value = nameValuePairStr;
  return {
    name,
    value
  };
}
function parseCookies(event) {
  return parse3(event.req.headers.get("cookie") || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, options) {
  const newCookie = serialize2(name, value, {
    path: "/",
    ...options
  });
  const currentCookies = event.res.headers.getSetCookie();
  if (currentCookies.length === 0) {
    event.res.headers.set("set-cookie", newCookie);
    return;
  }
  const newCookieKey = _getDistinctCookieKey(name, options || {});
  event.res.headers.delete("set-cookie");
  for (const cookie of currentCookies) {
    if (_getDistinctCookieKey(cookie.split("=")?.[0], parseSetCookie(cookie)) === newCookieKey) continue;
    event.res.headers.append("set-cookie", cookie);
  }
  event.res.headers.append("set-cookie", newCookie);
}
function deleteCookie(event, name, serializeOptions) {
  setCookie(event, name, "", {
    ...serializeOptions,
    maxAge: 0
  });
}
function getChunkedCookie(event, name) {
  const mainCookie = getCookie(event, name);
  if (!mainCookie || !mainCookie.startsWith(CHUNKED_COOKIE)) return mainCookie;
  const chunksCount = getChunkedCookieCount(mainCookie);
  if (chunksCount === 0) return;
  const chunks = [];
  for (let i3 = 1; i3 <= chunksCount; i3++) {
    const chunk2 = getCookie(event, chunkCookieName(name, i3));
    if (!chunk2) return;
    chunks.push(chunk2);
  }
  return chunks.join("");
}
function setChunkedCookie(event, name, value, options) {
  const chunkMaxLength = options?.chunkMaxLength || CHUNKS_MAX_LENGTH;
  const chunkCount = Math.ceil(value.length / chunkMaxLength);
  const previousCookie = getCookie(event, name);
  if (previousCookie?.startsWith(CHUNKED_COOKIE)) {
    const previousChunkCount = getChunkedCookieCount(previousCookie);
    if (previousChunkCount > chunkCount) for (let i3 = chunkCount; i3 <= previousChunkCount; i3++) deleteCookie(event, chunkCookieName(name, i3), options);
  }
  if (chunkCount <= 1) {
    setCookie(event, name, value, options);
    return;
  }
  setCookie(event, name, `${CHUNKED_COOKIE}${chunkCount}`, options);
  for (let i3 = 1; i3 <= chunkCount; i3++) {
    const start = (i3 - 1) * chunkMaxLength;
    const end = start + chunkMaxLength;
    const chunkValue = value.slice(start, end);
    setCookie(event, chunkCookieName(name, i3), chunkValue, options);
  }
}
function deleteChunkedCookie(event, name, serializeOptions) {
  const mainCookie = getCookie(event, name);
  deleteCookie(event, name, serializeOptions);
  const chunksCount = getChunkedCookieCount(mainCookie);
  if (chunksCount >= 0) for (let i3 = 0; i3 < chunksCount; i3++) deleteCookie(event, chunkCookieName(name, i3 + 1), serializeOptions);
}
function _getDistinctCookieKey(name, options) {
  return [
    name,
    options.domain || "",
    options.path || "/"
  ].join(";");
}
function getChunkedCookieCount(cookie) {
  if (!cookie?.startsWith(CHUNKED_COOKIE)) return NaN;
  return Number.parseInt(cookie.slice(11));
}
function chunkCookieName(name, chunkNumber) {
  return `${name}.${chunkNumber}`;
}
function formatEventStreamComment(comment) {
  return `: ${comment}

`;
}
function formatEventStreamMessage(message) {
  let result = "";
  if (message.id) result += `id: ${message.id}
`;
  if (message.event) result += `event: ${message.event}
`;
  if (typeof message.retry === "number" && Number.isInteger(message.retry)) result += `retry: ${message.retry}
`;
  result += `data: ${message.data}

`;
  return result;
}
function formatEventStreamMessages(messages) {
  let result = "";
  for (const msg of messages) result += formatEventStreamMessage(msg);
  return result;
}
function setEventStreamHeaders(event) {
  event.res.headers.set("content-type", "text/event-stream");
  event.res.headers.set("cache-control", "private, no-cache, no-store, no-transform, must-revalidate, max-age=0");
  event.res.headers.set("x-accel-buffering", "no");
  if (event.req.headers.get("connection") === "keep-alive") event.res.headers.set("connection", "keep-alive");
}
function createEventStream(event, opts) {
  return new EventStream(event, opts);
}
function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.req.headers.get("if-modified-since");
    event.res.headers.set("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= modifiedTime) cacheMatched = true;
  }
  if (opts.etag) {
    event.res.headers.set("etag", opts.etag);
    if (event.req.headers.get("if-none-match") === opts.etag) cacheMatched = true;
  }
  event.res.headers.set("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.res.status = 304;
    return true;
  }
  return false;
}
function withLeadingSlash(path) {
  if (!path || path === "/") return "/";
  return path[0] === "/" ? path : `/${path}`;
}
function withoutTrailingSlash(path) {
  if (!path || path === "/") return "/";
  return path[path.length - 1] === "/" ? path.slice(0, -1) : path;
}
function withoutBase(input = "", base = "") {
  if (!base || base === "/") return input;
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) return input;
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function getExtension(path) {
  const filename = path.split("/").pop();
  if (!filename) return;
  const separatorIndex = filename.lastIndexOf(".");
  if (separatorIndex !== -1) return filename.slice(separatorIndex);
}
function getType(ext) {
  return ext ? COMMON_MIME_TYPES[ext] : void 0;
}
async function serveStatic(event, options) {
  if (options.headers) {
    const entries = Array.isArray(options.headers) ? options.headers : typeof options.headers.entries === "function" ? options.headers.entries() : Object.entries(options.headers);
    for (const [key, value] of entries) event.res.headers.set(key, value);
  }
  if (event.req.method !== "GET" && event.req.method !== "HEAD") {
    if (options.fallthrough) return;
    event.res.headers.set("allow", "GET, HEAD");
    throw new HTTPError({ status: 405 });
  }
  const originalId = decodeURI(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  const acceptEncodings = parseAcceptEncoding(event.req.headers.get("accept-encoding") || "", options.encodings);
  if (acceptEncodings.length > 1) event.res.headers.set("vary", "accept-encoding");
  let id = originalId;
  let meta;
  const _ids = idSearchPaths(originalId, acceptEncodings, options.indexNames || ["/index.html"]);
  for (const _id of _ids) {
    const _meta = await options.getMeta(_id);
    if (_meta) {
      meta = _meta;
      id = _id;
      break;
    }
  }
  if (!meta) {
    if (options.fallthrough) return;
    throw new HTTPError({ statusCode: 404 });
  }
  if (meta.mtime) {
    const mtimeDate = new Date(meta.mtime);
    const ifModifiedSinceH = event.req.headers.get("if-modified-since");
    if (ifModifiedSinceH && new Date(ifModifiedSinceH) >= mtimeDate) return new HTTPResponse(null, {
      status: 304,
      statusText: "Not Modified"
    });
    if (!event.res.headers.get("last-modified")) event.res.headers.set("last-modified", mtimeDate.toUTCString());
  }
  if (meta.etag && !event.res.headers.has("etag")) event.res.headers.set("etag", meta.etag);
  if (meta.etag && event.req.headers.get("if-none-match") === meta.etag) return new HTTPResponse(null, {
    status: 304,
    statusText: "Not Modified"
  });
  if (!event.res.headers.get("content-type")) if (meta.type) event.res.headers.set("content-type", meta.type);
  else {
    const ext = getExtension(id);
    const type = ext ? options.getType?.(ext) ?? getType(ext) : void 0;
    if (type) event.res.headers.set("content-type", type);
  }
  if (meta.encoding && !event.res.headers.get("content-encoding")) event.res.headers.set("content-encoding", meta.encoding);
  if (meta.size !== void 0 && meta.size > 0 && !event.req.headers.get("content-length")) event.res.headers.set("content-length", meta.size + "");
  if (event.req.method === "HEAD") return new HTTPResponse(null, { status: 200 });
  return new HTTPResponse(await options.getContents(id) || null, { status: 200 });
}
function parseAcceptEncoding(header, encodingMap) {
  if (!encodingMap || !header) return [];
  return String(header || "").split(",").map((e) => encodingMap[e.trim()]).filter(Boolean);
}
function idSearchPaths(id, encodings, indexNames) {
  const ids = [];
  for (const suffix of ["", ...indexNames]) for (const encoding of [...encodings, ""]) ids.push(`${id}${suffix}${encoding}`);
  return ids;
}
function withBase(base, input) {
  base = withoutTrailingSlash(base);
  const handler = toEventHandler(input);
  if (!handler) throw new Error("Invalid handler", { cause: input });
  return async function _handlerWithBase(event) {
    const _pathBefore = event.url.pathname || "/";
    event.url.pathname = withoutBase(event.url.pathname || "/", base);
    try {
      return await handler(event);
    } finally {
      event.url.pathname = _pathBefore;
    }
  };
}
async function seal(object, password, opts) {
  const now = Date.now() + (opts.localtimeOffsetMsec || 0);
  if (!password) throw new Error("Empty password");
  const { id = "", encryption, integrity } = normalizePassword(password);
  if (id && !/^\w+$/.test(id)) throw new Error("Invalid password id");
  const { encrypted, key } = await encrypt(encryption, opts.encryption, JSON.stringify(object));
  const encryptedB64 = base64Encode(encrypted);
  const iv = base64Encode(key.iv);
  const expiration = opts.ttl ? now + opts.ttl : "";
  const macBaseString = `${macPrefix}*${id}*${key.salt}*${iv}*${encryptedB64}*${expiration}`;
  const mac = await hmacWithPassword(integrity, opts.integrity, macBaseString);
  return `${macBaseString}*${mac.salt}*${mac.digest}`;
}
async function unseal(sealed, password, opts) {
  const now = Date.now() + (opts.localtimeOffsetMsec || 0);
  if (!password) throw new Error("Empty password");
  const parts = sealed.split("*");
  if (parts.length !== 8) throw new Error("Incorrect number of sealed components");
  const [prefix2, passwordId, encryptionSalt, encryptionIv, encryptedB64, expiration, hmacSalt, hmac] = parts;
  const macBaseString = `${prefix2}*${passwordId}*${encryptionSalt}*${encryptionIv}*${encryptedB64}*${expiration}`;
  if (macPrefix !== prefix2) throw new Error("Wrong mac prefix");
  if (expiration) {
    if (!/^\d+$/.test(expiration)) throw new Error("Invalid expiration");
    if (Number.parseInt(expiration, 10) <= now - opts.timestampSkewSec * 1e3) throw new Error("Expired seal");
  }
  let pass = "";
  const _passwordId = passwordId || "default";
  if (typeof password === "string" || password instanceof Uint8Array) pass = password;
  else if (_passwordId in password) pass = password[_passwordId];
  else throw new Error(`Cannot find password: ${_passwordId}`);
  pass = normalizePassword(pass);
  if (!fixedTimeComparison((await hmacWithPassword(pass.integrity, {
    ...opts.integrity,
    salt: hmacSalt
  }, macBaseString)).digest, hmac)) throw new Error("Bad hmac value");
  const encrypted = base64Decode(encryptedB64);
  const decryptOptions = {
    ...opts.encryption,
    salt: encryptionSalt,
    iv: base64Decode(encryptionIv)
  };
  const decrypted = await decrypt(pass.encryption, decryptOptions, encrypted);
  return decrypted ? JSON.parse(decrypted) : null;
}
async function hmacWithPassword(password, options, data) {
  const key = await generateKey(password, {
    ...options,
    hmac: true
  });
  const textBuffer = textEncoder.encode(data);
  const signed = await crypto.subtle.sign({ name: "HMAC" }, key.key, textBuffer);
  return {
    digest: base64Encode(new Uint8Array(signed)),
    salt: key.salt
  };
}
async function generateKey(password, options) {
  if (!password?.length) throw new Error("Empty password");
  if (options == null || typeof options !== "object") throw new Error("Bad options");
  if (!(options.algorithm in algorithms)) throw new Error(`Unknown algorithm: ${options.algorithm}`);
  const algorithm = algorithms[options.algorithm];
  let resultKey;
  let resultSalt;
  let resultIV;
  const hmac = options.hmac ?? false;
  const id = hmac ? {
    name: "HMAC",
    hash: algorithm.name
  } : { name: algorithm.name };
  const usage = hmac ? ["sign", "verify"] : ["encrypt", "decrypt"];
  if (typeof password === "string") {
    if (password.length < options.minPasswordlength) throw new Error(`Password string too short (min ${options.minPasswordlength} characters required)`);
    let { salt = "" } = options;
    if (!salt) {
      const { saltBits = 0 } = options;
      if (!saltBits) throw new Error("Missing salt and saltBits options");
      const randomSalt = randomBits(saltBits);
      salt = [...new Uint8Array(randomSalt)].map((x4) => x4.toString(16).padStart(2, "0")).join("");
    }
    const derivedKey = await pbkdf2(password, salt, options.iterations, algorithm.keyBits / 8, "SHA-1");
    resultKey = await crypto.subtle.importKey("raw", derivedKey, id, false, usage);
    resultSalt = salt;
  } else {
    if (password.length < algorithm.keyBits / 8) throw new Error("Key buffer (password) too small");
    resultKey = await crypto.subtle.importKey("raw", password, id, false, usage);
    resultSalt = "";
  }
  if (options.iv) resultIV = options.iv;
  else if ("ivBits" in algorithm) resultIV = randomBits(algorithm.ivBits);
  else throw new Error("Missing IV");
  return {
    key: resultKey,
    salt: resultSalt,
    iv: resultIV
  };
}
async function pbkdf2(password, salt, iterations, keyLength, hash) {
  const passwordBuffer = textEncoder.encode(password);
  const importedKey = await crypto.subtle.importKey("raw", passwordBuffer, { name: "PBKDF2" }, false, ["deriveBits"]);
  const params = {
    name: "PBKDF2",
    hash,
    salt: textEncoder.encode(salt),
    iterations
  };
  return await crypto.subtle.deriveBits(params, importedKey, keyLength * 8);
}
async function encrypt(password, options, data) {
  const key = await generateKey(password, options);
  const encrypted = await crypto.subtle.encrypt(...getEncryptParams(options.algorithm, key, data));
  return {
    encrypted: new Uint8Array(encrypted),
    key
  };
}
async function decrypt(password, options, data) {
  const key = await generateKey(password, options);
  const decrypted = await crypto.subtle.decrypt(...getEncryptParams(options.algorithm, key, data));
  return textDecoder.decode(decrypted);
}
function getEncryptParams(algorithm, key, data) {
  return [
    algorithm === "aes-128-ctr" ? {
      name: "AES-CTR",
      counter: key.iv,
      length: 128
    } : {
      name: "AES-CBC",
      iv: key.iv
    },
    key.key,
    typeof data === "string" ? textEncoder.encode(data) : data
  ];
}
function fixedTimeComparison(a2, b2) {
  let mismatch = a2.length === b2.length ? 0 : 1;
  if (mismatch) b2 = a2;
  for (let i3 = 0; i3 < a2.length; i3 += 1) mismatch |= a2.charCodeAt(i3) ^ b2.charCodeAt(i3);
  return mismatch === 0;
}
function normalizePassword(password) {
  if (typeof password === "string" || password instanceof Uint8Array) return {
    encryption: password,
    integrity: password
  };
  if ("secret" in password) return {
    id: password.id,
    encryption: password.secret,
    integrity: password.secret
  };
  return {
    id: password.id,
    encryption: password.encryption,
    integrity: password.integrity
  };
}
function randomBits(bits) {
  if (bits < 1) throw new Error("Invalid random bits count");
  return randomBytes(Math.ceil(bits / 8));
}
function randomBytes(size) {
  const bytes = new Uint8Array(size);
  crypto.getRandomValues(bytes);
  return bytes;
}
async function useSession(event, config) {
  const sessionName = config.name || DEFAULT_SESSION_NAME;
  await getSession(event, config);
  const sessionManager = {
    get id() {
      return getEventContext(event)?.sessions?.[sessionName]?.id;
    },
    get data() {
      return getEventContext(event).sessions?.[sessionName]?.data || {};
    },
    update: async (update) => {
      await updateSession(event, config, update);
      return sessionManager;
    },
    clear: () => {
      clearSession(event, config);
      return Promise.resolve(sessionManager);
    }
  };
  return sessionManager;
}
async function getSession(event, config) {
  const sessionName = config.name || DEFAULT_SESSION_NAME;
  const context = getEventContext(event);
  if (!context.sessions) context.sessions = new NullProtoObj2();
  const existingSession = context.sessions[sessionName];
  if (existingSession) return existingSession[kGetSession] || existingSession;
  const session = {
    id: "",
    createdAt: 0,
    data: new NullProtoObj2()
  };
  context.sessions[sessionName] = session;
  let sealedSession;
  if (config.sessionHeader !== false) {
    const headerName = typeof config.sessionHeader === "string" ? config.sessionHeader.toLowerCase() : `x-${sessionName.toLowerCase()}-session`;
    const headerValue = event.req.headers.get(headerName);
    if (typeof headerValue === "string") sealedSession = headerValue;
  }
  if (!sealedSession) sealedSession = getChunkedCookie(event, sessionName);
  if (sealedSession) {
    const promise = unsealSession(event, config, sealedSession).catch(() => {
    }).then((unsealed) => {
      Object.assign(session, unsealed);
      delete context.sessions[sessionName][kGetSession];
      return session;
    });
    context.sessions[sessionName][kGetSession] = promise;
    await promise;
  }
  if (!session.id) {
    session.id = config.generateId?.() ?? (config.crypto || crypto).randomUUID();
    session.createdAt = Date.now();
    await updateSession(event, config);
  }
  return session;
}
async function updateSession(event, config, update) {
  const sessionName = config.name || DEFAULT_SESSION_NAME;
  const session = getEventContext(event).sessions?.[sessionName] || await getSession(event, config);
  if (typeof update === "function") update = update(session.data);
  if (update) Object.assign(session.data, update);
  if (config.cookie !== false && event.res) setChunkedCookie(event, sessionName, await sealSession(event, config), {
    ...DEFAULT_SESSION_COOKIE,
    expires: config.maxAge ? new Date(session.createdAt + config.maxAge * 1e3) : void 0,
    ...config.cookie
  });
  return session;
}
async function sealSession(event, config) {
  const sessionName = config.name || DEFAULT_SESSION_NAME;
  return await seal(getEventContext(event).sessions?.[sessionName] || await getSession(event, config), config.password, {
    ...defaults,
    ttl: config.maxAge ? config.maxAge * 1e3 : 0,
    ...config.seal
  });
}
async function unsealSession(_event, config, sealed) {
  const unsealed = await unseal(sealed, config.password, {
    ...defaults,
    ttl: config.maxAge ? config.maxAge * 1e3 : 0,
    ...config.seal
  });
  if (config.maxAge) {
    if (Date.now() - (unsealed.createdAt || Number.NEGATIVE_INFINITY) > config.maxAge * 1e3) throw new Error("Session expired!");
  }
  return unsealed;
}
function clearSession(event, config) {
  const context = getEventContext(event);
  const sessionName = config.name || DEFAULT_SESSION_NAME;
  if (context.sessions?.[sessionName]) delete context.sessions[sessionName];
  if (event.res && config.cookie !== false) setChunkedCookie(event, sessionName, "", {
    ...DEFAULT_SESSION_COOKIE,
    ...config.cookie
  });
  return Promise.resolve();
}
function resolveCorsOptions(options = {}) {
  const defaultOptions2 = {
    origin: "*",
    methods: "*",
    allowHeaders: "*",
    exposeHeaders: "*",
    credentials: false,
    maxAge: false,
    preflight: { statusCode: 204 }
  };
  return {
    ...defaultOptions2,
    ...options,
    preflight: {
      ...defaultOptions2.preflight,
      ...options.preflight
    }
  };
}
function isCorsOriginAllowed(origin, options) {
  const { origin: originOption } = options;
  if (!origin) return false;
  if (!originOption || originOption === "*") return true;
  if (typeof originOption === "function") return originOption(origin);
  if (Array.isArray(originOption)) return originOption.some((_origin) => {
    if (_origin instanceof RegExp) return _origin.test(origin);
    return origin === _origin;
  });
  return originOption === origin;
}
function createOriginHeaders(event, options) {
  const { origin: originOption } = options;
  const origin = event.req.headers.get("origin");
  if (!originOption || originOption === "*") return { "access-control-allow-origin": "*" };
  if (originOption === "null") return {
    "access-control-allow-origin": "null",
    vary: "origin"
  };
  if (isCorsOriginAllowed(origin, options)) return {
    "access-control-allow-origin": origin,
    vary: "origin"
  };
  return {};
}
function createMethodsHeaders(options) {
  const { methods } = options;
  if (!methods) return {};
  if (methods === "*") return { "access-control-allow-methods": "*" };
  return methods.length > 0 ? { "access-control-allow-methods": methods.join(",") } : {};
}
function createCredentialsHeaders(options) {
  const { credentials } = options;
  if (credentials) return { "access-control-allow-credentials": "true" };
  return {};
}
function createAllowHeaderHeaders(event, options) {
  const { allowHeaders } = options;
  if (!allowHeaders || allowHeaders === "*" || allowHeaders.length === 0) {
    const header = event.req.headers.get("access-control-request-headers");
    return header ? {
      "access-control-allow-headers": header,
      vary: "access-control-request-headers"
    } : {};
  }
  return {
    "access-control-allow-headers": allowHeaders.join(","),
    vary: "access-control-request-headers"
  };
}
function createExposeHeaders(options) {
  const { exposeHeaders } = options;
  if (!exposeHeaders) return {};
  if (exposeHeaders === "*") return { "access-control-expose-headers": exposeHeaders };
  return { "access-control-expose-headers": exposeHeaders.join(",") };
}
function createMaxAgeHeader(options) {
  const { maxAge } = options;
  if (maxAge) return { "access-control-max-age": maxAge };
  return {};
}
function isPreflightRequest(event) {
  const origin = event.req.headers.get("origin");
  const accessControlRequestMethod = event.req.headers.get("access-control-request-method");
  return event.req.method === "OPTIONS" && !!origin && !!accessControlRequestMethod;
}
function appendCorsPreflightHeaders(event, options) {
  const headers = {
    ...createOriginHeaders(event, options),
    ...createCredentialsHeaders(options),
    ...createMethodsHeaders(options),
    ...createAllowHeaderHeaders(event, options),
    ...createMaxAgeHeader(options)
  };
  for (const [key, value] of Object.entries(headers)) event.res.headers.append(key, value);
}
function appendCorsHeaders(event, options) {
  const headers = {
    ...createOriginHeaders(event, options),
    ...createCredentialsHeaders(options),
    ...createExposeHeaders(options)
  };
  for (const [key, value] of Object.entries(headers)) event.res.headers.append(key, value);
}
function handleCors(event, options) {
  const _options = resolveCorsOptions(options);
  if (isPreflightRequest(event)) {
    appendCorsPreflightHeaders(event, _options);
    return noContent(_options.preflight.statusCode);
  }
  appendCorsHeaders(event, _options);
  return false;
}
async function requireBasicAuth(event, opts) {
  if (!opts.validate && !opts.password) throw new Error("You must provide either a validate function or a password for basic auth.");
  const authHeader = event.req.headers.get("authorization");
  if (!authHeader) throw autheFailed(event);
  const [authType, b64auth] = authHeader.split(" ");
  if (authType !== "Basic" || !b64auth) throw autheFailed(event, opts?.realm);
  const [username, password] = atob(b64auth).split(":");
  if (!username || !password) throw autheFailed(event, opts?.realm);
  if (opts.username && username !== opts.username) throw autheFailed(event, opts?.realm);
  if (opts.password && password !== opts.password) throw autheFailed(event, opts?.realm);
  if (opts.validate && !await opts.validate(username, password)) throw autheFailed(event, opts?.realm);
  const context = getEventContext(event);
  context.basicAuth = {
    username,
    password,
    realm: opts.realm
  };
  return true;
}
function basicAuth(opts) {
  return async (event, next) => {
    await requireBasicAuth(event, opts);
    return next();
  };
}
function autheFailed(event, realm = "") {
  return new HTTPError({
    status: 401,
    statusText: "Authentication required",
    headers: { "www-authenticate": `Basic realm=${JSON.stringify(realm)}` }
  });
}
async function getRequestFingerprint(event, opts = {}) {
  const fingerprint = [];
  if (opts.ip !== false) fingerprint.push(getRequestIP(event, { xForwardedFor: opts.xForwardedFor }));
  if (opts.method === true) fingerprint.push(event.req.method);
  if (opts.url === true) fingerprint.push(event.req.url);
  if (opts.userAgent === true) fingerprint.push(event.req.headers.get("user-agent"));
  const fingerprintString = fingerprint.filter(Boolean).join("|");
  if (!fingerprintString) return null;
  if (opts.hash === false) return fingerprintString;
  const buffer = await crypto.subtle.digest(opts.hash || "SHA-1", new TextEncoder().encode(fingerprintString));
  return [...new Uint8Array(buffer)].map((b2) => b2.toString(16).padStart(2, "0")).join("");
}
function defineWebSocket(hooks) {
  return hooks;
}
function defineWebSocketHandler(hooks) {
  return defineHandler(function _webSocketHandler(event) {
    const crossws = typeof hooks === "function" ? hooks(event) : hooks;
    return Object.assign(new Response("WebSocket upgrade is required.", { status: 426 }), { crossws });
  });
}
function createError2(arg1, arg2) {
  return new HTTPError(arg1, arg2);
}
function isError(input) {
  return HTTPError.isError(input);
}
function getRequestHeader(event, name) {
  return event.req.headers.get(name) || void 0;
}
function getRequestHeaders(event) {
  return Object.fromEntries(event.req.headers.entries());
}
function getMethod(event, defaultMethod = "GET") {
  return (event.req.method || defaultMethod).toUpperCase();
}
function readRawBody(event, encoding = "utf8") {
  return encoding ? event.req.text() : event.req.arrayBuffer().then((r) => new Uint8Array(r));
}
async function readFormDataBody(event) {
  return event.req.formData();
}
async function readMultipartFormData(event) {
  const formData = await event.req.formData();
  return Promise.all([...formData.entries()].map(async ([key, value]) => {
    return value instanceof Blob ? {
      name: key,
      type: value.type,
      filename: value.name,
      data: await value.bytes()
    } : {
      name: key,
      data: new TextEncoder().encode(value)
    };
  }));
}
function getBodyStream(event) {
  return event.req.body || void 0;
}
function sendStream(_event, value) {
  return value;
}
function getResponseStatusText(event) {
  return event.res.statusText || "";
}
function appendResponseHeader(event, name, value) {
  if (Array.isArray(value)) for (const valueItem of value) event.res.headers.append(name, valueItem);
  else event.res.headers.append(name, value);
}
function setResponseHeader(event, name, value) {
  if (Array.isArray(value)) {
    event.res.headers.delete(name);
    for (const valueItem of value) event.res.headers.append(name, valueItem);
  } else event.res.headers.set(name, value);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) event.res.headers.set(name, value);
}
function getResponseStatus(event) {
  return event.res.status || 200;
}
function setResponseStatus(event, code, text) {
  if (code) event.res.status = sanitizeStatusCode(code, event.res.status);
  if (text) event.res.statusText = sanitizeStatusMessage(text);
}
function defaultContentType(event, type) {
  if (type && event.res.status !== 304 && !event.res.headers.has("content-type")) event.res.headers.set("content-type", type);
}
function getResponseHeaders(event) {
  return Object.fromEntries(event.res.headers.entries());
}
function getResponseHeader(event, name) {
  return event.res.headers.get(name) || void 0;
}
function removeResponseHeader(event, name) {
  return event.res.headers.delete(name);
}
function appendResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) appendResponseHeader(event, name, value);
}
function clearResponseHeaders(event, headerNames) {
  if (headerNames && headerNames.length > 0) for (const name of headerNames) event.res.headers.delete(name);
  else for (const name of event.res.headers.keys()) event.res.headers.delete(name);
}
function toNodeHandler2(app2) {
  if (toNodeHandler2._isWarned !== true) {
    console.warn(`[h3] "toNodeHandler" export from h3 is deprecated. Please import "toNodeHandler" from "h3/node".`);
    toNodeHandler2._isWarned = true;
  }
  return (toNodeHandler2._toNodeHandler ??= () => {
    return globalThis.process.getBuiltinModule("node:module").createRequire(import.meta.url)("srvx/node").toNodeHandler;
  })()(app2.fetch);
}
var kEventNS, kEventRes, kEventResHeaders, H3Event, H3EventResponse, DISALLOWED_STATUS_CHARS, HTTPError, kNotFound, kHandled, HTTPResponse, frozenHeaders, FrozenHeaders, emptyHeaders, jsonHeaders, plusRegex, reqBodyKeys, NoHandler, H3Core, H3, textEncoder, textDecoder, base64Code, PayloadMethods, ignoredHeaders, fieldContentRegExp, CHUNKED_COOKIE, CHUNKS_MAX_LENGTH, EventStream, COMMON_MIME_TYPES, defaults, algorithms, macPrefix, kGetSession, DEFAULT_SESSION_NAME, DEFAULT_SESSION_COOKIE, H3Error, getRequestPath, getHeader, getHeaders, readFormData, getRequestWebStream, sendNoContent, sendRedirect, sendWebResponse, sendProxy, sendIterable, appendHeader, setHeader, setHeaders2, appendHeaders, defineEventHandler, eventHandler, lazyEventHandler, defineNodeListener, fromNodeMiddleware, toNodeListener, createApp, createRouter$1, useBase;
var init_h3 = __esm({
  "node_modules/h3/dist/h3.mjs"() {
    init_dist5();
    init_node();
    kEventNS = "h3.internal.event.";
    kEventRes = /* @__PURE__ */ Symbol.for(`${kEventNS}res`);
    kEventResHeaders = /* @__PURE__ */ Symbol.for(`${kEventNS}res.headers`);
    H3Event = class {
      app;
      req;
      url;
      context;
      static __is_event__ = true;
      constructor(req, context, app2) {
        this.context = context || req.context || new NullProtoObj2();
        this.req = req;
        this.app = app2;
        const _url = req._url;
        this.url = _url && _url instanceof URL ? _url : new FastURL(req.url);
      }
      get res() {
        return this[kEventRes] ||= new H3EventResponse();
      }
      get runtime() {
        return this.req.runtime;
      }
      waitUntil(promise) {
        this.req.waitUntil?.(promise);
      }
      toString() {
        return `[${this.req.method}] ${this.req.url}`;
      }
      toJSON() {
        return this.toString();
      }
      get node() {
        return this.req.runtime?.node;
      }
      get headers() {
        return this.req.headers;
      }
      get path() {
        return this.url.pathname + this.url.search;
      }
      get method() {
        return this.req.method;
      }
    };
    H3EventResponse = class {
      status;
      statusText;
      get headers() {
        return this[kEventResHeaders] ||= new Headers();
      }
    };
    DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
    HTTPError = class HTTPError2 extends Error {
      get name() {
        return "HTTPError";
      }
      status;
      statusText;
      headers;
      cause;
      data;
      body;
      unhandled;
      static isError(input) {
        return input instanceof Error && input?.name === "HTTPError";
      }
      static status(status2, statusText, details) {
        return new HTTPError2({
          ...details,
          statusText,
          status: status2
        });
      }
      constructor(arg1, arg2) {
        let messageInput;
        let details;
        if (typeof arg1 === "string") {
          messageInput = arg1;
          details = arg2;
        } else details = arg1;
        const status2 = sanitizeStatusCode(details?.status || details?.cause?.status || details?.status || details?.statusCode, 500);
        const statusText = sanitizeStatusMessage(details?.statusText || details?.cause?.statusText || details?.statusText || details?.statusMessage);
        const message = messageInput || details?.message || details?.cause?.message || details?.statusText || details?.statusMessage || [
          "HTTPError",
          status2,
          statusText
        ].filter(Boolean).join(" ");
        super(message, { cause: details });
        this.cause = details;
        Error.captureStackTrace?.(this, this.constructor);
        this.status = status2;
        this.statusText = statusText || void 0;
        const rawHeaders = details?.headers || details?.cause?.headers;
        this.headers = rawHeaders ? new Headers(rawHeaders) : void 0;
        this.unhandled = details?.unhandled ?? details?.cause?.unhandled ?? void 0;
        this.data = details?.data;
        this.body = details?.body;
      }
      get statusCode() {
        return this.status;
      }
      get statusMessage() {
        return this.statusText;
      }
      toJSON() {
        const unhandled = this.unhandled;
        return {
          status: this.status,
          statusText: this.statusText,
          unhandled,
          message: unhandled ? "HTTPError" : this.message,
          data: unhandled ? void 0 : this.data,
          ...unhandled ? void 0 : this.body
        };
      }
    };
    kNotFound = /* @__PURE__ */ Symbol.for("h3.notFound");
    kHandled = /* @__PURE__ */ Symbol.for("h3.handled");
    HTTPResponse = class {
      #headers;
      #init;
      body;
      constructor(body, init) {
        this.body = body;
        this.#init = init;
      }
      get status() {
        return this.#init?.status || 200;
      }
      get statusText() {
        return this.#init?.statusText || "OK";
      }
      get headers() {
        return this.#headers ||= new Headers(this.#init?.headers);
      }
    };
    frozenHeaders = () => {
      throw new Error("Headers are frozen");
    };
    FrozenHeaders = class extends Headers {
      constructor(init) {
        super(init);
        this.set = this.append = this.delete = frozenHeaders;
      }
    };
    emptyHeaders = /* @__PURE__ */ new FrozenHeaders({ "content-length": "0" });
    jsonHeaders = /* @__PURE__ */ new FrozenHeaders({ "content-type": "application/json;charset=UTF-8" });
    plusRegex = /\+/g;
    reqBodyKeys = /* @__PURE__ */ new Set([
      "body",
      "text",
      "formData",
      "arrayBuffer"
    ]);
    NoHandler = () => kNotFound;
    H3Core = class {
      config;
      "~middleware";
      "~routes" = [];
      constructor(config = {}) {
        this["~middleware"] = [];
        this.config = config;
        this.fetch = this.fetch.bind(this);
        this.handler = this.handler.bind(this);
      }
      fetch(request) {
        return this["~request"](request);
      }
      handler(event) {
        const route2 = this["~findRoute"](event);
        if (route2) {
          event.context.params = route2.params;
          event.context.matchedRoute = route2.data;
        }
        const routeHandler = route2?.data.handler || NoHandler;
        const middleware = this["~getMiddleware"](event, route2);
        return middleware.length > 0 ? callMiddleware2(event, middleware, routeHandler) : routeHandler(event);
      }
      "~request"(request, context) {
        const event = new H3Event(request, context, this);
        let handlerRes;
        try {
          if (this.config.onRequest) {
            const hookRes = this.config.onRequest(event);
            handlerRes = typeof hookRes?.then === "function" ? hookRes.then(() => this.handler(event)) : this.handler(event);
          } else handlerRes = this.handler(event);
        } catch (error) {
          handlerRes = Promise.reject(error);
        }
        return toResponse(handlerRes, event, this.config);
      }
      "~findRoute"(_event) {
      }
      "~addRoute"(_route) {
        this["~routes"].push(_route);
      }
      "~getMiddleware"(_event, route2) {
        const routeMiddleware = route2?.data.middleware;
        const globalMiddleware = this["~middleware"];
        return routeMiddleware ? [...globalMiddleware, ...routeMiddleware] : globalMiddleware;
      }
    };
    H3 = /* @__PURE__ */ (() => {
      class H3$1 extends H3Core {
        "~rou3";
        constructor(config = {}) {
          super(config);
          this["~rou3"] = createRouter2();
          this.request = this.request.bind(this);
          config.plugins?.forEach((plugin) => plugin(this));
        }
        register(plugin) {
          plugin(this);
          return this;
        }
        request(_req, _init, context) {
          return this["~request"](toRequest(_req, _init), context);
        }
        mount(base, input) {
          if ("handler" in input) {
            if (input["~middleware"].length > 0) this["~middleware"].push((event, next) => {
              const originalPathname = event.url.pathname;
              if (!originalPathname.startsWith(base)) return next();
              event.url.pathname = event.url.pathname.slice(base.length) || "/";
              return callMiddleware2(event, input["~middleware"], () => {
                event.url.pathname = originalPathname;
                return next();
              });
            });
            for (const r of input["~routes"]) this["~addRoute"]({
              ...r,
              route: base + r.route
            });
          } else {
            const fetchHandler = "fetch" in input ? input.fetch : input;
            this.all(`${base}/**`, function _mountedMiddleware(event) {
              const url5 = new URL(event.url);
              url5.pathname = url5.pathname.slice(base.length) || "/";
              return fetchHandler(new Request(url5, event.req));
            });
          }
          return this;
        }
        on(method, route2, handler, opts) {
          const _method = (method || "").toUpperCase();
          route2 = new URL(route2, "http://_").pathname;
          this["~addRoute"]({
            method: _method,
            route: route2,
            handler: toEventHandler(handler),
            middleware: opts?.middleware,
            meta: {
              ...handler.meta,
              ...opts?.meta
            }
          });
          return this;
        }
        all(route2, handler, opts) {
          return this.on("", route2, handler, opts);
        }
        "~findRoute"(_event) {
          return findRoute2(this["~rou3"], _event.req.method, _event.url.pathname);
        }
        "~addRoute"(_route) {
          addRoute2(this["~rou3"], _route.method, _route.route, _route);
          super["~addRoute"](_route);
        }
        use(arg1, arg2, arg3) {
          let route2;
          let fn;
          let opts;
          if (typeof arg1 === "string") {
            route2 = arg1;
            fn = arg2;
            opts = arg3;
          } else {
            fn = arg1;
            opts = arg2;
          }
          this["~middleware"].push(normalizeMiddleware(fn, {
            ...opts,
            route: route2
          }));
          return this;
        }
      }
      for (const method of [
        "GET",
        "POST",
        "PUT",
        "DELETE",
        "PATCH",
        "HEAD",
        "OPTIONS",
        "CONNECT",
        "TRACE"
      ]) H3Core.prototype[method.toLowerCase()] = function(route2, handler, opts) {
        return this.on(method, route2, handler, opts);
      };
      return H3$1;
    })();
    textEncoder = /* @__PURE__ */ new TextEncoder();
    textDecoder = /* @__PURE__ */ new TextDecoder();
    base64Code = [
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      45,
      95
    ];
    PayloadMethods = /* @__PURE__ */ new Set([
      "PATCH",
      "POST",
      "PUT",
      "DELETE"
    ]);
    ignoredHeaders = /* @__PURE__ */ new Set([
      "transfer-encoding",
      "connection",
      "keep-alive",
      "upgrade",
      "expect",
      "host",
      "accept"
    ]);
    fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
    CHUNKED_COOKIE = "__chunked__";
    CHUNKS_MAX_LENGTH = 4e3;
    EventStream = class {
      _event;
      _transformStream = new TransformStream();
      _writer;
      _encoder = new TextEncoder();
      _writerIsClosed = false;
      _paused = false;
      _unsentData;
      _disposed = false;
      _handled = false;
      constructor(event, opts = {}) {
        this._event = event;
        this._writer = this._transformStream.writable.getWriter();
        this._writer.closed.then(() => {
          this._writerIsClosed = true;
        });
        if (opts.autoclose !== false) this._event.runtime?.node?.res?.once("close", () => this.close());
      }
      async push(message) {
        if (typeof message === "string") {
          await this._sendEvent({ data: message });
          return;
        }
        if (Array.isArray(message)) {
          if (message.length === 0) return;
          if (typeof message[0] === "string") {
            const msgs = [];
            for (const item of message) msgs.push({ data: item });
            await this._sendEvents(msgs);
            return;
          }
          await this._sendEvents(message);
          return;
        }
        await this._sendEvent(message);
      }
      async pushComment(comment) {
        if (this._writerIsClosed) return;
        if (this._paused && !this._unsentData) {
          this._unsentData = formatEventStreamComment(comment);
          return;
        }
        if (this._paused) {
          this._unsentData += formatEventStreamComment(comment);
          return;
        }
        await this._writer.write(this._encoder.encode(formatEventStreamComment(comment))).catch();
      }
      async _sendEvent(message) {
        if (this._writerIsClosed) return;
        if (this._paused && !this._unsentData) {
          this._unsentData = formatEventStreamMessage(message);
          return;
        }
        if (this._paused) {
          this._unsentData += formatEventStreamMessage(message);
          return;
        }
        await this._writer.write(this._encoder.encode(formatEventStreamMessage(message))).catch();
      }
      async _sendEvents(messages) {
        if (this._writerIsClosed) return;
        const payload = formatEventStreamMessages(messages);
        if (this._paused && !this._unsentData) {
          this._unsentData = payload;
          return;
        }
        if (this._paused) {
          this._unsentData += payload;
          return;
        }
        await this._writer.write(this._encoder.encode(payload)).catch();
      }
      pause() {
        this._paused = true;
      }
      get isPaused() {
        return this._paused;
      }
      async resume() {
        this._paused = false;
        await this.flush();
      }
      async flush() {
        if (this._writerIsClosed) return;
        if (this._unsentData?.length) {
          await this._writer.write(this._encoder.encode(this._unsentData));
          this._unsentData = void 0;
        }
      }
      async close() {
        if (this._disposed) return;
        if (!this._writerIsClosed) try {
          await this._writer.close();
        } catch {
        }
        this._disposed = true;
      }
      onClosed(cb) {
        this._writer.closed.then(cb);
      }
      async send() {
        setEventStreamHeaders(this._event);
        this._event.res.status = 200;
        this._handled = true;
        return this._transformStream.readable;
      }
    };
    COMMON_MIME_TYPES = {
      ".html": "text/html",
      ".htm": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
      ".json": "application/json",
      ".txt": "text/plain",
      ".xml": "application/xml",
      ".gif": "image/gif",
      ".ico": "image/vnd.microsoft.icon",
      ".jpeg": "image/jpeg",
      ".jpg": "image/jpeg",
      ".png": "image/png",
      ".svg": "image/svg+xml",
      ".webp": "image/webp",
      ".woff": "font/woff",
      ".woff2": "font/woff2",
      ".mp4": "video/mp4",
      ".webm": "video/webm",
      ".zip": "application/zip",
      ".pdf": "application/pdf"
    };
    defaults = /* @__PURE__ */ Object.freeze({
      ttl: 0,
      timestampSkewSec: 60,
      localtimeOffsetMsec: 0,
      encryption: /* @__PURE__ */ Object.freeze({
        saltBits: 256,
        algorithm: "aes-256-cbc",
        iterations: 1,
        minPasswordlength: 32
      }),
      integrity: /* @__PURE__ */ Object.freeze({
        saltBits: 256,
        algorithm: "sha256",
        iterations: 1,
        minPasswordlength: 32
      })
    });
    algorithms = /* @__PURE__ */ Object.freeze({
      "aes-128-ctr": /* @__PURE__ */ Object.freeze({
        keyBits: 128,
        ivBits: 128,
        name: "AES-CTR"
      }),
      "aes-256-cbc": /* @__PURE__ */ Object.freeze({
        keyBits: 256,
        ivBits: 128,
        name: "AES-CBC"
      }),
      sha256: /* @__PURE__ */ Object.freeze({
        keyBits: 256,
        ivBits: 128,
        name: "SHA-256"
      })
    });
    macPrefix = "Fe26.2";
    kGetSession = /* @__PURE__ */ Symbol.for("h3.internal.session.promise");
    DEFAULT_SESSION_NAME = "h3";
    DEFAULT_SESSION_COOKIE = {
      path: "/",
      secure: true,
      httpOnly: true
    };
    H3Error = HTTPError;
    getRequestPath = (event) => event.path;
    getHeader = getRequestHeader;
    getHeaders = getRequestHeaders;
    readFormData = readFormDataBody;
    getRequestWebStream = getBodyStream;
    sendNoContent = (_4, code) => noContent(code);
    sendRedirect = (_4, loc, code) => redirect(loc, code);
    sendWebResponse = (response) => response;
    sendProxy = proxy;
    sendIterable = (_event, val, options) => {
      return iterable(val, options);
    };
    appendHeader = appendResponseHeader;
    setHeader = setResponseHeader;
    setHeaders2 = setResponseHeaders;
    appendHeaders = appendResponseHeaders;
    defineEventHandler = defineHandler;
    eventHandler = defineHandler;
    lazyEventHandler = defineLazyEventHandler;
    defineNodeListener = defineNodeHandler;
    fromNodeMiddleware = fromNodeHandler;
    toNodeListener = toNodeHandler2;
    createApp = (config) => new H3(config);
    createRouter$1 = (config) => new H3(config);
    useBase = withBase;
  }
});

// node_modules/h3/dist/_entries/node.mjs
var node_exports = {};
__export(node_exports, {
  H3: () => H3,
  H3Core: () => H3Core,
  H3Error: () => H3Error,
  H3Event: () => H3Event,
  HTTPError: () => HTTPError,
  HTTPResponse: () => HTTPResponse,
  appendCorsHeaders: () => appendCorsHeaders,
  appendCorsPreflightHeaders: () => appendCorsPreflightHeaders,
  appendHeader: () => appendHeader,
  appendHeaders: () => appendHeaders,
  appendResponseHeader: () => appendResponseHeader,
  appendResponseHeaders: () => appendResponseHeaders,
  assertBodySize: () => assertBodySize,
  assertMethod: () => assertMethod,
  basicAuth: () => basicAuth,
  bodyLimit: () => bodyLimit,
  callMiddleware: () => callMiddleware2,
  clearResponseHeaders: () => clearResponseHeaders,
  clearSession: () => clearSession,
  createApp: () => createApp,
  createError: () => createError2,
  createEventStream: () => createEventStream,
  createRouter: () => createRouter$1,
  defaultContentType: () => defaultContentType,
  defineEventHandler: () => defineEventHandler,
  defineHandler: () => defineHandler,
  defineLazyEventHandler: () => defineLazyEventHandler,
  defineMiddleware: () => defineMiddleware,
  defineNodeHandler: () => defineNodeHandler,
  defineNodeListener: () => defineNodeListener,
  defineNodeMiddleware: () => defineNodeMiddleware,
  definePlugin: () => definePlugin,
  defineRoute: () => defineRoute,
  defineValidatedHandler: () => defineValidatedHandler,
  defineWebSocket: () => defineWebSocket,
  defineWebSocketHandler: () => defineWebSocketHandler,
  deleteChunkedCookie: () => deleteChunkedCookie,
  deleteCookie: () => deleteCookie,
  dynamicEventHandler: () => dynamicEventHandler,
  eventHandler: () => eventHandler,
  fetchWithEvent: () => fetchWithEvent,
  fromNodeHandler: () => fromNodeHandler,
  fromNodeMiddleware: () => fromNodeMiddleware,
  fromWebHandler: () => fromWebHandler,
  getBodyStream: () => getBodyStream,
  getChunkedCookie: () => getChunkedCookie,
  getCookie: () => getCookie,
  getEventContext: () => getEventContext,
  getHeader: () => getHeader,
  getHeaders: () => getHeaders,
  getMethod: () => getMethod,
  getProxyRequestHeaders: () => getProxyRequestHeaders,
  getQuery: () => getQuery,
  getRequestFingerprint: () => getRequestFingerprint,
  getRequestHeader: () => getRequestHeader,
  getRequestHeaders: () => getRequestHeaders,
  getRequestHost: () => getRequestHost,
  getRequestIP: () => getRequestIP,
  getRequestPath: () => getRequestPath,
  getRequestProtocol: () => getRequestProtocol,
  getRequestURL: () => getRequestURL,
  getRequestWebStream: () => getRequestWebStream,
  getResponseHeader: () => getResponseHeader,
  getResponseHeaders: () => getResponseHeaders,
  getResponseStatus: () => getResponseStatus,
  getResponseStatusText: () => getResponseStatusText,
  getRouterParam: () => getRouterParam,
  getRouterParams: () => getRouterParams,
  getSession: () => getSession,
  getValidatedQuery: () => getValidatedQuery,
  getValidatedRouterParams: () => getValidatedRouterParams,
  handleCacheHeaders: () => handleCacheHeaders,
  handleCors: () => handleCors,
  html: () => html,
  isCorsOriginAllowed: () => isCorsOriginAllowed,
  isError: () => isError,
  isEvent: () => isEvent,
  isHTTPEvent: () => isHTTPEvent,
  isMethod: () => isMethod,
  isPreflightRequest: () => isPreflightRequest,
  iterable: () => iterable,
  lazyEventHandler: () => lazyEventHandler,
  mockEvent: () => mockEvent,
  noContent: () => noContent,
  onError: () => onError,
  onRequest: () => onRequest,
  onResponse: () => onResponse,
  parseCookies: () => parseCookies,
  proxy: () => proxy,
  proxyRequest: () => proxyRequest,
  readBody: () => readBody2,
  readFormData: () => readFormData,
  readFormDataBody: () => readFormDataBody,
  readMultipartFormData: () => readMultipartFormData,
  readRawBody: () => readRawBody,
  readValidatedBody: () => readValidatedBody,
  redirect: () => redirect,
  removeResponseHeader: () => removeResponseHeader,
  requireBasicAuth: () => requireBasicAuth,
  sanitizeStatusCode: () => sanitizeStatusCode,
  sanitizeStatusMessage: () => sanitizeStatusMessage,
  sealSession: () => sealSession,
  sendIterable: () => sendIterable,
  sendNoContent: () => sendNoContent,
  sendProxy: () => sendProxy,
  sendRedirect: () => sendRedirect,
  sendStream: () => sendStream,
  sendWebResponse: () => sendWebResponse,
  serve: () => serve2,
  serveStatic: () => serveStatic,
  setChunkedCookie: () => setChunkedCookie,
  setCookie: () => setCookie,
  setHeader: () => setHeader,
  setHeaders: () => setHeaders2,
  setResponseHeader: () => setResponseHeader,
  setResponseHeaders: () => setResponseHeaders,
  setResponseStatus: () => setResponseStatus,
  toEventHandler: () => toEventHandler,
  toMiddleware: () => toMiddleware,
  toNodeHandler: () => toNodeHandler3,
  toNodeListener: () => toNodeListener,
  toRequest: () => toRequest,
  toResponse: () => toResponse,
  toWebHandler: () => toWebHandler,
  unsealSession: () => unsealSession,
  updateSession: () => updateSession,
  useBase: () => useBase,
  useSession: () => useSession,
  withBase: () => withBase,
  writeEarlyHints: () => writeEarlyHints
});
function serve2(app2, options) {
  freezeApp(app2);
  return serve({
    fetch: app2.fetch,
    ...options
  });
}
function toNodeHandler3(app2) {
  return toNodeHandler(app2.fetch);
}
var init_node2 = __esm({
  "node_modules/h3/dist/_entries/node.mjs"() {
    init_h3();
    init_node();
  }
});

// node_modules/@universal-middleware/compress/dist/stream-X3AXMVWI.js
var stream_X3AXMVWI_exports = {};
__export(stream_X3AXMVWI_exports, {
  compressStream: () => compressStream
});
import { constants, createDeflateRaw, createDeflate, createGzip, createBrotliCompress } from "node:zlib";
function compressStream(input, algorithm, options) {
  if (input === null) {
    return input;
  }
  const compressionStream = algorithms2[algorithm]({
    ...defaultOptions[algorithm],
    ...options
  });
  let reader = null;
  let cancelled = false;
  return new ReadableStream({
    async start(controller) {
      reader = input.getReader();
      compressionStream.on("data", (chunk2) => {
        if (!cancelled) {
          controller.enqueue(new Uint8Array(chunk2));
        }
      });
      compressionStream.on("end", () => {
        if (!cancelled) {
          controller.close();
        }
      });
      compressionStream.on("error", (err2) => {
        if (!cancelled) {
          controller.error(err2);
        }
      });
      try {
        while (!cancelled) {
          const { done, value } = await reader.read();
          if (done) {
            compressionStream.end();
            break;
          }
          compressionStream.write(value);
        }
      } catch (err2) {
        if (!cancelled) {
          controller.error(err2);
        }
      }
    },
    cancel() {
      cancelled = true;
      if (reader) {
        reader.releaseLock();
        reader = null;
      }
      compressionStream.destroy();
    }
  });
}
var algorithms2, defaultOptions;
var init_stream_X3AXMVWI = __esm({
  "node_modules/@universal-middleware/compress/dist/stream-X3AXMVWI.js"() {
    algorithms2 = {
      br: createBrotliCompress,
      gzip: createGzip,
      deflate: createDeflate,
      "deflate-raw": createDeflateRaw
    };
    defaultOptions = {
      br: { flush: constants.BROTLI_OPERATION_FLUSH, params: { [constants.BROTLI_PARAM_QUALITY]: 4 } },
      gzip: { flush: constants.Z_SYNC_FLUSH },
      deflate: { flush: constants.Z_SYNC_FLUSH },
      "deflate-raw": { flush: constants.Z_SYNC_FLUSH }
    };
  }
});

// node_modules/@universal-middleware/compress/dist/stream-UQO5ERVU.js
var stream_UQO5ERVU_exports = {};
__export(stream_UQO5ERVU_exports, {
  compressStream: () => compressStream2
});
function compressStream2(input, algorithm) {
  if (input === null) {
    return input;
  }
  let compressor;
  let cancelled = false;
  switch (algorithm) {
    case "gzip":
      compressor = new Gzip();
      break;
    case "deflate":
      compressor = new Zlib();
      break;
    case "deflate-raw":
      compressor = new Deflate();
      break;
    default:
      throw new Error(`{ compressionMethod: "stream" } does not support "${algorithm}" encoding`);
  }
  const transformStream = new TransformStream({
    start(controller) {
      compressor.ondata = (chunk2, _final) => {
        try {
          if (!cancelled) {
            controller.enqueue(chunk2);
          }
        } catch (err2) {
          if (!cancelled) {
            controller.error(err2);
          }
        }
      };
    },
    transform(chunk2, controller) {
      try {
        if (!cancelled) {
          compressor.push(chunk2, false);
          compressor.flush();
        }
      } catch (err2) {
        if (!cancelled) {
          controller.error(err2);
        }
      }
    },
    flush(controller) {
      try {
        if (!cancelled) {
          compressor.push(new Uint8Array(), true);
        }
      } catch (err2) {
        if (!cancelled) {
          controller.error(err2);
        }
      }
    },
    // Missing types for https://streams.spec.whatwg.org/#dom-transformer-cancel
    // @ts-expect-error
    cancel() {
      cancelled = true;
    }
  });
  return input.pipeThrough(transformStream);
}
var u8, u16, i32, fleb, fdeb, clim, freb, _a, fl, revfl, _b, revfd, rev, x3, i2, hMap, flt, i2, i2, i2, i2, fdt, i2, flm, fdm, shft, slc, ec, err, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, deo, et, dflt, crct, crc, adler, dopt, wbytes, gzh, gzhl, zlh, Deflate, Gzip, Zlib, td, tds;
var init_stream_UQO5ERVU = __esm({
  "node_modules/@universal-middleware/compress/dist/stream-UQO5ERVU.js"() {
    u8 = Uint8Array;
    u16 = Uint16Array;
    i32 = Int32Array;
    fleb = new u8([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      0,
      /* unused */
      0,
      0,
      /* impossible */
      0
    ]);
    fdeb = new u8([
      0,
      0,
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      13,
      13,
      /* unused */
      0,
      0
    ]);
    clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    freb = function(eb, start) {
      var b2 = new u16(31);
      for (var i3 = 0; i3 < 31; ++i3) {
        b2[i3] = start += 1 << eb[i3 - 1];
      }
      var r = new i32(b2[30]);
      for (var i3 = 1; i3 < 30; ++i3) {
        for (var j3 = b2[i3]; j3 < b2[i3 + 1]; ++j3) {
          r[j3] = j3 - b2[i3] << 5 | i3;
        }
      }
      return { b: b2, r };
    };
    _a = freb(fleb, 2);
    fl = _a.b;
    revfl = _a.r;
    fl[28] = 258, revfl[258] = 28;
    _b = freb(fdeb, 0);
    revfd = _b.r;
    rev = new u16(32768);
    for (i2 = 0; i2 < 32768; ++i2) {
      x3 = (i2 & 43690) >> 1 | (i2 & 21845) << 1;
      x3 = (x3 & 52428) >> 2 | (x3 & 13107) << 2;
      x3 = (x3 & 61680) >> 4 | (x3 & 3855) << 4;
      rev[i2] = ((x3 & 65280) >> 8 | (x3 & 255) << 8) >> 1;
    }
    hMap = (function(cd, mb, r) {
      var s3 = cd.length;
      var i3 = 0;
      var l2 = new u16(mb);
      for (; i3 < s3; ++i3) {
        if (cd[i3])
          ++l2[cd[i3] - 1];
      }
      var le = new u16(mb);
      for (i3 = 1; i3 < mb; ++i3) {
        le[i3] = le[i3 - 1] + l2[i3 - 1] << 1;
      }
      var co;
      {
        co = new u16(s3);
        for (i3 = 0; i3 < s3; ++i3) {
          if (cd[i3]) {
            co[i3] = rev[le[cd[i3] - 1]++] >> 15 - cd[i3];
          }
        }
      }
      return co;
    });
    flt = new u8(288);
    for (i2 = 0; i2 < 144; ++i2)
      flt[i2] = 8;
    for (i2 = 144; i2 < 256; ++i2)
      flt[i2] = 9;
    for (i2 = 256; i2 < 280; ++i2)
      flt[i2] = 7;
    for (i2 = 280; i2 < 288; ++i2)
      flt[i2] = 8;
    fdt = new u8(32);
    for (i2 = 0; i2 < 32; ++i2)
      fdt[i2] = 5;
    flm = /* @__PURE__ */ hMap(flt, 9);
    fdm = /* @__PURE__ */ hMap(fdt, 5);
    shft = function(p4) {
      return (p4 + 7) / 8 | 0;
    };
    slc = function(v2, s3, e) {
      if (e == null || e > v2.length)
        e = v2.length;
      return new u8(v2.subarray(s3, e));
    };
    ec = [
      "unexpected EOF",
      "invalid block type",
      "invalid length/literal",
      "invalid distance",
      "stream finished",
      "no stream handler",
      ,
      "no callback",
      "invalid UTF-8 data",
      "extra field too long",
      "date not in range 1980-2099",
      "filename too long",
      "stream finishing",
      "invalid zip data"
      // determined by unknown compression method
    ];
    err = function(ind, msg, nt) {
      var e = new Error(msg || ec[ind]);
      e.code = ind;
      if (Error.captureStackTrace)
        Error.captureStackTrace(e, err);
      if (!nt)
        throw e;
      return e;
    };
    wbits = function(d2, p4, v2) {
      v2 <<= p4 & 7;
      var o2 = p4 / 8 | 0;
      d2[o2] |= v2;
      d2[o2 + 1] |= v2 >> 8;
    };
    wbits16 = function(d2, p4, v2) {
      v2 <<= p4 & 7;
      var o2 = p4 / 8 | 0;
      d2[o2] |= v2;
      d2[o2 + 1] |= v2 >> 8;
      d2[o2 + 2] |= v2 >> 16;
    };
    hTree = function(d2, mb) {
      var t = [];
      for (var i3 = 0; i3 < d2.length; ++i3) {
        if (d2[i3])
          t.push({ s: i3, f: d2[i3] });
      }
      var s3 = t.length;
      var t2 = t.slice();
      if (!s3)
        return { t: et, l: 0 };
      if (s3 == 1) {
        var v2 = new u8(t[0].s + 1);
        v2[t[0].s] = 1;
        return { t: v2, l: 1 };
      }
      t.sort(function(a2, b2) {
        return a2.f - b2.f;
      });
      t.push({ s: -1, f: 25001 });
      var l2 = t[0], r = t[1], i0 = 0, i1 = 1, i22 = 2;
      t[0] = { s: -1, f: l2.f + r.f, l: l2, r };
      while (i1 != s3 - 1) {
        l2 = t[t[i0].f < t[i22].f ? i0++ : i22++];
        r = t[i0 != i1 && t[i0].f < t[i22].f ? i0++ : i22++];
        t[i1++] = { s: -1, f: l2.f + r.f, l: l2, r };
      }
      var maxSym = t2[0].s;
      for (var i3 = 1; i3 < s3; ++i3) {
        if (t2[i3].s > maxSym)
          maxSym = t2[i3].s;
      }
      var tr = new u16(maxSym + 1);
      var mbt = ln(t[i1 - 1], tr, 0);
      if (mbt > mb) {
        var i3 = 0, dt = 0;
        var lft = mbt - mb, cst = 1 << lft;
        t2.sort(function(a2, b2) {
          return tr[b2.s] - tr[a2.s] || a2.f - b2.f;
        });
        for (; i3 < s3; ++i3) {
          var i2_1 = t2[i3].s;
          if (tr[i2_1] > mb) {
            dt += cst - (1 << mbt - tr[i2_1]);
            tr[i2_1] = mb;
          } else
            break;
        }
        dt >>= lft;
        while (dt > 0) {
          var i2_2 = t2[i3].s;
          if (tr[i2_2] < mb)
            dt -= 1 << mb - tr[i2_2]++ - 1;
          else
            ++i3;
        }
        for (; i3 >= 0 && dt; --i3) {
          var i2_3 = t2[i3].s;
          if (tr[i2_3] == mb) {
            --tr[i2_3];
            ++dt;
          }
        }
        mbt = mb;
      }
      return { t: new u8(tr), l: mbt };
    };
    ln = function(n2, l2, d2) {
      return n2.s == -1 ? Math.max(ln(n2.l, l2, d2 + 1), ln(n2.r, l2, d2 + 1)) : l2[n2.s] = d2;
    };
    lc = function(c2) {
      var s3 = c2.length;
      while (s3 && !c2[--s3])
        ;
      var cl = new u16(++s3);
      var cli = 0, cln = c2[0], cls = 1;
      var w4 = function(v2) {
        cl[cli++] = v2;
      };
      for (var i3 = 1; i3 <= s3; ++i3) {
        if (c2[i3] == cln && i3 != s3)
          ++cls;
        else {
          if (!cln && cls > 2) {
            for (; cls > 138; cls -= 138)
              w4(32754);
            if (cls > 2) {
              w4(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
              cls = 0;
            }
          } else if (cls > 3) {
            w4(cln), --cls;
            for (; cls > 6; cls -= 6)
              w4(8304);
            if (cls > 2)
              w4(cls - 3 << 5 | 8208), cls = 0;
          }
          while (cls--)
            w4(cln);
          cls = 1;
          cln = c2[i3];
        }
      }
      return { c: cl.subarray(0, cli), n: s3 };
    };
    clen = function(cf, cl) {
      var l2 = 0;
      for (var i3 = 0; i3 < cl.length; ++i3)
        l2 += cf[i3] * cl[i3];
      return l2;
    };
    wfblk = function(out, pos, dat) {
      var s3 = dat.length;
      var o2 = shft(pos + 2);
      out[o2] = s3 & 255;
      out[o2 + 1] = s3 >> 8;
      out[o2 + 2] = out[o2] ^ 255;
      out[o2 + 3] = out[o2 + 1] ^ 255;
      for (var i3 = 0; i3 < s3; ++i3)
        out[o2 + i3 + 4] = dat[i3];
      return (o2 + 4 + s3) * 8;
    };
    wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p4) {
      wbits(out, p4++, final);
      ++lf[256];
      var _a2 = hTree(lf, 15), dlt = _a2.t, mlb = _a2.l;
      var _b2 = hTree(df, 15), ddt = _b2.t, mdb = _b2.l;
      var _c2 = lc(dlt), lclt = _c2.c, nlc = _c2.n;
      var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
      var lcfreq = new u16(19);
      for (var i3 = 0; i3 < lclt.length; ++i3)
        ++lcfreq[lclt[i3] & 31];
      for (var i3 = 0; i3 < lcdt.length; ++i3)
        ++lcfreq[lcdt[i3] & 31];
      var _e2 = hTree(lcfreq, 7), lct = _e2.t, mlcb = _e2.l;
      var nlcc = 19;
      for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
        ;
      var flen = bl + 5 << 3;
      var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
      var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
      if (bs >= 0 && flen <= ftlen && flen <= dtlen)
        return wfblk(out, p4, dat.subarray(bs, bs + bl));
      var lm, ll, dm, dl;
      wbits(out, p4, 1 + (dtlen < ftlen)), p4 += 2;
      if (dtlen < ftlen) {
        lm = hMap(dlt, mlb), ll = dlt, dm = hMap(ddt, mdb), dl = ddt;
        var llm = hMap(lct, mlcb);
        wbits(out, p4, nlc - 257);
        wbits(out, p4 + 5, ndc - 1);
        wbits(out, p4 + 10, nlcc - 4);
        p4 += 14;
        for (var i3 = 0; i3 < nlcc; ++i3)
          wbits(out, p4 + 3 * i3, lct[clim[i3]]);
        p4 += 3 * nlcc;
        var lcts = [lclt, lcdt];
        for (var it = 0; it < 2; ++it) {
          var clct = lcts[it];
          for (var i3 = 0; i3 < clct.length; ++i3) {
            var len = clct[i3] & 31;
            wbits(out, p4, llm[len]), p4 += lct[len];
            if (len > 15)
              wbits(out, p4, clct[i3] >> 5 & 127), p4 += clct[i3] >> 12;
          }
        }
      } else {
        lm = flm, ll = flt, dm = fdm, dl = fdt;
      }
      for (var i3 = 0; i3 < li; ++i3) {
        var sym = syms[i3];
        if (sym > 255) {
          var len = sym >> 18 & 31;
          wbits16(out, p4, lm[len + 257]), p4 += ll[len + 257];
          if (len > 7)
            wbits(out, p4, sym >> 23 & 31), p4 += fleb[len];
          var dst = sym & 31;
          wbits16(out, p4, dm[dst]), p4 += dl[dst];
          if (dst > 3)
            wbits16(out, p4, sym >> 5 & 8191), p4 += fdeb[dst];
        } else {
          wbits16(out, p4, lm[sym]), p4 += ll[sym];
        }
      }
      wbits16(out, p4, lm[256]);
      return p4 + ll[256];
    };
    deo = /* @__PURE__ */ new i32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
    et = /* @__PURE__ */ new u8(0);
    dflt = function(dat, lvl, plvl, pre, post, st) {
      var s3 = st.z || dat.length;
      var o2 = new u8(pre + s3 + 5 * (1 + Math.ceil(s3 / 7e3)) + post);
      var w4 = o2.subarray(pre, o2.length - post);
      var lst = st.l;
      var pos = (st.r || 0) & 7;
      if (lvl) {
        if (pos)
          w4[0] = st.r >> 3;
        var opt = deo[lvl - 1];
        var n2 = opt >> 13, c2 = opt & 8191;
        var msk_1 = (1 << plvl) - 1;
        var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
        var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
        var hsh = function(i22) {
          return (dat[i22] ^ dat[i22 + 1] << bs1_1 ^ dat[i22 + 2] << bs2_1) & msk_1;
        };
        var syms = new i32(25e3);
        var lf = new u16(288), df = new u16(32);
        var lc_1 = 0, eb = 0, i3 = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
        for (; i3 + 2 < s3; ++i3) {
          var hv = hsh(i3);
          var imod = i3 & 32767, pimod = head[hv];
          prev[imod] = pimod;
          head[hv] = imod;
          if (wi <= i3) {
            var rem = s3 - i3;
            if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
              pos = wblk(dat, w4, 0, syms, lf, df, eb, li, bs, i3 - bs, pos);
              li = lc_1 = eb = 0, bs = i3;
              for (var j3 = 0; j3 < 286; ++j3)
                lf[j3] = 0;
              for (var j3 = 0; j3 < 30; ++j3)
                df[j3] = 0;
            }
            var l2 = 2, d2 = 0, ch_1 = c2, dif = imod - pimod & 32767;
            if (rem > 2 && hv == hsh(i3 - dif)) {
              var maxn = Math.min(n2, rem) - 1;
              var maxd = Math.min(32767, i3);
              var ml = Math.min(258, rem);
              while (dif <= maxd && --ch_1 && imod != pimod) {
                if (dat[i3 + l2] == dat[i3 + l2 - dif]) {
                  var nl = 0;
                  for (; nl < ml && dat[i3 + nl] == dat[i3 + nl - dif]; ++nl)
                    ;
                  if (nl > l2) {
                    l2 = nl, d2 = dif;
                    if (nl > maxn)
                      break;
                    var mmd = Math.min(dif, nl - 2);
                    var md = 0;
                    for (var j3 = 0; j3 < mmd; ++j3) {
                      var ti = i3 - dif + j3 & 32767;
                      var pti = prev[ti];
                      var cd = ti - pti & 32767;
                      if (cd > md)
                        md = cd, pimod = ti;
                    }
                  }
                }
                imod = pimod, pimod = prev[imod];
                dif += imod - pimod & 32767;
              }
            }
            if (d2) {
              syms[li++] = 268435456 | revfl[l2] << 18 | revfd[d2];
              var lin = revfl[l2] & 31, din = revfd[d2] & 31;
              eb += fleb[lin] + fdeb[din];
              ++lf[257 + lin];
              ++df[din];
              wi = i3 + l2;
              ++lc_1;
            } else {
              syms[li++] = dat[i3];
              ++lf[dat[i3]];
            }
          }
        }
        for (i3 = Math.max(i3, wi); i3 < s3; ++i3) {
          syms[li++] = dat[i3];
          ++lf[dat[i3]];
        }
        pos = wblk(dat, w4, lst, syms, lf, df, eb, li, bs, i3 - bs, pos);
        if (!lst) {
          st.r = pos & 7 | w4[pos / 8 | 0] << 3;
          pos -= 7;
          st.h = head, st.p = prev, st.i = i3, st.w = wi;
        }
      } else {
        for (var i3 = st.w || 0; i3 < s3 + lst; i3 += 65535) {
          var e = i3 + 65535;
          if (e >= s3) {
            w4[pos / 8 | 0] = lst;
            e = s3;
          }
          pos = wfblk(w4, pos + 1, dat.subarray(i3, e));
        }
        st.i = s3;
      }
      return slc(o2, 0, pre + shft(pos) + post);
    };
    crct = /* @__PURE__ */ (function() {
      var t = new Int32Array(256);
      for (var i3 = 0; i3 < 256; ++i3) {
        var c2 = i3, k2 = 9;
        while (--k2)
          c2 = (c2 & 1 && -306674912) ^ c2 >>> 1;
        t[i3] = c2;
      }
      return t;
    })();
    crc = function() {
      var c2 = -1;
      return {
        p: function(d2) {
          var cr2 = c2;
          for (var i3 = 0; i3 < d2.length; ++i3)
            cr2 = crct[cr2 & 255 ^ d2[i3]] ^ cr2 >>> 8;
          c2 = cr2;
        },
        d: function() {
          return ~c2;
        }
      };
    };
    adler = function() {
      var a2 = 1, b2 = 0;
      return {
        p: function(d2) {
          var n2 = a2, m3 = b2;
          var l2 = d2.length | 0;
          for (var i3 = 0; i3 != l2; ) {
            var e = Math.min(i3 + 2655, l2);
            for (; i3 < e; ++i3)
              m3 += n2 += d2[i3];
            n2 = (n2 & 65535) + 15 * (n2 >> 16), m3 = (m3 & 65535) + 15 * (m3 >> 16);
          }
          a2 = n2, b2 = m3;
        },
        d: function() {
          a2 %= 65521, b2 %= 65521;
          return (a2 & 255) << 24 | (a2 & 65280) << 8 | (b2 & 255) << 8 | b2 >> 8;
        }
      };
    };
    dopt = function(dat, opt, pre, post, st) {
      if (!st) {
        st = { l: 1 };
        if (opt.dictionary) {
          var dict = opt.dictionary.subarray(-32768);
          var newDat = new u8(dict.length + dat.length);
          newDat.set(dict);
          newDat.set(dat, dict.length);
          dat = newDat;
          st.w = dict.length;
        }
      }
      return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
    };
    wbytes = function(d2, b2, v2) {
      for (; v2; ++b2)
        d2[b2] = v2, v2 >>>= 8;
    };
    gzh = function(c2, o2) {
      var fn = o2.filename;
      c2[0] = 31, c2[1] = 139, c2[2] = 8, c2[8] = o2.level < 2 ? 4 : o2.level == 9 ? 2 : 0, c2[9] = 3;
      if (o2.mtime != 0)
        wbytes(c2, 4, Math.floor(new Date(o2.mtime || Date.now()) / 1e3));
      if (fn) {
        c2[3] = 8;
        for (var i3 = 0; i3 <= fn.length; ++i3)
          c2[i3 + 10] = fn.charCodeAt(i3);
      }
    };
    gzhl = function(o2) {
      return 10 + (o2.filename ? o2.filename.length + 1 : 0);
    };
    zlh = function(c2, o2) {
      var lv = o2.level, fl2 = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
      c2[0] = 120, c2[1] = fl2 << 6 | (o2.dictionary && 32);
      c2[1] |= 31 - (c2[0] << 8 | c2[1]) % 31;
      if (o2.dictionary) {
        var h2 = adler();
        h2.p(o2.dictionary);
        wbytes(c2, 2, h2.d());
      }
    };
    Deflate = /* @__PURE__ */ (function() {
      function Deflate2(opts, cb) {
        if (typeof opts == "function")
          cb = opts, opts = {};
        this.ondata = cb;
        this.o = opts || {};
        this.s = { l: 0, i: 32768, w: 32768, z: 32768 };
        this.b = new u8(98304);
        if (this.o.dictionary) {
          var dict = this.o.dictionary.subarray(-32768);
          this.b.set(dict, 32768 - dict.length);
          this.s.i = 32768 - dict.length;
        }
      }
      Deflate2.prototype.p = function(c2, f3) {
        this.ondata(dopt(c2, this.o, 0, 0, this.s), f3);
      };
      Deflate2.prototype.push = function(chunk2, final) {
        if (!this.ondata)
          err(5);
        if (this.s.l)
          err(4);
        var endLen = chunk2.length + this.s.z;
        if (endLen > this.b.length) {
          if (endLen > 2 * this.b.length - 32768) {
            var newBuf = new u8(endLen & -32768);
            newBuf.set(this.b.subarray(0, this.s.z));
            this.b = newBuf;
          }
          var split = this.b.length - this.s.z;
          this.b.set(chunk2.subarray(0, split), this.s.z);
          this.s.z = this.b.length;
          this.p(this.b, false);
          this.b.set(this.b.subarray(-32768));
          this.b.set(chunk2.subarray(split), 32768);
          this.s.z = chunk2.length - split + 32768;
          this.s.i = 32766, this.s.w = 32768;
        } else {
          this.b.set(chunk2, this.s.z);
          this.s.z += chunk2.length;
        }
        this.s.l = final & 1;
        if (this.s.z > this.s.w + 8191 || final) {
          this.p(this.b, final || false);
          this.s.w = this.s.i, this.s.i -= 2;
        }
      };
      Deflate2.prototype.flush = function() {
        if (!this.ondata)
          err(5);
        if (this.s.l)
          err(4);
        this.p(this.b, false);
        this.s.w = this.s.i, this.s.i -= 2;
      };
      return Deflate2;
    })();
    Gzip = /* @__PURE__ */ (function() {
      function Gzip2(opts, cb) {
        this.c = crc();
        this.l = 0;
        this.v = 1;
        Deflate.call(this, opts, cb);
      }
      Gzip2.prototype.push = function(chunk2, final) {
        this.c.p(chunk2);
        this.l += chunk2.length;
        Deflate.prototype.push.call(this, chunk2, final);
      };
      Gzip2.prototype.p = function(c2, f3) {
        var raw2 = dopt(c2, this.o, this.v && gzhl(this.o), f3 && 8, this.s);
        if (this.v)
          gzh(raw2, this.o), this.v = 0;
        if (f3)
          wbytes(raw2, raw2.length - 8, this.c.d()), wbytes(raw2, raw2.length - 4, this.l);
        this.ondata(raw2, f3);
      };
      Gzip2.prototype.flush = function() {
        Deflate.prototype.flush.call(this);
      };
      return Gzip2;
    })();
    Zlib = /* @__PURE__ */ (function() {
      function Zlib2(opts, cb) {
        this.c = adler();
        this.v = 1;
        Deflate.call(this, opts, cb);
      }
      Zlib2.prototype.push = function(chunk2, final) {
        this.c.p(chunk2);
        Deflate.prototype.push.call(this, chunk2, final);
      };
      Zlib2.prototype.p = function(c2, f3) {
        var raw2 = dopt(c2, this.o, this.v && (this.o.dictionary ? 6 : 2), f3 && 4, this.s);
        if (this.v)
          zlh(raw2, this.o), this.v = 0;
        if (f3)
          wbytes(raw2, raw2.length - 4, this.c.d());
        this.ondata(raw2, f3);
      };
      Zlib2.prototype.flush = function() {
        Deflate.prototype.flush.call(this);
      };
      return Zlib2;
    })();
    td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
    tds = 0;
    try {
      td.decode(et, { stream: true });
      tds = 1;
    } catch (e) {
    }
  }
});

// node_modules/@universal-middleware/compress/dist/chunk-IRARMTQH.js
function parseAcceptEncodingHeader(accept) {
  const accepts = accept.split(",");
  const out = /* @__PURE__ */ new Map();
  let minQuality = 1;
  for (let i3 = 0; i3 < accepts.length; i3++) {
    const encoding = parseEncoding(accepts[i3].trim());
    if (encoding) {
      out.set(encoding.encoding, {
        ...encoding,
        index: i3
      });
      minQuality = Math.min(minQuality, encoding.q || 1);
    }
  }
  if (!out.has("identity")) {
    out.set("identity", {
      encoding: "identity",
      q: minQuality,
      index: Number.MAX_SAFE_INTEGER
    });
  }
  return out;
}
function parseEncoding(str) {
  const match2 = simpleEncodingRegExp.exec(str);
  if (!match2) return null;
  const encoding = match2[1];
  let q2 = 1;
  if (match2[2]) {
    const params = match2[2].split(";");
    for (let j3 = 0; j3 < params.length; j3++) {
      const p4 = params[j3].trim().split("=");
      if (p4[0] === "q") {
        q2 = Number.parseFloat(p4[1]);
        break;
      }
    }
  }
  return {
    encoding,
    q: q2
  };
}
function chooseBestEncoding(request, availableEncodings) {
  let bestEncoding = null;
  if (availableEncodings.length === 0) return null;
  const header = request.headers.get("Accept-Encoding");
  if (!header) return null;
  const parsed = parseAcceptEncodingHeader(header);
  for (const enc of availableEncodings) {
    const encodingEntry = parsed.get(enc);
    if (encodingEntry) {
      if (!bestEncoding || encodingEntry.q > bestEncoding.q || encodingEntry.q === bestEncoding.q && encodingEntry.index < bestEncoding.index) {
        bestEncoding = encodingEntry;
      }
    }
  }
  return bestEncoding?.encoding;
}
async function isNodeZlibAvailable() {
  try {
    await import(
      /* @vite-ignore */
      "node:zlib"
    );
    return true;
  } catch {
    return false;
  }
}
async function guessCompressor(encoding) {
  if (isZlibAvailable) {
    const { compressStream: compressStream22 } = await Promise.resolve().then(() => (init_stream_X3AXMVWI(), stream_X3AXMVWI_exports));
    return (input) => compressStream22(input, encoding);
  }
  const { compressStream: compressStream3 } = await Promise.resolve().then(() => (init_stream_UQO5ERVU(), stream_UQO5ERVU_exports));
  return (input) => compressStream3(input, encoding);
}
var COMPRESSIBLE_CONTENT_TYPE_REGEX, simpleEncodingRegExp, isCompressionStreamAvailable, isZlibAvailable, supportedEncodings, cacheControlNoTransformRegExp, EncodingGuesser, handleCompression, compressMiddleware, middleware_default;
var init_chunk_IRARMTQH = __esm({
  async "node_modules/@universal-middleware/compress/dist/chunk-IRARMTQH.js"() {
    COMPRESSIBLE_CONTENT_TYPE_REGEX = /^\s*(?:text\/[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i;
    simpleEncodingRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
    isCompressionStreamAvailable = typeof CompressionStream !== "undefined";
    isZlibAvailable = await isNodeZlibAvailable();
    supportedEncodings = isZlibAvailable ? ["br", "gzip", "deflate"] : isCompressionStreamAvailable ? ["gzip", "deflate"] : [];
    cacheControlNoTransformRegExp = /(?:^|,)\s*?no-transform\s*?(?:,|$)/i;
    EncodingGuesser = class {
      constructor(request, options = {}) {
        this.request = request;
        this.options = options;
        this.encoding = this._guessRequest();
      }
      encoding;
      _guessRequest() {
        if (this.request.method === "HEAD") {
          return null;
        }
        const cacheControl = this.request.headers.get("Cache-Control");
        if (cacheControl && cacheControlNoTransformRegExp.test(cacheControl)) {
          return null;
        }
        const chosenEncoding = chooseBestEncoding(this.request, supportedEncodings);
        if (!chosenEncoding || chosenEncoding === "identity") {
          return null;
        }
        return chosenEncoding;
      }
      guessEncoding(response) {
        if (this.encoding === null) return null;
        const threshold = this.options?.threshold ?? 1024;
        const cacheControl = response.headers.get("Cache-Control");
        if (cacheControl && cacheControlNoTransformRegExp.test(cacheControl)) {
          return null;
        }
        const contentLength = response.headers.get("Content-Length");
        if (contentLength && Number.parseInt(contentLength, 10) < threshold) {
          return null;
        }
        const contentType = response.headers.get("Content-Type");
        if (!contentType || !COMPRESSIBLE_CONTENT_TYPE_REGEX.test(contentType)) {
          return null;
        }
        const contentEncoding = response.headers.get("Content-Encoding") ?? "identity";
        if (contentEncoding !== "identity") {
          return null;
        }
        return this.encoding;
      }
    };
    handleCompression = async (encoding, input, options) => {
      if (!input.headers.get("Vary")?.includes("Accept-Encoding")) input.headers.append("Vary", "Accept-Encoding");
      if (input.headers.get("Content-Encoding")) return input;
      const { headers, ...optionsRest } = options || {};
      const optionsHeaders = new Headers(headers);
      if (!optionsHeaders.get("Vary")?.includes("Accept-Encoding")) optionsHeaders.append("Vary", "Accept-Encoding");
      for (const [header, value] of optionsHeaders) {
        if (!(input.headers.get(header) ?? "").includes(value)) input.headers.append(header, value);
      }
      const compressor = await guessCompressor(encoding);
      const body = await compressor(input.body);
      if (body !== null) {
        input.headers.append("Content-Encoding", encoding);
        input.headers.delete("Content-Length");
      }
      return new Response(body, {
        headers: input.headers,
        status: optionsRest.status ?? input.status,
        statusText: optionsRest.statusText ?? input.statusText
      });
    };
    compressMiddleware = ((options) => (request) => {
      const guesser = new EncodingGuesser(request);
      return function universalMiddlewareCompress(response) {
        const encoding = guesser.guessEncoding(response);
        if (!encoding) return response;
        return handleCompression(encoding, response, options);
      };
    });
    middleware_default = compressMiddleware;
  }
});

// node_modules/@universal-middleware/compress/dist/middleware.js
var middleware_exports = {};
__export(middleware_exports, {
  default: () => middleware_default
});
var init_middleware = __esm({
  async "node_modules/@universal-middleware/compress/dist/middleware.js"() {
    await init_chunk_IRARMTQH();
  }
});

// node_modules/mrmime/index.mjs
function lookup(extn) {
  let tmp = ("" + extn).trim().toLowerCase();
  let idx = tmp.lastIndexOf(".");
  return mimes[!~idx ? tmp : tmp.substring(++idx)];
}
var mimes;
var init_mrmime = __esm({
  "node_modules/mrmime/index.mjs"() {
    mimes = {
      "3g2": "video/3gpp2",
      "3gp": "video/3gpp",
      "3gpp": "video/3gpp",
      "3mf": "model/3mf",
      "aac": "audio/aac",
      "ac": "application/pkix-attr-cert",
      "adp": "audio/adpcm",
      "adts": "audio/aac",
      "ai": "application/postscript",
      "aml": "application/automationml-aml+xml",
      "amlx": "application/automationml-amlx+zip",
      "amr": "audio/amr",
      "apng": "image/apng",
      "appcache": "text/cache-manifest",
      "appinstaller": "application/appinstaller",
      "appx": "application/appx",
      "appxbundle": "application/appxbundle",
      "asc": "application/pgp-keys",
      "atom": "application/atom+xml",
      "atomcat": "application/atomcat+xml",
      "atomdeleted": "application/atomdeleted+xml",
      "atomsvc": "application/atomsvc+xml",
      "au": "audio/basic",
      "avci": "image/avci",
      "avcs": "image/avcs",
      "avif": "image/avif",
      "aw": "application/applixware",
      "bdoc": "application/bdoc",
      "bin": "application/octet-stream",
      "bmp": "image/bmp",
      "bpk": "application/octet-stream",
      "btf": "image/prs.btif",
      "btif": "image/prs.btif",
      "buffer": "application/octet-stream",
      "ccxml": "application/ccxml+xml",
      "cdfx": "application/cdfx+xml",
      "cdmia": "application/cdmi-capability",
      "cdmic": "application/cdmi-container",
      "cdmid": "application/cdmi-domain",
      "cdmio": "application/cdmi-object",
      "cdmiq": "application/cdmi-queue",
      "cer": "application/pkix-cert",
      "cgm": "image/cgm",
      "cjs": "application/node",
      "class": "application/java-vm",
      "coffee": "text/coffeescript",
      "conf": "text/plain",
      "cpl": "application/cpl+xml",
      "cpt": "application/mac-compactpro",
      "crl": "application/pkix-crl",
      "css": "text/css",
      "csv": "text/csv",
      "cu": "application/cu-seeme",
      "cwl": "application/cwl",
      "cww": "application/prs.cww",
      "davmount": "application/davmount+xml",
      "dbk": "application/docbook+xml",
      "deb": "application/octet-stream",
      "def": "text/plain",
      "deploy": "application/octet-stream",
      "dib": "image/bmp",
      "disposition-notification": "message/disposition-notification",
      "dist": "application/octet-stream",
      "distz": "application/octet-stream",
      "dll": "application/octet-stream",
      "dmg": "application/octet-stream",
      "dms": "application/octet-stream",
      "doc": "application/msword",
      "dot": "application/msword",
      "dpx": "image/dpx",
      "drle": "image/dicom-rle",
      "dsc": "text/prs.lines.tag",
      "dssc": "application/dssc+der",
      "dtd": "application/xml-dtd",
      "dump": "application/octet-stream",
      "dwd": "application/atsc-dwd+xml",
      "ear": "application/java-archive",
      "ecma": "application/ecmascript",
      "elc": "application/octet-stream",
      "emf": "image/emf",
      "eml": "message/rfc822",
      "emma": "application/emma+xml",
      "emotionml": "application/emotionml+xml",
      "eps": "application/postscript",
      "epub": "application/epub+zip",
      "exe": "application/octet-stream",
      "exi": "application/exi",
      "exp": "application/express",
      "exr": "image/aces",
      "ez": "application/andrew-inset",
      "fdf": "application/fdf",
      "fdt": "application/fdt+xml",
      "fits": "image/fits",
      "g3": "image/g3fax",
      "gbr": "application/rpki-ghostbusters",
      "geojson": "application/geo+json",
      "gif": "image/gif",
      "glb": "model/gltf-binary",
      "gltf": "model/gltf+json",
      "gml": "application/gml+xml",
      "gpx": "application/gpx+xml",
      "gram": "application/srgs",
      "grxml": "application/srgs+xml",
      "gxf": "application/gxf",
      "gz": "application/gzip",
      "h261": "video/h261",
      "h263": "video/h263",
      "h264": "video/h264",
      "heic": "image/heic",
      "heics": "image/heic-sequence",
      "heif": "image/heif",
      "heifs": "image/heif-sequence",
      "hej2": "image/hej2k",
      "held": "application/atsc-held+xml",
      "hjson": "application/hjson",
      "hlp": "application/winhlp",
      "hqx": "application/mac-binhex40",
      "hsj2": "image/hsj2",
      "htm": "text/html",
      "html": "text/html",
      "ics": "text/calendar",
      "ief": "image/ief",
      "ifb": "text/calendar",
      "iges": "model/iges",
      "igs": "model/iges",
      "img": "application/octet-stream",
      "in": "text/plain",
      "ini": "text/plain",
      "ink": "application/inkml+xml",
      "inkml": "application/inkml+xml",
      "ipfix": "application/ipfix",
      "iso": "application/octet-stream",
      "its": "application/its+xml",
      "jade": "text/jade",
      "jar": "application/java-archive",
      "jhc": "image/jphc",
      "jls": "image/jls",
      "jp2": "image/jp2",
      "jpe": "image/jpeg",
      "jpeg": "image/jpeg",
      "jpf": "image/jpx",
      "jpg": "image/jpeg",
      "jpg2": "image/jp2",
      "jpgm": "image/jpm",
      "jpgv": "video/jpeg",
      "jph": "image/jph",
      "jpm": "image/jpm",
      "jpx": "image/jpx",
      "js": "text/javascript",
      "json": "application/json",
      "json5": "application/json5",
      "jsonld": "application/ld+json",
      "jsonml": "application/jsonml+json",
      "jsx": "text/jsx",
      "jt": "model/jt",
      "jxl": "image/jxl",
      "jxr": "image/jxr",
      "jxra": "image/jxra",
      "jxrs": "image/jxrs",
      "jxs": "image/jxs",
      "jxsc": "image/jxsc",
      "jxsi": "image/jxsi",
      "jxss": "image/jxss",
      "kar": "audio/midi",
      "ktx": "image/ktx",
      "ktx2": "image/ktx2",
      "less": "text/less",
      "lgr": "application/lgr+xml",
      "list": "text/plain",
      "litcoffee": "text/coffeescript",
      "log": "text/plain",
      "lostxml": "application/lost+xml",
      "lrf": "application/octet-stream",
      "m1v": "video/mpeg",
      "m21": "application/mp21",
      "m2a": "audio/mpeg",
      "m2t": "video/mp2t",
      "m2ts": "video/mp2t",
      "m2v": "video/mpeg",
      "m3a": "audio/mpeg",
      "m4a": "audio/mp4",
      "m4p": "application/mp4",
      "m4s": "video/iso.segment",
      "ma": "application/mathematica",
      "mads": "application/mads+xml",
      "maei": "application/mmt-aei+xml",
      "man": "text/troff",
      "manifest": "text/cache-manifest",
      "map": "application/json",
      "mar": "application/octet-stream",
      "markdown": "text/markdown",
      "mathml": "application/mathml+xml",
      "mb": "application/mathematica",
      "mbox": "application/mbox",
      "md": "text/markdown",
      "mdx": "text/mdx",
      "me": "text/troff",
      "mesh": "model/mesh",
      "meta4": "application/metalink4+xml",
      "metalink": "application/metalink+xml",
      "mets": "application/mets+xml",
      "mft": "application/rpki-manifest",
      "mid": "audio/midi",
      "midi": "audio/midi",
      "mime": "message/rfc822",
      "mj2": "video/mj2",
      "mjp2": "video/mj2",
      "mjs": "text/javascript",
      "mml": "text/mathml",
      "mods": "application/mods+xml",
      "mov": "video/quicktime",
      "mp2": "audio/mpeg",
      "mp21": "application/mp21",
      "mp2a": "audio/mpeg",
      "mp3": "audio/mpeg",
      "mp4": "video/mp4",
      "mp4a": "audio/mp4",
      "mp4s": "application/mp4",
      "mp4v": "video/mp4",
      "mpd": "application/dash+xml",
      "mpe": "video/mpeg",
      "mpeg": "video/mpeg",
      "mpf": "application/media-policy-dataset+xml",
      "mpg": "video/mpeg",
      "mpg4": "video/mp4",
      "mpga": "audio/mpeg",
      "mpp": "application/dash-patch+xml",
      "mrc": "application/marc",
      "mrcx": "application/marcxml+xml",
      "ms": "text/troff",
      "mscml": "application/mediaservercontrol+xml",
      "msh": "model/mesh",
      "msi": "application/octet-stream",
      "msix": "application/msix",
      "msixbundle": "application/msixbundle",
      "msm": "application/octet-stream",
      "msp": "application/octet-stream",
      "mtl": "model/mtl",
      "mts": "video/mp2t",
      "musd": "application/mmt-usd+xml",
      "mxf": "application/mxf",
      "mxmf": "audio/mobile-xmf",
      "mxml": "application/xv+xml",
      "n3": "text/n3",
      "nb": "application/mathematica",
      "nq": "application/n-quads",
      "nt": "application/n-triples",
      "obj": "model/obj",
      "oda": "application/oda",
      "oga": "audio/ogg",
      "ogg": "audio/ogg",
      "ogv": "video/ogg",
      "ogx": "application/ogg",
      "omdoc": "application/omdoc+xml",
      "onepkg": "application/onenote",
      "onetmp": "application/onenote",
      "onetoc": "application/onenote",
      "onetoc2": "application/onenote",
      "opf": "application/oebps-package+xml",
      "opus": "audio/ogg",
      "otf": "font/otf",
      "owl": "application/rdf+xml",
      "oxps": "application/oxps",
      "p10": "application/pkcs10",
      "p7c": "application/pkcs7-mime",
      "p7m": "application/pkcs7-mime",
      "p7s": "application/pkcs7-signature",
      "p8": "application/pkcs8",
      "pdf": "application/pdf",
      "pfr": "application/font-tdpfr",
      "pgp": "application/pgp-encrypted",
      "pkg": "application/octet-stream",
      "pki": "application/pkixcmp",
      "pkipath": "application/pkix-pkipath",
      "pls": "application/pls+xml",
      "png": "image/png",
      "prc": "model/prc",
      "prf": "application/pics-rules",
      "provx": "application/provenance+xml",
      "ps": "application/postscript",
      "pskcxml": "application/pskc+xml",
      "pti": "image/prs.pti",
      "qt": "video/quicktime",
      "raml": "application/raml+yaml",
      "rapd": "application/route-apd+xml",
      "rdf": "application/rdf+xml",
      "relo": "application/p2p-overlay+xml",
      "rif": "application/reginfo+xml",
      "rl": "application/resource-lists+xml",
      "rld": "application/resource-lists-diff+xml",
      "rmi": "audio/midi",
      "rnc": "application/relax-ng-compact-syntax",
      "rng": "application/xml",
      "roa": "application/rpki-roa",
      "roff": "text/troff",
      "rq": "application/sparql-query",
      "rs": "application/rls-services+xml",
      "rsat": "application/atsc-rsat+xml",
      "rsd": "application/rsd+xml",
      "rsheet": "application/urc-ressheet+xml",
      "rss": "application/rss+xml",
      "rtf": "text/rtf",
      "rtx": "text/richtext",
      "rusd": "application/route-usd+xml",
      "s3m": "audio/s3m",
      "sbml": "application/sbml+xml",
      "scq": "application/scvp-cv-request",
      "scs": "application/scvp-cv-response",
      "sdp": "application/sdp",
      "senmlx": "application/senml+xml",
      "sensmlx": "application/sensml+xml",
      "ser": "application/java-serialized-object",
      "setpay": "application/set-payment-initiation",
      "setreg": "application/set-registration-initiation",
      "sgi": "image/sgi",
      "sgm": "text/sgml",
      "sgml": "text/sgml",
      "shex": "text/shex",
      "shf": "application/shf+xml",
      "shtml": "text/html",
      "sieve": "application/sieve",
      "sig": "application/pgp-signature",
      "sil": "audio/silk",
      "silo": "model/mesh",
      "siv": "application/sieve",
      "slim": "text/slim",
      "slm": "text/slim",
      "sls": "application/route-s-tsid+xml",
      "smi": "application/smil+xml",
      "smil": "application/smil+xml",
      "snd": "audio/basic",
      "so": "application/octet-stream",
      "spdx": "text/spdx",
      "spp": "application/scvp-vp-response",
      "spq": "application/scvp-vp-request",
      "spx": "audio/ogg",
      "sql": "application/sql",
      "sru": "application/sru+xml",
      "srx": "application/sparql-results+xml",
      "ssdl": "application/ssdl+xml",
      "ssml": "application/ssml+xml",
      "stk": "application/hyperstudio",
      "stl": "model/stl",
      "stpx": "model/step+xml",
      "stpxz": "model/step-xml+zip",
      "stpz": "model/step+zip",
      "styl": "text/stylus",
      "stylus": "text/stylus",
      "svg": "image/svg+xml",
      "svgz": "image/svg+xml",
      "swidtag": "application/swid+xml",
      "t": "text/troff",
      "t38": "image/t38",
      "td": "application/urc-targetdesc+xml",
      "tei": "application/tei+xml",
      "teicorpus": "application/tei+xml",
      "text": "text/plain",
      "tfi": "application/thraud+xml",
      "tfx": "image/tiff-fx",
      "tif": "image/tiff",
      "tiff": "image/tiff",
      "toml": "application/toml",
      "tr": "text/troff",
      "trig": "application/trig",
      "ts": "video/mp2t",
      "tsd": "application/timestamped-data",
      "tsv": "text/tab-separated-values",
      "ttc": "font/collection",
      "ttf": "font/ttf",
      "ttl": "text/turtle",
      "ttml": "application/ttml+xml",
      "txt": "text/plain",
      "u3d": "model/u3d",
      "u8dsn": "message/global-delivery-status",
      "u8hdr": "message/global-headers",
      "u8mdn": "message/global-disposition-notification",
      "u8msg": "message/global",
      "ubj": "application/ubjson",
      "uri": "text/uri-list",
      "uris": "text/uri-list",
      "urls": "text/uri-list",
      "vcard": "text/vcard",
      "vrml": "model/vrml",
      "vtt": "text/vtt",
      "vxml": "application/voicexml+xml",
      "war": "application/java-archive",
      "wasm": "application/wasm",
      "wav": "audio/wav",
      "weba": "audio/webm",
      "webm": "video/webm",
      "webmanifest": "application/manifest+json",
      "webp": "image/webp",
      "wgsl": "text/wgsl",
      "wgt": "application/widget",
      "wif": "application/watcherinfo+xml",
      "wmf": "image/wmf",
      "woff": "font/woff",
      "woff2": "font/woff2",
      "wrl": "model/vrml",
      "wsdl": "application/wsdl+xml",
      "wspolicy": "application/wspolicy+xml",
      "x3d": "model/x3d+xml",
      "x3db": "model/x3d+fastinfoset",
      "x3dbz": "model/x3d+binary",
      "x3dv": "model/x3d-vrml",
      "x3dvz": "model/x3d+vrml",
      "x3dz": "model/x3d+xml",
      "xaml": "application/xaml+xml",
      "xav": "application/xcap-att+xml",
      "xca": "application/xcap-caps+xml",
      "xcs": "application/calendar+xml",
      "xdf": "application/xcap-diff+xml",
      "xdssc": "application/dssc+xml",
      "xel": "application/xcap-el+xml",
      "xenc": "application/xenc+xml",
      "xer": "application/patch-ops-error+xml",
      "xfdf": "application/xfdf",
      "xht": "application/xhtml+xml",
      "xhtml": "application/xhtml+xml",
      "xhvml": "application/xv+xml",
      "xlf": "application/xliff+xml",
      "xm": "audio/xm",
      "xml": "text/xml",
      "xns": "application/xcap-ns+xml",
      "xop": "application/xop+xml",
      "xpl": "application/xproc+xml",
      "xsd": "application/xml",
      "xsf": "application/prs.xsf+xml",
      "xsl": "application/xml",
      "xslt": "application/xml",
      "xspf": "application/xspf+xml",
      "xvm": "application/xv+xml",
      "xvml": "application/xv+xml",
      "yaml": "text/yaml",
      "yang": "application/yang",
      "yin": "application/yin+xml",
      "yml": "text/yaml",
      "zip": "application/zip"
    };
  }
});

// node_modules/totalist/sync/index.mjs
import { join, resolve } from "path";
import { readdirSync, statSync } from "fs";
function totalist(dir, callback, pre = "") {
  dir = resolve(".", dir);
  let arr = readdirSync(dir);
  let i3 = 0, abs, stats;
  for (; i3 < arr.length; i3++) {
    abs = join(dir, arr[i3]);
    stats = statSync(abs);
    stats.isDirectory() ? totalist(abs, callback, join(pre, arr[i3])) : callback(join(pre, arr[i3]), abs, stats);
  }
}
var init_sync = __esm({
  "node_modules/totalist/sync/index.mjs"() {
  }
});

// node_modules/@universal-middleware/sirv/dist/chunk-YEXUR7AM.js
import * as fs from "node:fs";
import { resolve as resolve2, normalize as normalize3, join as join2 } from "node:path";
import { Readable as Readable3 } from "node:stream";
function url4(request) {
  if (request[urlSymbol4]) {
    return request[urlSymbol4];
  }
  if (Object.isFrozen(request) || Object.isSealed(request)) {
    return new URL(request.url);
  }
  request[urlSymbol4] = new URL(request.url);
  return request[urlSymbol4];
}
function isMatch2(uri, arr) {
  for (let i3 = 0; i3 < arr.length; i3++) {
    if (arr[i3].test(uri)) return true;
  }
  return false;
}
function toAssume(uri, extns) {
  let i3 = 0;
  let x4;
  const len = uri.length - 1;
  let uri_ = uri;
  if (uri.charCodeAt(len) === 47) {
    uri_ = uri.substring(0, len);
  }
  const arr = [];
  const tmp = `${uri_}/index`;
  for (; i3 < extns.length; i3++) {
    x4 = extns[i3] ? `.${extns[i3]}` : "";
    if (uri_) arr.push(uri_ + x4);
    arr.push(tmp + x4);
  }
  return arr;
}
function viaCache(cache, uri, extns) {
  let i3 = 0;
  let data;
  const arr = toAssume(uri, extns);
  for (; i3 < arr.length; i3++) {
    if (data = cache[arr[i3]]) return data;
  }
  return void 0;
}
function viaLocal(dir, isEtag, uri, extns) {
  let i3 = 0;
  const arr = toAssume(uri, extns);
  let abs;
  let stats;
  let name;
  let headers;
  for (; i3 < arr.length; i3++) {
    abs = normalize3(join2(dir, name = arr[i3]));
    if (abs.startsWith(dir) && fs.existsSync(abs)) {
      stats = fs.statSync(abs);
      if (stats.isDirectory()) continue;
      headers = toHeaders(name, stats, isEtag);
      headers["Cache-Control"] = isEtag ? "no-cache" : "no-store";
      return { abs, stats, headers };
    }
  }
  return void 0;
}
function send(req, file, stats, headers) {
  let code = 200;
  const newHeaders = { ...headers };
  const rangeHeader = req.headers.get("range");
  if (rangeHeader) {
    code = 206;
    const [x4, y4] = rangeHeader.replace("bytes=", "").split("-");
    let end = Number.parseInt(y4, 10) || stats.size - 1;
    const start = Number.parseInt(x4, 10) || 0;
    if (end >= stats.size) {
      end = stats.size - 1;
    }
    if (start >= stats.size) {
      return new Response(null, {
        status: 416,
        headers: {
          "Content-Range": `bytes */${stats.size}`
        }
      });
    }
    newHeaders["Content-Range"] = `bytes ${start}-${end}/${stats.size}`;
    newHeaders["Content-Length"] = (end - start + 1).toString();
    newHeaders["Accept-Ranges"] = "bytes";
  }
  const webStream = Readable3.toWeb(fs.createReadStream(file));
  return new Response(webStream, {
    status: code,
    headers: newHeaders
  });
}
function toHeaders(name, stats, isEtag) {
  const enc = ENCODING[name.slice(-3)];
  let ctype = lookup(name.slice(0, enc ? -3 : void 0)) || "";
  if (ctype === "text/html") ctype += ";charset=utf-8";
  const headers = {
    "Content-Length": stats.size.toString(),
    "Content-Type": ctype,
    "Last-Modified": stats.mtime.toUTCString()
  };
  if (enc) headers["Content-Encoding"] = enc;
  if (isEtag) headers["ETag"] = `W/"${stats.size}-${stats.mtime.getTime()}"`;
  return headers;
}
function createUniversalMiddleware(isEtag, isSPA, ignores, lookup2, extensions, gzips, brots, setHeaders3, isNotFound, fallback) {
  return (request) => {
    const extns = [""];
    const url22 = url4(request);
    let pathname = url22.pathname;
    const acceptEncoding = request.headers.get("accept-encoding") || "";
    if (gzips && acceptEncoding.includes("gzip")) extns.unshift(...gzips);
    if (brots && /(br|brotli)/i.test(acceptEncoding)) extns.unshift(...brots);
    extns.push(...extensions);
    if (pathname.indexOf("%") !== -1) {
      try {
        pathname = decodeURI(pathname);
      } catch (_err) {
      }
    }
    const data = lookup2(pathname, extns) || isSPA && !isMatch2(pathname, ignores) && lookup2(fallback, extns);
    if (!data) return isNotFound ? isNotFound(request) : void 0;
    if (isEtag && request.headers.get("if-none-match") === data.headers["ETag"]) {
      return new Response(null, { status: 304 });
    }
    if (gzips || brots) {
      data.headers["Vary"] = "Accept-Encoding";
    }
    const response = send(request, data.abs, data.stats, data.headers);
    setHeaders3(response, pathname, data.stats);
    return response;
  };
}
function serveStatic2(dir, opts = {}) {
  dir = resolve2(dir || ".");
  const isNotFound = opts.onNoMatch;
  const setHeaders3 = opts.setHeaders || noop;
  const extensions = opts.extensions || ["html", "htm"];
  const gzips = opts.gzip && extensions.map((x4) => `${x4}.gz`).concat("gz");
  const brots = opts.brotli && extensions.map((x4) => `${x4}.br`).concat("br");
  const FILES = {};
  let fallback = "/";
  const isEtag = !!opts.etag;
  const isSPA = !!opts.single;
  if (typeof opts.single === "string") {
    const idx = opts.single.lastIndexOf(".");
    fallback += ~idx ? opts.single.substring(0, idx) : opts.single;
  }
  const ignores = [];
  if (opts.ignores !== false) {
    ignores.push(/[/]([A-Za-z\s\d~$._-]+\.\w+){1,}$/);
    if (opts.dotfiles) ignores.push(/\/\.\w/);
    else ignores.push(/\/\.well-known/);
    const optsIgnores = Array.isArray(opts.ignores) ? opts.ignores : opts.ignores ? [opts.ignores] : [];
    for (const x4 of optsIgnores) {
      ignores.push(new RegExp(x4, "i"));
    }
  }
  let cc = opts.maxAge != null && `public,max-age=${opts.maxAge}`;
  if (cc && opts.immutable) cc += ",immutable";
  else if (cc && opts.maxAge === 0) cc += ",must-revalidate";
  if (!opts.dev) {
    totalist(dir, (name, abs, stats) => {
      if (/\.well-known[\\+/]/.test(name)) ;
      else if (!opts.dotfiles && /(^\.|[\\+|/+]\.)/.test(name)) return;
      const headers = toHeaders(name, stats, isEtag);
      if (cc) headers["Cache-Control"] = cc;
      FILES[`/${name.normalize().replace(/\\+/g, "/")}`] = { abs, stats, headers };
    });
  }
  const lookupFn = opts.dev ? (uri, extns) => viaLocal(dir, isEtag, uri, extns) : (uri, extns) => viaCache(FILES, uri, extns);
  return createUniversalMiddleware(
    isEtag,
    isSPA,
    ignores,
    lookupFn,
    extensions,
    gzips,
    brots,
    setHeaders3,
    isNotFound,
    fallback
  );
}
var urlSymbol4, noop, ENCODING;
var init_chunk_YEXUR7AM = __esm({
  "node_modules/@universal-middleware/sirv/dist/chunk-YEXUR7AM.js"() {
    init_mrmime();
    init_sync();
    urlSymbol4 = /* @__PURE__ */ Symbol.for("unUrl");
    noop = () => {
    };
    ENCODING = {
      ".br": "br",
      ".gz": "gzip"
    };
  }
});

// node_modules/@universal-middleware/sirv/dist/middleware.js
var middleware_exports2 = {};
__export(middleware_exports2, {
  default: () => serveStatic2
});
var init_middleware2 = __esm({
  "node_modules/@universal-middleware/sirv/dist/middleware.js"() {
    init_chunk_YEXUR7AM();
  }
});

// .vercel/output/_tmp/chunks/chunk-Dt4-EpyD.js
var chunk_Dt4_EpyD_exports = {};
var init_chunk_Dt4_EpyD = __esm({
  ".vercel/output/_tmp/chunks/chunk-Dt4-EpyD.js"() {
    "use strict";
    throw new Error(`Could not resolve "@hono/node-server" imported by "@photonjs/hono".`);
  }
});

// node_modules/vike/dist/server/__internal/index.js
init_globalContext();
init_route();
init_globalContext();
init_assertSetup();

// .vercel/output/_tmp/entry.mjs
globalThis.__VIKE__IS_DEV = false;
globalThis.__VIKE__IS_CLIENT = false;
globalThis.__VIKE__IS_DEBUG = false;
var pageFilesLazy = {};
var pageFilesEager = {};
var pageFilesExportNamesLazy = {};
var pageFilesExportNamesEager = {};
var pageFilesList = [];
var neverLoaded = {};
var pageConfigsSerialized = [
  {
    pageId: "/src/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadVirtualFilePageEntry: () => ({ moduleId: "virtual:vike:page-entry:server:/src/pages/_error", moduleExportsPromise: Promise.resolve().then(() => (init_src_pages_error(), src_pages_error_exports)) }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-solid/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/src/pages/dashboard",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/dashboard", "definedAtLocation": "/src/pages/dashboard/" },
    loadVirtualFilePageEntry: () => ({ moduleId: "virtual:vike:page-entry:server:/src/pages/dashboard", moduleExportsPromise: Promise.resolve().then(() => (init_src_pages_dashboard(), src_pages_dashboard_exports)) }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-solid/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/src/pages/dashboard/settings",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/dashboard/settings", "definedAtLocation": "/src/pages/dashboard/settings/" },
    loadVirtualFilePageEntry: () => ({ moduleId: "virtual:vike:page-entry:server:/src/pages/dashboard/settings", moduleExportsPromise: Promise.resolve().then(() => (init_src_pages_dashboard_settings(), src_pages_dashboard_settings_exports)) }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-solid/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/src/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedAtLocation": "/src/pages/index/" },
    loadVirtualFilePageEntry: () => ({ moduleId: "virtual:vike:page-entry:server:/src/pages/index", moduleExportsPromise: Promise.resolve().then(() => (init_src_pages_index(), src_pages_index_exports)) }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-solid/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
var pageConfigGlobalSerialized = {
  configValuesSerialized: {
    ["photon"]: {
      type: "standard",
      definedAtData: { "filePathToShowToUser": "/src/pages/+config.ts", "fileExportPathToShowToUser": ["default", "photon"] },
      valueSerialized: {
        type: "js-serialized",
        value: { "server": "src/server/server.ts" }
      }
    }
  }
};
var pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
var pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
var pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
var pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
var pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
var pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
var pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
var pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
var virtualFileExportsGlobalEntry = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
    "_chunk-Bvgzj0lC.js": {
      "file": "assets/chunks/chunk-Bvgzj0lC.js",
      "name": "_Layout",
      "imports": [
        "_chunk-CA_lTzOx.js"
      ]
    },
    "_chunk-CA_lTzOx.js": {
      "file": "assets/chunks/chunk-CA_lTzOx.js",
      "name": "_Layout",
      "imports": [
        "_chunk-NKvcOzAe.js"
      ]
    },
    "_chunk-NKvcOzAe.js": {
      "file": "assets/chunks/chunk-NKvcOzAe.js",
      "name": "renderPageClient"
    },
    "node_modules/vike/dist/client/runtime-client-routing/entry.js": {
      "file": "assets/entries/entry-client-routing.B1pswtJ4.js",
      "name": "entries/entry-client-routing",
      "src": "node_modules/vike/dist/client/runtime-client-routing/entry.js",
      "isEntry": true,
      "imports": [
        "_chunk-NKvcOzAe.js"
      ],
      "dynamicImports": [
        "virtual:vike:page-entry:client:/src/pages/_error",
        "virtual:vike:page-entry:client:/src/pages/dashboard",
        "virtual:vike:page-entry:client:/src/pages/dashboard/settings",
        "virtual:vike:page-entry:client:/src/pages/index"
      ]
    },
    "virtual:vike:page-entry:client:/src/pages/_error": {
      "file": "assets/entries/src_pages_error.CTkzmn2A.js",
      "name": "entries/src/pages/_error",
      "src": "virtual:vike:page-entry:client:/src/pages/_error",
      "isEntry": true,
      "isDynamicEntry": true,
      "imports": [
        "_chunk-CA_lTzOx.js",
        "_chunk-NKvcOzAe.js"
      ]
    },
    "virtual:vike:page-entry:client:/src/pages/dashboard": {
      "file": "assets/entries/src_pages_dashboard.Cp17wKLO.js",
      "name": "entries/src/pages/dashboard",
      "src": "virtual:vike:page-entry:client:/src/pages/dashboard",
      "isEntry": true,
      "isDynamicEntry": true,
      "imports": [
        "_chunk-CA_lTzOx.js",
        "_chunk-Bvgzj0lC.js",
        "_chunk-NKvcOzAe.js"
      ]
    },
    "virtual:vike:page-entry:client:/src/pages/dashboard/settings": {
      "file": "assets/entries/src_pages_dashboard_settings.VxZQ2axB.js",
      "name": "entries/src/pages/dashboard/settings",
      "src": "virtual:vike:page-entry:client:/src/pages/dashboard/settings",
      "isEntry": true,
      "isDynamicEntry": true,
      "imports": [
        "_chunk-CA_lTzOx.js",
        "_chunk-Bvgzj0lC.js",
        "_chunk-NKvcOzAe.js"
      ]
    },
    "virtual:vike:page-entry:client:/src/pages/index": {
      "file": "assets/entries/src_pages_index.CkEiAZwk.js",
      "name": "entries/src/pages/index",
      "src": "virtual:vike:page-entry:client:/src/pages/index",
      "isEntry": true,
      "isDynamicEntry": true,
      "imports": [
        "_chunk-CA_lTzOx.js",
        "_chunk-NKvcOzAe.js"
      ]
    }
  };
  const buildInfo = {
    "versionAtBuildTime": "0.4.249",
    "usesClientRouter": false,
    "viteConfigRuntime": {
      "root": "/Users/carlo/Desktop/Projects/vike-deploy-examples/vercel",
      "build": {
        "outDir": "/Users/carlo/Desktop/Projects/vike-deploy-examples/vercel/.vercel/output/_tmp/"
      },
      "_baseViteOriginal": "/__UNSET__",
      "vitePluginServerEntry": {
        "inject": true
      }
    }
  };
  setGlobalContext_prodBuildEntry({
    virtualFileExportsGlobalEntry,
    assetsManifest,
    buildInfo
  });
}

// node_modules/@universal-middleware/vercel/dist/chunk-MLKGABMK.js
var __defProp2 = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};

// node_modules/@universal-middleware/vercel/dist/chunk-HMLRVC6I.js
var fastify_exports = {};
__export2(fastify_exports, {
  createNodeHandler: () => createNodeHandler
});
function createNodeHandler(app2) {
  const ready = app2.ready();
  return async function fastifyHandlerVercelNode(message, response) {
    await ready;
    app2.server.emit("request", message, response);
  };
}

// node_modules/@universal-middleware/vercel/dist/chunk-VJ2CJ3VS.js
var srvx_exports = {};
__export2(srvx_exports, {
  createNodeHandler: () => createNodeHandler2
});
function createNodeHandler2(app2) {
  const fn = typeof app2 === "function" ? app2 : app2.fetch;
  return async function srvxHandlerVercelNode(message, response) {
    const { createRequestAdapter: createRequestAdapter2, sendResponse: sendResponse2 } = await Promise.resolve().then(() => (init_dist4(), dist_exports));
    const requestAdapter = createRequestAdapter2();
    const request = requestAdapter(message);
    const res = await fn(request);
    return sendResponse2(res, response);
  };
}

// node_modules/@universal-middleware/vercel/dist/chunk-GL4N5T4L.js
var express_exports = {};
__export2(express_exports, {
  createNodeHandler: () => createNodeHandler3
});
var expressErrorHandler = (err2, _req, res, _next) => {
  if (err2) {
    if (err2 instanceof Error) {
      res.status(500).send(err2.stack ?? err2.message);
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
};
function createNodeHandler3(app2, errorHandler2 = true) {
  if (errorHandler2) {
    app2.use(expressErrorHandler);
  }
  return app2;
}

// node_modules/@universal-middleware/vercel/dist/chunk-XHNSRAUC.js
init_dist4();
var hono_exports = {};
__export2(hono_exports, {
  createNodeHandler: () => createNodeHandler4
});
function createNodeHandler4(app2) {
  const requestAdapter = createRequestAdapter();
  return async function honoHandlerVercelNode(message, response) {
    const request = requestAdapter(message);
    const res = await app2.fetch(request);
    return sendResponse(res, response);
  };
}

// node_modules/@universal-middleware/vercel/dist/chunk-YIU7JTH7.js
var h3_exports = {};
__export2(h3_exports, {
  createNodeHandler: () => createNodeHandler5
});
function createNodeHandler5(app2) {
  let handler;
  return async function h3HandlerVercelNode(message, response) {
    if (!handler) {
      const { toNodeListener: toNodeListener2 } = await Promise.resolve().then(() => (init_node2(), node_exports));
      handler = toNodeListener2(app2);
    }
    return handler(message, response);
  };
}

// node_modules/@universal-middleware/vercel/dist/chunk-MFQX5MIX.js
function createContext2(request, platformName) {
  return {
    request,
    // TODO: Support the newer `Forwarded` standard header
    ip: (request.headers.get("x-forwarded-for") || "").split(",", 1)[0].trim(),
    waitUntil() {
    },
    passThrough() {
    },
    platform: {
      name: platformName
    },
    env(variable) {
      return process.env[variable];
    }
  };
}

// node_modules/@universal-middleware/vercel/dist/chunk-Z7IXYJ6V.js
init_dist4();
var hattip_exports = {};
__export2(hattip_exports, {
  createNodeHandler: () => createNodeHandler6
});
function createNodeHandler6(app2) {
  const handler = app2.buildHandler();
  const requestAdapter = createRequestAdapter();
  return async function hattipHandlerVercelNode(message, response) {
    const request = requestAdapter(message);
    const res = await handler(createContext2(request, "vercel-node"));
    return sendResponse(res, response);
  };
}

// node_modules/@universal-middleware/vercel/dist/chunk-TBXIPKXB.js
var elysia_exports = {};
__export2(elysia_exports, {
  createNodeHandler: () => createNodeHandler7
});
function createNodeHandler7(_app) {
  throw new Error("Elysia is not supported on Vercel Node.");
}

// node_modules/@universal-middleware/vercel/dist/node/servers.js
var node_default = {
  elysia: elysia_exports,
  express: express_exports,
  fastify: fastify_exports,
  h3: h3_exports,
  hattip: hattip_exports,
  hono: hono_exports,
  srvx: srvx_exports
};

// node_modules/@universal-middleware/core/dist/index.js
init_dist2();
var universalSymbol2 = /* @__PURE__ */ Symbol.for("universal");
var unboundSymbol2 = /* @__PURE__ */ Symbol.for("unbound");
var contextSymbol2 = /* @__PURE__ */ Symbol.for("unContext");
var pathSymbol2 = /* @__PURE__ */ Symbol.for("unPath");
var methodSymbol2 = /* @__PURE__ */ Symbol.for("unMethod");
var orderSymbol2 = /* @__PURE__ */ Symbol.for("unOrder");
var nameSymbol2 = /* @__PURE__ */ Symbol.for("unName");
var urlSymbol2 = /* @__PURE__ */ Symbol.for("unUrl");
var optionsToSymbols = {
  name: nameSymbol2,
  method: methodSymbol2,
  path: pathSymbol2,
  order: orderSymbol2,
  context: contextSymbol2
};
function url2(request) {
  if (request[urlSymbol2]) {
    return request[urlSymbol2];
  }
  if (Object.isFrozen(request) || Object.isSealed(request)) {
    return new URL(request.url);
  }
  request[urlSymbol2] = new URL(request.url);
  return request[urlSymbol2];
}
function cloneRequest(request, fields) {
  if (!fields) {
    return request.clone();
  }
  return new Request(fields?.url ?? request.url, {
    method: fields?.method ?? request.method,
    headers: fields?.headers ?? request.headers,
    body: fields?.body ?? request.body,
    mode: fields?.mode ?? request.mode,
    credentials: fields?.credentials ?? request.credentials,
    cache: fields?.cache ?? request.cache,
    redirect: fields?.redirect ?? request.redirect,
    referrer: fields?.referrer ?? request.referrer,
    integrity: fields?.integrity ?? request.integrity,
    keepalive: fields?.keepalive ?? request.keepalive,
    referrerPolicy: fields?.referrerPolicy ?? request.referrerPolicy,
    signal: fields?.signal ?? request.signal,
    // @ts-expect-error RequestInit: duplex option is required when sending a body
    duplex: "half"
  });
}
function getUniversal2(subject) {
  return universalSymbol2 in subject ? subject[universalSymbol2] : subject;
}
function getUniversalProp2(subject, prop, defaultValue) {
  if (prop in subject) return subject[prop];
  if (universalSymbol2 in subject) return subject[universalSymbol2][prop];
  return defaultValue;
}
function enhance(middleware, options) {
  const { immutable, ...rest } = options;
  const m3 = immutable === false ? middleware : cloneFunction(middleware);
  for (const [key, value] of Object.entries(rest)) {
    if (key in optionsToSymbols) {
      m3[optionsToSymbols[key]] = value;
    }
  }
  return m3;
}
function ordered2(middlewares) {
  return Array.from(middlewares).sort(
    (a2, b2) => getUniversalProp2(a2, orderSymbol2, 0) - getUniversalProp2(b2, orderSymbol2, 0)
  );
}
function cloneFunction(originalFn) {
  const extendedFunction = function(...args) {
    return Reflect.apply(Object.getPrototypeOf(extendedFunction), this, args);
  };
  Object.setPrototypeOf(extendedFunction, originalFn);
  return extendedFunction;
}
function bindUniversal2(universal, fn, wrapper) {
  const unboundFn = unboundSymbol2 in fn ? fn[unboundSymbol2] : fn;
  const self2 = { [universalSymbol2]: universal, [unboundSymbol2]: unboundFn };
  const boundFn = unboundFn.bind(self2);
  Object.assign(boundFn, self2);
  return wrapper ? wrapper(boundFn) : boundFn;
}
function isHandler2(m3) {
  const order = getUniversalProp2(m3, orderSymbol2);
  const path = getUniversalProp2(m3, pathSymbol2);
  if (typeof order === "number") {
    if (order !== 0 && path) {
      console.warn(
        `Found a Universal Middleware with "path" metadata. This will lead to unpredictable behaviour. Please open an issue at https://github.com/magne4000/universal-middleware and explain your use case with the expected behaviour.`
      );
    }
    return order === 0;
  }
  return Boolean(path);
}
function pipe2(...a2) {
  const ordererArgs = ordered2(a2);
  const fn = async function pipeInternal(request, context, runtime) {
    const pending = [];
    let _response;
    for (const m3 of ordererArgs) {
      if (isHandler2(m3) && _response) {
        continue;
      }
      const um = getUniversal2(m3);
      const response = await um(request, context ?? {}, runtime);
      if (typeof response === "function") {
        pending.push(response);
      } else if (response !== null && typeof response === "object") {
        if (response instanceof Response) {
          if (!_response) {
            _response = response;
          }
        } else {
          context = response;
        }
      }
    }
    if (!_response) {
      throw new Error("No Response found");
    }
    for (const m3 of pending) {
      const r = await m3(_response);
      if (r) {
        _response = r;
      }
    }
    return _response;
  };
  if (!this?.noCast) {
    const lastMiddleware = a2.at(-1);
    if (lastMiddleware && universalSymbol2 in lastMiddleware) {
      return bindUniversal2(fn, lastMiddleware);
    }
  }
  return fn;
}
var NullProtoObj3 = /* @__PURE__ */ (() => {
  const e = function() {
  };
  return e.prototype = /* @__PURE__ */ Object.create(null), Object.freeze(e.prototype), e;
})();
function createRouter3() {
  return {
    root: { key: "" },
    static: new NullProtoObj3()
  };
}
function splitPath4(path) {
  const [_4, ...s3] = path.split("/");
  return s3[s3.length - 1] === "" ? s3.slice(0, -1) : s3;
}
function getMatchParams3(segments, paramsMap) {
  const params2 = new NullProtoObj3();
  for (const [index, name] of paramsMap) {
    const segment = index < 0 ? segments.slice(-(index + 1)).join("/") : segments[index];
    if (typeof name === "string") params2[name] = segment;
    else {
      const match2 = segment.match(name);
      if (match2) for (const key in match2.groups) params2[key] = match2.groups[key];
    }
  }
  return params2;
}
function addRoute3(ctx, method = "", path, data) {
  method = method.toUpperCase();
  if (path.charCodeAt(0) !== 47) path = `/${path}`;
  const segments = splitPath4(path);
  let node = ctx.root;
  let _unnamedParamIndex = 0;
  const paramsMap = [];
  const paramsRegexp = [];
  for (let i3 = 0; i3 < segments.length; i3++) {
    const segment = segments[i3];
    if (segment.startsWith("**")) {
      if (!node.wildcard) node.wildcard = { key: "**" };
      node = node.wildcard;
      paramsMap.push([
        -(i3 + 1),
        segment.split(":")[1] || "_",
        segment.length === 2
      ]);
      break;
    }
    if (segment === "*" || segment.includes(":")) {
      if (!node.param) node.param = { key: "*" };
      node = node.param;
      if (segment === "*") paramsMap.push([
        i3,
        `_${_unnamedParamIndex++}`,
        true
      ]);
      else if (segment.includes(":", 1)) {
        const regexp = getParamRegexp3(segment);
        paramsRegexp[i3] = regexp;
        node.hasRegexParam = true;
        paramsMap.push([
          i3,
          regexp,
          false
        ]);
      } else paramsMap.push([
        i3,
        segment.slice(1),
        false
      ]);
      continue;
    }
    const child = node.static?.[segment];
    if (child) node = child;
    else {
      const staticNode = { key: segment };
      if (!node.static) node.static = new NullProtoObj3();
      node.static[segment] = staticNode;
      node = staticNode;
    }
  }
  const hasParams = paramsMap.length > 0;
  if (!node.methods) node.methods = new NullProtoObj3();
  node.methods[method] ??= [];
  node.methods[method].push({
    data: data || null,
    paramsRegexp,
    paramsMap: hasParams ? paramsMap : void 0
  });
  if (!hasParams) ctx.static[path] = node;
}
function getParamRegexp3(segment) {
  const regex = segment.replace(/:(\w+)/g, (_4, id) => `(?<${id}>[^/]+)`).replace(/\./g, "\\.");
  return /* @__PURE__ */ new RegExp(`^${regex}$`);
}
function findRoute3(ctx, method = "", path, opts) {
  if (path.charCodeAt(path.length - 1) === 47) path = path.slice(0, -1);
  const staticNode = ctx.static[path];
  if (staticNode && staticNode.methods) {
    const staticMatch = staticNode.methods[method] || staticNode.methods[""];
    if (staticMatch !== void 0) return staticMatch[0];
  }
  const segments = splitPath4(path);
  const match2 = _lookupTree3(ctx, ctx.root, method, segments, 0)?.[0];
  if (match2 === void 0) return;
  if (opts?.params === false) return match2;
  return {
    data: match2.data,
    params: match2.paramsMap ? getMatchParams3(segments, match2.paramsMap) : void 0
  };
}
function _lookupTree3(ctx, node, method, segments, index) {
  if (index === segments.length) {
    if (node.methods) {
      const match2 = node.methods[method] || node.methods[""];
      if (match2) return match2;
    }
    if (node.param && node.param.methods) {
      const match2 = node.param.methods[method] || node.param.methods[""];
      if (match2) {
        const pMap = match2[0].paramsMap;
        if (pMap?.[pMap?.length - 1]?.[2]) return match2;
      }
    }
    if (node.wildcard && node.wildcard.methods) {
      const match2 = node.wildcard.methods[method] || node.wildcard.methods[""];
      if (match2) {
        const pMap = match2[0].paramsMap;
        if (pMap?.[pMap?.length - 1]?.[2]) return match2;
      }
    }
    return;
  }
  const segment = segments[index];
  if (node.static) {
    const staticChild = node.static[segment];
    if (staticChild) {
      const match2 = _lookupTree3(ctx, staticChild, method, segments, index + 1);
      if (match2) return match2;
    }
  }
  if (node.param) {
    const match2 = _lookupTree3(ctx, node.param, method, segments, index + 1);
    if (match2) {
      if (node.param.hasRegexParam) {
        const exactMatch = match2.find((m3) => m3.paramsRegexp[index]?.test(segment)) || match2.find((m3) => !m3.paramsRegexp[index]);
        return exactMatch ? [exactMatch] : void 0;
      }
      return match2;
    }
  }
  if (node.wildcard && node.wildcard.methods) return node.wildcard.methods[method] || node.wildcard.methods[""];
}
var UniversalRouter2 = class {
  router;
  #middlewares;
  #pipeMiddlewaresInUniversalRoute;
  #handle404;
  constructor(pipeMiddlewaresInUniversalRoute = true, handle404 = false) {
    this.router = createRouter3();
    this.#middlewares = [];
    this.#pipeMiddlewaresInUniversalRoute = pipeMiddlewaresInUniversalRoute;
    this.#handle404 = handle404;
  }
  use(middleware) {
    this.#middlewares.push(middleware);
    return this;
  }
  route(handler) {
    const { path, method } = assertRoute2(handler);
    const umHandler = getUniversal2(handler);
    if (Array.isArray(method)) {
      for (const m3 of method) {
        addRoute3(this.router, m3, path, umHandler);
      }
    } else {
      addRoute3(this.router, method, path, umHandler);
    }
    return this;
  }
  applyCatchAll() {
    if (this.#handle404) {
      for (const method of ["GET", "POST", "PATCH"]) {
        addRoute3(this.router, method, "/**", () => {
          return new Response("NOT FOUND", {
            status: 404
          });
        });
      }
    }
    return this;
  }
  get [universalSymbol2]() {
    const noCastPipe = pipe2.bind({ noCast: true });
    return (request, ctx, runtime) => {
      const router = findRoute3(this.router, request.method, url2(request).pathname);
      if (router) {
        const routerCtx = getUniversalProp2(router.data, contextSymbol2);
        if (routerCtx) {
          Object.assign(ctx, routerCtx);
        }
        const handler = this.#pipeMiddlewaresInUniversalRoute && this.#middlewares.length > 0 ? (
          // biome-ignore lint/suspicious/noExplicitAny: ignored
          noCastPipe(...this.#middlewares, router.data)
        ) : router.data;
        if (router.params) {
          runtime.params ??= {};
          Object.assign(runtime.params, router.params);
        }
        return handler(request, ctx, runtime);
      }
      if (this.#pipeMiddlewaresInUniversalRoute && this.#middlewares.length > 0) {
        const middlewares = noCastPipe(...this.#middlewares);
        return middlewares(request, ctx, runtime);
      }
      if (this.#handle404) {
        return new Response("NOT FOUND", {
          status: 404
        });
      }
    };
  }
};
function assertRoute2(middleware) {
  const path = getUniversalProp2(middleware, pathSymbol2);
  if (!path) {
    const name = getUniversalProp2(middleware, nameSymbol2);
    throw new TypeError(assertRouteErrorMessage2("path", name));
  }
  const method = getUniversalProp2(middleware, methodSymbol2);
  if (!method) {
    const name = getUniversalProp2(middleware, nameSymbol2);
    throw new TypeError(assertRouteErrorMessage2("method", name));
  }
  return { path, method };
}
function assertRouteErrorMessage2(key, name) {
  if (name) {
    return `Route ${name} is defined without a "${key}". See https://universal-middleware.dev/helpers/enhance for details.`;
  }
  return `Unnamed route is defined without a "${key}". See https://universal-middleware.dev/helpers/enhance for details.`;
}

// node_modules/@universal-middleware/hono/node_modules/@universal-middleware/core/dist/index.js
init_dist2();
var knownUserAgents2 = {
  deno: "Deno",
  bun: "Bun",
  workerd: "Cloudflare-Workers",
  node: "Node.js"
};
var _getRuntimeKey2 = () => {
  const global2 = globalThis;
  const userAgentSupported = typeof navigator !== "undefined" && typeof navigator.userAgent === "string";
  if (userAgentSupported) {
    for (const [runtimeKey22, userAgent] of Object.entries(knownUserAgents2)) {
      if (checkUserAgentEquals2(userAgent)) {
        return runtimeKey22;
      }
    }
  }
  if (typeof global2?.EdgeRuntime === "string") {
    return "edge-light";
  }
  if (global2?.fastly !== void 0) {
    return "fastly";
  }
  if (global2?.process?.release?.name === "node") {
    return "node";
  }
  return "other";
};
var runtimeKey2;
var getRuntimeKey2 = () => {
  if (runtimeKey2 === void 0) {
    runtimeKey2 = _getRuntimeKey2();
  }
  return runtimeKey2;
};
var checkUserAgentEquals2 = (platform) => {
  const userAgent = navigator.userAgent;
  return userAgent.startsWith(platform);
};
function getRuntime3(args) {
  const key = getRuntimeKey2();
  return {
    runtime: key,
    ...args
  };
}
function getAdapter2(key, args) {
  return {
    adapter: key,
    ...args
  };
}
function getAdapterRuntime2(adapter, adapterArgs, runtimeArgs) {
  const a2 = getAdapter2(adapter, adapterArgs);
  const r = getRuntime3(runtimeArgs);
  return { ...r, ...a2 };
}
var universalSymbol3 = /* @__PURE__ */ Symbol.for("universal");
var unboundSymbol3 = /* @__PURE__ */ Symbol.for("unbound");
var contextSymbol3 = /* @__PURE__ */ Symbol.for("unContext");
var pathSymbol3 = /* @__PURE__ */ Symbol.for("unPath");
var methodSymbol3 = /* @__PURE__ */ Symbol.for("unMethod");
var orderSymbol3 = /* @__PURE__ */ Symbol.for("unOrder");
var nameSymbol3 = /* @__PURE__ */ Symbol.for("unName");
var urlSymbol3 = /* @__PURE__ */ Symbol.for("unUrl");
function url3(request) {
  if (request[urlSymbol3]) {
    return request[urlSymbol3];
  }
  if (Object.isFrozen(request) || Object.isSealed(request)) {
    return new URL(request.url);
  }
  request[urlSymbol3] = new URL(request.url);
  return request[urlSymbol3];
}
function getUniversal3(subject) {
  return universalSymbol3 in subject ? subject[universalSymbol3] : subject;
}
function getUniversalProp3(subject, prop, defaultValue) {
  if (prop in subject) return subject[prop];
  if (universalSymbol3 in subject) return subject[universalSymbol3][prop];
  return defaultValue;
}
function ordered3(middlewares) {
  return Array.from(middlewares).sort(
    (a2, b2) => getUniversalProp3(a2, orderSymbol3, 0) - getUniversalProp3(b2, orderSymbol3, 0)
  );
}
function bindUniversal3(universal, fn, wrapper) {
  const unboundFn = unboundSymbol3 in fn ? fn[unboundSymbol3] : fn;
  const self2 = { [universalSymbol3]: universal, [unboundSymbol3]: unboundFn };
  const boundFn = unboundFn.bind(self2);
  Object.assign(boundFn, self2);
  return wrapper ? wrapper(boundFn) : boundFn;
}
function isHandler3(m3) {
  const order = getUniversalProp3(m3, orderSymbol3);
  const path = getUniversalProp3(m3, pathSymbol3);
  if (typeof order === "number") {
    if (order !== 0 && path) {
      console.warn(
        `Found a Universal Middleware with "path" metadata. This will lead to unpredictable behaviour. Please open an issue at https://github.com/magne4000/universal-middleware and explain your use case with the expected behaviour.`
      );
    }
    return order === 0;
  }
  return Boolean(path);
}
function pipe3(...a2) {
  const ordererArgs = ordered3(a2);
  const fn = async function pipeInternal(request, context, runtime) {
    const pending = [];
    let _response;
    for (const m3 of ordererArgs) {
      if (isHandler3(m3) && _response) {
        continue;
      }
      const um = getUniversal3(m3);
      const response = await um(request, context ?? {}, runtime);
      if (typeof response === "function") {
        pending.push(response);
      } else if (response !== null && typeof response === "object") {
        if (response instanceof Response) {
          if (!_response) {
            _response = response;
          }
        } else {
          context = response;
        }
      }
    }
    if (!_response) {
      throw new Error("No Response found");
    }
    for (const m3 of pending) {
      const r = await m3(_response);
      if (r) {
        _response = r;
      }
    }
    return _response;
  };
  if (!this?.noCast) {
    const lastMiddleware = a2.at(-1);
    if (lastMiddleware && universalSymbol3 in lastMiddleware) {
      return bindUniversal3(fn, lastMiddleware);
    }
  }
  return fn;
}
var NullProtoObj4 = /* @__PURE__ */ (() => {
  const e = function() {
  };
  return e.prototype = /* @__PURE__ */ Object.create(null), Object.freeze(e.prototype), e;
})();
function createRouter4() {
  const ctx = {
    root: { key: "" },
    static: new NullProtoObj4()
  };
  return ctx;
}
function splitPath5(path) {
  const [_4, ...s3] = path.split("/");
  return s3[s3.length - 1] === "" ? s3.slice(0, -1) : s3;
}
function getMatchParams4(segments, paramsMap) {
  const params2 = new NullProtoObj4();
  for (const [index, name] of paramsMap) {
    const segment = index < 0 ? segments.slice(-1 * index).join("/") : segments[index];
    if (typeof name === "string") params2[name] = segment;
    else {
      const match2 = segment.match(name);
      if (match2) for (const key in match2.groups) params2[key] = match2.groups[key];
    }
  }
  return params2;
}
function addRoute4(ctx, method = "", path, data) {
  method = method.toUpperCase();
  if (path.charCodeAt(0) !== 47) path = `/${path}`;
  const segments = splitPath5(path);
  let node = ctx.root;
  let _unnamedParamIndex = 0;
  const paramsMap = [];
  const paramsRegexp = [];
  for (let i3 = 0; i3 < segments.length; i3++) {
    const segment = segments[i3];
    if (segment.startsWith("**")) {
      if (!node.wildcard) node.wildcard = { key: "**" };
      node = node.wildcard;
      paramsMap.push([
        -i3,
        segment.split(":")[1] || "_",
        segment.length === 2
      ]);
      break;
    }
    if (segment === "*" || segment.includes(":")) {
      if (!node.param) node.param = { key: "*" };
      node = node.param;
      if (segment === "*") paramsMap.push([
        i3,
        `_${_unnamedParamIndex++}`,
        true
      ]);
      else if (segment.includes(":", 1)) {
        const regexp = getParamRegexp4(segment);
        paramsRegexp[i3] = regexp;
        node.hasRegexParam = true;
        paramsMap.push([
          i3,
          regexp,
          false
        ]);
      } else paramsMap.push([
        i3,
        segment.slice(1),
        false
      ]);
      continue;
    }
    const child = node.static?.[segment];
    if (child) node = child;
    else {
      const staticNode = { key: segment };
      if (!node.static) node.static = new NullProtoObj4();
      node.static[segment] = staticNode;
      node = staticNode;
    }
  }
  const hasParams = paramsMap.length > 0;
  if (!node.methods) node.methods = new NullProtoObj4();
  node.methods[method] ??= [];
  node.methods[method].push({
    data: data || null,
    paramsRegexp,
    paramsMap: hasParams ? paramsMap : void 0
  });
  if (!hasParams) ctx.static[path] = node;
}
function getParamRegexp4(segment) {
  const regex = segment.replace(/:(\w+)/g, (_4, id) => `(?<${id}>[^/]+)`).replace(/\./g, "\\.");
  return new RegExp(`^${regex}$`);
}
function findRoute4(ctx, method = "", path, opts) {
  if (path.charCodeAt(path.length - 1) === 47) path = path.slice(0, -1);
  const staticNode = ctx.static[path];
  if (staticNode && staticNode.methods) {
    const staticMatch = staticNode.methods[method] || staticNode.methods[""];
    if (staticMatch !== void 0) return staticMatch[0];
  }
  const segments = splitPath5(path);
  const match2 = _lookupTree4(ctx, ctx.root, method, segments, 0)?.[0];
  if (match2 === void 0) return;
  if (opts?.params === false) return match2;
  return {
    data: match2.data,
    params: match2.paramsMap ? getMatchParams4(segments, match2.paramsMap) : void 0
  };
}
function _lookupTree4(ctx, node, method, segments, index) {
  if (index === segments.length) {
    if (node.methods) {
      const match2 = node.methods[method] || node.methods[""];
      if (match2) return match2;
    }
    if (node.param && node.param.methods) {
      const match2 = node.param.methods[method] || node.param.methods[""];
      if (match2) {
        const pMap = match2[0].paramsMap;
        if (pMap?.[pMap?.length - 1]?.[2]) return match2;
      }
    }
    if (node.wildcard && node.wildcard.methods) {
      const match2 = node.wildcard.methods[method] || node.wildcard.methods[""];
      if (match2) {
        const pMap = match2[0].paramsMap;
        if (pMap?.[pMap?.length - 1]?.[2]) return match2;
      }
    }
    return void 0;
  }
  const segment = segments[index];
  if (node.static) {
    const staticChild = node.static[segment];
    if (staticChild) {
      const match2 = _lookupTree4(ctx, staticChild, method, segments, index + 1);
      if (match2) return match2;
    }
  }
  if (node.param) {
    const match2 = _lookupTree4(ctx, node.param, method, segments, index + 1);
    if (match2) {
      if (node.param.hasRegexParam) {
        const exactMatch = match2.find((m3) => m3.paramsRegexp[index]?.test(segment)) || match2.find((m3) => !m3.paramsRegexp[index]);
        return exactMatch ? [exactMatch] : void 0;
      }
      return match2;
    }
  }
  if (node.wildcard && node.wildcard.methods) return node.wildcard.methods[method] || node.wildcard.methods[""];
  return;
}
var UniversalRouter3 = class {
  router;
  #middlewares;
  #pipeMiddlewaresInUniversalRoute;
  #handle404;
  constructor(pipeMiddlewaresInUniversalRoute = true, handle404 = false) {
    this.router = createRouter4();
    this.#middlewares = [];
    this.#pipeMiddlewaresInUniversalRoute = pipeMiddlewaresInUniversalRoute;
    this.#handle404 = handle404;
  }
  use(middleware) {
    this.#middlewares.push(middleware);
    return this;
  }
  route(handler) {
    const { path, method } = assertRoute3(handler);
    const umHandler = getUniversal3(handler);
    if (Array.isArray(method)) {
      for (const m3 of method) {
        addRoute4(this.router, m3, path, umHandler);
      }
    } else {
      addRoute4(this.router, method, path, umHandler);
    }
    return this;
  }
  applyCatchAll() {
    if (this.#handle404) {
      for (const method of ["GET", "POST", "PATCH"]) {
        addRoute4(this.router, method, "/**", () => {
          return new Response("NOT FOUND", {
            status: 404
          });
        });
      }
    }
    return this;
  }
  get [universalSymbol3]() {
    const noCastPipe = pipe3.bind({ noCast: true });
    return (request, ctx, runtime) => {
      const router = findRoute4(this.router, request.method, url3(request).pathname);
      if (router) {
        const routerCtx = getUniversalProp3(router.data, contextSymbol3);
        if (routerCtx) {
          Object.assign(ctx, routerCtx);
        }
        const handler = this.#pipeMiddlewaresInUniversalRoute && this.#middlewares.length > 0 ? (
          // biome-ignore lint/suspicious/noExplicitAny: ignored
          noCastPipe(...this.#middlewares, router.data)
        ) : router.data;
        if (router.params) {
          runtime.params ??= {};
          Object.assign(runtime.params, router.params);
        }
        return handler(request, ctx, runtime);
      }
      if (this.#pipeMiddlewaresInUniversalRoute && this.#middlewares.length > 0) {
        const middlewares = noCastPipe(...this.#middlewares);
        return middlewares(request, ctx, runtime);
      }
      if (this.#handle404) {
        return new Response("NOT FOUND", {
          status: 404
        });
      }
    };
  }
};
function apply4(router, middlewares, defer) {
  const ms = ordered3(middlewares);
  for (const m3 of ms) {
    if (isHandler3(m3)) {
      router.route(m3);
    } else {
      router.use(m3);
    }
  }
  if (!defer) {
    router.applyCatchAll();
  }
}
function assertRoute3(middleware) {
  const path = getUniversalProp3(middleware, pathSymbol3);
  if (!path) {
    const name = getUniversalProp3(middleware, nameSymbol3);
    throw new TypeError(assertRouteErrorMessage3("path", name));
  }
  const method = getUniversalProp3(middleware, methodSymbol3);
  if (!method) {
    const name = getUniversalProp3(middleware, nameSymbol3);
    throw new TypeError(assertRouteErrorMessage3("method", name));
  }
  return { path, method };
}
function assertRouteErrorMessage3(key, name) {
  if (name) {
    return `Route ${name} is defined without a "${key}". See https://universal-middleware.dev/helpers/enhance for details.`;
  }
  return `Unnamed route is defined without a "${key}". See https://universal-middleware.dev/helpers/enhance for details.`;
}

// node_modules/@universal-middleware/hono/dist/index.js
function getExecutionCtx(honoContext) {
  try {
    return honoContext.executionCtx;
  } catch {
    return;
  }
}
function createHandler2(handlerFactory) {
  return (...args) => {
    const handler = handlerFactory(...args);
    return bindUniversal3(handler, async function universalHandlerHono(honoContext, next) {
      const context = initContext(honoContext);
      const response = await this[universalSymbol3](
        honoContext.req.raw,
        context,
        getRuntime4(honoContext)
      );
      if (response) {
        return response.clone();
      }
      await next();
    });
  };
}
function createMiddleware2(middlewareFactory) {
  return (...args) => {
    const middleware = middlewareFactory(...args);
    return bindUniversal3(middleware, async function universalMiddlewareHono(honoContext, next) {
      const context = initContext(honoContext);
      const response = await this[universalSymbol3](honoContext.req.raw, context, getRuntime4(honoContext));
      if (typeof response === "function") {
        await next();
        const res = await response(honoContext.res);
        if (res) {
          honoContext.res = res;
        }
      } else if (response !== null && typeof response === "object") {
        if (response instanceof Response) {
          return response.clone();
        }
        setContext(honoContext, response);
        return next();
      } else {
        return next();
      }
    });
  };
}
function initContext(honoContext) {
  let ctx = getContext2(honoContext);
  if (ctx === void 0) {
    ctx = {};
    setContext(honoContext, ctx);
  }
  return ctx;
}
function setContext(honoContext, value) {
  honoContext.set(contextSymbol3, value);
  if (honoContext.env) {
    honoContext.env[contextSymbol3] = value;
  }
  if (honoContext.env?.eventContext?.env) {
    honoContext.env.eventContext.env[contextSymbol3] = value;
  }
}
function getContext2(honoContext) {
  return honoContext.get(contextSymbol3) ?? honoContext.env?.[contextSymbol3] ?? honoContext.env?.eventContext?.env[contextSymbol3];
}
function getRuntime4(honoContext) {
  let params;
  const ctx = getExecutionCtx(honoContext);
  try {
    params = honoContext.req.param();
  } catch {
    if (ctx) {
      params = ctx.params ?? void 0;
    }
  }
  return getAdapterRuntime2(
    "hono",
    {
      params,
      hono: honoContext
    },
    {
      env: honoContext.env,
      ctx,
      req: honoContext.env?.incoming,
      res: honoContext.env?.outgoing
    }
  );
}
var UniversalHonoRouter = class extends UniversalRouter3 {
  #app;
  constructor(app2) {
    super(false);
    this.#app = app2;
  }
  use(middleware) {
    this.#app.use(createMiddleware2(() => getUniversal3(middleware))());
    return this;
  }
  applyCatchAll() {
    this.#app.all("/*", createHandler2(() => this[universalSymbol3])());
    return this;
  }
};
function apply5(app2, middlewares) {
  const router = new UniversalHonoRouter(app2);
  apply4(router, middlewares);
}

// node_modules/vike/dist/server/runtime/universal-middleware.js
init_renderPageServer();
async function universalVikeHandler(request, context, runtime) {
  const pageContextInit = {
    ...context,
    ...runtime,
    runtime,
    urlOriginal: request.url,
    headersOriginal: request.headers
  };
  const pageContext = await renderPageServer(pageContextInit);
  const response = pageContext.httpResponse;
  const readable = response.getReadableWebStream();
  return new Response(readable, {
    status: response.statusCode,
    headers: response.headers
  });
}

// .vercel/output/_tmp/index.mjs
init_runtime2();
init_picocolors();
import { dirname as dirname2, join as join3, isAbsolute as isAbsolute2 } from "path";
import { fileURLToPath } from "url";

// node_modules/@photonjs/vercel/dist/original-request-D1DL2s0M.js
function getOriginalRequest(request) {
  const xNowRouteMatchesHeader = request.headers.get("x-now-route-matches");
  const originalPath = new URL(request.url).searchParams.get("__original_path");
  let newUrl = null;
  let newRequest = request;
  if (originalPath) newUrl = new URL(originalPath, request.url).toString();
  else if (typeof xNowRouteMatchesHeader === "string") {
    const originalPathBis = new URLSearchParams(xNowRouteMatchesHeader).get("1");
    if (originalPathBis) newUrl = new URL(originalPathBis, request.url).toString();
  }
  if (newUrl) newRequest = new Request(newUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    mode: request.mode,
    credentials: request.credentials,
    cache: request.cache,
    redirect: request.redirect,
    referrer: request.referrer,
    integrity: request.integrity
  });
  return newRequest;
}

// node_modules/@photonjs/vercel/dist/universal-middleware-prod.js
var overrideVercelRequest = (request) => {
  Object.assign(request, getOriginalRequest(request));
};
var universal_middleware_prod_default = [enhance(overrideVercelRequest, {
  name: "vercel:request",
  immutable: true,
  order: Number.MIN_SAFE_INTEGER
})];

// node_modules/hono/dist/compose.js
var compose = (middleware, onError2, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i3) {
      if (i3 <= index) {
        throw new Error("next() called multiple times");
      }
      index = i3;
      let res;
      let isError2 = false;
      let handler;
      if (middleware[i3]) {
        handler = middleware[i3][0][0];
        context.req.routeIndex = i3;
      } else {
        handler = i3 === middleware.length && next || void 0;
      }
      if (handler) {
        try {
          res = await handler(context, () => dispatch(i3 + 1));
        } catch (err2) {
          if (err2 instanceof Error && onError2) {
            context.error = err2;
            res = await onError2(err2, context);
            isError2 = true;
          } else {
            throw err2;
          }
        }
      } else {
        if (context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      }
      if (res && (context.finalized === false || isError2)) {
        context.res = res;
      }
      return context;
    }
  };
};

// node_modules/hono/dist/request.js
init_http_exception();

// node_modules/hono/dist/request/constants.js
var GET_MATCH_RESULT = /* @__PURE__ */ Symbol();

// node_modules/hono/dist/utils/body.js
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
};
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    if (!key.endsWith("[]")) {
      form[key] = value;
    } else {
      form[key] = [value];
    }
  }
};
var handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};

// node_modules/hono/dist/request.js
init_url();
var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_);
var HonoRequest = class {
  /**
   * `.raw` can get the raw Request object.
   *
   * @see {@link https://hono.dev/docs/api/request#raw}
   *
   * @example
   * ```ts
   * // For Cloudflare Workers
   * app.post('/', async (c) => {
   *   const metadata = c.req.raw.cf?.hostMetadata?
   *   ...
   * })
   * ```
   */
  raw;
  #validatedData;
  // Short name of validatedData
  #matchResult;
  routeIndex = 0;
  /**
   * `.path` can get the pathname of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#path}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const pathname = c.req.path // `/about/me`
   * })
   * ```
   */
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param && /\%/.test(param) ? tryDecodeURIComponent(param) : param;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value !== void 0) {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  };
  /**
   * `.json()` can parse Request body of type `application/json`
   *
   * @see {@link https://hono.dev/docs/api/request#json}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.json()
   * })
   * ```
   */
  json() {
    return this.#cachedBody("text").then((text) => JSON.parse(text));
  }
  /**
   * `.text()` can parse Request body of type `text/plain`
   *
   * @see {@link https://hono.dev/docs/api/request#text}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.text()
   * })
   * ```
   */
  text() {
    return this.#cachedBody("text");
  }
  /**
   * `.arrayBuffer()` parse Request body as an `ArrayBuffer`
   *
   * @see {@link https://hono.dev/docs/api/request#arraybuffer}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.arrayBuffer()
   * })
   * ```
   */
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  /**
   * Parses the request body as a `Blob`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.blob();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#blob
   */
  blob() {
    return this.#cachedBody("blob");
  }
  /**
   * Parses the request body as `FormData`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.formData();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#formdata
   */
  formData() {
    return this.#cachedBody("formData");
  }
  /**
   * Adds validated data to the request.
   *
   * @param target - The target of the validation.
   * @param data - The validated data to add.
   */
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  /**
   * `.url()` can get the request url strings.
   *
   * @see {@link https://hono.dev/docs/api/request#url}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const url = c.req.url // `http://localhost:8787/about/me`
   *   ...
   * })
   * ```
   */
  get url() {
    return this.raw.url;
  }
  /**
   * `.method()` can get the method name of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#method}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const method = c.req.method // `GET`
   * })
   * ```
   */
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  /**
   * `.matchedRoutes()` can return a matched route in the handler
   *
   * @deprecated
   *
   * Use matchedRoutes helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#matchedroutes}
   *
   * @example
   * ```ts
   * app.use('*', async function logger(c, next) {
   *   await next()
   *   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
   *     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
   *     console.log(
   *       method,
   *       ' ',
   *       path,
   *       ' '.repeat(Math.max(10 - path.length, 0)),
   *       name,
   *       i === c.req.routeIndex ? '<- respond from here' : ''
   *     )
   *   })
   * })
   * ```
   */
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route2]]) => route2);
  }
  /**
   * `routePath()` can retrieve the path registered within the handler
   *
   * @deprecated
   *
   * Use routePath helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#routepath}
   *
   * @example
   * ```ts
   * app.get('/posts/:id', (c) => {
   *   return c.json({ path: c.req.routePath })
   * })
   * ```
   */
  get routePath() {
    return this.#matchResult[0].map(([[, route2]]) => route2)[this.routeIndex].path;
  }
};

// node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c2) => c2({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = (contentType, headers) => {
  return {
    "Content-Type": contentType,
    ...headers
  };
};
var Context = class {
  #rawRequest;
  #req;
  /**
   * `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
   *
   * @see {@link https://hono.dev/docs/api/context#env}
   *
   * @example
   * ```ts
   * // Environment object for Cloudflare Workers
   * app.get('*', async c => {
   *   const counter = c.env.COUNTER
   * })
   * ```
   */
  env = {};
  #var;
  finalized = false;
  /**
   * `.error` can get the error object from the middleware if the Handler throws an error.
   *
   * @see {@link https://hono.dev/docs/api/context#error}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   await next()
   *   if (c.error) {
   *     // do something...
   *   }
   * })
   * ```
   */
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  /**
   * Creates an instance of the Context class.
   *
   * @param req - The Request object.
   * @param options - Optional configuration options for the context.
   */
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  /**
   * `.req` is the instance of {@link HonoRequest}.
   */
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#event}
   * The FetchEvent associated with the current request.
   *
   * @throws Will throw an error if the context does not have a FetchEvent.
   */
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#executionctx}
   * The ExecutionContext associated with the current request.
   *
   * @throws Will throw an error if the context does not have an ExecutionContext.
   */
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#res}
   * The Response object for the current request.
   */
  get res() {
    return this.#res ||= new Response(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  /**
   * Sets the Response object for the current request.
   *
   * @param _res - The Response object to set.
   */
  set res(_res) {
    if (this.#res && _res) {
      _res = new Response(_res.body, _res);
      for (const [k2, v2] of this.#res.headers.entries()) {
        if (k2 === "content-type") {
          continue;
        }
        if (k2 === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k2, v2);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  /**
   * `.render()` can create a response within a layout.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   return c.render('Hello!')
   * })
   * ```
   */
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  /**
   * Sets the layout for the response.
   *
   * @param layout - The layout to set.
   * @returns The layout function.
   */
  setLayout = (layout) => this.#layout = layout;
  /**
   * Gets the current layout for the response.
   *
   * @returns The current layout function.
   */
  getLayout = () => this.#layout;
  /**
   * `.setRenderer()` can set the layout in the custom middleware.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```tsx
   * app.use('*', async (c, next) => {
   *   c.setRenderer((content) => {
   *     return c.html(
   *       <html>
   *         <body>
   *           <p>{content}</p>
   *         </body>
   *       </html>
   *     )
   *   })
   *   await next()
   * })
   * ```
   */
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  /**
   * `.header()` can set headers.
   *
   * @see {@link https://hono.dev/docs/api/context#header}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  header = (name, value, options) => {
    if (this.finalized) {
      this.#res = new Response(this.#res.body, this.#res);
    }
    const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    if (value === void 0) {
      headers.delete(name);
    } else if (options?.append) {
      headers.append(name, value);
    } else {
      headers.set(name, value);
    }
  };
  status = (status2) => {
    this.#status = status2;
  };
  /**
   * `.set()` can set the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   c.set('message', 'Hono is hot!!')
   *   await next()
   * })
   * ```
   */
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  };
  /**
   * `.get()` can use the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   const message = c.get('message')
   *   return c.text(`The message is "${message}"`)
   * })
   * ```
   */
  get = (key) => {
    return this.#var ? this.#var.get(key) : void 0;
  };
  /**
   * `.var` can access the value of a variable.
   *
   * @see {@link https://hono.dev/docs/api/context#var}
   *
   * @example
   * ```ts
   * const result = c.var.client.oneMethod()
   * ```
   */
  // c.var.propName is a read-only
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    const responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
    if (typeof arg === "object" && "headers" in arg) {
      const argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
      for (const [key, value] of argHeaders) {
        if (key.toLowerCase() === "set-cookie") {
          responseHeaders.append(key, value);
        } else {
          responseHeaders.set(key, value);
        }
      }
    }
    if (headers) {
      for (const [k2, v2] of Object.entries(headers)) {
        if (typeof v2 === "string") {
          responseHeaders.set(k2, v2);
        } else {
          responseHeaders.delete(k2);
          for (const v22 of v2) {
            responseHeaders.append(k2, v22);
          }
        }
      }
    }
    const status2 = typeof arg === "number" ? arg : arg?.status ?? this.#status;
    return new Response(data, { status: status2, headers: responseHeaders });
  }
  newResponse = (...args) => this.#newResponse(...args);
  /**
   * `.body()` can return the HTTP response.
   * You can set headers with `.header()` and set HTTP status code with `.status`.
   * This can also be set in `.text()`, `.json()` and so on.
   *
   * @see {@link https://hono.dev/docs/api/context#body}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *   // Set HTTP status code
   *   c.status(201)
   *
   *   // Return the response body
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  body = (data, arg, headers) => this.#newResponse(data, arg, headers);
  /**
   * `.text()` can render text as `Content-Type:text/plain`.
   *
   * @see {@link https://hono.dev/docs/api/context#text}
   *
   * @example
   * ```ts
   * app.get('/say', (c) => {
   *   return c.text('Hello!')
   * })
   * ```
   */
  text = (text, arg, headers) => {
    return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(
      text,
      arg,
      setDefaultContentType(TEXT_PLAIN, headers)
    );
  };
  /**
   * `.json()` can render JSON as `Content-Type:application/json`.
   *
   * @see {@link https://hono.dev/docs/api/context#json}
   *
   * @example
   * ```ts
   * app.get('/api', (c) => {
   *   return c.json({ message: 'Hello!' })
   * })
   * ```
   */
  json = (object, arg, headers) => {
    return this.#newResponse(
      JSON.stringify(object),
      arg,
      setDefaultContentType("application/json", headers)
    );
  };
  html = (html2, arg, headers) => {
    const res = (html22) => this.#newResponse(html22, arg, setDefaultContentType("text/html; charset=UTF-8", headers));
    return typeof html2 === "object" ? resolveCallback(html2, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html2);
  };
  /**
   * `.redirect()` can Redirect, default status code is 302.
   *
   * @see {@link https://hono.dev/docs/api/context#redirect}
   *
   * @example
   * ```ts
   * app.get('/redirect', (c) => {
   *   return c.redirect('/')
   * })
   * app.get('/redirect-permanently', (c) => {
   *   return c.redirect('/', 301)
   * })
   * ```
   */
  redirect = (location, status2) => {
    const locationString = String(location);
    this.header(
      "Location",
      // Multibyes should be encoded
      // eslint-disable-next-line no-control-regex
      !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString)
    );
    return this.newResponse(null, status2 ?? 302);
  };
  /**
   * `.notFound()` can return the Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/context#notfound}
   *
   * @example
   * ```ts
   * app.get('/notfound', (c) => {
   *   return c.notFound()
   * })
   * ```
   */
  notFound = () => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  };
};

// node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/hono/dist/utils/constants.js
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// node_modules/hono/dist/hono-base.js
init_url();
var notFoundHandler = (c2) => {
  return c2.text("404 Not Found", 404);
};
var errorHandler = (err2, c2) => {
  if ("getResponse" in err2) {
    const res = err2.getResponse();
    return c2.newResponse(res.body, res);
  }
  console.error(err2);
  return c2.text("Internal Server Error", 500);
};
var Hono = class _Hono {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  /*
    This class is like an abstract class and does not have a router.
    To use it, inherit the class and implement router in the constructor.
  */
  router;
  getPath;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p4 of [path].flat()) {
        this.#path = p4;
        for (const m3 of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m3.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  errorHandler = errorHandler;
  /**
   * `.route()` allows grouping other Hono instance in routes.
   *
   * @see {@link https://hono.dev/docs/api/routing#grouping}
   *
   * @param {string} path - base Path
   * @param {Hono} app - other Hono instance
   * @returns {Hono} routed Hono instance
   *
   * @example
   * ```ts
   * const app = new Hono()
   * const app2 = new Hono()
   *
   * app2.get("/user", (c) => c.text("user"))
   * app.route("/api", app2) // GET /api/user
   * ```
   */
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c2, next) => (await compose([], app2.errorHandler)(c2, () => r.handler(c2, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  /**
   * `.basePath()` allows base paths to be specified.
   *
   * @see {@link https://hono.dev/docs/api/routing#base-path}
   *
   * @param {string} path - base Path
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * const api = new Hono().basePath('/api')
   * ```
   */
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  /**
   * `.onError()` handles an error and returns a customized Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#error-handling}
   *
   * @param {ErrorHandler} handler - request Handler for error
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.onError((err, c) => {
   *   console.error(`${err}`)
   *   return c.text('Custom Error Message', 500)
   * })
   * ```
   */
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  /**
   * `.notFound()` allows you to customize a Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#not-found}
   *
   * @param {NotFoundHandler} handler - request handler for not-found
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.notFound((c) => {
   *   return c.text('Custom 404 Message', 404)
   * })
   * ```
   */
  notFound = (handler) => {
    this.#notFoundHandler = handler;
    return this;
  };
  /**
   * `.mount()` allows you to mount applications built with other frameworks into your Hono application.
   *
   * @see {@link https://hono.dev/docs/api/hono#mount}
   *
   * @param {string} path - base Path
   * @param {Function} applicationHandler - other Request Handler
   * @param {MountOptions} [options] - options of `.mount()`
   * @returns {Hono} mounted Hono instance
   *
   * @example
   * ```ts
   * import { Router as IttyRouter } from 'itty-router'
   * import { Hono } from 'hono'
   * // Create itty-router application
   * const ittyRouter = IttyRouter()
   * // GET /itty-router/hello
   * ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
   *
   * const app = new Hono()
   * app.mount('/itty-router', ittyRouter.handle)
   * ```
   *
   * @example
   * ```ts
   * const app = new Hono()
   * // Send the request to another application without modification.
   * app.mount('/app', anotherApp, {
   *   replaceRequest: (req) => req,
   * })
   * ```
   */
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = (request) => request;
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c2) => {
      const options2 = optionHandler(c2);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c2) => {
      let executionContext = void 0;
      try {
        executionContext = c2.executionCtx;
      } catch {
      }
      return [c2.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url5 = new URL(request.url);
        url5.pathname = url5.pathname.slice(pathPrefixLength) || "/";
        return new Request(url5, request);
      };
    })();
    const handler = async (c2, next) => {
      const res = await applicationHandler(replaceRequest(c2.req.raw), ...getOptions(c2));
      if (res) {
        return res;
      }
      await next();
    };
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { basePath: this._basePath, path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err2, c2) {
    if (err2 instanceof Error) {
      return this.errorHandler(err2, c2);
    }
    throw err2;
  }
  #dispatch(request, executionCtx, env3, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env3, "GET")))();
    }
    const path = this.getPath(request, { env: env3 });
    const matchResult = this.router.match(method, path);
    const c2 = new Context(request, {
      path,
      matchResult,
      env: env3,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c2, async () => {
          c2.res = await this.#notFoundHandler(c2);
        });
      } catch (err2) {
        return this.#handleError(err2, c2);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c2.finalized ? c2.res : this.#notFoundHandler(c2))
      ).catch((err2) => this.#handleError(err2, c2)) : res ?? this.#notFoundHandler(c2);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c2);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err2) {
        return this.#handleError(err2, c2);
      }
    })();
  }
  /**
   * `.fetch()` will be entry point of your app.
   *
   * @see {@link https://hono.dev/docs/api/hono#fetch}
   *
   * @param {Request} request - request Object of request
   * @param {Env} Env - env Object
   * @param {ExecutionContext} - context of execution
   * @returns {Response | Promise<Response>} response of request
   *
   */
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  /**
   * `.request()` is a useful method for testing.
   * You can pass a URL or pathname to send a GET request.
   * app will return a Response object.
   * ```ts
   * test('GET /hello is ok', async () => {
   *   const res = await app.request('/hello')
   *   expect(res.status).toBe(200)
   * })
   * ```
   * @see https://hono.dev/docs/api/hono#request
   */
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  };
  /**
   * `.fire()` automatically adds a global fetch event listener.
   * This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
   * @deprecated
   * Use `fire` from `hono/service-worker` instead.
   * ```ts
   * import { Hono } from 'hono'
   * import { fire } from 'hono/service-worker'
   *
   * const app = new Hono()
   * // ...
   * fire(app)
   * ```
   * @see https://hono.dev/docs/api/hono#fire
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
   * @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
   */
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  };
};

// node_modules/hono/dist/router/reg-exp-router/router.js
init_url();

// node_modules/hono/dist/router/reg-exp-router/matcher.js
var emptyParam = [];
function match(method, path) {
  const matchers = this.buildAllMatchers();
  const match2 = ((method2, path2) => {
    const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
    const staticMatch = matcher[2][path2];
    if (staticMatch) {
      return staticMatch;
    }
    const match3 = path2.match(matcher[0]);
    if (!match3) {
      return [[], emptyParam];
    }
    const index = match3.indexOf("", 1);
    return [matcher[1][index], match3];
  });
  this.match = match2;
  return match2(method, path);
}

// node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = /* @__PURE__ */ Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a2, b2) {
  if (a2.length === 1) {
    return b2.length === 1 ? a2 < b2 ? -1 : 1 : -1;
  }
  if (b2.length === 1) {
    return 1;
  }
  if (a2 === ONLY_WILDCARD_REG_EXP_STR || a2 === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b2 === ONLY_WILDCARD_REG_EXP_STR || b2 === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a2 === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b2 === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a2.length === b2.length ? a2 < b2 ? -1 : 1 : b2.length - a2.length;
}
var Node = class _Node {
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        if (regexpStr === ".*") {
          throw PATH_ERROR;
        }
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k2) => k2 !== ONLY_WILDCARD_REG_EXP_STR && k2 !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new _Node();
        if (name !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k2) => k2.length > 1 && k2 !== ONLY_WILDCARD_REG_EXP_STR && k2 !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new _Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k2) => {
      const c2 = this.#children[k2];
      return (typeof c2.#varIndex === "number" ? `(${k2})@${c2.#varIndex}` : regExpMetaChars.has(k2) ? `\\${k2}` : k2) + c2.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i3 = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m3) => {
        const mark = `@\\${i3}`;
        groups[i3] = [mark, m3];
        i3++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i3 = groups.length - 1; i3 >= 0; i3--) {
      const [mark] = groups[i3];
      for (let j3 = tokens.length - 1; j3 >= 0; j3--) {
        if (tokens[j3].indexOf(mark) !== -1) {
          tokens[j3] = tokens[j3].replace(mark, groups[i3][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_4, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_4, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route2) => [!/\*|\/:/.test(route2[0]), ...route2]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i3 = 0, j3 = -1, len = routesWithStaticPathFlag.length; i3 < len; i3++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i3];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h2]) => [h2, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j3++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j3, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j3] = handlers.map(([h2, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h2, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i3 = 0, len = handlerData.length; i3 < len; i3++) {
    for (let j3 = 0, len2 = handlerData[i3].length; j3 < len2; j3++) {
      const map = handlerData[i3][j3]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k2 = 0, len3 = keys.length; k2 < len3; k2++) {
        map[keys[k2]] = paramReplacementMap[map[keys[k2]]];
      }
    }
  }
  const handlerMap = [];
  for (const i3 in indexReplacementMap) {
    handlerMap[i3] = handlerData[indexReplacementMap[i3]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k2 of Object.keys(middleware).sort((a2, b2) => b2.length - a2.length)) {
    if (buildWildcardRegExp(k2).test(path)) {
      return [...middleware[k2]];
    }
  }
  return void 0;
}
var RegExpRouter = class {
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p4) => {
          handlerMap[method][p4] = [...handlerMap[METHOD_NAME_ALL][p4]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re2 = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m3) => {
          middleware[m3][path] ||= findMiddleware(middleware[m3], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m3) => {
        if (method === METHOD_NAME_ALL || method === m3) {
          Object.keys(middleware[m3]).forEach((p4) => {
            re2.test(p4) && middleware[m3][p4].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m3) => {
        if (method === METHOD_NAME_ALL || method === m3) {
          Object.keys(routes[m3]).forEach(
            (p4) => re2.test(p4) && routes[m3][p4].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i3 = 0, len = paths.length; i3 < len; i3++) {
      const path2 = paths[i3];
      Object.keys(routes).forEach((m3) => {
        if (method === METHOD_NAME_ALL || method === m3) {
          routes[m3][path2] ||= [
            ...findMiddleware(middleware[m3], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m3][path2].push([handler, paramCount - len + i3 + 1]);
        }
      });
    }
  }
  match = match;
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    clearWildcardRegExpCache();
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i3 = 0;
    let res;
    for (; i3 < len; i3++) {
      const router = routers[i3];
      try {
        for (let i22 = 0, len2 = routes.length; i22 < len2; i22++) {
          router.add(...routes[i22]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i3 === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
init_url();

// node_modules/hono/dist/router/trie-router/node.js
init_url();
var emptyParams = /* @__PURE__ */ Object.create(null);
var Node2 = class _Node2 {
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children2) {
    this.#children = children2 || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m3 = /* @__PURE__ */ Object.create(null);
      m3[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m3];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i3 = 0, len = parts.length; i3 < len; i3++) {
      const p4 = parts[i3];
      const nextP = parts[i3 + 1];
      const pattern = getPattern(p4, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p4;
      if (key in curNode.#children) {
        curNode = curNode.#children[key];
        if (pattern) {
          possibleKeys.push(pattern[1]);
        }
        continue;
      }
      curNode.#children[key] = new _Node2();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    curNode.#methods.push({
      [method]: {
        handler,
        possibleKeys: possibleKeys.filter((v2, i3, a2) => a2.indexOf(v2) === i3),
        score: this.#order
      }
    });
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i3 = 0, len = node.#methods.length; i3 < len; i3++) {
      const m3 = node.#methods[i3];
      const handlerSet = m3[method] || m3[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i22 = 0, len2 = handlerSet.possibleKeys.length; i22 < len2; i22++) {
            const key = handlerSet.possibleKeys[i22];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    for (let i3 = 0, len = parts.length; i3 < len; i3++) {
      const part = parts[i3];
      const isLast = i3 === len - 1;
      const tempNodes = [];
      for (let j3 = 0, len2 = curNodes.length; j3 < len2; j3++) {
        const node = curNodes[j3];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(
                ...this.#getHandlerSets(nextNode.#children["*"], method, node.#params)
              );
            }
            handlerSets.push(...this.#getHandlerSets(nextNode, method, node.#params));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k2 = 0, len3 = node.#patterns.length; k2 < len3; k2++) {
          const pattern = node.#patterns[k2];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(...this.#getHandlerSets(astNode, method, node.#params));
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          const [key, name, matcher] = pattern;
          if (!part && !(matcher instanceof RegExp)) {
            continue;
          }
          const child = node.#children[key];
          const restPathString = parts.slice(i3).join("/");
          if (matcher instanceof RegExp) {
            const m3 = matcher.exec(restPathString);
            if (m3) {
              params[name] = m3[0];
              handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
              if (Object.keys(child.#children).length) {
                child.#params = params;
                const componentCount = m3[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(
                  ...this.#getHandlerSets(child.#children["*"], method, params, node.#params)
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes.concat(curNodesQueue.shift() ?? []);
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a2, b2) => {
        return a2.score - b2.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i3 = 0, len = results.length; i3 < len; i3++) {
        this.#node.insert(method, results[i3], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  /**
   * Creates an instance of the Hono class.
   *
   * @param options - Optional configuration options for the Hono instance.
   */
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// .vercel/output/_tmp/index.mjs
init_http_exception();

// node_modules/hono/dist/middleware/csrf/index.js
init_http_exception();
var secFetchSiteValues = ["same-origin", "same-site", "none", "cross-site"];
var isSecFetchSite = (value) => secFetchSiteValues.includes(value);
var isSafeMethodRe = /^(GET|HEAD)$/;
var isRequestedByFormElementRe = /^\b(application\/x-www-form-urlencoded|multipart\/form-data|text\/plain)\b/i;
var csrf = (options) => {
  const originHandler = ((optsOrigin) => {
    if (!optsOrigin) {
      return (origin, c2) => origin === new URL(c2.req.url).origin;
    } else if (typeof optsOrigin === "string") {
      return (origin) => origin === optsOrigin;
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin);
    }
  })(options?.origin);
  const isAllowedOrigin = async (origin, c2) => {
    if (origin === void 0) {
      return false;
    }
    return await originHandler(origin, c2);
  };
  const secFetchSiteHandler = ((optsSecFetchSite) => {
    if (!optsSecFetchSite) {
      return (secFetchSite) => secFetchSite === "same-origin";
    } else if (typeof optsSecFetchSite === "string") {
      return (secFetchSite) => secFetchSite === optsSecFetchSite;
    } else if (typeof optsSecFetchSite === "function") {
      return optsSecFetchSite;
    } else {
      return (secFetchSite) => optsSecFetchSite.includes(secFetchSite);
    }
  })(options?.secFetchSite);
  const isAllowedSecFetchSite = async (secFetchSite, c2) => {
    if (secFetchSite === void 0) {
      return false;
    }
    if (!isSecFetchSite(secFetchSite)) {
      return false;
    }
    return await secFetchSiteHandler(secFetchSite, c2);
  };
  return async function csrf2(c2, next) {
    if (!isSafeMethodRe.test(c2.req.method) && isRequestedByFormElementRe.test(c2.req.header("content-type") || "text/plain") && !await isAllowedSecFetchSite(c2.req.header("sec-fetch-site"), c2) && !await isAllowedOrigin(c2.req.header("origin"), c2)) {
      const res = new Response("Forbidden", { status: 403 });
      throw new HTTPException(403, { res });
    }
    await next();
  };
};

// .vercel/output/_tmp/index.mjs
var __create$2 = Object.create;
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$2 = Object.getOwnPropertyNames;
var __getProtoOf$2 = Object.getPrototypeOf;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __commonJSMin$2 = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __copyProps$2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (var keys = __getOwnPropNames$2(from), i$1 = 0, n$1 = keys.length, key; i$1 < n$1; i$1++) {
      key = keys[i$1];
      if (!__hasOwnProp$2.call(to, key) && key !== except) {
        __defProp$2(to, key, {
          get: ((k2) => from[k2]).bind(null, key),
          enumerable: !(desc = __getOwnPropDesc$2(from, key)) || desc.enumerable
        });
      }
    }
  }
  return to;
};
var __toESM$2 = (mod, isNodeMode, target) => (target = mod != null ? __create$2(__getProtoOf$2(mod)) : {}, __copyProps$2(__defProp$2(target, "default", {
  value: mod,
  enumerable: true
}), mod));
var require_ansis$2 = /* @__PURE__ */ __commonJSMin$2(((exports, module) => {
  let e, t, r, { defineProperty: l2, setPrototypeOf: n2, create: o2, keys: s3 } = Object, i3 = "", { round: c2, max: a$1 } = Math, p4 = (e$1) => {
    let t$1 = /([a-f\d]{3,6})/i.exec(e$1)?.[1], r$1 = t$1?.length, l$1 = parseInt(6 ^ r$1 ? 3 ^ r$1 ? "0" : t$1[0] + t$1[0] + t$1[1] + t$1[1] + t$1[2] + t$1[2] : t$1, 16);
    return [
      l$1 >> 16 & 255,
      l$1 >> 8 & 255,
      255 & l$1
    ];
  }, u3 = (e$1, t$1, r$1) => e$1 ^ t$1 || t$1 ^ r$1 ? 16 + 36 * c2(e$1 / 51) + 6 * c2(t$1 / 51) + c2(r$1 / 51) : 8 > e$1 ? 16 : e$1 > 248 ? 231 : c2(24 * (e$1 - 8) / 247) + 232, d2 = (e$1) => {
    let t$1, r$1, l$1, n$1, o$1;
    return 8 > e$1 ? 30 + e$1 : 16 > e$1 ? e$1 - 8 + 90 : (232 > e$1 ? (o$1 = (e$1 -= 16) % 36, t$1 = (e$1 / 36 | 0) / 5, r$1 = (o$1 / 6 | 0) / 5, l$1 = o$1 % 6 / 5) : t$1 = r$1 = l$1 = (10 * (e$1 - 232) + 8) / 255, n$1 = 2 * a$1(t$1, r$1, l$1), n$1 ? 30 + (c2(l$1) << 2 | c2(r$1) << 1 | c2(t$1)) + (2 ^ n$1 ? 0 : 60) : 30);
  }, f3 = (() => {
    let r$1 = (e$1) => o$1.some(((t$1) => e$1.test(t$1))), l$1 = globalThis, n$1 = l$1.process ?? {}, o$1 = n$1.argv ?? [], i$1 = n$1.env ?? {}, c$1 = -1;
    try {
      e = "," + s3(i$1).join(",");
    } catch (e$1) {
      i$1 = {}, c$1 = 0;
    }
    let a$2 = "FORCE_COLOR", p$1 = {
      false: 0,
      0: 0,
      1: 1,
      2: 2,
      3: 3
    }[i$1[a$2]] ?? -1, u$1 = a$2 in i$1 && p$1 || r$1(/^--color=?(true|always)?$/);
    return u$1 && (c$1 = p$1), ~c$1 || (c$1 = ((r$2, l$2, n$2) => (t = r$2.TERM, {
      "24bit": 3,
      truecolor: 3,
      ansi256: 2,
      ansi: 1
    }[r$2.COLORTERM] || (r$2.CI ? /,GITHUB/.test(e) ? 3 : 1 : l$2 && "dumb" !== t ? n$2 ? 3 : /-256/.test(t) ? 2 : 1 : 0)))(i$1, !!i$1.PM2_HOME || i$1.NEXT_RUNTIME?.includes("edge") || !!n$1.stdout?.isTTY, "win32" === n$1.platform)), !p$1 || i$1.NO_COLOR || r$1(/^--(no-color|color=(false|never))$/) ? 0 : l$1.window?.chrome || u$1 && !c$1 ? 3 : c$1;
  })(), g4 = {
    open: i3,
    close: i3
  }, h2 = 39, b2 = 49, O2 = {}, m3 = ({ p: e$1 }, { open: t$1, close: l$1 }) => {
    let o$1 = (e$2, ...r$1) => {
      if (!e$2) {
        if (t$1 && t$1 === l$1) return t$1;
        if ((e$2 ?? i3) === i3) return i3;
      }
      let n$1, s$2 = e$2.raw ? String.raw({ raw: e$2 }, ...r$1) : i3 + e$2, c$2 = o$1.p, a$2 = c$2.o, p$1 = c$2.c;
      if (s$2.includes("\x1B")) for (; c$2; c$2 = c$2.p) {
        let { open: e$3, close: t$2 } = c$2, r$2 = t$2.length, l$2 = i3, o$2 = 0;
        if (r$2) for (; ~(n$1 = s$2.indexOf(t$2, o$2)); o$2 = n$1 + r$2) l$2 += s$2.slice(o$2, n$1) + e$3;
        s$2 = l$2 + s$2.slice(o$2);
      }
      return a$2 + (s$2.includes("\n") ? s$2.replace(/(\r?\n)/g, p$1 + "$1" + a$2) : s$2) + p$1;
    }, s$1 = t$1, c$1 = l$1;
    return e$1 && (s$1 = e$1.o + t$1, c$1 = l$1 + e$1.c), n2(o$1, r), o$1.p = {
      open: t$1,
      close: l$1,
      o: s$1,
      c: c$1,
      p: e$1
    }, o$1.open = s$1, o$1.close = c$1, o$1;
  };
  const w4 = new function e$1(t$1 = f3) {
    let s$1 = {
      Ansis: e$1,
      level: t$1,
      isSupported: () => a$2,
      strip: (e$2) => e$2.replace(/[][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, i3),
      extend(e$2) {
        for (let t$2 in e$2) {
          let r$1 = e$2[t$2], l$1 = (typeof r$1)[0];
          "s" === l$1 ? (c$1(t$2, T3(...p4(r$1))), c$1(_4(t$2), v2(...p4(r$1)))) : c$1(t$2, r$1, "f" === l$1);
        }
        return r = o2({}, O2), n2(s$1, r), s$1;
      }
    }, c$1 = (e$2, t$2, r$1) => {
      O2[e$2] = { get() {
        let n$1 = r$1 ? (...e$3) => m3(this, t$2(...e$3)) : m3(this, t$2);
        return l2(this, e$2, { value: n$1 }), n$1;
      } };
    }, a$2 = t$1 > 0, w$1 = (e$2, t$2) => a$2 ? {
      open: `\x1B[${e$2}m`,
      close: `\x1B[${t$2}m`
    } : g4, y4 = (e$2) => (t$2) => e$2(...p4(t$2)), R3 = (e$2, t$2) => (r$1, l$1, n$1) => w$1(`${e$2}8;2;${r$1};${l$1};${n$1}`, t$2), $3 = (e$2, t$2) => (r$1, l$1, n$1) => w$1(((e$3, t$3, r$2) => d2(u3(e$3, t$3, r$2)))(r$1, l$1, n$1) + e$2, t$2), x4 = (e$2) => (t$2, r$1, l$1) => e$2(u3(t$2, r$1, l$1)), T3 = R3(3, h2), v2 = R3(4, b2), C3 = (e$2) => w$1("38;5;" + e$2, h2), E3 = (e$2) => w$1("48;5;" + e$2, b2);
    2 === t$1 ? (T3 = x4(C3), v2 = x4(E3)) : 1 === t$1 && (T3 = $3(0, h2), v2 = $3(10, b2), C3 = (e$2) => w$1(d2(e$2), h2), E3 = (e$2) => w$1(d2(e$2) + 10, b2));
    let M3, I3 = {
      fg: C3,
      bg: E3,
      rgb: T3,
      bgRgb: v2,
      hex: y4(T3),
      bgHex: y4(v2),
      visible: g4,
      reset: w$1(0, 0),
      bold: w$1(1, 22),
      dim: w$1(2, 22),
      italic: w$1(3, 23),
      underline: w$1(4, 24),
      inverse: w$1(7, 27),
      hidden: w$1(8, 28),
      strikethrough: w$1(9, 29)
    }, _4 = (e$2) => "bg" + e$2[0].toUpperCase() + e$2.slice(1), k2 = "Bright";
    return "black,red,green,yellow,blue,magenta,cyan,white,gray".split(",").map(((e$2, t$2) => {
      M3 = _4(e$2), 8 > t$2 ? (I3[e$2 + k2] = w$1(90 + t$2, h2), I3[M3 + k2] = w$1(100 + t$2, b2)) : t$2 = 60, I3[e$2] = w$1(30 + t$2, h2), I3[M3] = w$1(40 + t$2, b2);
    })), s$1.extend(I3);
  }();
  module.exports = w4, w4.default = w4;
}));
var import_ansis$2 = /* @__PURE__ */ __toESM$2(require_ansis$2());
var { Ansis: Ansis$2, fg: fg$2, bg: bg$2, rgb: rgb$2, bgRgb: bgRgb$2, hex: hex$2, bgHex: bgHex$2, reset: reset$2, inverse: inverse$2, hidden: hidden$2, visible: visible$2, bold: bold$2, dim: dim$2, italic: italic$2, underline: underline$2, strikethrough: strikethrough$2, black: black$2, red: red$4, green: green$2, yellow: yellow$2, blue: blue$2, magenta: magenta$2, cyan: cyan$2, white: white$2, gray: gray$2, redBright: redBright$2, greenBright: greenBright$2, yellowBright: yellowBright$2, blueBright: blueBright$2, magentaBright: magentaBright$2, cyanBright: cyanBright$2, whiteBright: whiteBright$2, bgBlack: bgBlack$2, bgRed: bgRed$2, bgGreen: bgGreen$2, bgYellow: bgYellow$2, bgBlue: bgBlue$2, bgMagenta: bgMagenta$2, bgCyan: bgCyan$2, bgWhite: bgWhite$2, bgGray: bgGray$2, bgRedBright: bgRedBright$2, bgGreenBright: bgGreenBright$2, bgYellowBright: bgYellowBright$2, bgBlueBright: bgBlueBright$2, bgMagentaBright: bgMagentaBright$2, bgCyanBright: bgCyanBright$2, bgWhiteBright: bgWhiteBright$2 } = import_ansis$2.default;
var PhotonError$2 = class PhotonError extends Error {
  constructor(category, message, options) {
    super(`${red$1$2(`[photon][${category}]`)} ${message}`, options);
    this.name = this.constructor.name;
  }
};
var PhotonConfigError$1 = class PhotonConfigError extends PhotonError$2 {
  constructor(message, options) {
    super("Config Error", message, options);
  }
};
function red$1$2(str) {
  return red$4(bold$2(str));
}
function extractUniversal$1(mi, id, errorMessage) {
  return [mi].flat(Number.POSITIVE_INFINITY).map((x4) => getUniversal2(x4)).map((m$1, i$1) => {
    if (typeof m$1 === "function" && nameSymbol2 in m$1) return m$1;
    throw new PhotonConfigError$1(errorMessage(id, i$1));
  });
}
function errorMessageMiddleware$1(_id, index) {
  return `Additional middleware at index ${index} default export must respect the following type: UniversalMiddleware | UniversalMiddleware[]. Each individual middleware must be wrapped with enhance helper with at least a 'name'. See https://universal-middleware.dev/helpers/enhance`;
}
function createApply(server, applyAdapter, getUniversalEntries2, getUniversalMiddlewares2, devServerMiddleware) {
  return function apply22(app2, additionalMiddlewares) {
    const middlewares = getUniversalMiddlewares2();
    const entries = getUniversalEntries2();
    if (additionalMiddlewares) for (const middleware of extractUniversal$1(additionalMiddlewares, "", errorMessageMiddleware$1)) {
      const i$1 = middlewares.findIndex((m$1) => getUniversalProp2(m$1, nameSymbol2) === getUniversalProp2(middleware, nameSymbol2));
      if (i$1 !== -1) middlewares.splice(i$1, 1);
      middlewares.push(middleware);
    }
    applyAdapter(app2, [...middlewares, ...entries]);
    app2[/* @__PURE__ */ Symbol.for("photon:server")] = server;
    return app2;
  };
}
var __create$1 = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$1 = Object.getOwnPropertyNames;
var __getProtoOf$1 = Object.getPrototypeOf;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __commonJSMin$1 = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __copyProps$1 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (var keys = __getOwnPropNames$1(from), i3 = 0, n2 = keys.length, key; i3 < n2; i3++) {
      key = keys[i3];
      if (!__hasOwnProp$1.call(to, key) && key !== except) {
        __defProp$1(to, key, {
          get: ((k2) => from[k2]).bind(null, key),
          enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable
        });
      }
    }
  }
  return to;
};
var __toESM$1 = (mod, isNodeMode, target) => (target = mod != null ? __create$1(__getProtoOf$1(mod)) : {}, __copyProps$1(__defProp$1(target, "default", {
  value: mod,
  enumerable: true
}), mod));
var require_ansis$1 = /* @__PURE__ */ __commonJSMin$1(((exports, module) => {
  let e, t, r, { defineProperty: l2, setPrototypeOf: n2, create: o2, keys: s3 } = Object, i3 = "", { round: c2, max: a2 } = Math, p4 = (e2) => {
    let t2 = /([a-f\d]{3,6})/i.exec(e2)?.[1], r2 = t2?.length, l22 = parseInt(6 ^ r2 ? 3 ^ r2 ? "0" : t2[0] + t2[0] + t2[1] + t2[1] + t2[2] + t2[2] : t2, 16);
    return [
      l22 >> 16 & 255,
      l22 >> 8 & 255,
      255 & l22
    ];
  }, u3 = (e2, t2, r2) => e2 ^ t2 || t2 ^ r2 ? 16 + 36 * c2(e2 / 51) + 6 * c2(t2 / 51) + c2(r2 / 51) : 8 > e2 ? 16 : e2 > 248 ? 231 : c2(24 * (e2 - 8) / 247) + 232, d2 = (e2) => {
    let t2, r2, l22, n22, o22;
    return 8 > e2 ? 30 + e2 : 16 > e2 ? e2 - 8 + 90 : (232 > e2 ? (o22 = (e2 -= 16) % 36, t2 = (e2 / 36 | 0) / 5, r2 = (o22 / 6 | 0) / 5, l22 = o22 % 6 / 5) : t2 = r2 = l22 = (10 * (e2 - 232) + 8) / 255, n22 = 2 * a2(t2, r2, l22), n22 ? 30 + (c2(l22) << 2 | c2(r2) << 1 | c2(t2)) + (2 ^ n22 ? 0 : 60) : 30);
  }, f3 = (() => {
    let r2 = (e2) => o22.some(((t2) => e2.test(t2))), l22 = globalThis, n22 = l22.process ?? {}, o22 = n22.argv ?? [], i22 = n22.env ?? {}, c22 = -1;
    try {
      e = "," + s3(i22).join(",");
    } catch (e2) {
      i22 = {}, c22 = 0;
    }
    let a$1 = "FORCE_COLOR", p22 = {
      false: 0,
      0: 0,
      1: 1,
      2: 2,
      3: 3
    }[i22[a$1]] ?? -1, u22 = a$1 in i22 && p22 || r2(/^--color=?(true|always)?$/);
    return u22 && (c22 = p22), ~c22 || (c22 = ((r$1, l$1, n$1) => (t = r$1.TERM, {
      "24bit": 3,
      truecolor: 3,
      ansi256: 2,
      ansi: 1
    }[r$1.COLORTERM] || (r$1.CI ? /,GITHUB/.test(e) ? 3 : 1 : l$1 && "dumb" !== t ? n$1 ? 3 : /-256/.test(t) ? 2 : 1 : 0)))(i22, !!i22.PM2_HOME || i22.NEXT_RUNTIME?.includes("edge") || !!n22.stdout?.isTTY, "win32" === n22.platform)), !p22 || i22.NO_COLOR || r2(/^--(no-color|color=(false|never))$/) ? 0 : l22.window?.chrome || u22 && !c22 ? 3 : c22;
  })(), g4 = {
    open: i3,
    close: i3
  }, h2 = 39, b2 = 49, O2 = {}, m3 = ({ p: e2 }, { open: t2, close: l22 }) => {
    let o22 = (e$1, ...r2) => {
      if (!e$1) {
        if (t2 && t2 === l22) return t2;
        if ((e$1 ?? i3) === i3) return i3;
      }
      let n22, s$1 = e$1.raw ? String.raw({ raw: e$1 }, ...r2) : i3 + e$1, c$1 = o22.p, a$1 = c$1.o, p22 = c$1.c;
      if (s$1.includes("\x1B")) for (; c$1; c$1 = c$1.p) {
        let { open: e$2, close: t$1 } = c$1, r$1 = t$1.length, l$1 = i3, o$1 = 0;
        if (r$1) for (; ~(n22 = s$1.indexOf(t$1, o$1)); o$1 = n22 + r$1) l$1 += s$1.slice(o$1, n22) + e$2;
        s$1 = l$1 + s$1.slice(o$1);
      }
      return a$1 + (s$1.includes("\n") ? s$1.replace(/(\r?\n)/g, p22 + "$1" + a$1) : s$1) + p22;
    }, s22 = t2, c22 = l22;
    return e2 && (s22 = e2.o + t2, c22 = l22 + e2.c), n2(o22, r), o22.p = {
      open: t2,
      close: l22,
      o: s22,
      c: c22,
      p: e2
    }, o22.open = s22, o22.close = c22, o22;
  };
  const w4 = new function e2(t2 = f3) {
    let s22 = {
      Ansis: e2,
      level: t2,
      isSupported: () => a$1,
      strip: (e$1) => e$1.replace(/[][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, i3),
      extend(e$1) {
        for (let t$1 in e$1) {
          let r2 = e$1[t$1], l22 = (typeof r2)[0];
          "s" === l22 ? (c22(t$1, T3(...p4(r2))), c22(_4(t$1), v2(...p4(r2)))) : c22(t$1, r2, "f" === l22);
        }
        return r = o2({}, O2), n2(s22, r), s22;
      }
    }, c22 = (e$1, t$1, r2) => {
      O2[e$1] = { get() {
        let n22 = r2 ? (...e$2) => m3(this, t$1(...e$2)) : m3(this, t$1);
        return l2(this, e$1, { value: n22 }), n22;
      } };
    }, a$1 = t2 > 0, w22 = (e$1, t$1) => a$1 ? {
      open: `\x1B[${e$1}m`,
      close: `\x1B[${t$1}m`
    } : g4, y4 = (e$1) => (t$1) => e$1(...p4(t$1)), R3 = (e$1, t$1) => (r2, l22, n22) => w22(`${e$1}8;2;${r2};${l22};${n22}`, t$1), $3 = (e$1, t$1) => (r2, l22, n22) => w22(((e$2, t$2, r$1) => d2(u3(e$2, t$2, r$1)))(r2, l22, n22) + e$1, t$1), x4 = (e$1) => (t$1, r2, l22) => e$1(u3(t$1, r2, l22)), T3 = R3(3, h2), v2 = R3(4, b2), C3 = (e$1) => w22("38;5;" + e$1, h2), E3 = (e$1) => w22("48;5;" + e$1, b2);
    2 === t2 ? (T3 = x4(C3), v2 = x4(E3)) : 1 === t2 && (T3 = $3(0, h2), v2 = $3(10, b2), C3 = (e$1) => w22(d2(e$1), h2), E3 = (e$1) => w22(d2(e$1) + 10, b2));
    let M3, I3 = {
      fg: C3,
      bg: E3,
      rgb: T3,
      bgRgb: v2,
      hex: y4(T3),
      bgHex: y4(v2),
      visible: g4,
      reset: w22(0, 0),
      bold: w22(1, 22),
      dim: w22(2, 22),
      italic: w22(3, 23),
      underline: w22(4, 24),
      inverse: w22(7, 27),
      hidden: w22(8, 28),
      strikethrough: w22(9, 29)
    }, _4 = (e$1) => "bg" + e$1[0].toUpperCase() + e$1.slice(1), k2 = "Bright";
    return "black,red,green,yellow,blue,magenta,cyan,white,gray".split(",").map(((e$1, t$1) => {
      M3 = _4(e$1), 8 > t$1 ? (I3[e$1 + k2] = w22(90 + t$1, h2), I3[M3 + k2] = w22(100 + t$1, b2)) : t$1 = 60, I3[e$1] = w22(30 + t$1, h2), I3[M3] = w22(40 + t$1, b2);
    })), s22.extend(I3);
  }();
  module.exports = w4, w4.default = w4;
}));
var import_ansis$1 = /* @__PURE__ */ __toESM$1(require_ansis$1());
var { Ansis: Ansis$1, fg: fg$1, bg: bg$1, rgb: rgb$1, bgRgb: bgRgb$1, hex: hex$1, bgHex: bgHex$1, reset: reset$1, inverse: inverse$1, hidden: hidden$1, visible: visible$1, bold: bold$1, dim: dim$1, italic: italic$1, underline: underline$1, strikethrough: strikethrough$1, black: black$1, red: red$1$1, green: green$1, yellow: yellow$1, blue: blue$1, magenta: magenta$1, cyan: cyan$1, white: white$1, gray: gray$1, redBright: redBright$1, greenBright: greenBright$1, yellowBright: yellowBright$1, blueBright: blueBright$1, magentaBright: magentaBright$1, cyanBright: cyanBright$1, whiteBright: whiteBright$1, bgBlack: bgBlack$1, bgRed: bgRed$1, bgGreen: bgGreen$1, bgYellow: bgYellow$1, bgBlue: bgBlue$1, bgMagenta: bgMagenta$1, bgCyan: bgCyan$1, bgWhite: bgWhite$1, bgGray: bgGray$1, bgRedBright: bgRedBright$1, bgGreenBright: bgGreenBright$1, bgYellowBright: bgYellowBright$1, bgBlueBright: bgBlueBright$1, bgMagentaBright: bgMagentaBright$1, bgCyanBright: bgCyanBright$1, bgWhiteBright: bgWhiteBright$1 } = import_ansis$1.default;
var PhotonError$1 = class PhotonError2 extends Error {
  constructor(category, message, options) {
    super(`${red$3(`[photon][${category}]`)} ${message}`, options);
    this.name = this.constructor.name;
  }
};
var PhotonConfigError2 = class extends PhotonError$1 {
  constructor(message, options) {
    super("Config Error", message, options);
  }
};
function red$3(str) {
  return red$1$1(bold$1(str));
}
var renderPageHandler = ((options) => enhance(
  async (request, context, runtime) => {
    const pageContextInit = { ...context, runtime, urlOriginal: request.url, headersOriginal: request.headers };
    return universalVikeHandler(request, pageContextInit, runtime);
  },
  {
    name: "vike",
    path: "/**",
    method: "GET",
    order: 0,
    immutable: false
  }
));
function isVercel() {
  return Boolean(process.env.VERCEL);
}
var compressMiddleware2 = ((options) => {
  let compressionType = null;
  let compressMiddleware22 = null;
  return enhance(
    async (request, _context) => {
      if (compressionType === null) {
        const globalContext2 = await getGlobalContext();
        const compressOptions = globalContext2.config.photon?.compress;
        compressionType = resolveCompressConfig(compressOptions);
      }
      if (compressionType === false || process.env.NODE_ENV !== "production") return;
      if (compressMiddleware22 === null) {
        const { default: compressMiddlewareFactory } = await init_middleware().then(() => middleware_exports);
        compressMiddleware22 = compressMiddlewareFactory();
      }
      return async (response) => {
        const isAsset = url2(request).pathname.startsWith("/assets/");
        const shouldCompressResponse = compressionType === true || compressionType === "static" && isAsset;
        if (shouldCompressResponse) {
          const compressMiddlewareInternal = compressMiddleware22(request);
          return compressMiddlewareInternal(response);
        }
      };
    },
    {
      name: "vike-photon:compress",
      immutable: false
    }
  );
});
function resolveCompressConfig(compressOptions, deprecatedCompressOptions) {
  if (typeof compressOptions !== "undefined") {
    return compressOptions;
  }
  return !isVercel();
}
function assert3(condition) {
  if (condition) return;
  throw new Error(
    `${red$2("[vike-photon][Bug]")} You stumbled upon a vike-photon bug. Reach out on GitHub and copy-paste this error \u2014 a maintainer will fix the bug.`
  );
}
function red$2(str) {
  return picocolors_default.red(picocolors_default.bold(str));
}
async function removeBaseUrl(req) {
  if (!req.url) return req;
  const globalContext2 = await getGlobalContext();
  assert3(!globalContext2.isClientSide);
  const baseAssets = globalContext2.baseAssets;
  if (baseAssets === void 0) return req;
  const url22 = url2(req);
  let pathnameWithoutBase = url22.pathname.slice(baseAssets.length);
  if (!pathnameWithoutBase.startsWith("/")) pathnameWithoutBase = `/${pathnameWithoutBase}`;
  const newUrl = new URL(pathnameWithoutBase, url22.origin);
  newUrl.search = url22.search;
  return cloneRequest(req, {
    url: newUrl.toString()
  });
}
function getDefaultStaticDir() {
  const argv1 = process.argv[1];
  const entrypointDirAbs = argv1 ? dirname2(isAbsolute2(argv1) ? argv1 : join3(process.cwd(), argv1)) : dirname2(fileURLToPath(import.meta.url));
  return join3(entrypointDirAbs, "..", "client");
}
function resolveStaticConfig(sirvOptions, deprecatedStatic) {
  if (isVercel()) return false;
  if (sirvOptions === false) return false;
  if (sirvOptions === true) {
    return { root: getDefaultStaticDir() };
  }
  if (sirvOptions) {
    return {
      ...sirvOptions,
      root: sirvOptions.root ?? getDefaultStaticDir()
    };
  }
  {
    return { root: getDefaultStaticDir() };
  }
}
var serveStaticMiddleware = ((options) => {
  let staticConfig = null;
  let staticMiddleware = null;
  return enhance(
    async (request, context, runtime) => {
      if (staticConfig === null) {
        const globalContext2 = await getGlobalContext();
        const sirvOptions = globalContext2.config.photon?.static;
        staticConfig = resolveStaticConfig(sirvOptions);
      }
      if (staticConfig === false) return;
      if (staticMiddleware === null) {
        const { default: sirv } = await Promise.resolve().then(() => (init_middleware2(), middleware_exports2));
        const { root, ...sirvOptions } = staticConfig;
        staticMiddleware = sirv(root, { etag: true, ...sirvOptions });
      }
      const newReq = await removeBaseUrl(request);
      return staticMiddleware(newReq, context, runtime);
    },
    {
      name: "vike-photon:sirv",
      immutable: false
    }
  );
});
function getMiddlewares(options) {
  return [compressMiddleware2(), serveStaticMiddleware(), renderPageHandler()];
}
var index_prod_default = getMiddlewares();
function errorMessageMiddleware(id) {
  return `"${id}" default export must respect the following type: UniversalMiddleware | UniversalMiddleware[]. Each individual middleware must be wrapped with enhance helper. See https://universal-middleware.dev/helpers/enhance`;
}
function extractUniversal(mi, id, errorMessage) {
  return [mi].flat(Number.POSITIVE_INFINITY).map(getUniversal2).map(
    (m3, i3) => {
      if (typeof m3 === "function" && nameSymbol2 in m3) {
        return m3;
      }
      throw new PhotonConfigError2(errorMessage(id, i3));
    }
  );
}
function getUniversalMiddlewares() {
  return [extractUniversal(index_prod_default, "vike-photon/universal-middlewares", errorMessageMiddleware), extractUniversal(universal_middleware_prod_default, "@photonjs/vercel/universal-middleware", errorMessageMiddleware)].flat(1);
}
function getUniversalEntries() {
  return [].flat(1);
}
var apply6 = createApply("hono", apply5, getUniversalEntries, getUniversalMiddlewares);
var __create2 = Object.create;
var __defProp3 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __copyProps2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (var keys = __getOwnPropNames2(from), i3 = 0, n2 = keys.length, key; i3 < n2; i3++) {
      key = keys[i3];
      if (!__hasOwnProp2.call(to, key) && key !== except) {
        __defProp3(to, key, {
          get: ((k2) => from[k2]).bind(null, key),
          enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
        });
      }
    }
  }
  return to;
};
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(__defProp3(target, "default", {
  value: mod,
  enumerable: true
}), mod));
var require_ansis = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  let e, t, r, { defineProperty: l2, setPrototypeOf: n2, create: o2, keys: s3 } = Object, i3 = "", { round: c2, max: a$1 } = Math, p4 = (e$1) => {
    let t$1 = /([a-f\d]{3,6})/i.exec(e$1)?.[1], r$1 = t$1?.length, l$1 = parseInt(6 ^ r$1 ? 3 ^ r$1 ? "0" : t$1[0] + t$1[0] + t$1[1] + t$1[1] + t$1[2] + t$1[2] : t$1, 16);
    return [
      l$1 >> 16 & 255,
      l$1 >> 8 & 255,
      255 & l$1
    ];
  }, u3 = (e$1, t$1, r$1) => e$1 ^ t$1 || t$1 ^ r$1 ? 16 + 36 * c2(e$1 / 51) + 6 * c2(t$1 / 51) + c2(r$1 / 51) : 8 > e$1 ? 16 : e$1 > 248 ? 231 : c2(24 * (e$1 - 8) / 247) + 232, d2 = (e$1) => {
    let t$1, r$1, l$1, n$1, o$1;
    return 8 > e$1 ? 30 + e$1 : 16 > e$1 ? e$1 - 8 + 90 : (232 > e$1 ? (o$1 = (e$1 -= 16) % 36, t$1 = (e$1 / 36 | 0) / 5, r$1 = (o$1 / 6 | 0) / 5, l$1 = o$1 % 6 / 5) : t$1 = r$1 = l$1 = (10 * (e$1 - 232) + 8) / 255, n$1 = 2 * a$1(t$1, r$1, l$1), n$1 ? 30 + (c2(l$1) << 2 | c2(r$1) << 1 | c2(t$1)) + (2 ^ n$1 ? 0 : 60) : 30);
  }, f3 = (() => {
    let r$1 = (e$1) => o$1.some(((t$1) => e$1.test(t$1))), l$1 = globalThis, n$1 = l$1.process ?? {}, o$1 = n$1.argv ?? [], i$1 = n$1.env ?? {}, c$1 = -1;
    try {
      e = "," + s3(i$1).join(",");
    } catch (e$1) {
      i$1 = {}, c$1 = 0;
    }
    let a$2 = "FORCE_COLOR", p$1 = {
      false: 0,
      0: 0,
      1: 1,
      2: 2,
      3: 3
    }[i$1[a$2]] ?? -1, u$1 = a$2 in i$1 && p$1 || r$1(/^--color=?(true|always)?$/);
    return u$1 && (c$1 = p$1), ~c$1 || (c$1 = ((r$2, l$2, n$2) => (t = r$2.TERM, {
      "24bit": 3,
      truecolor: 3,
      ansi256: 2,
      ansi: 1
    }[r$2.COLORTERM] || (r$2.CI ? /,GITHUB/.test(e) ? 3 : 1 : l$2 && "dumb" !== t ? n$2 ? 3 : /-256/.test(t) ? 2 : 1 : 0)))(i$1, !!i$1.PM2_HOME || i$1.NEXT_RUNTIME?.includes("edge") || !!n$1.stdout?.isTTY, "win32" === n$1.platform)), !p$1 || i$1.NO_COLOR || r$1(/^--(no-color|color=(false|never))$/) ? 0 : l$1.window?.chrome || u$1 && !c$1 ? 3 : c$1;
  })(), g4 = {
    open: i3,
    close: i3
  }, h2 = 39, b2 = 49, O2 = {}, m3 = ({ p: e$1 }, { open: t$1, close: l$1 }) => {
    let o$1 = (e$2, ...r$1) => {
      if (!e$2) {
        if (t$1 && t$1 === l$1) return t$1;
        if ((e$2 ?? i3) === i3) return i3;
      }
      let n$1, s$2 = e$2.raw ? String.raw({ raw: e$2 }, ...r$1) : i3 + e$2, c$2 = o$1.p, a$2 = c$2.o, p$1 = c$2.c;
      if (s$2.includes("\x1B")) for (; c$2; c$2 = c$2.p) {
        let { open: e$3, close: t$2 } = c$2, r$2 = t$2.length, l$2 = i3, o$2 = 0;
        if (r$2) for (; ~(n$1 = s$2.indexOf(t$2, o$2)); o$2 = n$1 + r$2) l$2 += s$2.slice(o$2, n$1) + e$3;
        s$2 = l$2 + s$2.slice(o$2);
      }
      return a$2 + (s$2.includes("\n") ? s$2.replace(/(\r?\n)/g, p$1 + "$1" + a$2) : s$2) + p$1;
    }, s$1 = t$1, c$1 = l$1;
    return e$1 && (s$1 = e$1.o + t$1, c$1 = l$1 + e$1.c), n2(o$1, r), o$1.p = {
      open: t$1,
      close: l$1,
      o: s$1,
      c: c$1,
      p: e$1
    }, o$1.open = s$1, o$1.close = c$1, o$1;
  };
  const w4 = new function e$1(t$1 = f3) {
    let s$1 = {
      Ansis: e$1,
      level: t$1,
      isSupported: () => a$2,
      strip: (e$2) => e$2.replace(/[][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, i3),
      extend(e$2) {
        for (let t$2 in e$2) {
          let r$1 = e$2[t$2], l$1 = (typeof r$1)[0];
          "s" === l$1 ? (c$1(t$2, T3(...p4(r$1))), c$1(_4(t$2), v2(...p4(r$1)))) : c$1(t$2, r$1, "f" === l$1);
        }
        return r = o2({}, O2), n2(s$1, r), s$1;
      }
    }, c$1 = (e$2, t$2, r$1) => {
      O2[e$2] = { get() {
        let n$1 = r$1 ? (...e$3) => m3(this, t$2(...e$3)) : m3(this, t$2);
        return l2(this, e$2, { value: n$1 }), n$1;
      } };
    }, a$2 = t$1 > 0, w$1 = (e$2, t$2) => a$2 ? {
      open: `\x1B[${e$2}m`,
      close: `\x1B[${t$2}m`
    } : g4, y4 = (e$2) => (t$2) => e$2(...p4(t$2)), R3 = (e$2, t$2) => (r$1, l$1, n$1) => w$1(`${e$2}8;2;${r$1};${l$1};${n$1}`, t$2), $3 = (e$2, t$2) => (r$1, l$1, n$1) => w$1(((e$3, t$3, r$2) => d2(u3(e$3, t$3, r$2)))(r$1, l$1, n$1) + e$2, t$2), x4 = (e$2) => (t$2, r$1, l$1) => e$2(u3(t$2, r$1, l$1)), T3 = R3(3, h2), v2 = R3(4, b2), C3 = (e$2) => w$1("38;5;" + e$2, h2), E3 = (e$2) => w$1("48;5;" + e$2, b2);
    2 === t$1 ? (T3 = x4(C3), v2 = x4(E3)) : 1 === t$1 && (T3 = $3(0, h2), v2 = $3(10, b2), C3 = (e$2) => w$1(d2(e$2), h2), E3 = (e$2) => w$1(d2(e$2) + 10, b2));
    let M3, I3 = {
      fg: C3,
      bg: E3,
      rgb: T3,
      bgRgb: v2,
      hex: y4(T3),
      bgHex: y4(v2),
      visible: g4,
      reset: w$1(0, 0),
      bold: w$1(1, 22),
      dim: w$1(2, 22),
      italic: w$1(3, 23),
      underline: w$1(4, 24),
      inverse: w$1(7, 27),
      hidden: w$1(8, 28),
      strikethrough: w$1(9, 29)
    }, _4 = (e$2) => "bg" + e$2[0].toUpperCase() + e$2.slice(1), k2 = "Bright";
    return "black,red,green,yellow,blue,magenta,cyan,white,gray".split(",").map(((e$2, t$2) => {
      M3 = _4(e$2), 8 > t$2 ? (I3[e$2 + k2] = w$1(90 + t$2, h2), I3[M3 + k2] = w$1(100 + t$2, b2)) : t$2 = 60, I3[e$2] = w$1(30 + t$2, h2), I3[M3] = w$1(40 + t$2, b2);
    })), s$1.extend(I3);
  }();
  module.exports = w4, w4.default = w4;
}));
var import_ansis = /* @__PURE__ */ __toESM2(require_ansis());
var { Ansis, fg, bg, rgb, bgRgb, hex, bgHex, reset, inverse, hidden, visible, bold, dim, italic, underline, strikethrough, black, red: red2, green, yellow, blue, magenta, cyan, white, gray: gray2, redBright, greenBright, yellowBright, blueBright, magentaBright, cyanBright, whiteBright, bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite, bgGray, bgRedBright, bgGreenBright, bgYellowBright, bgBlueBright, bgMagentaBright, bgCyanBright, bgWhiteBright } = import_ansis.default;
var PhotonError3 = class extends Error {
  constructor(category, message, options) {
    super(`${red$1(`[photon][${category}]`)} ${message}`, options);
    this.name = this.constructor.name;
  }
};
var PhotonDependencyError = class extends PhotonError3 {
  constructor(message, options) {
    super("Dependency Error", message, options);
  }
};
function red$1(str) {
  return red2(bold(str));
}
function serve3(app2, options = {}) {
  const exposeNodeHandler = Boolean(options.overrideGlobalObjects || options.autoCleanupIncoming || options.hostname);
  let nodeHandler;
  if (exposeNodeHandler) {
    const honoHandler = async (incoming, outgoing) => {
      if (nodeHandler && honoHandler !== nodeHandler) return nodeHandler(incoming, outgoing);
      try {
        const { getRequestListener } = await Promise.resolve().then(() => (init_chunk_Dt4_EpyD(), chunk_Dt4_EpyD_exports));
        const listener = getRequestListener(app2.fetch, options);
        nodeHandler = listener;
        return listener(incoming, outgoing);
      } catch (e) {
        throw new PhotonDependencyError(`Missing @hono/node-server package. Add it to your dependencies`, { cause: e });
      }
    };
    nodeHandler = honoHandler;
  }
  return {
    fetch: app2.fetch,
    server: {
      name: "hono",
      app: app2,
      options,
      get nodeHandler() {
        return nodeHandler;
      }
    }
  };
}
var privateEnv = {
  /** Development | Production */
  PORT: process.env.PORT || 3e3,
  /** Development | Production */
  NODE_ENV: process.env.NODE_ENV ?? "development"
};
var authController = new Hono2().get("/", async (c2) => {
  return c2.json({
    user: null,
    session: null
  });
}).get("/users", async (c2) => {
  return c2.json({
    users: [
      {
        id: 1,
        name: "Carlo"
      },
      {
        id: 2,
        name: "Andrea"
      }
    ]
  });
});
var todosController = new Hono2().get("/", async (c2) => {
  await new Promise((resolve3) => setTimeout(resolve3, 400));
  return c2.json({
    todos: [
      {
        id: 1,
        text: "Buy milk",
        completed: false
      }
    ]
  });
});
var app$1 = new Hono2();
app$1.use(csrf());
var appRouter = app$1.route("/auth", authController).route("/todos", todosController);
var app = new Hono2();
app.get("/up", async (c2) => {
  return c2.newResponse("\u{1F7E2} UP", { status: 200 });
});
app.route("/api", appRouter);
apply6(app);
app.onError((error, c2) => {
  const {
    status: status2 = 500,
    message = "Internal Server Error",
    cause
  } = error instanceof HTTPException ? error : { status: 500, message: "Internal Server Error", cause: error };
  const errorResponse2 = {
    error: {
      message,
      code: status2,
      cause: privateEnv.NODE_ENV === "production" ? void 0 : cause,
      stack: privateEnv.NODE_ENV === "production" ? void 0 : error.stack
    }
  };
  const log = {
    ...errorResponse2,
    endpoint: c2.req.path,
    method: c2.req.method
  };
  console.error(log);
  return c2.json(errorResponse2, status2);
});
var fetchable = serve3(app, { port: privateEnv.PORT });

// .vercel/output/_tmp/functions/__vike/__catch_all.func/index.js
init_runtime2();
init_picocolors();
init_http_exception();
var serverName = fetchable?.server?.name;
var exportDefault = serverName && serverName !== "srvx" ? node_default[serverName].createNodeHandler(fetchable.server.app) : { fetch: fetchable.fetch };
export {
  exportDefault as default
};
