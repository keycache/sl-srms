from rest_framework import serializers

from core.serializer import BaseSerializer, ChoicesField

from .controller import result_controller
from .models import Result, Scores
from modules.course.serializer import CoursetSerializerGET
from modules.student.serializer import StudentSerializerGET

class ResultSerializerPOST(BaseSerializer):
    id = serializers.UUIDField(required=False, read_only=True)
    student_id = serializers.UUIDField(required=True, write_only=True)
    course_id = serializers.UUIDField(required=True, write_only=True)
    score = ChoicesField(choices=Scores, required=True,)
    student = StudentSerializerGET(read_only=True)
    course = CoursetSerializerGET(read_only=True)

    class Meta:
        model = Result
        fields = ("id", "student_id", "course_id", "score", "student", "course")

    def create(self, validated_data):
        return result_controller.add_result(**validated_data)


class ResultSerializerGET(BaseSerializer):
    id = serializers.UUIDField(required=False, read_only=True)
    student = StudentSerializerGET(required=True)
    course = CoursetSerializerGET(required=True)
    score = serializers.CharField(required=True)

    class Meta:
        model = Result
        fields = ("id", "student", "course", "score")

    def create(self, validated_data):
        return result_controller.get_results(**validated_data)
