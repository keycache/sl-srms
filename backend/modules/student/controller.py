from typing import Iterable

from rest_framework.exceptions import ValidationError

from core.controller import BaseController

from .models import Student


class StudentController(BaseController):
    def add_student(*args, **kwargs) -> Student:
        try:
            return Student.objects.create(**kwargs)
        except Exception as e:
            raise ValidationError(
                detail={"message": "Failed to add the sudent", "error": e.args}
            )

    def get_students(*args, **kwargs) -> Iterable[Student]:
        return Student.objects.all()


student_controller = StudentController()
