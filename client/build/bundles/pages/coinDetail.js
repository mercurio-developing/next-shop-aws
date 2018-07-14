module.exports =
__NEXT_REGISTER_PAGE('/coinDetail', function() {
          var comp =
      webpackJsonp([7],{

/***/ "../node_modules/axios/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../node_modules/axios/lib/axios.js");

/***/ }),

/***/ "../node_modules/axios/lib/adapters/xhr.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
var settle = __webpack_require__("../node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__("../node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__("../node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__("../node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__("../node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__("../node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("../node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "../node_modules/axios/lib/axios.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
var bind = __webpack_require__("../node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__("../node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__("../node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("../node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__("../node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__("../node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("../node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "../node_modules/axios/lib/cancel/Cancel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "../node_modules/axios/lib/cancel/CancelToken.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("../node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "../node_modules/axios/lib/cancel/isCancel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "../node_modules/axios/lib/core/Axios.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__("../node_modules/axios/lib/defaults.js");
var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__("../node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__("../node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "../node_modules/axios/lib/core/InterceptorManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("../node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "../node_modules/axios/lib/core/createError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("../node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "../node_modules/axios/lib/core/dispatchRequest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
var transformData = __webpack_require__("../node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__("../node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__("../node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__("../node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__("../node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "../node_modules/axios/lib/core/enhanceError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "../node_modules/axios/lib/core/settle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("../node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "../node_modules/axios/lib/core/transformData.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("../node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "../node_modules/axios/lib/defaults.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__("../node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("../node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__("../node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/axios/lib/helpers/bind.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/btoa.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "../node_modules/axios/lib/helpers/buildURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("../node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/combineURLs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/cookies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("../node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "../node_modules/axios/lib/helpers/isAbsoluteURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/isURLSameOrigin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("../node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "../node_modules/axios/lib/helpers/normalizeHeaderName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("../node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/parseHeaders.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("../node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/spread.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "../node_modules/axios/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("../node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__("../node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "../node_modules/is-buffer/index.js":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "../node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "../node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./components/inventory/coins/CoinDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pinchZoom_PinchZoom_js__ = __webpack_require__("./components/inventory/pinchZoom/PinchZoom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Coins_scss__ = __webpack_require__("./components/inventory/coins/Coins.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Coins_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Coins_scss__);


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/components/inventory/coins/CoinDetail.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var CoinDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(CoinDetail, _Component);

  function CoinDetail(props) {
    var _this;

    _classCallCheck(this, CoinDetail);

    _this = _possibleConstructorReturn(this, (CoinDetail.__proto__ || Object.getPrototypeOf(CoinDetail)).call(this, props));
    _this.state = {
      imgSelect: _this.props.coinDetailData.images[0],
      validationCart: {
        status: "",
        data: ""
      }
    };
    _this.addCoinToCart = _this.addCoinToCart.bind(_assertThisInitialized(_this));
    _this.changeImg = _this.changeImg.bind(_assertThisInitialized(_this));
    _this.comeBack = _this.comeBack.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CoinDetail, [{
    key: "changeImg",
    value: function changeImg(index) {
      var imgSelect = this.props.coinDetailData.images[index];
      this.setState({
        imgSelect: imgSelect
      });
    }
  }, {
    key: "comeBack",
    value: function comeBack() {
      __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push({
        pathname: "/inventory"
      });
    }
  }, {
    key: "addCoinToCart",
    value: function addCoinToCart() {
      var _this2 = this;

      var coin = this.props.coinDetailData;
      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post("/addToCart", coin).then(function (res) {
        console.log(res);

        _this2.setState({
          validationCart: {
            status: res.status,
            data: res.data
          }
        });
      }).catch(function (err) {
        console.log(err.response);

        _this2.setState({
          validationCart: {
            status: err.response.status,
            data: err.response.data.err
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var coinDetailData = this.props.coinDetailData;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_5__Coins_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100 p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-10 mx-auto col-lg-10 mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-primary btn-md",
        onClick: this.comeBack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fas fa-arrow-left pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), "Back to Inventory")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100 mt-xl-4 mt-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-8 p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row text-center  h-75",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__pinchZoom_PinchZoom_js__["a" /* default */], {
        initialScale: "0",
        minScale: "1",
        maxScale: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "img-pinch",
        src: this.state.imgSelect,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-5 col-lg-5 mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, coinDetailData.images.map(function (img, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: index,
          className: "col-lg-6 col-xl-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          className: "img-thumbnail",
          src: img,
          alt: "",
          onClick: function onClick() {
            _this3.changeImg(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }));
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-4 col-lg-4  mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row row-card p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "coin-detail-title mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, coinDetailData.name, " "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "coin-detail-description mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, coinDetailData.description), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "coin-detail-categories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, coinDetailData.categories.map(function (coin, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, "  ", coin);
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "coin-detail-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, coinDetailData.price)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.addCoinToCart,
        className: "btn btn-gold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "ADD TO CART"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, this.state.validationCart.status === 401 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "validation-error ml-auto pr-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, this.state.validationCart.data) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "validation-success ml-auto pr-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, this.state.validationCart.data)))))))));
    }
  }]);

  return CoinDetail;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

CoinDetail.protoType = {
  coinDetailData: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (CoinDetail);

/***/ }),

/***/ "./components/inventory/coins/Coins.scss":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n/*Variables*/\n.coin-detail-title, .coin-detail-description,\n.coin-detail-categories {\n  font-family: mrs-eaveas, serif;\n  font-style: normal;\n  font-weight: 400; }\n.validation-error, .validation-success {\n  font-family: mrs-eaveas, serif;\n  font-style: italic;\n  font-weight: 400; }\n.btn-gold, .coin-title {\n  font-family: mr-eaves-sans, sans-serif;\n  font-style: normal;\n  font-weight: 400; }\n.btn-gold {\n  background-color: #e9ab21;\n  color: #fff;\n  border-radius: 4px; }\n.btn-gold {\n  font-size: 16px;\n  padding: 10px 18px 10px 18px; }\n.btn-primary {\n  font-size: 14px;\n  padding: 10px 18px 10px 10px;\n  background-color: #1472b9; }\n.coin-title {\n  font-size: 20px; }\n.coin-price {\n  font-family: Roboto;\n  font-size: 16px; }\n.coin-image {\n  width: 230px; }\n.row-card {\n  border: 1px solid #d3d3d3;\n  box-shadow: 5px 5px 5px darkgrey; }\n.img-thumbnail:hover {\n  border: 1px solid #e9ab21; }\n.img-pinch {\n  width: 500px; }\n.coin-detail-categories {\n  font-size: 14px;\n  color: darkgrey; }\n.coin-detail-description {\n  font-size: 16px; }\n.coin-detail-price {\n  font-family: Roboto;\n  font-size: 32px; }\n.validation-error, .validation-success {\n  font-size: 16px; }\n.validation-error {\n  color: lightcoral; }\n.validation-success {\n  color: darkgreen; }\n";
})();

/***/ }),

/***/ "./components/inventory/pinchZoom/PinchZoom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinchZoomPan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PinchZoom_scss__ = __webpack_require__("./components/inventory/pinchZoom/PinchZoom.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PinchZoom_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__PinchZoom_scss__);


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/components/inventory/pinchZoom/PinchZoom.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var SNAP_TOLERANCE = 0.001;
var OVER_TRANSFORMATION_TOLERANCE = 0.05;
var DOUBLE_TAP_THRESHOLD = 100;
var ANIMATION_SPEED = 0.1;

var snapToTarget = function snapToTarget(value, target, tolerance) {
  var withinRange = Math.abs(target - value) < tolerance;
  return withinRange ? target : value;
};

var rangeBind = function rangeBind(lowerBound, upperBound, value) {
  return Math.min(upperBound, Math.max(lowerBound, value));
};

var invert = function invert(value) {
  return value * -1;
};

var getRelativePosition = function getRelativePosition(_ref, relativeToElement) {
  var clientX = _ref.clientX,
      clientY = _ref.clientY;
  var rect = relativeToElement.getBoundingClientRect();
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
};

var getMidpoint = function getMidpoint(pointA, pointB) {
  return {
    x: (pointA.x + pointB.x) / 2,
    y: (pointA.y + pointB.y) / 2
  };
};

var getDistanceBetweenPoints = function getDistanceBetweenPoints(pointA, pointB) {
  return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2));
};

var ZoomOutButton = function ZoomOutButton(_ref2) {
  var disabled = _ref2.disabled,
      onClick = _ref2.onClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "iconButton",
    style: {
      margin: "10px"
    },
    onClick: onClick,
    disabled: disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fas fa-minus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), " ");
};

var ZoomInButton = function ZoomInButton(_ref3) {
  var disabled = _ref3.disabled,
      onClick = _ref3.onClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "iconButton",
    style: {
      margin: "10px",
      marginLeft: "0px"
    },
    onClick: onClick,
    disabled: disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fas fa-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }));
};

var PinchZoomPan =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PinchZoomPan, _React$Component);

  function PinchZoomPan(props) {
    var _this;

    _classCallCheck(this, PinchZoomPan);

    _this = _possibleConstructorReturn(this, (PinchZoomPan.__proto__ || Object.getPrototypeOf(PinchZoomPan)).call(this, props));
    _this.state = {
      padding: "0px"
    };
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_this));
    _this.handleMouseUp = _this.handleMouseUp.bind(_assertThisInitialized(_this));
    _this.handleMouseWheel = _this.handleMouseWheel.bind(_assertThisInitialized(_this));
    _this.handleWindowResize = _this.handleWindowResize.bind(_assertThisInitialized(_this));
    _this.handleImageLoad = _this.handleImageLoad.bind(_assertThisInitialized(_this));
    return _this;
  } //event handlers


  _createClass(PinchZoomPan, [{
    key: "handleTouchStart",
    value: function handleTouchStart(event) {
      this.animation && cancelAnimationFrame(this.animation);
      var touches = event.touches;

      if (touches.length === 2) {
        this.pinchStart(touches);
        this.lastPanPointerPosition = null;
      } else if (touches.length === 1) {
        this.pointerDown(touches[0]);
      }
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(event) {
      var touches = event.touches;

      if (touches.length === 2) {
        //suppress viewport scaling
        event.preventDefault();
        this.pinchChange(touches);
      } else if (touches.length === 1) {
        var swipingDown = this.pan(touches[0]) > 0;

        if (swipingDown && this.state.top < 0) {
          //suppress pull-down-refresh since swiping down will reveal the hidden overflow of the image
          event.preventDefault();
        }
      }
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(event) {
      if (event.touches && event.touches.length > 0) return null; //We allow transient +/-5% over-pinching.
      //Animate the bounce back to constraints if applicable.

      this.ensureValidTransform(ANIMATION_SPEED);
      this.pointerUp(event.timeStamp); //suppress mouseUp, in case of tap

      event.preventDefault();
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      this.animation && cancelAnimationFrame(this.animation);
      this.mouseDown = true;
      this.pointerDown(event);
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      if (!this.mouseDown) return null;
      this.pan(event);
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      this.pointerUp(event.timeStamp);

      if (this.mouseDown) {
        this.mouseDown = false;
      }
    }
  }, {
    key: "handleMouseWheel",
    value: function handleMouseWheel(event) {
      this.animation && cancelAnimationFrame(this.animation);
      var point = getRelativePosition(event, this.container);

      if (event.deltaY > 0) {
        if (this.state.scale > this.minScale) {
          this.zoomOut(point);
          event.preventDefault();
        }
      } else if (event.deltaY < 0) {
        if (this.state.scale < this.props.maxScale) {
          this.zoomIn(point);
          event.preventDefault();
        }
      }
    }
  }, {
    key: "handleWindowResize",
    value: function handleWindowResize(event) {
      this.ensureConstraints();
    }
  }, {
    key: "handleImageLoad",
    value: function handleImageLoad() {
      this.ensureConstraints();
    } //actions

  }, {
    key: "pointerDown",
    value: function pointerDown(clientPosition) {
      this.lastPanPointerPosition = getRelativePosition(clientPosition, this.container);
    }
  }, {
    key: "pan",
    value: function pan(pointerClientPosition) {
      var pointerPosition = getRelativePosition(pointerClientPosition, this.container);
      var translateX = pointerPosition.x - this.lastPanPointerPosition.x;
      var translateY = pointerPosition.y - this.lastPanPointerPosition.y;
      var top = this.state.top + translateY;
      var left = this.state.left + translateX; //use 0 tolerance to prevent over-panning (doesn't look good)

      this.move(top, left, 0);
      this.lastPanPointerPosition = pointerPosition;
      return translateY > 0 ? 1 //swiping down
      : translateY < 0 ? -1 //swiping up
      : 0;
    }
  }, {
    key: "pointerUp",
    value: function pointerUp(timeStamp) {
      if (this.lastPointerUpTimeStamp && this.lastPointerUpTimeStamp + DOUBLE_TAP_THRESHOLD > timeStamp) {
        //reset
        this.transformToProps(ANIMATION_SPEED);
      }

      this.lastPointerUpTimeStamp = timeStamp;
    }
  }, {
    key: "move",
    value: function move(top, left, tolerance) {
      var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.applyTransform(top, left, this.state.scale, tolerance, speed);
    }
  }, {
    key: "pinchStart",
    value: function pinchStart(touches) {
      var pointA = getRelativePosition(touches[0], this.container);
      var pointB = getRelativePosition(touches[1], this.container);
      this.lastPinchLength = getDistanceBetweenPoints(pointA, pointB);
    }
  }, {
    key: "pinchChange",
    value: function pinchChange(touches) {
      var pointA = getRelativePosition(touches[0], this.container);
      var pointB = getRelativePosition(touches[1], this.container);
      var length = getDistanceBetweenPoints(pointA, pointB);
      var scale = this.state.scale * length / this.lastPinchLength;
      var midpoint = getMidpoint(pointA, pointB);
      this.zoom(scale, midpoint, OVER_TRANSFORMATION_TOLERANCE);
      this.lastPinchMidpoint = midpoint;
      this.lastPinchLength = length;
    }
  }, {
    key: "zoomIn",
    value: function zoomIn(midpoint) {
      midpoint = midpoint || {
        x: this.container.offsetWidth / 2,
        y: this.container.offsetHeight / 2
      };
      this.zoom(this.state.scale * 5, midpoint, 0);
      this.setState({
        padding: "150px"
      });
    }
  }, {
    key: "zoomOut",
    value: function zoomOut(midpoint) {
      midpoint = midpoint || {
        x: this.container.offsetWidth / 2,
        y: this.container.offsetHeight / 2
      };
      this.zoom(this.state.scale * 0.2, midpoint, 0);
      var padding;
      this.state.scale === 10 ? padding = 80 : padding = 0;
      console.log(padding, this.state.scale);
      this.setState({
        padding: "".concat(padding, "px")
      });
      console.log(this.state.padding);
    }
  }, {
    key: "zoom",
    value: function zoom(scale, midpoint, tolerance) {
      var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      scale = this.getValidTransform(0, 0, scale, tolerance).scale;
      var incrementalScalePercentage = (this.state.scale - scale) / this.state.scale;
      var translateY = (midpoint.y - this.state.top) * incrementalScalePercentage;
      var translateX = (midpoint.x - this.state.left) * incrementalScalePercentage;
      var top = this.state.top + translateY;
      var left = this.state.left + translateX;
      this.applyTransform(top, left, scale, tolerance, speed);
    } //state validation and transformation methods

  }, {
    key: "applyTransform",
    value: function applyTransform(requestedTop, requestedLeft, requestedScale, tolerance) {
      var _this2 = this;

      var speed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

      var _getValidTransform = this.getValidTransform(requestedTop, requestedLeft, requestedScale, tolerance),
          top = _getValidTransform.top,
          left = _getValidTransform.left,
          scale = _getValidTransform.scale;

      if (this.state.scale === scale && this.state.top === top && this.state.left === left) {
        return;
      }

      if (speed > 0) {
        var frame = function frame() {
          var translateY = top - _this2.state.top;
          var translateX = left - _this2.state.left;
          var translateScale = scale - _this2.state.scale;
          var nextTransform = {
            top: snapToTarget(_this2.state.top + speed * translateY, top, SNAP_TOLERANCE),
            left: snapToTarget(_this2.state.left + speed * translateX, left, SNAP_TOLERANCE),
            scale: snapToTarget(_this2.state.scale + speed * translateScale, scale, SNAP_TOLERANCE)
          };

          _this2.setState(nextTransform, function () {
            return _this2.animation = requestAnimationFrame(frame);
          });
        };

        this.animation = requestAnimationFrame(frame);
      } else {
        this.setState({
          top: top,
          left: left,
          scale: scale
        });
      }
    }
  }, {
    key: "getValidTransform",
    value: function getValidTransform(top, left, scale, tolerance) {
      var transform = {
        scale: scale || 1,
        top: top || 0,
        left: left || 0
      };
      var lowerBoundFactor = 1.0 - tolerance;
      var upperBoundFactor = 1.0 + tolerance;
      transform.scale = rangeBind(this.minScale * lowerBoundFactor, this.props.maxScale * upperBoundFactor, transform.scale); //get dimensions by which scaled image overflows container

      var negativeSpace = this.calculateNegativeSpace(transform.scale);
      var overflow = {
        width: Math.max(0, invert(negativeSpace.width)),
        height: Math.max(0, invert(negativeSpace.height))
      }; //prevent moving by more than the overflow
      //example: overflow.height = 100, tolerance = 0.05 => top is constrained between -105 and +5

      transform.top = rangeBind(invert(overflow.height) * upperBoundFactor, overflow.height * upperBoundFactor - overflow.height, transform.top);
      transform.left = rangeBind(invert(overflow.width) * upperBoundFactor, overflow.width * upperBoundFactor - overflow.width, transform.left);
      return transform;
    }
  }, {
    key: "transformToProps",
    value: function transformToProps() {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var scale = this.props.initialScale === "auto" ? this.calculateAutofitScale() : this.props.initialScale;
      this.applyTransform(this.props.initialTop, this.props.initialLeft, scale, 0, speed);
    }
  }, {
    key: "ensureValidTransform",
    value: function ensureValidTransform() {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.applyTransform(this.state.top, this.state.left, this.state.scale, 0, speed);
    } //lifecycle methods

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var childElement = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);
      var originalRef = childElement.ref;

      var composedRef = function composedRef(element) {
        _this3.image = element;

        if (typeof originalRef === "function") {
          originalRef(element);
        }
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_2__PinchZoom_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }), this.props.zoomButtons && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 1000
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ZoomOutButton, {
        onClick: function onClick() {
          return _this3.zoomOut();
        },
        disabled: this.state.scale <= this.minScale,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ZoomInButton, {
        onClick: function onClick() {
          return _this3.zoomIn();
        },
        disabled: this.state.scale >= this.props.maxScale,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(childElement, {
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd,
        onMouseDown: this.handleMouseDown,
        onMouseMove: this.handleMouseMove,
        onMouseUp: this.handleMouseUp,
        onWheel: this.handleMouseWheel,
        onDragStart: function onDragStart(event) {
          return event.preventDefault();
        },
        onLoad: this.handleImageLoad,
        ref: composedRef,
        style: {
          cursor: "pointer",
          transform: "translate3d(".concat(this.state.left, "px, ").concat(this.state.top, "px, 0) scale(").concat(this.state.scale, ")"),
          transformOrigin: "0 0",
          padding: "".concat(this.state.padding)
        }
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.image.addEventListener("touchmove", this.handleTouchMove, {
        passive: false
      });
      window.addEventListener("resize", this.handleWindowResize); //Using the child image's original parent enables flex items, e.g., dimensions not explicitly set

      this.container = this.image.parentNode.parentNode;

      if (this.image.offsetWidth && this.image.offsetHeight) {
        this.applyConstraints();
        this.transformToProps();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.image.offsetWidth && this.image.offsetHeight) {
        this.ensureConstraints();

        if (typeof this.state.scale === "undefined") {
          //reset to new props
          this.transformToProps();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.image.removeEventListener("touchmove", this.handleTouchMove);
      window.removeEventListener("resize", this.handleWindowResize);
    } //sizing methods

  }, {
    key: "ensureConstraints",
    value: function ensureConstraints() {
      if (this.image.offsetWidth && this.image.offsetHeight) {
        var negativeSpace = this.calculateNegativeSpace(1);

        if (!this.lastUnzoomedNegativeSpace || negativeSpace.height !== this.lastUnzoomedNegativeSpace.height || negativeSpace.width !== this.lastUnzoomedNegativeSpace.width) {
          //image and/or container dimensions have been set / updated
          this.applyConstraints();
          this.forceUpdate();
        }
      }
    }
  }, {
    key: "applyConstraints",
    value: function applyConstraints() {
      var minScale = 1;

      if (this.props.minScale === "auto") {
        minScale = this.calculateAutofitScale();
      } else {
        minScale = this.props.minScale;
      }

      if (this.minScale !== minScale) {
        this.minScale = minScale;
        this.ensureValidTransform();
      }

      this.lastUnzoomedNegativeSpace = this.calculateNegativeSpace(1);
    }
  }, {
    key: "calculateNegativeSpace",
    value: function calculateNegativeSpace() {
      var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.scale;
      //get difference in dimension between container and scaled image
      var width = this.container.offsetWidth - scale * this.image.offsetWidth;
      var height = this.container.offsetHeight - scale * this.image.offsetHeight;
      return {
        width: width,
        height: height
      };
    }
  }, {
    key: "calculateAutofitScale",
    value: function calculateAutofitScale() {
      var autofitScale = 1;

      if (this.image.offsetWidth > 0) {
        autofitScale = Math.min(this.container.offsetWidth / this.image.offsetWidth, autofitScale);
      }

      if (this.image.offsetHeight > 0) {
        autofitScale = Math.min(this.container.offsetHeight / this.image.offsetHeight, autofitScale);
      }

      return autofitScale;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.initialTop !== prevState.initialTop || nextProps.initialLeft !== prevState.initialLeft || nextProps.initialScale !== prevState.initialScale) {
        return {
          initialTop: nextProps.initialTop,
          initialLeft: nextProps.initialLeft,
          initialScale: nextProps.initialScale
        };
      } else {
        return null;
      }
    }
  }]);

  return PinchZoomPan;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


PinchZoomPan.defaultProps = {
  initialTop: 0,
  initialLeft: 0,
  initialScale: 1,
  minScale: 1,
  maxScale: 10,
  zoomButtons: true
};
PinchZoomPan.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
};

/***/ }),

/***/ "./components/inventory/pinchZoom/PinchZoom.scss":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".iconButton {\n  background-image: linear-gradient(to bottom, #fff 0%, #e0e0e0 100%);\n  background-color: #fff;\n  background-repeat: repeat-x;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);\n  padding: 8px;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  cursor: pointer;\n  text-shadow: 0 1px 0 #fff;\n  color: #333;\n  font-size: 18px;\n  line-height: 12px; }\n\n.iconButton:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n  background-position: 0 -15px; }\n\n.iconButton[disabled] {\n  opacity: .65;\n  box-shadow: none;\n  background-color: #e0e0e0;\n  background-image: none; }\n\n.iconButton[disabled]:hover {\n  border-color: #ccc;\n  cursor: default; }\n";
})();

/***/ }),

/***/ "./pages/coinDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_inventory_coins_CoinDetail__ = __webpack_require__("./components/inventory/coins/CoinDetail.js");



var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/pages/coinDetail.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var inventoryPage =
/*#__PURE__*/
function (_Component) {
  _inherits(inventoryPage, _Component);

  function inventoryPage() {
    _classCallCheck(this, inventoryPage);

    return _possibleConstructorReturn(this, (inventoryPage.__proto__ || Object.getPrototypeOf(inventoryPage)).apply(this, arguments));
  }

  _createClass(inventoryPage, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_inventory_coins_CoinDetail__["a" /* default */], {
        coinDetailData: this.props.coin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req, query, coin;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query;

                if (req) {
                  coin = query.query;
                }

                return _context.abrupt("return", {
                  coin: coin
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return inventoryPage;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (inventoryPage);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/coinDetail")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/coinDetail.js");


/***/ })

},[7])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=coinDetail.js.map