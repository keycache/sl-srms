from django.shortcuts import render
from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer

from core.views import BaseAPIView

from .controller import result_controller
from .serializer import ResultSerializerGET, ResultSerializerPOST


class ResultView(BaseAPIView):
    def get_serializer(self, *args, **kwargs) -> ModelSerializer:
        if self.request.method == "GET":
            SerializerClass = ResultSerializerGET
        elif self.request.method == "POST":
            SerializerClass = ResultSerializerPOST
        else:
            raise NotImplementedError(
                f"Serializer for {self.request.method} not implemented in"
                f" {self.__class__.__name__}"
            )
        return SerializerClass(
            context={"request": self.request}, *args, **kwargs
        )

    def get(self, request: Request) -> Response:
        results = result_controller.get_results()
        serializer = self.get_serializer(results, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request: Request) -> Response:
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_200_OK)
