from django.shortcuts import render
from rest_framework.serializers import ModelSerializer
from rest_framework.views import APIView

from core.renderers import CoreRenderer


class BaseAPIView(APIView):
    renderer_classes = (CoreRenderer,)
    serializer_class = None

    def get_serializer(self, *args, **kwargs) -> ModelSerializer:
        SerializerClass = self.serializer_class
        if not SerializerClass:
            raise NotImplementedError("Missing value for 'serializer_class'")
        return SerializerClass(
            context={"request": self.request}, *args, **kwargs
        )
