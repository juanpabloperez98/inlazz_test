from django.urls import path

from api.views import (PqrAPI, PqrSpecificAPI, TypeIdentificationDocs,
                       TypePqrDocs)

urlpatterns = [
    path("pqrs", PqrAPI.as_view()),
    path("pqr", PqrSpecificAPI.as_view()),
    path("type_identification", TypeIdentificationDocs.as_view()),
    path("type_pqrs", TypePqrDocs.as_view()),
]
