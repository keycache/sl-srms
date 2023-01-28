from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("modules.student.urls")),
    path("api/", include("modules.course.urls")),
]
