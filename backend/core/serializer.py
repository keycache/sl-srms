from typing import Any, Dict, Tuple

from rest_framework.request import Request
from rest_framework.serializers import ModelSerializer


class BaseSerializer(ModelSerializer):
    def __init__(self, *args, **kwargs):
        self.context_source = kwargs.pop("context_source", None)
        super().__init__(*args, **kwargs)

    @property
    def request(self) -> Request:
        return self.context["request"]
