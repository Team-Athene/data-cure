export const FILE_TABS = [
    { title: 'File Details', 
      value: 'file-details',
      icon: 'i-bx-list-ul' 
    },
    { title: 'Permissions',
      value: 'permissions', 
      icon: 'i-bx-lock' },
  ]

  
export const MY_FILES_COLS = [
    { name: 'fileName' },
    { name: 'reportType' },
    { name: 'focusArea' },
    { name: 'consultedOn' },
    { name: 'accessCount' },
  ]
  export const ACCESSED_FILES_COLS = [
      { name: 'fileName' },
      { name: 'reportType' },
      { name: 'focusArea' },
      { name: 'accessedOn' },
    ]
    export const TOWN_HALL_COLS = [
        { name: 'roomName' },
        { name: 'memberCount' },
        { name: 'actions' },
      ]
  
  export const DATAHUB_FILES_COLS = [
      { name: 'fileName' },
      { name: 'reportType' },
      { name: 'focusArea' },
      { name: 'actions' },
    ]
  
    export const DOCTORS_COLS = [
      { name: 'userAddress' },
      { name: 'department' },
      { name: 'actions' },
    ]

    export const REQUESTS_COLS = [
      { name: 'fileName' },
      { name: 'requestedUser' },
      { name: 'reportType' },
      { name: 'focusArea' },
      { name: 'actions' },
    ]

  export const PERMISSIONS_COLS = [
  { name: 'requestedUser' },
  { name: 'accessTill' },
  { name: 'status' },
  { name: 'actions' },
]

export const REQUEST_TABS = [
  { title: 'Requests Received', 
    value: 'received',
    icon: 'i-bx-list-ul' 
  },
  { title: 'Sent Requests',
    value: 'sent', 
    icon: 'i-bx-lock' },
]

export const FILES_TABS = [
  { title: 'Uploaded Files',
    value: 'uploaded',
    icon: 'i-bx-upload' 
  },
  { title: 'Accessed Files',
    value: 'accessed', 
    icon: 'i-bx-bxs-book-reader' },
]

export const USER_TABS = [
  { title: 'File Management', icon: 'i-bx-folder-open', link: '/user' },
  { title: 'File Upload', icon: 'i-bx-paperclip', link: '/user/upload-file' },
  { title: 'Access Requests', icon: 'i-bx-user-check', link: '/user/access-requests' },
  { title: 'Data Hub', icon: 'i-bx-search-alt', link: '/user/data-hub' },
]
export const HOSPITAL_TABS = [
  { title: 'File Management', icon: 'i-bx-folder-open', link: '/health-organization' },
  { title: 'File Upload', icon: 'i-bx-paperclip', link: '/health-organization/upload-file' },
  { title: 'Access Requests', icon: 'i-bx-user-check', link: '/health-organization/access-requests' },
  { title: 'Manage Doctors', icon: 'i-bx-list-ul', link: '/health-organization/manage-doctors' },
  { title: 'Data Hub', icon: 'i-bx-search-alt', link: '/health-organization/data-hub' },
]
export const RESEARCHER_TABS = [
  { title: 'Accessed Files', icon: 'i-bx-folder-open', link: '/research-organization' },
  { title: 'Requested Accesses', icon: 'i-bx-user-check', link: '/research-organization/access-requests' },
  { title: 'Data Hub', icon: 'i-bx-search-alt', link: '/research-organization/data-hub' },
  { title: 'Town Hall', icon: 'i-bx-building-house', link: '/research-organization/town-hall' },
]