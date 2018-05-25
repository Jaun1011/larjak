# Local Storage

We use the browser local storage for saving all of our data.

The following key/value pairs are used:


+------------------+---------------------------+
| Key              | Value                     |
+------------------+---------------------------+
| defaultSettings  | JSON defaultSettings      |
+------------------+---------------------------+
| session_[id]     | JSON sessions             |
+------------------+---------------------------+

## JSON defaultSettings

The following JSON object is used for storing the defaultSettings:

~~~json
[
  {
    "defaultUser": "myuser",
    "defaultPassword": "mypassword",
    "defaultScript": "myscript",
    "defaultKeyfile": "key-file-path"
  }
]
~~~


## JSON sessions

All sessions are stored in there own key: "session_[id]"

~~~json
[
  {
    "id": "[generated-uuid]",
    "alias": "session1",
    "host": "IP-or-FQDN",
    "user": "myuser",
    "password": "mypassword",
    "script": "script",
    "keyfile": "key-file-path"
  }
]
~~~
