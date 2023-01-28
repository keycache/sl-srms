from rest_framework import serializers

from core.serializer import BaseSerializer

from .controller import student_controller
from .models import Student


class StudentSerializer(BaseSerializer):
    id = serializers.UUIDField(required=False, read_only=True)
    first_name = serializers.CharField(required=True, write_only=True)
    last_name = serializers.CharField(required=True, write_only=True)
    date_of_birth = serializers.DateField(required=True, write_only=True)

    class Meta:
        model = Student
        fields = ("id", "first_name", "last_name", "date_of_birth")

    def create(self, validated_data):
        return student_controller.add_student(**validated_data)


class StudentSerializerGET(BaseSerializer):
    class Meta:
        model = Student
        fields = ("id", "first_name", "last_name", "date_of_birth")

    def create(self, validated_data):
        students = student_controller.get_students(**validated_data)
        print(students)
        return students
