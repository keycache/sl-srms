from rest_framework import serializers

from core.serializer import BaseSerializer

from .controller import course_controller
from .models import Course


class CourseSerializerPOST(BaseSerializer):
    id = serializers.UUIDField(required=False, read_only=True)
    name = serializers.CharField(required=True)

    class Meta:
        model = Course
        fields = ("id", "name",)

    def create(self, validated_data):
        return course_controller.add_course(**validated_data)


class CoursetSerializerGET(BaseSerializer):
    class Meta:
        model = Course
        fields = ("id", "name",)

    def create(self, validated_data):
        return course_controller.get_courses(**validated_data)
