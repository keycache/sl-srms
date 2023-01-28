import json

import humps
from rest_framework import status
from rest_framework.renderers import JSONRenderer

from core.config.constants import ERROR, SUCCESS


class CoreRenderer(JSONRenderer):
    charset = "utf-8"

    def render(self, data, accepted_media_type=None, renderer_context=None):
        response = data
        if renderer_context is not None:
            status_code = renderer_context["response"].status_code
            is_errored = status.is_client_error(
                status_code
            ) or status.is_server_error(status_code)
            data = humps.camelize(data)
            response = dict(status=ERROR if is_errored else SUCCESS, data=data)
        else:
            print(f"***********NO RENDERER_CONTEXT***********")
            print(f"{response}")
        return json.dumps(response)
