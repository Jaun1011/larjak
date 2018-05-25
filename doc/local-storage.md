# Local Storage

We use the browser local storage for saving all of our data.

The following key/value pairs are used:


+------------------+---------------------------+
| Key              | Value                     |
+------------------+---------------------------+
| defaultSettings  | JSON defaultSettings      |
+------------------+---------------------------+
| sessions         | JSON sessions             |
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

The following JSON object is used for storing all sessions:

~~~json
[
  {
    "name": "session1",
    "host": "IP-or-FQDN",
    "user": "myuser",
    "password": "mypassword",
    "script": "script",
    "keyfile": "key-file-path"
  },
  {
    "name": "session2",
    "host": "IP-or-FQDN",
    "user": "myuser",
    "password": "mypassword",
    "script": "script",
    "keyfile": "key-file-path"
  }
]
~~~
