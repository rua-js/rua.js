const statusCodes = {
  '400':'Bad request',
  '401':'Unauthorized',
  '402':'Payment Required',
  '403':'Forbidden',
  '404':'Not Found',
  '405':'Method Not Allowed',
  '406':'Not Acceptable',
  '407':'Proxy Authentication Required',
  '408':'request Timeout',
  '409':'Conflict',
  '410':'Gone',
  '411':'Length Required',
  '412':'Precondition Failed',
  '413':'Payload Too Large',
  '414':'URI Too Long',
  '415':'Unsupported Media type',
  '416':'Range Not Satisfiable',
  '417':'Expectation Failed',
  '421':'Misdirected request',
  '422':'Unprocessable Entity',
  '423':'Locked',
  '424':'Failed Dependency',
  '426':'Upgrade Required',
  '428':'Precondition Required',
  '429':'Too Many Requests',
  '431':'request Header Fields Too Large',
  '451':'Unavailable For Legal Reasons',
  '500':'Internal Server Error',
  '501':'Not Implemented',
  '502':'Bad Gateway',
  '503':'Service Unavailable',
  '504':'Gateway Timeout',
  '505':'HTTP Version Not Supported',
  '506':'Variant Also Negotiates',
  '507':'Insufficient Storage',
  '508':'Loop Detected',
  '510':'Not Extended',
  '511':'Network Authentication Required'
}

export default statusCodes