self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/login",
        "destination": "/"
      },
      {
        "source": "/login/:path*",
        "destination": "/"
      },
      {
        "source": "/Login",
        "destination": "/"
      },
      {
        "source": "/Login/:path*",
        "destination": "/"
      },
      {
        "source": "/messaging",
        "destination": "/"
      },
      {
        "source": "/videochat",
        "destination": "/"
      },
      {
        "source": "/screenshare",
        "destination": "/"
      },
      {
        "source": "/stories",
        "destination": "/"
      },
      {
        "source": "/friends",
        "destination": "/"
      },
      {
        "source": "/genz",
        "destination": "/"
      },
      {
        "source": "/help",
        "destination": "/"
      },
      {
        "source": "/privacy",
        "destination": "/"
      },
      {
        "source": "/terms",
        "destination": "/"
      },
      {
        "source": "/about",
        "destination": "/"
      },
      {
        "source": "/cookies",
        "destination": "/"
      },
      {
        "source": "/signup",
        "destination": "/"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()