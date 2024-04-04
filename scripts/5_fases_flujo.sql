-----phase
INSERT INTO public.phase ("name",description,name_action,icon_action,date_init,date_end,date_publication_result,score,score_min_pass,"sequence",created_at,created_by,updated_at,updated_by,announcement_id) VALUES
	 ('POSTULACIÓN','POSTULACIÓN','Ver Postulación','folder_open','2023-07-01 00:00:00','2023-08-30 00:00:00','2023-07-30 00:00:00',0,0,1,'2023-01-01 00:00:00',1,'2023-01-01 00:00:00',NULL,1),
	 ('EXÁMEN TÉCNICO','EXÁMEN TÉCNICO','Ir a Examen','folder_close','2023-07-01 00:00:00','2023-07-30 00:00:00','2023-07-30 00:00:00',50,51,2,'2023-01-01 00:00:00',1,'2023-01-01 00:00:00',NULL,1),
	 ('CALIFICACIÓN DE MÉRITOS','CALIFICACIÓN DE MERITOS','Subir meritos','upload','2023-07-01 00:00:00','2023-07-30 00:00:00','2023-07-30 00:00:00',50,51,3,'2023-01-01 00:00:00',1,'2023-01-01 00:00:00',NULL,1),
	 ('PROPUESTA TRANSFORMADORA','PROPUESTA TRANSFORMADORA','Subir propuesta','upload','2023-07-01 00:00:00','2023-07-30 00:00:00','2023-07-30 00:00:00',50,51,3,'2023-01-01 00:00:00',1,'2023-01-01 00:00:00',NULL,1),
	 ('FINAL','FINAL','Final','upload','2023-07-01 00:00:00','2023-07-30 00:00:00','2023-07-30 00:00:00',50,51,3,'2023-01-01 00:00:00',1,'2023-01-01 00:00:00',NULL,1);


--------postulation_state----
INSERT INTO public.postulation_state ("name",description) VALUES
	 ('EN PROCESO','EL ESTADO ES PARA IDENTIFICAR QUE ESTA EN PROCESO');
	
INSERT INTO public.postulation_state ("name",description) VALUES
	 ('APROBÓ','EL ESTADO ES PARA IDENTIFICAR SI APROBÓ');
	
INSERT INTO public.postulation_state ("name",description) VALUES
	 ('REPROBÓ','EL ESTADO ES PARA IDENTIFICAR SI REPROBÓ');

INSERT INTO public.phase_sequence (created_at,created_by,updated_at,updated_by,current_phase_id,next_phase_id) VALUES
	 ('2023-01-01 00:00:00',1,'2023-01-01 00:00:00',1,1,2),
	 ('2023-01-01 00:00:00',1,'2023-01-01 00:00:00',1,2,3),
	 ('2023-01-01 00:00:00',1,'2023-01-01 00:00:00',1,3,4),
	 ('2023-01-01 00:00:00',1,'2023-01-01 00:00:00',1,4,5);
	 
INSERT INTO public.phase_action (name,name_icon,description,date_init,date_end,created_at,created_by,updated_at,updated_by,deleted_at,deleted_by,phase_id,"action","type",url) VALUES
	 ('Registro','add','registro de postulación','2023-08-18','2023-08-18','2023-01-01 00:00:00',1,'2023-01-01 00:00:00',1,NULL,NULL,1,'register-postulation','ROLE',NULL),
	 ('Registro Meritos','add','El postulante resgistra meritos','2023-08-18','2023-08-18','2023-01-01 00:00:00',1,'2023-01-01 00:00:00',1,NULL,NULL,3,'register-merits','POSTULATION',NULL),
	 ('Impugnar meritos','add','Acción para impugnar meritos','2023-08-20','2023-08-21','2023-01-01 00:00:00',1,'2023-01-01 00:00:00',1,NULL,NULL,3,'discuss-merits','POSTULATION',NULL),
	 ('Propuesta transformadora','add','El postulante resgistra la propuesta transformadora','2023-08-18','2023-08-18','2023-01-01 00:00:00',1,'2023-01-01 00:00:00',1,NULL,NULL,4,'register-proposal','POSTULATION',NULL),
	 ('Impugnar propuesta','add','Acción para impugnar propuesta transformadora','2023-08-20','2023-08-21','2023-01-01 00:00:00',1,'2023-01-01 00:00:00',1,NULL,NULL,4,'discuss-proposal','POSTULATION',NULL),
	 ('Apelar','add','Acción para impugnar resuultados preliminares','2023-08-20','2023-08-21','2023-01-01 00:00:00',1,'2023-01-01 00:00:00',1,NULL,NULL,4,'appeal','POSTULATION',NULL);
