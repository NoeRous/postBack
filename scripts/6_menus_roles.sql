---menus

INSERT INTO public.menu (name,url,icon,"label",menu_id,"group") VALUES
	 ('Dashboard','/admin/dashboard','home',NULL,NULL,'Menú prinipal'),
	 ('Postulación','/admin/postulation','book',NULL,NULL,'Menú prinipal'),
	 ('Bandeja','/admin/inbox','inbox',NULL,NULL,'Administrar Postulaciones'),
	 ('Seguimiento','/admin/tracking','remove_red_eye',NULL,NULL,'Administrar Postulaciones'),
	 ('Postulantes','/admin/applicant','person',NULL,NULL,'Administrar Postulaciones'),
	 ('Examenes','/admin/test','folder_open',NULL,NULL,'Administrar'),
	 ('Categorias','/admin/question-category','category',NULL,NULL,'Biblioteca de preguntas'),
	 ('Banco de Preguntas','/admin/question','library_books',NULL,NULL,'Biblioteca de preguntas'),
	 ('Convocatorias','/admin/announcement','announcement',NULL,NULL,'Administrar'),
	 ('Instituciones','/admin/institution','school',NULL,NULL,'Parametricas');
INSERT INTO public.menu (name,url,icon,"label",menu_id,"group") VALUES
	 ('Tipos de Institución','/admin/institution-type','local_library',NULL,NULL,'Parametricas'),
	 ('Cargos','/admin/position','work',NULL,NULL,'Parametricas'),
	 ('Tipos de Cargos','/admin/position-type','group_work',NULL,NULL,'Parametricas'),
	 ('Instituciones y Cargos','/admin/institution-position','work_outline',NULL,NULL,'Parametricas'),
	 ('Usuarios','/admin/user','supervised_user_circle',NULL,NULL,'Roles y Permisos'),
	 ('Roles y menus','/admin/role-menu','how_to_reg',NULL,NULL,'Roles y Permisos'),
	 ('Empleados','/admin/employee','accessibility_new',NULL,NULL,'Administrar'),
	 ('Mis Comisiones','/admin/commission','group',NULL,NULL,'Administrar');


	
	-----roles menus
	INSERT INTO public.role_menu ("sequence",deleted_at,role_id,menu_id) VALUES
	 (NULL,NULL,1,1),
	 (NULL,NULL,1,2),
	 (NULL,NULL,2,1),
	 (NULL,NULL,2,3),
	 (NULL,NULL,2,5),
	 (NULL,NULL,2,18),
	 (NULL,NULL,3,1),
	 (NULL,NULL,3,5),
	 (NULL,NULL,3,3),
	 (NULL,NULL,3,4);
INSERT INTO public.role_menu ("sequence",deleted_at,role_id,menu_id) VALUES
	 (NULL,NULL,3,9),
	 (NULL,NULL,3,10),
	 (NULL,NULL,3,11),
	 (NULL,NULL,3,12),
	 (NULL,NULL,3,13),
	 (NULL,NULL,3,14),
	 (NULL,NULL,3,18),
	 (NULL,NULL,4,18),
	 (NULL,NULL,4,3),
	 (NULL,NULL,4,1);
INSERT INTO public.role_menu ("sequence",deleted_at,role_id,menu_id) VALUES
	 (NULL,NULL,4,5),
	 (NULL,NULL,4,4),
	 (NULL,NULL,5,1),
	 (NULL,NULL,5,4),
	 (NULL,NULL,5,18),
	 (NULL,NULL,5,5),
	 (NULL,NULL,6,18),
	 (NULL,NULL,6,17),
	 (NULL,NULL,6,16),
	 (NULL,NULL,6,15);
INSERT INTO public.role_menu ("sequence",deleted_at,role_id,menu_id) VALUES
	 (NULL,NULL,6,14),
	 (NULL,NULL,6,13),
	 (NULL,NULL,6,12),
	 (NULL,NULL,6,11),
	 (NULL,NULL,6,10),
	 (NULL,NULL,6,9),
	 (NULL,'2023-08-22 10:08:08.933',6,8),
	 (NULL,NULL,6,5),
	 (NULL,NULL,6,4),
	 (NULL,NULL,6,3);
INSERT INTO public.role_menu ("sequence",deleted_at,role_id,menu_id) VALUES
	 (NULL,NULL,6,1),
	 (NULL,NULL,3,17),
	 (NULL,NULL,2,4),
	 (NULL,NULL,5,3);

