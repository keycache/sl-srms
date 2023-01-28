from django.shortcuts import render
from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer

from core.views import BaseAPIView

from .controller import student_controller
from .serializer import StudentSerializer, StudentSerializerGET


class StudentView(BaseAPIView):
    def get_serializer(self, *args, **kwargs) -> ModelSerializer:
        if self.request.method == "GET":
            SerializerClass = StudentSerializerGET
        elif self.request.method == "POST":
            SerializerClass = StudentSerializer
        else:
            raise NotImplementedError(
                f"Serializer for {self.request.method} not implemented in"
                f" {self.__class__.__name__}"
            )
        return SerializerClass(
            context={"request": self.request}, *args, **kwargs
        )

    def get(self, request: Request) -> Response:
        students = student_controller.get_students()
        serializer = self.get_serializer(students, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request: Request) -> Response:
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_200_OK)
