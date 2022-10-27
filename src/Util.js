export const defaultHeaders = {
    "Content-type": "application/json; charset=UTF-8",
  }
   function http(path, config){
    const fullConfig = { ...config, headers: { ...defaultHeaders, ...config.headers, }, }
    const response = fetch(path, fullConfig)
  
    if (!response.ok) {
      throw response
    }
  
    return response.json().catch((e) => {
      throw new Error(`Failed to parse json in response from ${path} with status ${response.status}, ${response.statusText}: ${e}`)
    })
  }

  export function post(path, body, config){
    const postConfig = { method: 'post', body: JSON.stringify(body), ...config, }
    return http<TResponseBody>(path, postConfig)
  }