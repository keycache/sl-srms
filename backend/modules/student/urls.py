from django.urls import path

from .views import StudentView

app_name = "student"

urlpatterns = [
    path("student/", StudentView.as_view(), name="student"),
]
